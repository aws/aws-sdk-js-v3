const clients = [
  {
    name: "sts",
    operations: ["AssumeRole", "AssumeRoleWithWebIdentity"],
  },
  {
    name: "sso-oidc",
    operations: ["CreateToken"],
  },
  {
    name: "signin",
    operations: ["CreateOAuth2Token"],
  },
];

const { join, relative, normalize } = require("path");
const { emptyDirSync, rmSync, copyFileSync, copySync, rmdirSync, writeFileSync, readFileSync } = require("fs-extra");
const { copyToClients } = require("../copy-to-clients");
const { spawnProcess } = require("../../utils/spawn-process");
const compressRuleset = require("../../endpoints-ruleset/compress");
const {
  CODE_GEN_ROOT,
  CODE_GEN_SDK_ROOT,
  DEFAULT_CODE_GEN_INPUT_DIR,
  TEMP_CODE_GEN_INPUT_DIR,
} = require("../code-gen-dir");

const NESTED_SDK_CLIENTS_DIR = normalize(join(__dirname, "..", "..", "..", "packages", "nested-clients", "src"));

/**
 *
 * Generates pared down clients for internal use.
 *
 */
async function generateNestedClients() {
  for (const { name, operations } of clients) {
    await generateNestedClient(name, operations);
    await copyToClients(
      normalize(join(__dirname, "..", "..", "..", "codegen", "sdk-codegen", "build-single", name)),
      NESTED_SDK_CLIENTS_DIR,
      name
    );

    // post-generation transforms
    const clientFolder = join(NESTED_SDK_CLIENTS_DIR, `client-${name}`);

    console.log("================ starting eslint ================", "\n", new Date().toString(), name);
    try {
      await spawnProcess("npx", ["eslint", "--quiet", "--fix", `${clientFolder}/src/**/*`]);
    } catch (ignored) {}

    console.log("================ starting prettier ================", "\n", new Date().toString(), name);
    await spawnProcess("npx", [
      "prettier",
      "--write",
      "--loglevel",
      "warn",
      `${clientFolder}/src/**/*.{md,js,ts,json}`,
    ]);
    await spawnProcess("npx", ["prettier", "--write", "--loglevel", "warn", `${clientFolder}/README.md`]);

    await compressRuleset(name, join(NESTED_SDK_CLIENTS_DIR, `client-${name}`, "src", "endpoint", "ruleset.ts"));

    const srcFolder = join(NESTED_SDK_CLIENTS_DIR, `client-${name}`, "src");
    const srcContainer = join(NESTED_SDK_CLIENTS_DIR, `client-${name}`);
    const destinationFolder = join(NESTED_SDK_CLIENTS_DIR, "submodules", `${name}`);

    emptyDirSync(destinationFolder);
    copySync(srcFolder, destinationFolder);
    emptyDirSync(srcContainer);
    rmdirSync(srcContainer);

    replacePackageJsonImport(join(destinationFolder, "runtimeConfig.browser.ts"));
    replacePackageJsonImport(join(destinationFolder, "runtimeConfig.ts"));

    replaceCredentialDefaultProvider(join(destinationFolder, "runtimeConfig.browser.ts"));
    replaceCredentialDefaultProvider(join(destinationFolder, "runtimeConfig.ts"));
  }
}

module.exports = generateNestedClients;

/**
 * @param clientName - client to generate.
 * @param operations - operations to include.
 */
async function generateNestedClient(clientName, operations) {
  const TEMP_CODE_GEN_INPUT_DIR_SERVICE = join(TEMP_CODE_GEN_INPUT_DIR, clientName);

  emptyDirSync(normalize(join(__dirname, "..", "..", "..", "codegen", "sdk-codegen", "build-single", clientName)));

  const options = [
    ":sdk-codegen:clean",
    ":sdk-codegen:build",
    "--stacktrace",
    `-PmodelsDirProp=${relative(CODE_GEN_SDK_ROOT, TEMP_CODE_GEN_INPUT_DIR_SERVICE)}`,
    `-PclientNameProp=${clientName}`,
  ];

  emptyDirSync(TEMP_CODE_GEN_INPUT_DIR_SERVICE);

  const filename = `${clientName}.json`;
  const targetModelPath = join(TEMP_CODE_GEN_INPUT_DIR_SERVICE, filename);
  copyFileSync(join(DEFAULT_CODE_GEN_INPUT_DIR, filename), targetModelPath);

  const model = require(targetModelPath);
  Object.entries(model.shapes).forEach(([key, value]) => {
    if (value.type === "service") {
      // remove operations not in list.
      value.operations = value.operations.filter((operationObj) => {
        return !!operations.find((opName) => operationObj.target.endsWith(`#${opName}`));
      });
      // prevent validation from complaining about unused operations.
      delete value.traits["smithy.rules#endpointTests"];
    }
  });
  writeFileSync(targetModelPath, JSON.stringify(model, null, 2) + "\n");

  await spawnProcess("./gradlew", options, { cwd: CODE_GEN_ROOT });
  rmSync(join(__dirname, "..", "..", "..", "codegen", "sdk-codegen", `smithy-build-${clientName}.json`));
}

/**
 * Fix package json import filesystem level.
 */
function replacePackageJsonImport(file) {
  writeFileSync(
    file,
    readFileSync(file, "utf-8").replace(
      `import packageInfo from "../package.json";`,
      `import packageInfo from "../../../package.json";`
    )
  );
}

/**
 * Breaks the circular dependency of STS and the default credential chain.
 * STS has an auth operation but the portion of it used for credential resolution does
 * not need the default chain.
 */
function replaceCredentialDefaultProvider(file) {
  writeFileSync(
    file,
    readFileSync(file, "utf-8")
      .replace(`import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";`, ``)
      .replace(`credentialDefaultProvider: config?.credentialDefaultProvider ?? credentialDefaultProvider,`, ``)
      .replace(`await credentialDefaultProvider(`, `await config!.credentialDefaultProvider!(`)
  );
}

if (process.argv.includes("--exec")) {
  generateNestedClients().catch(console.error);
}
