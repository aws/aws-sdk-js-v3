// @ts-check

// Updates versions for internal packages `@aws-sdk/*` to actual pinned or caret version

import { getDepToCurrentVersionHash } from "./getDepToCurrentVersionHash.mjs";
import { updateVersions } from "./updateVersions.mjs";

updateVersions(getDepToCurrentVersionHash());
