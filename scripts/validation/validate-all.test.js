#!/usr/bin/env node

/**
 * Meta-test: creates a temporary package with intentional violations,
 * runs each validator, and asserts that violations are detected.
 *
 * Usage: node scripts/validation/validate-all.test.js
 */

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const root = path.join(__dirname, "..", "..");
const validationDir = __dirname;

// Temporary package location.
const tmpPkgDir = path.join(root, "packages-internal", "__test-violations__");
const distCjs = path.join(tmpPkgDir, "dist-cjs");
const distEs = path.join(tmpPkgDir, "dist-es");

// Temporary packages for the downlevel types check and the preview folder.
const tmpNestedDir = path.join(root, "packages-internal", "__test-nested-downlevel__");
const tmpSingleDir = path.join(root, "packages-internal", "__test-single-downlevel__");
const tmpPreviewDir = path.join(root, "preview", "__test-preview__");

function setup() {
  fs.mkdirSync(distCjs, { recursive: true });
  fs.mkdirSync(distEs, { recursive: true });
  fs.mkdirSync(path.join(tmpPkgDir, "src"), { recursive: true });

  // package.json declares "tslib" (implicit, always passes) and "@aws-sdk/util-arn-parser" (unused).
  fs.writeFileSync(
    path.join(tmpPkgDir, "package.json"),
    JSON.stringify(
      {
        name: "@aws-sdk/__test-violations__",
        version: "0.0.0",
        main: "./dist-cjs/index.js",
        module: "./dist-es/index.js",
        dependencies: {
          tslib: "^2",
          "@aws-sdk/util-arn-parser": "^3.0.0",
          "@aws-sdk/util-endpoints": "^3.0.0",
        },
      },
      null,
      2
    )
  );

  // index.js — the entry point, imports blorp.js
  const indexCode = `"use strict";
const { blorp } = require("./blorp");
module.exports = { blorp };
`;
  fs.writeFileSync(path.join(distCjs, "index.js"), indexCode);
  fs.writeFileSync(path.join(distEs, "index.js"), indexCode.replace("require", "import"));

  // blorp.js — violates multiple rules:
  // 1. banned-imports: imports @smithy/util-hex-encoding
  // 2. imports-declared: imports @aws-sdk/client-s3 (not in deps)
  // 3. static-import-names: dynamic require(variable) and import(variable)
  // 4. relative-imports: imports ./nonexistent (broken relative)
  // 5. imports-declared (require.resolve): imports @aws-sdk/util-arn-parser/nonexistent-subpath (declared but unresolvable)
  const blorpCode = `"use strict";
const { toHex } = require("@smithy/util-hex-encoding");
const { S3 } = require("@aws-sdk/client-s3");
const name = "dynamic";
const dyn = require(name);
const dynImport = import(name);
const missing = require("./nonexistent");
import("./also-missing");
const subpath = require("@aws-sdk/util-arn-parser/nonexistent-subpath");
module.exports = { blorp: toHex };
`;
  fs.writeFileSync(path.join(distCjs, "blorp.js"), blorpCode);
  fs.writeFileSync(path.join(distEs, "blorp.js"), blorpCode);

  // orphan.js — unreachable (not imported from index)
  fs.writeFileSync(path.join(distCjs, "orphan.js"), `"use strict";\nmodule.exports = {};\n`);
  fs.writeFileSync(path.join(distEs, "orphan.js"), `"use strict";\nmodule.exports = {};\n`);

  // no-export-star violation: src/barrel.ts uses export * from
  fs.writeFileSync(path.join(tmpPkgDir, "src", "barrel.ts"), `export * from "./blorp";\nexport * from "./utils";\n`);

  // filenames violation: multi-dot filename that is not an allowed suffix
  fs.writeFileSync(path.join(distCjs, "blorp.spec.js"), `"use strict";\nmodule.exports = {};\n`);

  // api-extractor-config violation: @public symbol without api-extractor.json
  fs.writeFileSync(
    path.join(tmpPkgDir, "src", "public-api.ts"),
    `/**\n * @public\n */\nexport const blorp = () => {};\n`
  );
}

function teardown() {
  for (const dir of [tmpPkgDir, tmpNestedDir, tmpSingleDir, tmpPreviewDir]) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

/**
 * Creates a package that has every build artifact built.js requires, with the given downlevel type folders.
 */
function setupBuiltPackage(dir, name, downlevelFolders) {
  for (const folder of [
    "dist-cjs",
    "dist-es",
    "dist-types",
    ...downlevelFolders.map((f) => path.join("dist-types", f)),
  ]) {
    fs.mkdirSync(path.join(dir, folder), { recursive: true });
  }
  fs.writeFileSync(path.join(dir, "package.json"), JSON.stringify({ name, version: "0.0.0" }));
  for (const file of ["dist-cjs/index.js", "dist-es/index.js", "dist-types/index.d.ts"]) {
    fs.writeFileSync(path.join(dir, file), "");
  }
}

function runValidator(script, args = [], env = {}) {
  try {
    const output = execFileSync("node", [path.join(validationDir, script), ...args], {
      cwd: root,
      stdio: "pipe",
      encoding: "utf-8",
      env: { ...process.env, ...env },
    });
    return { exitCode: 0, output };
  } catch (e) {
    return { exitCode: e.status || 1, output: (e.stdout || "") + (e.stderr || "") };
  }
}

function assert(condition, message) {
  if (!condition) {
    console.error(`  FAIL: ${message}`);
    return false;
  }
  console.log(`  PASS: ${message}`);
  return true;
}

function runTests() {
  let passed = 0;
  let failed = 0;

  function check(condition, message) {
    if (assert(condition, message)) {
      passed++;
    } else {
      failed++;
    }
  }

  const pkg = tmpPkgDir;

  // 1. banned-imports
  const banned = runValidator("banned-imports.js", [pkg]);
  check(banned.exitCode !== 0, "banned-imports detects @smithy/util-hex-encoding");
  check(banned.output.includes("@smithy/util-hex-encoding"), "banned-imports names the banned package");

  // 2. imports-declared
  const declared = runValidator("imports-declared.js", [pkg]);
  check(declared.exitCode !== 0, "imports-declared detects undeclared @aws-sdk/client-s3");
  check(declared.output.includes("@aws-sdk/client-s3"), "imports-declared names the undeclared package");
  check(
    declared.output.includes("nonexistent-subpath"),
    "imports-declared detects unresolvable subpath via require.resolve"
  );

  // 3. static-import-names
  const dynamic = runValidator("static-import-names.js", [pkg]);
  check(dynamic.exitCode !== 0, "static-import-names detects dynamic require(variable)");
  check(dynamic.output.includes("require()"), "static-import-names identifies require() violation");
  check(dynamic.output.includes("import()"), "static-import-names identifies import() violation");

  // 4. relative-imports
  const relative = runValidator("relative-imports.js", [pkg]);
  check(relative.exitCode !== 0, "relative-imports detects broken ./nonexistent");
  check(relative.output.includes("nonexistent"), "relative-imports names the missing target");
  check(relative.output.includes("also-missing"), 'relative-imports detects broken import("./also-missing")');

  // 5. unreachable-files
  const unreachable = runValidator("unreachable-files.js", [pkg]);
  check(unreachable.exitCode !== 0, "unreachable-files detects orphan.js as an error");
  check(unreachable.output.includes("orphan.js"), "unreachable-files names the unreachable file");

  // 6. deps-used (@aws-sdk/util-endpoints is declared but never imported)
  const deps = runValidator("deps-used.js", [pkg]);
  check(deps.exitCode !== 0, "deps-used detects unused @aws-sdk/util-endpoints");
  check(deps.output.includes("@aws-sdk/util-endpoints"), "deps-used names the unused dependency");

  // 7. no-export-star (src/barrel.ts uses export *)
  const exportStar = runValidator("no-export-star.js", [pkg]);
  check(exportStar.exitCode !== 0, "no-export-star detects export * in source");
  check(exportStar.output.includes("barrel.ts"), "no-export-star identifies the offending file");
  check(exportStar.output.includes("export *"), "no-export-star mentions 'export *' in the error");

  // 8. filenames (blorp.spec.js has suspicious multi-dot name)
  const filenames = runValidator("filenames.js", [pkg]);
  check(filenames.exitCode !== 0, "filenames detects suspicious multi-dot filename");
  check(filenames.output.includes("blorp.spec.js"), "filenames identifies the offending file");

  // 9. api-extractor-config (src/public-api.ts has @public but package has no api-extractor.json)
  const apiExtractorConfig = runValidator("api-extractor-config.js", [pkg]);
  check(apiExtractorConfig.exitCode !== 0, "api-extractor-config detects @public without api-extractor.json");
  check(apiExtractorConfig.output.includes("no api-extractor.json"), "api-extractor-config names the missing config");

  // 10. built: the downlevel types folder may exist once, at dist-types/ts3.4, and never nested
  setupBuiltPackage(tmpNestedDir, "@aws-sdk/__test-nested-downlevel__", ["ts3.4", path.join("ts3.4", "ts3.4")]);
  const nested = runValidator("built.js", [tmpNestedDir]);
  check(nested.exitCode !== 0, "built detects a nested ts3.4 folder");
  check(nested.output.includes("ts3.4/ts3.4"), "built names the nested ts3.4 folder");
  setupBuiltPackage(tmpSingleDir, "@aws-sdk/__test-single-downlevel__", ["ts3.4"]);
  check(runValidator("built.js", [tmpSingleDir]).exitCode === 0, "built accepts a single ts3.4 folder");

  // 11. the preview folder is covered by the package list that the validators share
  fs.mkdirSync(tmpPreviewDir, { recursive: true });
  fs.writeFileSync(path.join(tmpPreviewDir, "package.json"), JSON.stringify({ name: "@aws-sdk/__test-preview__" }));
  const { getPackageDirs } = require("./validation-shared");
  check(
    getPackageDirs().some(({ dir }) => dir === tmpPreviewDir),
    "validators include packages in preview/"
  );

  runVersionCheckTests(check);

  console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

/**
 * Runs the dependency version check against fixture monorepos, so the result does not depend on the real tree,
 * which is rewritten before publishing.
 */
function runVersionCheckTests(check) {
  const versionCheck = path.join(root, "scripts", "runtime-dependency-version-check", "runtime-dep-version-check.js");

  const run = (fixtureRoot, prepublish) => {
    try {
      const output = execFileSync("node", [versionCheck], {
        cwd: root,
        stdio: "pipe",
        encoding: "utf-8",
        env: {
          ...process.env,
          AWS_SDK_VERSION_CHECK_ROOT: fixtureRoot,
          AWS_SDK_PREPUBLISH: prepublish ? "true" : "false",
        },
      });
      return { exitCode: 0, output };
    } catch (e) {
      return { exitCode: e.status || 1, output: (e.stdout || "") + (e.stderr || "") };
    }
  };

  // A fixture monorepo with a dependency @aws-sdk/types and a package that consumes it.
  const fixture = ({ dependency, peerDependency, previewVersion }) => {
    const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), "version-check-"));
    for (const folder of ["clients", "lib", "packages", "packages-internal", "preview", "private"]) {
      fs.mkdirSync(path.join(fixtureRoot, folder));
    }
    const write = (folder, name, pkg) => {
      fs.mkdirSync(path.join(fixtureRoot, folder, name));
      fs.writeFileSync(path.join(fixtureRoot, folder, name, "package.json"), JSON.stringify(pkg));
    };
    write("packages-internal", "types", { name: "@aws-sdk/types", version: "3.0.0" });
    write("packages-internal", "consumer", {
      name: "@aws-sdk/consumer",
      version: "3.0.0",
      dependencies: { "@aws-sdk/types": dependency },
      ...(peerDependency ? { peerDependencies: { "@aws-sdk/types": peerDependency } } : {}),
    });
    write("preview", "previewed", { name: "@aws-sdk/previewed", version: previewVersion });
    return fixtureRoot;
  };

  const results = [];
  try {
    const make = (options) => {
      const fixtureRoot = fixture({ previewVersion: "0.1.0", ...options });
      results.push(fixtureRoot);
      return fixtureRoot;
    };

    // Before publishing, internal dependencies use the workspace protocol.
    const workspace = make({ dependency: "workspace:^3.0.0" });
    check(run(workspace, false).exitCode === 0, "version check accepts the workspace protocol before publishing");
    const workspaceInFlagMode = run(workspace, true);
    check(
      workspaceInFlagMode.exitCode !== 0,
      "version check rejects the workspace protocol when AWS_SDK_PREPUBLISH=true"
    );
    check(workspaceInFlagMode.output.includes("non-canonical"), "version check names the non-canonical dependency");

    // After update:versions:current, they use real versions.
    const rewritten = make({ dependency: "^3.0.0" });
    check(run(rewritten, true).exitCode === 0, "version check accepts real versions when AWS_SDK_PREPUBLISH=true");
    check(run(rewritten, false).exitCode !== 0, "version check rejects real versions before publishing");

    // A leftover workspace: in a section that the dependency map does not read.
    const leftoverPeer = make({ dependency: "^3.0.0", peerDependency: "workspace:^3.0.0" });
    const peer = run(leftoverPeer, true);
    check(peer.exitCode !== 0, "version check rejects a leftover workspace: peer dependency when publishing");
    check(peer.output.includes("peerDependencies"), "version check names the section with the leftover workspace:");

    // Packages in preview/ stay on 0.x.y.
    for (const prepublish of [false, true]) {
      const dependency = prepublish ? "^3.0.0" : "workspace:^3.0.0";
      const unstable = run(make({ dependency, previewVersion: "1.0.0" }), prepublish);
      check(
        unstable.exitCode !== 0,
        `version check rejects a preview package outside 0.x.y (prepublish=${prepublish})`
      );
      check(unstable.output.includes("@aws-sdk/previewed"), "version check names the preview package");
      check(unstable.output.includes("0.x.y"), "version check states the 0.x.y requirement");
    }
  } finally {
    for (const dir of results) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  }
}

process.on("exit", teardown);

setup();
const success = runTests();
process.exit(success ? 0 : 1);
