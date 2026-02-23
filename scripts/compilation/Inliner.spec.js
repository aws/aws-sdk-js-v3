const assert = require("assert");
const path = require("path");
const fs = require("fs");

/**
 * Verify that the Inliner's Rollup output uses eager bindings
 * for external re-exports (externalLiveBindings: false).
 *
 * When externalLiveBindings is true (the default), Rollup emits:
 *   Object.defineProperty(exports, k, { enumerable: true, get: function () { return ext[k]; } });
 *
 * These lazy getters break Jest's auto-mocking because jest.mock()
 * snapshots exports at mock-creation time, before the getters resolve.
 *
 * With externalLiveBindings: false, Rollup emits:
 *   exports[k] = ext[k];
 *
 * which Jest can auto-mock correctly.
 *
 * See: https://github.com/aws/aws-sdk-js-v3/issues/7748
 */

// Test 1: Verify the Inliner source contains externalLiveBindings: false
const inlinerSource = fs.readFileSync(path.join(__dirname, "Inliner.js"), "utf-8");
assert.ok(
  inlinerSource.includes("externalLiveBindings: false"),
  "Inliner.js must set externalLiveBindings: false in Rollup outputOptions"
);

// Test 2: If a built client-dynamodb dist-cjs/index.js exists, verify no lazy getter re-exports
const dynamoIndexPath = path.join(__dirname, "..", "..", "clients", "client-dynamodb", "dist-cjs", "index.js");
if (fs.existsSync(dynamoIndexPath)) {
  const indexContents = fs.readFileSync(dynamoIndexPath, "utf-8");

  // Match the lazy getter pattern Rollup emits with externalLiveBindings: true
  const lazyGetterPattern = /Object\.defineProperty\(exports,\s*k,\s*\{[^}]*get:\s*function/g;
  const matches = indexContents.match(lazyGetterPattern);

  assert.strictEqual(
    matches,
    null,
    "dist-cjs/index.js must not contain lazy Object.defineProperty getter re-exports. " +
      "Found " +
      (matches?.length ?? 0) +
      " occurrences. " +
      "Ensure externalLiveBindings: false is set in Rollup outputOptions."
  );

  console.log("PASS: dist-cjs/index.js has no lazy getter re-exports.");
} else {
  console.log("SKIP: client-dynamodb dist-cjs/index.js not found (not built).");
}

console.log("PASS: Inliner.js has externalLiveBindings: false.");
