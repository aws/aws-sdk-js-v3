import { signatureV4CrtContainer } from "@aws-sdk/signature-v4-multi-region";

import { CrtSignerV4 } from "./CrtSignerV4";

signatureV4CrtContainer.CrtSignerV4 = CrtSignerV4;

export { CrtSignerV4 } from "./CrtSignerV4";
export type { AwsSigningAlgorithm, CrtSignerV4Init } from "./CrtSignerV4";
