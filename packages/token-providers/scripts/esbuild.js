/**
 *
 * This script builds a minimal bundle of the code
 * in SSOOIDCClient and its CreateTokenCommand, with everything else
 * left external.
 *
 * This is to break a cyclical dependency with the credential providers
 * and certain services used by those providers.
 *
 */

const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");

const root = path.join(__dirname, "..", "..", "..");

(async () => {
  const defaultRuntimeConfigFile = path.join(root, "clients", "client-sso-oidc", "src", "runtimeConfig.ts");
  const nodeRuntimeConfig = fs.readFileSync(defaultRuntimeConfigFile);
  const browserRuntimeConfig = fs.readFileSync(
    path.join(path.dirname(defaultRuntimeConfigFile), "runtimeConfig.browser.ts")
  );
  const clientPkgJsonPath = path.join(root, "clients", "client-sso-oidc", "package.json");
  const clientPkgJson = require(clientPkgJsonPath);
  fs.writeFileSync(
    clientPkgJsonPath,
    JSON.stringify({
      version: clientPkgJson.version,
    })
  );

  for (const platform of ["browser", "node"]) {
    if (platform === "browser") {
      fs.writeFileSync(defaultRuntimeConfigFile, browserRuntimeConfig);
    } else {
      fs.writeFileSync(defaultRuntimeConfigFile, nodeRuntimeConfig);
    }

    const outfile = path.join(root, "packages", "token-providers", "src", "bundle", `client-sso-oidc-${platform}.ts`);

    await esbuild.build({
      platform,
      bundle: true,
      format: "esm",
      mainFields: ["module", "main"],
      entryPoints: [path.join(root, "packages", "token-providers", "scripts", "api", "source.js")],
      outfile: outfile,
      external: ["tslib", "@aws-crypto/*", "@smithy/*", "@aws-sdk/*"],
    });

    await new Promise((r) => setTimeout(r, 1000));

    fs.writeFileSync(outfile, `// @ts-nocheck \n/* eslint-disable */\n` + fs.readFileSync(outfile));
  }

  fs.writeFileSync(defaultRuntimeConfigFile, nodeRuntimeConfig);
  fs.writeFileSync(clientPkgJsonPath, JSON.stringify(clientPkgJson, null, 2) + "\n");
})();
