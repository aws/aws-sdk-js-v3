const fs = require("node:fs");
const path = require("node:path");
const { glob } = require("glob");
const { execSync } = require("node:child_process");

console.log("====", "canary runner", "====");

const root = path.join(__dirname, "..", "..");
const canaryPath = path.join(root, "..", "canary-aws-sdk-js-v3");

if (fs.existsSync(canaryPath)) {
  fs.rmSync(canaryPath, { recursive: true });
}
fs.mkdirSync(canaryPath);
fs.mkdirSync(path.join(canaryPath, "tests"));

const e2eFiles = glob.sync("clients/**/test/*.e2e.spec.ts", { cwd: root });

const dependencies = new Set();

for (const file of e2eFiles) {
  const content = fs.readFileSync(path.join(root, file), "utf-8");
  if (
    !content.includes('from "./') &&
    !content.includes('from "../') &&
    !content.includes('from "@aws-sdk/aws-util-test/src"')
  ) {
    const dest = path.join(canaryPath, "tests", file);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(path.join(root, file), dest);

    const importMatches = content.matchAll(/from ["']([^."'][^"']*)["']/g);
    for (const match of importMatches) {
      if (!match[1].startsWith("node:")) {
        const pkg = match[1].startsWith("@") ? match[1].split("/").slice(0, 2).join("/") : match[1].split("/")[0];
        dependencies.add(pkg);
      }
    }
  }
}

const packageJson = {
  name: "canary-aws-sdk-js-v3",
  private: true,
  scripts: {
    canary: "vitest run --retry=4 --test-timeout=60000 --hook-timeout=60000",
  },
  devDependencies: {
    ...Object.fromEntries([...dependencies].sort().map((dep) => [dep, "latest"])),
    "@aws-sdk/config": "latest",
    "happy-dom": "20.8.3",
    vitest: "4.0.17",
  },
};

fs.writeFileSync(path.join(canaryPath, "package.json"), JSON.stringify(packageJson, null, 2));

const vitestConfig = `import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    conditions: ["browser", "module", "import", "default"],
    mainFields: ["browser", "module", "main"],
  },
  test: {
    include: ["**/*.e2e.spec.ts"],
    exclude: [
      "**/*/node_modules/**/*.spec.ts",
      "node_modules",
      // doesn't support OPTIONS preflight.
      "tests/clients/client-data-pipeline/**/*.e2e.spec.ts",
      // requires .wav file.
      "tests/clients/client-transcribe-streaming/test/index.e2e.spec.ts",
    ],
    setupFiles: ["vitest.browser.setup.mts"],
    environment: "happy-dom",
  },
});
`;

fs.writeFileSync(path.join(canaryPath, "vitest.config.mts"), vitestConfig);
fs.copyFileSync(path.join(root, "vitest.nodejs.setup.mts"), path.join(canaryPath, "vitest.nodejs.setup.mts"));

fs.mkdirSync(path.join(canaryPath, "scripts", "browser-testing"), { recursive: true });
fs.copyFileSync(path.join(root, "vitest.browser.setup.mts"), path.join(canaryPath, "vitest.browser.setup.mts"));
fs.copyFileSync(
  path.join(root, "scripts", "browser-testing", "writeTestCredentials.mjs"),
  path.join(canaryPath, "scripts", "browser-testing", "writeTestCredentials.mjs")
);

fs.copyFileSync(path.join(__dirname, "canary-preinstall.js"), path.join(canaryPath, "canary-preinstall.js"));
execSync("node canary-preinstall.js", { cwd: canaryPath, stdio: "inherit" });

try {
  console.info("attempting npm install");
  execSync("npm install", { cwd: canaryPath, stdio: "inherit" });
  console.info("npm install completed");
} catch (error) {
  // if npm installation fails, consider the issue transient.
  // It will be caught by a separate canary.
  console.error(error);
  console.info("letting npm installation error propagate to availability canary.");
  process.exit(0);
}

execSync("node ./scripts/browser-testing/writeTestCredentials.mjs", { cwd: canaryPath, stdio: "inherit" });
process.on("exit", () => {
  fs.rmSync(canaryPath, { recursive: true });
});

try {
  console.info("attempting npm run canary");
  execSync("npm run canary", { cwd: canaryPath, stdio: "inherit" });
  console.info("canary tests completed");
  process.exit(0);
} catch (error) {
  console.info("canary tests failed");
  console.error(error);
  process.exit(error.status || 1);
}
