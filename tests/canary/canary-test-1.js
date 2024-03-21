const assert = require("assert");

/**
 * This test asserts that prior to the installation of
 * any \@aws-sdk modules, the core cannot be resolved.
 *
 * If the core is resolved, then the workspace is polluted.
 */

try {
  require.resolve("@aws-sdk/core");
  throw new Error("@aws-sdk/core should not be accessible from a fresh directory outside the SDK workspace.");
} catch (e) {
  assert.strictEqual(e.message.split("\n")[0], `Cannot find module '@aws-sdk/core'`);
  console.info("Workspace is isolated.");
}
