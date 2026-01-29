// @ts-check

// Updates versions for `@aws-sdk/*` local package interdependencies to `workspace:(actual version)`
// or `workspace:^(actual version)` for free-range packages.

import { getDepToDefaultVersionHash } from "./getDepToDefaultVersionHash.mjs";
import { updateVersions } from "./updateVersions.mjs";

updateVersions(getDepToDefaultVersionHash());
