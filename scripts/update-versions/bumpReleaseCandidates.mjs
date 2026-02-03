/////////////////////////////////////////////////////////////
//
// Runs two-step lerna version where clients and certain
// public packages are versioned in lockstep and
// other packages are versioned independently.
//
/////////////////////////////////////////////////////////////

import fs from "node:fs";

import { generateInternalPackageChangelogs, manifestPath } from "./lib/generateChangelog.mjs";
import { linkedPackagesConfig, overwriteLerna, runLernaVersion } from "./lib/release.mjs";

overwriteLerna(linkedPackagesConfig);
await runLernaVersion(true);

fs.writeFileSync(manifestPath, "{}\n");

await generateInternalPackageChangelogs();
