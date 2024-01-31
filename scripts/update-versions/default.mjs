// @ts-check

// Updates versions for internal packages `@aws-sdk/*` to `*`
// in dependencies/devDependencies/peerDependencies

import { getDepToDefaultVersionHash } from "./getDepToDefaultVersionHash.mjs";
import { runUpdatePeers } from "./peers.mjs";
import { updateVersions } from "./updateVersions.mjs";

updateVersions(getDepToDefaultVersionHash());
runUpdatePeers();
