const fs = require("fs");
const path = require("path");
const walk = require("../utils/walk");

const paths = [
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

  // path.join(__dirname, "..", "..", "packages", "s3-presigned-post"),

  // path.join(__dirname, "..", "..", "private", "aws-middleware-test"),
  path.join(__dirname, "..", "..", "private", "aws-util-test"),
];

(async () => {
  for (const folder of paths) {
    const pkgJson = require(path.join(folder, "package.json"));

    if (pkgJson.scripts.test) {
      if (pkgJson.scripts.test.includes("jest")) {
        console.log("setting unit test to vitest");

        pkgJson.scripts.test = "vitest run";
        pkgJson.scripts["test:watch"] = "vitest watch";
        fs.rmSync(path.join(folder, "jest.config.js"));
        fs.writeFileSync(
          path.join(folder, "vitest.config.ts"),
          `import { defineConfig } from "vitest/config";

  export default defineConfig({
    test: {
      exclude: ["**/*.{integ,e2e,browser}.spec.{ts,js}"],
      include: ["**/*.spec.{ts,js}"],
      environment: "node",
    },
  });
  `
        );
      } else if (pkgJson.scripts.test.includes("vitest")) {
        pkgJson.scripts["test:watch"] ??= "vitest watch --passWithNot";
      }
    }

    for (const testType of ["integ", "e2e"]) {
      const script = testType === "integ" ? "integration" : testType;
      if (pkgJson.scripts[`test:${script}`]) {
        pkgJson.scripts[`test:${script}:watch`] = `vitest watch -c vitest.config.${testType}.ts`;
        if (pkgJson.scripts[`test:${script}`].includes("jest")) {
          console.log(`setting ${testType} test to vitest`);

          pkgJson.scripts[`test:${script}`] = `vitest run -c vitest.config.${testType}.ts`;
          fs.rmSync(path.join(folder, `jest.config.${testType}.js`));
          fs.writeFileSync(
            path.join(folder, `vitest.config.${testType}.ts`),
            `import { defineConfig } from "vitest/config";

    export default defineConfig({
      test: {
        include: ["**/*.${testType}.spec.{ts,js}"],
        environment: "node",
      },
    });
    `
          );
        }
      }
    }

    fs.writeFileSync(path.join(folder, "package.json"), JSON.stringify(pkgJson, null, 2) + "\n");

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
