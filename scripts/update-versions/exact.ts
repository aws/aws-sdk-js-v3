#!/usr/bin/env ts-node

// Updates versions for internal packages `@aws-sdk/*` to exact versions
// in dependencies/devDependencies/peerDependencies

import { getPackageNameToVersionHash } from "./getPackageNameToVersionHash";
import { updateVersions } from "./updateVersions";

const packageNameToVersionHash = getPackageNameToVersionHash();
updateVersions(packageNameToVersionHash);
