// @ts-check

// Updates versions for internal packages `@aws-sdk/*` to exact versions
// in dependencies/devDependencies/peerDependencies

import { getDepToCurrentVersionHash } from "./getDepToCurrentVersionHash.mjs";
import { updateVersions } from "./updateVersions.mjs";

updateVersions(getDepToCurrentVersionHash());
