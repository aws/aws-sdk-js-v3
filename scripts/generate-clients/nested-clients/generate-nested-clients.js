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
    operations: ["CreateOAuth2Token", "CreateOAuth2TokenWithIAM"],
  },
  {
    name: "sso",
    operations: ["GetRoleCredentials"],
  },
  {
    name: "cognito-identity",
    operations: ["GetCredentialsForIdentity", "GetId"],
  },
];

const { join, relative, normalize } = require("node:path");
const {
  emptyDirSync,
  copyFileSync,
  copySync,
  rmdirSync,
  writeFileSync,
  readFileSync,
  existsSync,
} = require("fs-extra");
const { copyToClients } = require("../copy-to-clients");
const { spawnProcess } = require("../../utils/spawn-process");
const {
  CODE_GEN_ROOT,
  CODE_GEN_SDK_ROOT,
  CODE_GEN_SDK_OUTPUT_DIR,
  DEFAULT_CODE_GEN_INPUT_DIR,
  TEMP_CODE_GEN_INPUT_DIR,
} = require("../code-gen-dir");

const NESTED_SDK_CLIENTS_DIR = normalize(
  join(__dirname, "..", "..", "..", "packages-internal", "nested-clients", "src")
);

/**
 *
 * Generates pared down clients for internal use.
 *
 */
async function generateNestedClients() {
  // Prepare all nested client models into a single temp directory.
  emptyDirSync(TEMP_CODE_GEN_INPUT_DIR);
  for (const { name, operations } of clients) {
    prepareNestedClientModel(name, operations);
  }

  // Single Gradle invocation generates all nested clients at once.
  await generateAllNestedClientsBatch();

  for (const { name } of clients) {
    await copyToClients(CODE_GEN_SDK_OUTPUT_DIR, NESTED_SDK_CLIENTS_DIR, name);

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
 * Prepares the trimmed model file for a nested client in the shared temp directory.
 */
function prepareNestedClientModel(clientName, operations) {
  const filename = `${clientName}.json`;
  const targetModelPath = join(TEMP_CODE_GEN_INPUT_DIR, filename);
  copyFileSync(join(DEFAULT_CODE_GEN_INPUT_DIR, filename), targetModelPath);

  const model = JSON.parse(readFileSync(targetModelPath, "utf-8"));
  Object.entries(model.shapes).forEach(([key, value]) => {
    if (value.type === "service") {
      value.operations = value.operations.filter((operationObj) => {
        return !!operations.find((opName) => operationObj.target.endsWith(`#${opName}`));
      });
      delete value.traits["smithy.rules#endpointTests"];
    }
  });
  writeFileSync(targetModelPath, JSON.stringify(model, null, 2) + "\n");
}

/**
 * Generates all nested clients in a single Smithy CLI / Gradle invocation.
 * All trimmed models are in TEMP_CODE_GEN_INPUT_DIR; Gradle generates
 * projections for all of them at once.
 */
async function generateAllNestedClientsBatch() {
  // Clean only the smithyprojections output.
  const outputDir = join(CODE_GEN_ROOT, "sdk-codegen", "build", "smithyprojections");
  if (existsSync(outputDir)) {
    emptyDirSync(outputDir);
  }

  const options = [
    ":sdk-codegen:build",
    "--no-rebuild",
    "--stacktrace",
    `-PmodelsDirProp=${relative(CODE_GEN_SDK_ROOT, TEMP_CODE_GEN_INPUT_DIR)}`,
  ];

  await spawnProcess("./gradlew", options, { cwd: CODE_GEN_ROOT });
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
  let content = readFileSync(file, "utf-8");

  const replacements = [
    [`import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";`, ``],
    [`credentialDefaultProvider: config?.credentialDefaultProvider ?? credentialDefaultProvider,`, ``],
    [`await credentialDefaultProvider(`, `await config!.credentialDefaultProvider!(`],
  ];

  for (const [old, neu] of replacements) {
    content = content.replace(old, neu);
  }

  writeFileSync(file, content);
}

if (process.argv.includes("--exec")) {
  generateNestedClients().catch(console.error);
}
