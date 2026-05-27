import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/*
This script executes the smithy-ts generated index object tests in aggregate.

Clients that do not export the full list of expected runtime objects
will fail the test.
*/

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const root = path.join(__dirname, "..", "..");

const clients = path.join(root, "clients");

for (const folder of fs.readdirSync(clients)) {
  const runtimeIndexTest = path.join(clients, folder, "test", "index-objects.spec.mjs");
  if (fs.existsSync(runtimeIndexTest)) {
    try {
      await import(runtimeIndexTest);
    } catch (e) {
      console.error("ERROR:", folder, "failed index exported objects test.");
      throw e;
    }
  }
}
