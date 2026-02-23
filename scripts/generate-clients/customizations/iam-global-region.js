const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..", "..");

const runtimeConfigTs = path.join(root, "clients", "client-iam", "src", "runtimeConfig.ts");
const runtimeConfigBrowserTs = path.join(root, "clients", "client-iam", "src", "runtimeConfig.browser.ts");

/**
 * IAM is a global service. The region parameter is only used to determine
 * the AWS partition for endpoint resolution. When no region is configured,
 * default to us-east-1 so users don't need to specify a region for the
 * standard aws partition.
 *
 * @see https://github.com/aws/aws-sdk-js-v3/issues/6343
 */
module.exports = function () {
  // Node.js runtime config: wrap region loader to fall back to us-east-1
  let nodeConfig = fs.readFileSync(runtimeConfigTs, "utf-8");
  nodeConfig = nodeConfig.replace(
    /region: config\?\.region \?\? loadNodeConfig\(\s*NODE_REGION_CONFIG_OPTIONS,\s*\{\.\.\.NODE_REGION_CONFIG_FILE_OPTIONS, \.\.\.loaderConfig\}\s*\)/,
    `region: config?.region ?? (async () => {
      try {
        return await loadNodeConfig(
          NODE_REGION_CONFIG_OPTIONS,
          {...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig}
        )();
      } catch (e) {
        return "us-east-1";
      }
    })`
  );
  fs.writeFileSync(runtimeConfigTs, nodeConfig);

  // Browser runtime config: replace invalidProvider with default region
  let browserConfig = fs.readFileSync(runtimeConfigBrowserTs, "utf-8");
  browserConfig = browserConfig.replace(
    `region: config?.region ?? invalidProvider("Region is missing")`,
    `region: config?.region ?? "us-east-1"`
  );
  // Remove unused invalidProvider import if no other usage remains
  if (!browserConfig.includes("invalidProvider(") || browserConfig.match(/invalidProvider\(/g).length === 0) {
    browserConfig = browserConfig.replace(/import \{ invalidProvider \} from "@smithy\/invalid-dependency";\n/, "");
  }
  fs.writeFileSync(runtimeConfigBrowserTs, browserConfig);
};
