import { Hash } from "@aws-sdk/hash-node";

import { SignerConfig } from "./Signer";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SignerConfig) => {
  return {
    ...config,
    runtime: "node",
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
  };
};
