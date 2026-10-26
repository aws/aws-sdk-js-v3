import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { BillingMode, DynamoDB } from "@aws-sdk/client-dynamodb";
import type { Runtime } from "@aws-sdk/client-lambda";
import { Lambda } from "@aws-sdk/client-lambda";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

/**
 * Publishes the assembled payload as a Lambda layer and invokes a function whose code
 * carries no node_modules, covering what the assembler's gates cannot: the zip round
 * trip, the root @smithy symlink surviving unzip, and resolution from a function
 * directory. A layer resolves from /opt/nodejs/node_modules rather than the runtime's
 * own path, so the prefix differs from production but the tree does not.
 *
 * Opt in, since assembling the payload takes several minutes. See README.md.
 *
 * expected running time: payload build (~5m, skipped with a prebuilt one) + AWS ~45s
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..", "..");

/** Test using nodejs26. */
const runtime = (process.env.LAMBDA_NODEJS_RUNTIMES_RUNTIME ?? "nodejs26.x") as Runtime;

const region = process.env.AWS_SMOKE_TEST_REGION ?? "us-west-2";
const executionRoleArn = process.env.AWS_SMOKE_TEST_LAMBDA_EXECUTION_ROLE_ARN;
const prebuiltPayload = process.env.LAMBDA_NODEJS_RUNTIMES_PAYLOAD;

describe.skipIf(!process.env.LAMBDA_NODEJS_RUNTIMES_E2E)(
  "AWS SDK for JavaScript v3 provided by Lambda Node.js runtimes",
  // retry: 0 overrides the suite-wide retry; every AWS call is in beforeAll, so a retry
  // re-checks the same recorded result at a 20s delay each time.
  { retry: 0, timeout: 1_200_000 },
  () => {
    const dynamodb = new DynamoDB({ region, maxAttempts: 10, credentials: aws?.testCredentials });
    const lambda = new Lambda({ region, maxAttempts: 10, credentials: aws?.testCredentials });

    // Shared by all three resources, so an interrupted run leaves one name to clean up.
    // 61 chars: a Lambda function name may not exceed 64.
    const randId = crypto.randomUUID();
    const resourceName = `js-sdk-lambda-layer-test-${randId}`;
    const TableName = resourceName;
    const FunctionName = resourceName;
    const LayerName = resourceName;

    const start = Date.now();
    const mark = () => `LAMBDA-LAYER-E2E: ` + ((Date.now() - start) / 1000).toFixed(3) + "s elapsed.";

    let workDir: string;
    let layerVersionArn: string | undefined;

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
      expect(executionRoleArn, "AWS_SMOKE_TEST_LAMBDA_EXECUTION_ROLE_ARN must be set").toBeDefined();

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
      // PublishLayerVersion with ZipFile caps the request at 50 MB; past that it needs S3.
      expect(log.layerSizeBytes).toBeLessThan(50 * 1024 * 1024);
    });
  }
);
