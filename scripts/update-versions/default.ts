#!/usr/bin/env ts-node

// Updates versions for internal packages `@aws-sdk/*` to `*`
// in dependencies/devDependencies/peerDependencies

import { getDepToDefaultVersionHash } from "./getDepToDefaultVersionHash";
import { updateVersions } from "./updateVersions";

updateVersions(getDepToDefaultVersionHash());
