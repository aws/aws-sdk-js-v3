#!/usr/bin/env node

/**
 * For every package in the monorepo, requires dist-cjs/index.js and verifies
 * that exported functions have a `.name` matching their export key.
 *
 * Usage: node export-names.js
 */

const fs = require("node:fs");
const path = require("node:path");
const { getPackageDirs, summarizePackages } = require("./validation-shared");

// Symbols exempt from the name check (aliases, deprecated re-exports, special names).
const EXCEPTIONS = new Set([
  "AWSSDKSigV4Signer", // deprecated alias for AwsSdkSigV4Signer
  "resolveAWSSDKSigV4Config", // deprecated alias for resolveAwsSdkSigV4Config
  "__Client", // base Client in SDK clients
  "$Command", // base Command in SDK clients
  "getDefaultClientConfiguration", // renamed to getDefaultExtensionConfiguration
  "generateIdempotencyToken", // sometimes called v4
  "defaultUserAgent", // renamed to createDefaultUserAgentProvider
  "getSigV4AuthPlugin", // legacy auth, getAwsAuthPlugin
  "NumberValueImpl", // name of NumberValue
  "WorkSpacesThin", // alias of WorkSpacesThinClient
  "HostResolver", // alias of NodeDnsLookupHostResolver
  "expectInt", // aliased to expectLong
  "handleFloat", // aliased to limitedParseDouble
  "limitedParseFloat", // aliased to limitedParseDouble
  "strictParseFloat", // aliased to strictParseDouble
  "strictParseInt", // aliased to strictParseLong
]);

// Function names that are reused across many exports (e.g. all paginators share one factory name).
const NAMING_EXCEPTIONS = new Set(["paginateOperation"]);

// Exports that are intentionally undefined at runtime.
const UNDEFINED_EXCEPTIONS = new Set(["DEFAULT_UA_APP_ID"]);

function validate(packageDir) {
  const indexPath = path.join(packageDir, "dist-cjs", "index.js");
  if (!fs.existsSync(indexPath)) {
    return [];
  }
  const pkgJsonPath = path.join(packageDir, "package.json");
  if (!fs.existsSync(pkgJsonPath)) {
    return [];
  }
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));

  let mod;
  try {
    mod = require(indexPath);
  } catch {
    // If the module can't be required, other validators will catch it.
    return [];
  }

  const errors = [];
  for (const key of Object.keys(mod)) {
    if (key.includes(":") || EXCEPTIONS.has(key)) {
      continue;
    }
    const value = mod[key];
    if (value === undefined && !UNDEFINED_EXCEPTIONS.has(key)) {
      errors.push(`[${pkgJson.name}] export "${key}" is undefined (likely a type re-exported as value)`);
    }
    if (typeof value === "function" && value.name && value.name !== key && !NAMING_EXCEPTIONS.has(value.name)) {
      errors.push(`[${pkgJson.name}] export "${key}" has .name "${value.name}"`);
    }
  }
  return errors;
}

function main() {
  const packages = getPackageDirs();
  const errors = [];
  for (const { dir } of packages) {
    errors.push(...validate(dir));
  }
  if (errors.length) {
    console.error(`❌ ${errors.length} export name mismatch(es):\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  console.log(`✅ All export function names match their keys. (${summarizePackages(packages)})`);
}

main();
