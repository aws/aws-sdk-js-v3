import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { updatePeerVersions } from "./updateVersions.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const currentCredentialProviderNode = JSON.parse(
  readFileSync(join(__dirname, "..", "..", "packages", "credential-provider-node", "package.json"), "utf-8")
);

export const runUpdatePeers = () => {
  updatePeerVersions({
    "@aws-sdk/credential-provider-node": `^${currentCredentialProviderNode.version}`,
  });
};
