const fs = require("fs");
const path = require("path");
const walk = require("../utils/walk");

const paths = [
  // ...[...fs.readdirSync(path.join(__dirname, "..", "..", "..", "smithy-typescript", "packages"))].map((pkg) => {
  //   return path.join(__dirname, "..", "..", "..", "smithy-typescript", "packages", pkg);
  // }),

  path.join(__dirname, "..", "..", "clients", "client-eventbridge"),
  path.join(__dirname, "..", "..", "clients", "client-lex-runtime-service"),
  path.join(__dirname, "..", "..", "clients", "client-mediastore-data"),
  path.join(__dirname, "..", "..", "clients", "client-s3-control"),

  // path.join(__dirname, "..", "..", "clients", "client-kinesis"),
  // path.join(__dirname, "..", "..", "clients", "client-s3"),
  // path.join(__dirname, "..", "..", "clients", "client-sts"),
  // path.join(__dirname, "..", "..", "clients", "client-transcribe-streaming"),
  // path.join(__dirname, "..", "..", "lib", "lib-dynamodb"),
  // path.join(__dirname, "..", "..", "lib", "lib-storage"),
  // path.join(__dirname, "..", "..", "packages", "body-checksum-browser"),
  // path.join(__dirname, "..", "..", "packages", "body-checksum-node"),
  // path.join(__dirname, "..", "..", "packages", "chunked-stream-reader-node"),
  // path.join(__dirname, "..", "..", "packages", "cloudfront-signer"),
  // path.join(__dirname, "..", "..", "packages", "core"),
  // path.join(__dirname, "..", "..", "packages", "credential-provider-cognito-identity"),
  // path.join(__dirname, "..", "..", "packages", "credential-provider-env"),
  // path.join(__dirname, "..", "..", "packages", "credential-provider-http"),
  // path.join(__dirname, "..", "..", "packages", "credential-provider-ini"),
  // path.join(__dirname, "..", "..", "packages", "credential-provider-node"),
  // path.join(__dirname, "..", "..", "packages", "credential-provider-process"),
  // path.join(__dirname, "..", "..", "packages", "credential-provider-sso"),
  // path.join(__dirname, "..", "..", "packages", "credential-provider-web-identity"),
  // path.join(__dirname, "..", "..", "packages", "credential-providers"),
  // path.join(__dirname, "..", "..", "packages", "ec2-metadata-service"),
  // path.join(__dirname, "..", "..", "packages", "endpoint-cache"),
  // path.join(__dirname, "..", "..", "packages", "eventstream-handler-node"),
  // path.join(__dirname, "..", "..", "packages", "middleware-api-key"),
  // path.join(__dirname, "..", "..", "packages", "middleware-bucket-endpoint"),
  // path.join(__dirname, "..", "..", "packages", "middleware-endpoint-discovery"),
  // path.join(__dirname, "..", "..", "packages", "middleware-eventstream"),
  // path.join(__dirname, "..", "..", "packages", "middleware-expect-continue"),
  // path.join(__dirname, "..", "..", "packages", "middleware-flexible-checksums"),
  // path.join(__dirname, "..", "..", "packages", "middleware-host-header"),
  // path.join(__dirname, "..", "..", "packages", "middleware-location-constraint"),
  // path.join(__dirname, "..", "..", "packages", "middleware-logger"),
  // path.join(__dirname, "..", "..", "packages", "middleware-recursion-detection"),
  // path.join(__dirname, "..", "..", "packages", "middleware-sdk-api-gateway"),
  // path.join(__dirname, "..", "..", "packages", "middleware-sdk-ec2"),
  // path.join(__dirname, "..", "..", "packages", "middleware-sdk-glacier"),
  // path.join(__dirname, "..", "..", "packages", "middleware-sdk-machinelearning"),
  // path.join(__dirname, "..", "..", "packages", "middleware-sdk-rds"),
  // path.join(__dirname, "..", "..", "packages", "middleware-sdk-route53"),
  // path.join(__dirname, "..", "..", "packages", "middleware-sdk-s3"),
  // path.join(__dirname, "..", "..", "packages", "middleware-sdk-s3-control"),
  // path.join(__dirname, "..", "..", "packages", "middleware-sdk-sqs"),
  // path.join(__dirname, "..", "..", "packages", "middleware-sdk-sts"),
  // path.join(__dirname, "..", "..", "packages", "middleware-sdk-transcribe-streaming"),
  // path.join(__dirname, "..", "..", "packages", "middleware-signing"),
  // path.join(__dirname, "..", "..", "packages", "middleware-ssec"),
  // path.join(__dirname, "..", "..", "packages", "middleware-token"),
  // path.join(__dirname, "..", "..", "packages", "middleware-user-agent"),
  // path.join(__dirname, "..", "..", "packages", "middleware-websocket"),

  // path.join(__dirname, "..", "..", "packages", "polly-request-presigner"),
  // path.join(__dirname, "..", "..", "packages", "rds-signer"),
  // path.join(__dirname, "..", "..", "packages", "region-config-resolver"),
  // path.join(__dirname, "..", "..", "packages", "s3-presigned-post"),
  // path.join(__dirname, "..", "..", "packages", "s3-request-presigner"),
  // path.join(__dirname, "..", "..", "packages", "sha256-tree-hash"),
  // path.join(__dirname, "..", "..", "packages", "signature-v4-crt"),
  // path.join(__dirname, "..", "..", "packages", "signature-v4-multi-region"),
  // path.join(__dirname, "..", "..", "packages", "smithy-client"),
  // path.join(__dirname, "..", "..", "packages", "token-providers"),
  // path.join(__dirname, "..", "..", "packages", "types"),
  // path.join(__dirname, "..", "..", "packages", "util-arn-parser"),
  // path.join(__dirname, "..", "..", "packages", "util-create-request"),
  // path.join(__dirname, "..", "..", "packages", "util-dns"),
  // path.join(__dirname, "..", "..", "packages", "util-dynamodb"),
  // path.join(__dirname, "..", "..", "packages", "util-endpoints"),
  // path.join(__dirname, "..", "..", "packages", "util-format-url"),
  // path.join(__dirname, "..", "..", "packages", "util-locate-window"),
  // path.join(__dirname, "..", "..", "packages", "util-user-agent-browser"),
  // path.join(__dirname, "..", "..", "packages", "util-user-agent-node"),
  // path.join(__dirname, "..", "..", "packages", "xhr-http-handler"),
  // path.join(__dirname, "..", "..", "packages", "xml-builder"),

  // path.join(__dirname, "..", "..", "private", "aws-middleware-test"),
  // path.join(__dirname, "..", "..", "private", "aws-util-test"),
  // path.join(__dirname, "..", "..", "private", "aws-client-api-test"),
  // path.join(__dirname, "..", "..", "private", "aws-client-retry-test"),
  // path.join(__dirname, "..", "..", "private", "aws-echo-service"),
  // path.join(__dirname, "..", "..", "private", "aws-protocoltests-ec2"),
  // path.join(__dirname, "..", "..", "private", "aws-protocoltests-json"),
  // path.join(__dirname, "..", "..", "private", "aws-protocoltests-json-10"),
  // path.join(__dirname, "..", "..", "private", "aws-protocoltests-json-machinelearning"),
  // path.join(__dirname, "..", "..", "private", "aws-protocoltests-query"),
  // path.join(__dirname, "..", "..", "private", "aws-protocoltests-restjson"),
  // path.join(__dirname, "..", "..", "private", "aws-protocoltests-restjson-apigateway"),
  // path.join(__dirname, "..", "..", "private", "aws-protocoltests-restjson-glacier"),
  // path.join(__dirname, "..", "..", "private", "aws-protocoltests-restxml"),
  // path.join(__dirname, "..", "..", "private", "aws-protocoltests-smithy-rpcv2-cbor"),
  // path.join(__dirname, "..", "..", "private", "aws-restjson-server"),
  // path.join(__dirname, "..", "..", "private", "aws-restjson-validation-server"),
];

(async () => {
  for (const folder of paths) {
    const pkgJson = require(path.join(folder, "package.json"));
    const isPrivate = folder.includes("/private/");
    let configExtension = "ts";
    if (folder.includes("/private/")) {
      configExtension = "js";
    }

    if (pkgJson.scripts.test) {
      if (fs.existsSync(path.join(folder, "jest.config.js"))) {
        fs.rmSync(path.join(folder, "jest.config.js"));
      }

      if (
        pkgJson.scripts["test:unit"].includes("ts-mocha") ||
        pkgJson.scripts.test.includes("jest") ||
        pkgJson.scripts.test.includes("vitest")
      ) {
        console.log("setting unit test to vitest");

        pkgJson.scripts.test = "yarn g:vitest run";
        pkgJson.scripts["test:watch"] = "yarn g:vitest watch";
        fs.writeFileSync(
          path.join(folder, `vitest.config.${configExtension}`),
          `import { defineConfig } from "vitest/config";

  export default defineConfig({
    test: {
      exclude: ["**/*.{integ,e2e,browser}.spec.ts"],
      include: ["**/*.spec.ts"],
      environment: "node",
      ${isPrivate ? "globals: true,\n" : ""}
    },
  });
  `
        );
      } else if (pkgJson.scripts.test.includes("vitest")) {
        pkgJson.scripts["test:watch"] ??= "yarn g:vitest watch --passWithNoTests";
      }
    }

    for (const testType of ["integ", "e2e"]) {
      const script = testType === "integ" ? "integration" : testType;
      if (fs.existsSync(path.join(folder, `jest.config.${testType}.js`))) {
        fs.rmSync(path.join(folder, `jest.config.${testType}.js`));
      }
      if (pkgJson.scripts[`test:${script}`]) {
        pkgJson.scripts[`test:${script}:watch`] =
          `npx yarn g:vitest watch -c vitest.config.${testType}.${configExtension}`;
        if (
          pkgJson.scripts[`test:${script}`].includes("jest") ||
          pkgJson.scripts[`test:${script}`].includes("vitest")
        ) {
          console.log(`setting ${testType} test to vitest`);
          pkgJson.scripts[`test:${script}`] = `yarn g:vitest run -c vitest.config.${testType}.${configExtension}`;
          fs.writeFileSync(
            path.join(folder, `vitest.config.${testType}.${configExtension}`),
            `import { defineConfig } from "vitest/config";

    export default defineConfig({
      test: {
        include: ["**/*.${testType}.spec.ts"],
        environment: "node",
        ${isPrivate ? "globals: true,\n" : ""}
      },
    });
    `
          );
        }
      }
    }

    fs.writeFileSync(path.join(folder, "package.json"), JSON.stringify(pkgJson, null, 2) + "\n");

    if (isPrivate) {
      continue;
    }

    for await (const file of walk(path.join(folder))) {
      if (file.endsWith(".spec.ts")) {
        let contents = fs.readFileSync(file, "utf-8");

        const namespaces = {
          jest: "vi",
        };

        const functionCalls = {
          beforeEach: "beforeEach",
          beforeAll: "beforeAll",
          afterEach: "afterEach",
          afterAll: "afterAll",
          describe: "describe",
          expect: "expect",
        };

        const imports = ["test as it"];

        contents = contents
          .replace(/\((\w+) as (jest|vi).Mock\)/g, "(vi.mocked($1))")
          .replace(/(jest|vi)\.requireActual\((.*?);\)/g, "await vi.importActual($1) as any;")
          .replace(/ as (vi|jest)\.Mock/g, " as any")
          .replace(/xit/g, "it.skip");

        for (const [old, _new] of Object.entries(namespaces)) {
          if (contents.includes(old + ".") || contents.includes(_new + ".")) {
            imports.push(_new);
            contents = contents.replace(new RegExp(old + "\\.", "g"), _new + ".");
          }
        }

        for (const [old, _new] of Object.entries(functionCalls)) {
          if (contents.includes(old + "(") || contents.includes(_new + "(")) {
            if (!_new.includes(".")) {
              imports.push(_new);
            }
          }
        }

        if (contents.includes("expect.")) {
          imports.push("expect");
        }

        contents = contents.replace(/import {(.*?)} from "(vitest|vtestest)";/g, "");
        contents = `import { ${[...new Set(imports)].join(", ")} } from "vitest";\n\n` + contents;

        fs.writeFileSync(file, contents);
      }
    }
  }
})();
