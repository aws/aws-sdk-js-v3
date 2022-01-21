#!/usr/bin/env ts-node

// Updates versions for internal packages `@aws-sdk/*` to exact versions
// in dependencies/devDependencies/peerDependencies

import { getDepToCurrentVersionHash } from "./getDepToCurrentVersionHash";
import { updateVersions } from "./updateVersions";

updateVersions(getDepToCurrentVersionHash());
