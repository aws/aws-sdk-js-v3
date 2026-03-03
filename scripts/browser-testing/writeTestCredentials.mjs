import { fromNodeProviderChain } from "@aws-sdk/config/credentials";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const credentials = await fromNodeProviderChain()();

const __dirname = dirname(fileURLToPath(import.meta.url));

writeFileSync(
  join(__dirname, "aws.testCredentials.browser.ts"),
  `
export const testCredentials = ${JSON.stringify(credentials, null, 2)};
`
);
