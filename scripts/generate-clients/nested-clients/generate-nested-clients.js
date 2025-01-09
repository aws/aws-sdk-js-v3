const clients = [
  {
    name: "sts",
    operations: ["AssumeRole", "AssumeRoleWithWebIdentity"],
  },
  {
    name: "sso-oidc",
    operations: ["CreateToken"],
  },
];

const { join, relative, normalize } = require("path");
const { emptyDirSync, rmSync, copyFileSync, copySync, rmdirSync } = require("fs-extra");
const { copyToClients } = require("../copy-to-clients");
const { spawnProcess } = require("../../utils/spawn-process");
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

    console.log("TODO: copy compressed endpoint ruleset from canonical clients");

    const srcFolder = join(NESTED_SDK_CLIENTS_DIR, `client-${name}`, "src");
    const srcContainer = join(NESTED_SDK_CLIENTS_DIR, `client-${name}`);
    const destinationFolder = join(NESTED_SDK_CLIENTS_DIR, `nested-${name}`);

    copySync(srcFolder, destinationFolder);
    emptyDirSync(srcContainer);
    rmdirSync(srcContainer);
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
  copyFileSync(join(DEFAULT_CODE_GEN_INPUT_DIR, filename), join(TEMP_CODE_GEN_INPUT_DIR_SERVICE, filename));

  await spawnProcess("./gradlew", options, { cwd: CODE_GEN_ROOT });
  rmSync(join(__dirname, "..", "..", "..", "codegen", "sdk-codegen", `smithy-build-${clientName}.json`));
}

if (process.argv.includes("--exec")) {
  generateNestedClients().catch(console.error);
}
