import { signatureV4CrtContainer } from "@aws-sdk/signature-v4-multi-region";
import { crtAvailability } from "@aws-sdk/util-user-agent-node";

import { CrtSignerV4 } from "./CrtSignerV4";

signatureV4CrtContainer.CrtSignerV4 = CrtSignerV4;
crtAvailability.isCrtAvailable = true;

export * from "./CrtSignerV4";
