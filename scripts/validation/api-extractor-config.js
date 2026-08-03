#!/usr/bin/env node

// Usage: node api-extractor-config.js [packageDir ...]
//
//

const fs = require("node:fs");
const path = require("node:path");
const { getPackageDirs, summarizePackages } = require("./validation-shared");

const EXTENDS_BY_ROOT = {
  clients: "../../api-extractor.json",
  lib: "../../api-extractor.lib.json",
  packages: "../../api-extractor.packages.json",
  "packages-internal": "../../api-extractor.packages.json",
};

// Packages with @public symbols that lack api-extractor.json.
const KNOWN_GAPS = new Set([
  "@aws-sdk/credential-provider-http",
  "@aws-sdk/credential-provider-ini",
  "@aws-sdk/credential-provider-login",
  "@aws-sdk/credential-provider-node",
  "@aws-sdk/credential-provider-sso",
  "@aws-sdk/credential-provider-web-identity",
  "@aws-sdk/ec2-metadata-service",
  "@aws-sdk/middleware-api-key",
  "@aws-sdk/middleware-eventstream",
  "@aws-sdk/middleware-sdk-glacier",
  "@aws-sdk/middleware-sdk-sqs",
  "@aws-sdk/middleware-sdk-sts",
  "@aws-sdk/middleware-token",
  "@aws-sdk/middleware-websocket",
  "@aws-sdk/nested-clients",
  "@aws-sdk/signature-v4-multi-region",
]);

const PUBLIC_TAG = /^\s*(\/\*\*|\*)?\s*@public\b/m;

function hasPublicSymbol(dir) {
  if (!fs.existsSync(dir)) {
    return false;
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "__tests__") {
        continue;
      }
      if (hasPublicSymbol(p)) {
        return true;
      }
    } else if (entry.name.endsWith(".ts") && !entry.name.endsWith(".spec.ts") && !entry.name.endsWith(".test.ts")) {
      if (PUBLIC_TAG.test(fs.readFileSync(p, "utf-8"))) {
        return true;
      }
    }
  }
  return false;
}

function main() {
  const argv = process.argv.slice(2);
  const positional = [];
  for (let i = 0; i < argv.length; ++i) {
    if (argv[i].startsWith("--")) {
      ++i;
    } else {
      positional.push(argv[i]);
    }
  }
  const isFullScan = positional.length === 0;

  const packages = getPackageDirs();
  const validated = [];
  const errors = [];
  const knownGaps = [];

  for (const { dir } of packages) {
    const folder = path.basename(path.dirname(dir));
    const expectedExtends = EXTENDS_BY_ROOT[folder];
    if (!expectedExtends) {
      continue;
    }

    const pkgJsonPath = path.join(dir, "package.json");
    if (!fs.existsSync(pkgJsonPath)) {
      continue;
    }
    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
    if (pkgJson.private) {
      continue;
    }

    if (!hasPublicSymbol(path.join(dir, "src"))) {
      continue;
    }
    validated.push({ dir });

    const configPath = path.join(dir, "api-extractor.json");
    if (!fs.existsSync(configPath)) {
      if (KNOWN_GAPS.has(pkgJson.name)) {
        knownGaps.push(pkgJson.name);
      } else {
        errors.push(`${pkgJson.name} has @public symbols but no api-extractor.json`);
      }
      continue;
    }

    let config;
    try {
      config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    } catch (e) {
      errors.push(
        `${pkgJson.name} api-extractor.json must be comment-free JSON (this script uses JSON.parse): ${e.message}`
      );
      continue;
    }
    if (config.extends !== expectedExtends) {
      errors.push(
        `${pkgJson.name} api-extractor.json extends "${config.extends}" but packages under ${folder}/ must extend "${expectedExtends}"`
      );
    }
    if (!config.mainEntryPointFilePath) {
      errors.push(`${pkgJson.name} api-extractor.json is missing mainEntryPointFilePath`);
    }

    if (!pkgJson.scripts?.["extract:docs"]) {
      errors.push(`${pkgJson.name} has @public symbols but no extract:docs script in package.json`);
    }
  }

  // Only enforce on full scans, positional runs see a subset of packages.
  if (isFullScan) {
    const unmatched = [...KNOWN_GAPS].filter((name) => !knownGaps.includes(name));
    if (unmatched.length) {
      errors.push(
        `KNOWN_GAPS entries no longer match a real gap (fixed or renamed — remove them): ${unmatched.join(", ")}`
      );
    }
  }

  if (errors.length) {
    console.error(`${errors.length} api-extractor coverage error(s):\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  if (knownGaps.length) {
    console.log(
      `${knownGaps.length} known gap(s) pending team decision (see KNOWN_GAPS):\n  ${knownGaps.join("\n  ")}`
    );
  }
  console.log(`All packages with @public symbols are configured for API docs. (${summarizePackages(validated)})`);
}

main();
