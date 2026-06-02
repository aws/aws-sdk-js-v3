const fs = require("node:fs");
const path = require("node:path");
const { builtinModules } = require("node:module");
const walk = require("../utils/walk");

/**
 * Validates that all require() and import() calls in a dist-cjs directory
 * use string literals and resolve successfully from their file's directory.
 *
 * @param {string} distCjsDir - Absolute path to the dist-cjs directory.
 * @param {{ verbose?: boolean }} [options]
 * @returns {Promise<void>} Rejects with an Error listing all failures.
 */
async function validateImportResolution(distCjsDir, options = {}) {
  if (!fs.existsSync(distCjsDir)) {
    return;
  }

  const errors = [];

  for await (const file of walk(distCjsDir)) {
    if (!file.endsWith(".js")) continue;

    const contents = fs.readFileSync(file, "utf-8");
    const fileDir = path.dirname(file);

    // Match require("...") and import("...")
    const importPattern = /(?:require|import)\s*\(\s*([^)]*)\s*\)/g;
    let match;

    while ((match = importPattern.exec(contents)) !== null) {
      // Skip matches inside block comments (lines starting with * after whitespace)
      const lineStart = contents.lastIndexOf("\n", match.index) + 1;
      const linePrefix = contents.slice(lineStart, match.index).trimStart();
      if (linePrefix.startsWith("*") || linePrefix.startsWith("//")) continue;

      const argContent = match[1].trim();

      // Validate argument is a string literal
      const stringLiteralMatch = argContent.match(/^["'`]([^"'`]*)["'`]$/);
      if (!stringLiteralMatch) {
        errors.push(`${file}: non-string-literal argument in ${match[0]}`);
        continue;
      }

      const specifier = stringLiteralMatch[1];

      // Skip Node.js built-in modules
      if (specifier.startsWith("node:") || builtinModules.includes(specifier)) {
        continue;
      }

      // Skip optional dependencies that may not be installed
      const optionalDeps = [
        "@aws-sdk/signature-v4-crt",
        "@aws-sdk/signature-v4a",
        "@aws-sdk/crc64-nvme-crt",
        "@smithy/signature-v4a",
      ];
      if (optionalDeps.includes(specifier)) {
        continue;
      }

      // Test resolution from the file's directory
      try {
        require.resolve(specifier, { paths: [fileDir] });
      } catch (e) {
        errors.push(`${file}: cannot resolve "${specifier}"`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Import resolution validation failed with ${errors.length} error(s):\n` + errors.join("\n"));
  }

  if (options.verbose) {
    console.log("Import resolution validation passed for", distCjsDir);
  }
}

module.exports = { validateImportResolution };
