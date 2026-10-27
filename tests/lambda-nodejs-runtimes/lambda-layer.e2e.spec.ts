import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { CloudFormation } from "@aws-sdk/client-cloudformation";
import { BillingMode, DynamoDB } from "@aws-sdk/client-dynamodb";
import type { Runtime } from "@aws-sdk/client-lambda";
import { Lambda } from "@aws-sdk/client-lambda";
import { ResourceGroupsTaggingAPI } from "@aws-sdk/client-resource-groups-tagging-api";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

/**
 * Publishes the assembled payload as a Lambda layer and invokes a function whose code
 * carries no node_modules, covering what the assembler's gates cannot: the zip round
 * trip, the root @smithy symlink surviving unzip, and resolution from a function
 * directory. A layer resolves from /opt/nodejs/node_modules rather than the runtime's
 * own path, so the prefix differs from production but the tree does not.
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..", "..");

/** Test using nodejs26 */
const runtime = (process.env.LAMBDA_NODEJS_RUNTIMES_RUNTIME ?? "nodejs26.x") as Runtime;

const region = process.env.AWS_SMOKE_TEST_REGION ?? "us-west-2";
const prebuiltPayload = process.env.LAMBDA_NODEJS_RUNTIMES_PAYLOAD;
const INTEG_TEST_STACK = "SdkReleaseV3IntegTestResourcesStack";

/** Shared resources for easy cleanup */
const TEST_TAG = { key: "aws-sdk-js-v3-test", value: "lambda-nodejs-runtimes-layer-e2e" };
const CREATED_AT_TAG_KEY = "aws-sdk-js-v3-created-at";
const RESOURCE_PREFIX = "js-sdk-lambda-layer-test-";
const STALE_AFTER_MS = 72 * 60 * 60 * 1000;

describe(
  "AWS SDK for JavaScript v3 provided by Lambda Node.js runtimes",
  // retry: 0 overrides the suite-wide retry; the AWS calls are all in beforeAll, so a
  // retry only re-checks the same result. Transient errors are covered by maxAttempts.
  { retry: 0, timeout: 1_200_000 },
  () => {
    const dynamodb = new DynamoDB({ region, maxAttempts: 10, credentials: aws?.testCredentials });
    const lambda = new Lambda({ region, maxAttempts: 10, credentials: aws?.testCredentials });
    const cloudformation = new CloudFormation({ region, maxAttempts: 10, credentials: aws?.testCredentials });
    const tagging = new ResourceGroupsTaggingAPI({ region, maxAttempts: 10, credentials: aws?.testCredentials });

    const randId = crypto.randomUUID();
    const resourceName = `js-sdk-lambda-layer-test-${randId}`;
    const TableName = resourceName;
    const FunctionName = resourceName;
    const LayerName = resourceName;

    const start = Date.now();
    const createdAt = new Date(start).toISOString();
    const mark = () => `LAMBDA-LAYER-E2E: ` + ((Date.now() - start) / 1000).toFixed(3) + "s elapsed.";

    let workDir: string;
    let layerVersionArn: string | undefined;

    /** Read from the stack, since nothing in the e2e path sets AWS_SMOKE_TEST_*. */
    const resolveExecutionRoleArn = async () => {
      if (process.env.AWS_SMOKE_TEST_LAMBDA_EXECUTION_ROLE_ARN) {
        return process.env.AWS_SMOKE_TEST_LAMBDA_EXECUTION_ROLE_ARN;
      }
      const { StackResources } = await cloudformation.describeStackResources({ StackName: INTEG_TEST_STACK });
      const role = StackResources?.find(
        (resource) =>
          resource.ResourceType === "AWS::IAM::Role" &&
          !!resource.LogicalResourceId?.startsWith("IntegTestLambdaExecutionRole")
      );
      expect(
        role?.PhysicalResourceId,
        `no IntegTestLambdaExecutionRole in ${INTEG_TEST_STACK}; deploy tests/e2e/IntegTestResourcesStack.template.json`
      ).toBeDefined();
      // Account comes StackId rather than an STS call.
      const account = role!.StackId?.split(":")[4];
      return `arn:aws:iam::${account}:role/${role!.PhysicalResourceId}`;
    };

    const log = {
      payloadDir: "",
      layerSizeBytes: 0,
      invoke: null as null | {
        statusCode?: number;
        functionError?: string;
        logTail?: string;
        result?: any;
      },
    };

    /** The payload holds node_modules at its root; a layer resolves from nodejs/. */
    const buildLayerZip = (payloadDir: string) => {
      const stage = join(workDir, "layer", "nodejs");
      mkdirSync(stage, { recursive: true });
      // cp -a and zip -y both preserve the @smithy symlink, which is under test here.
      execFileSync("cp", ["-a", join(payloadDir, "node_modules"), stage]);

      const zipPath = join(workDir, "layer.zip");
      execFileSync("zip", ["-ryq", zipPath, "nodejs"], { cwd: join(workDir, "layer") });
      return zipPath;
    };

    const buildFunctionZip = () => {
      const zipPath = join(workDir, "function.zip");
      execFileSync("zip", ["-rq", zipPath, "handler.js"], { cwd: join(__dirname, "fixtures") });
      return zipPath;
    };

    beforeAll(async () => {
      const executionRoleArn = await resolveExecutionRoleArn();
      console.log(mark(), `Execution role ${executionRoleArn}`);

      workDir = mkdtempSync(join(tmpdir(), "lambda-nodejs-runtimes-e2e-"));

      // A prebuilt payload lets a caller test a published artifact rather than a rebuild.
      if (prebuiltPayload) {
        log.payloadDir = prebuiltPayload;
        expect(existsSync(join(log.payloadDir, "node_modules")), `no node_modules in ${log.payloadDir}`).toBe(true);
      } else {
        log.payloadDir = join(workDir, "payload");
        console.log(mark(), `Assembling payload into ${log.payloadDir}`);
        execFileSync("yarn", ["generate:lambda-provided-sdk", "--out", log.payloadDir], {
          cwd: repoRoot,
          stdio: "inherit",
        });
      }

      const layerZip = buildLayerZip(log.payloadDir);
      const layerZipBytes = readFileSync(layerZip);
      log.layerSizeBytes = layerZipBytes.byteLength;
      console.log(mark(), `Layer zip is ${(log.layerSizeBytes / 1024 / 1024).toFixed(1)} MB`);

      const layer = await lambda.publishLayerVersion({
        LayerName,
        Description: "AWS SDK for JavaScript v3 provided by Lambda Node.js runtimes, under test",
        Content: { ZipFile: layerZipBytes },
        CompatibleRuntimes: [runtime],
      });
      layerVersionArn = layer.LayerVersionArn;
      console.log(mark(), `Published ${layerVersionArn}`);

      await dynamodb.createTable({
        TableName,
        AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
        KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
        BillingMode: BillingMode.PAY_PER_REQUEST,
        Tags: [
          { Key: TEST_TAG.key, Value: TEST_TAG.value },
          { Key: CREATED_AT_TAG_KEY, Value: createdAt },
        ],
      });
      await dynamodb.waitUntilTableExists({ TableName }, { maxWaitTime: 120 });
      console.log(mark(), `Table ${TableName} is ready`);

      // handler.js alone, so the SDK can only come from the layer.
      await lambda.createFunction({
        FunctionName,
        Runtime: runtime,
        Role: executionRoleArn,
        Handler: "handler.handler",
        Code: { ZipFile: readFileSync(buildFunctionZip()) },
        Layers: [layerVersionArn!],
        Timeout: 60,
        MemorySize: 1024,
        Tags: { [TEST_TAG.key]: TEST_TAG.value, [CREATED_AT_TAG_KEY]: createdAt },
      });
      await lambda.waitUntilFunctionActiveV2({ FunctionName }, { maxWaitTime: 300 });
      console.log(mark(), `Function ${FunctionName} is active`);

      const invoke = await lambda.invoke({
        FunctionName,
        LogType: "Tail",
        Payload: Buffer.from(JSON.stringify({ TableName, id: `item-${randId}` })),
      });

      log.invoke = {
        statusCode: invoke.StatusCode,
        functionError: invoke.FunctionError,
        logTail: invoke.LogResult ? Buffer.from(invoke.LogResult, "base64").toString("utf-8") : undefined,
        result: invoke.Payload ? JSON.parse(Buffer.from(invoke.Payload).toString("utf-8")) : undefined,
      };
      console.log(mark(), `Invoked: status ${log.invoke.statusCode}, error ${log.invoke.functionError ?? "none"}`);
    }, 900_000);

    /**
     * Delete leftover resources after 72hrs
     */
    const deleteStaleResources = async () => {
      const cutoff = Date.now() - STALE_AFTER_MS;
      const stale = (iso?: string) => !!iso && Date.parse(iso) < cutoff;
      const nameOf = (arn: string) => arn.split(/[:/]/).pop() ?? "";
      let deleted = 0;

      let token: string | undefined;
      do {
        const page = await tagging.getResources({
          TagFilters: [{ Key: TEST_TAG.key, Values: [TEST_TAG.value] }],
          ResourcesPerPage: 100,
          PaginationToken: token,
        });
        for (const resource of page.ResourceTagMappingList ?? []) {
          const arn = resource.ResourceARN ?? "";
          const name = nameOf(arn);
          const createdTag = resource.Tags?.find((t) => t.Key === CREATED_AT_TAG_KEY)?.Value;
          if (!name.startsWith(RESOURCE_PREFIX) || !stale(createdTag)) {
            continue;
          }
          if (arn.includes(":lambda:")) {
            await lambda.deleteFunction({ FunctionName: arn }).catch(() => {});
          } else if (arn.includes(":dynamodb:")) {
            await dynamodb.deleteTable({ TableName: name }).catch(() => {});
          } else {
            continue;
          }
          deleted += 1;
        }
        token = page.PaginationToken || undefined;
      } while (token);

      // Layer versions go by name prefix and CreatedDate.
      for (const layer of (await lambda.listLayers({})).Layers ?? []) {
        if (!layer.LayerName?.startsWith(RESOURCE_PREFIX)) {
          continue;
        }
        const versions = (await lambda.listLayerVersions({ LayerName: layer.LayerName })).LayerVersions ?? [];
        for (const version of versions) {
          if (!stale(version.CreatedDate) || version.Version === undefined) {
            continue;
          }
          await lambda
            .deleteLayerVersion({ LayerName: layer.LayerName, VersionNumber: version.Version })
            .catch(() => {});
          deleted += 1;
        }
      }

      return deleted;
    };

    afterAll(async () => {
      await lambda.deleteFunction({ FunctionName }).catch(() => {});
      if (layerVersionArn) {
        const version = Number(layerVersionArn.split(":").pop());
        await lambda.deleteLayerVersion({ LayerName, VersionNumber: version }).catch(() => {});
      }
      await dynamodb.deleteTable({ TableName }).catch(() => {});
      if (workDir) {
        rmSync(workDir, { recursive: true, force: true });
      }

      try {
        const swept = await deleteStaleResources();
        if (swept) {
          console.log(mark(), `Swept ${swept} leaked resource(s) older than 72h`);
        }
      } catch (error) {
        console.log(mark(), `Stale-resource sweep skipped: ${(error as Error).message}`);
      }
    }, 300_000);

    it("invokes without a function error", () => {
      // Second argument surfaces the log tail, where a MODULE_NOT_FOUND is readable.
      expect(log.invoke?.functionError, log.invoke?.logTail).toBeUndefined();
      expect(log.invoke?.statusCode).toBe(200);
    });

    it("resolves the SDK from the layer, not from the function", () => {
      const resolved = log.invoke?.result?.resolved;
      // Assert the key set too: an empty object would satisfy the loop vacuously.
      expect(Object.keys(resolved ?? {}).sort()).toEqual([
        "clientDynamodb",
        "deprecatedForwarder",
        "libDynamodb",
        "smithyCore",
      ]);
      for (const [name, path] of Object.entries(resolved)) {
        expect(path, `${name} resolved outside the layer`).toMatch(/^\/opt\/nodejs\/node_modules\//);
      }
    });

    it("resolves @smithy through the root symlink", () => {
      expect(log.invoke?.result?.resolved?.smithyCore).toContain("/@aws-sdk/node_modules/@smithy/core/");
    });

    it("loads a deprecated forwarder", () => {
      expect(log.invoke?.result?.forwarderExports).toEqual(["AbortController", "AbortSignal"]);
    });

    it("completes a DynamoDBDocument round trip inside the function", () => {
      expect(log.invoke?.result?.item).toEqual({
        id: `item-${randId}`,
        string: "myString",
        number: "3210000000000000000.0000000000000123",
        stringSet: ["my", "set", "string"],
        map: { nested: { deep: true } },
      });
      expect(log.invoke?.result?.deletedItemAbsent).toBe(true);
    });

    it("reports the workspace SDK version", () => {
      const { version } = JSON.parse(readFileSync(join(repoRoot, "lerna.json"), "utf-8"));
      expect(log.invoke?.result?.sdkVersion).toBe(version);
    });

    it("stays within the direct layer upload limit", () => {
      // PublishLayerVersion with ZipFile caps the request at 50 MB
      expect(log.layerSizeBytes).toBeLessThan(50 * 1024 * 1024);
    });
  }
);
