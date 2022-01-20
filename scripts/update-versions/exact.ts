#!/usr/bin/env ts-node

// Updates versions for internal packages `@aws-sdk/*` to exact versions
// in dependencies/devDependencies/peerDependencies

import { getDepToExactVersionHash } from "./getDepToExactVersionHash";
import { updateVersions } from "./updateVersions";

updateVersions(getDepToExactVersionHash());
