/////////////////////////////////////////////////////////////
//
// Runs two-step lerna version where clients and certain
// public packages are versioned in lockstep and
// other packages are versioned independently.
//
/////////////////////////////////////////////////////////////

import { independentPackagesConfig, linkedPackagesConfig, overwriteLerna, runLernaVersion } from "./lib/release.mjs";

overwriteLerna(linkedPackagesConfig);
await runLernaVersion(true);

overwriteLerna(independentPackagesConfig);
await runLernaVersion();
