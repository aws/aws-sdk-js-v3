/////////////////////////////////////////////////////////////
//
// Runs two-step lerna version where clients and certain
// public packages are versioned in lockstep and
// other packages are versioned independently.
//
/////////////////////////////////////////////////////////////

import fs from "node:fs";
import path from "node:path";

import { listFolders } from "../utils/list-folders.js";
import { generateChangelog, manifestPath } from "./lib/generateChangelog.mjs";
import { linkedPackagesConfig, overwriteLerna, root, runLernaVersion } from "./lib/release.mjs";

overwriteLerna(linkedPackagesConfig);
await runLernaVersion(true);

fs.writeFileSync(manifestPath, "{}\n");
for await (const pkg of listFolders(path.join(root, "packages-internal"), false)) {
  await generateChangelog(pkg);
}
