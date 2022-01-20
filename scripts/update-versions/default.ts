#!/usr/bin/env ts-node

// Updates versions for internal packages `@aws-sdk/*` to `*`
// in dependencies/devDependencies/peerDependencies

import { getPackageNameToDefaultHash } from "./getPackageNameToDefaultHash";
import { updateVersions } from "./updateVersions";

const packageNameToDefaultHash = getPackageNameToDefaultHash();
updateVersions(packageNameToDefaultHash);
