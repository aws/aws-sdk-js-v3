#!/usr/bin/env node

/**
 * Validates that dist-cjs named exports are visible via ESM import().
 * This confirms cjs-module-lexer can parse the generated CJS output.
 *
 * Usage: node esm-compat.js
 */

const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { getPackageDirs, summarizePackages } = require("./validation-shared");

async function validateFile(filePath, label, errors) {
  let cjsExports, esmNamespace;
  try {
    cjsExports = Object.keys(require(filePath));
  } catch (e) {
    errors.push(`[${label}] require() failed: ${e.message}`);
    return;
  }

  try {
    esmNamespace = await import(pathToFileURL(filePath).href);
  } catch (e) {
    errors.push(`[${label}] import() failed: ${e.message}`);
    return;
  }

  const esmKeys = Object.keys(esmNamespace).filter((k) => k !== "default" && k !== "__esModule");
  const missing = cjsExports.filter((k) => !esmKeys.includes(k));

  if (missing.length) {
    errors.push(
      `[${label}] ${missing.length} exports not visible via import(): ${missing.slice(0, 5).join(", ")}${
        missing.length > 5 ? "..." : ""
      }`
    );
  }
}

const skip = new Set(["@smithy/util-test", "@aws-sdk/aws-util-test", "@aws-sdk/karma-credential-loader"]);

async function main() {
  const packages = getPackageDirs();
  const errors = [];
  const validated = [];

  for (const { dir } of packages) {
    const indexPath = path.join(dir, "dist-cjs", "index.js");
    if (!fs.existsSync(indexPath)) {
      continue;
    }

    const pkgJson = JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf-8"));
    if (skip.has(pkgJson.name)) {
      continue;
    }

    await validateFile(indexPath, pkgJson.name, errors);
    validated.push({ dir });

    // Validate submodules.
    const submodulesDir = path.join(dir, "src", "submodules");
    if (pkgJson.exports && fs.existsSync(submodulesDir)) {
      for (const sub of fs.readdirSync(submodulesDir)) {
        const subIndex = path.join(dir, "dist-cjs", "submodules", sub, "index.js");
        if (fs.existsSync(subIndex)) {
          await validateFile(subIndex, `${pkgJson.name}/${sub}`, errors);
        }
      }
    }
  }

  if (errors.length) {
    console.error(`❌ ${errors.length} ESM compat issue(s):\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  console.log(`✅ All dist-cjs exports visible via import(). (${summarizePackages(validated)})`);
}

main();
