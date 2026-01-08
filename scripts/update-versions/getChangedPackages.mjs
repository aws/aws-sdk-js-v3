/////////////////////////////////////////////////////////////
//
// This replaces the single call to `lerna list` that generates
// the changed package list for the publishing manifest.
//
// In this script, two lerna configs are used, producing the list
// of linked packages that have been bumped to the unified version
// but now augmented with the list of internal packages that have
// independent versions.
//
/////////////////////////////////////////////////////////////

import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import {
  getLernaChanged,
  getLernaList,
  getWorkspaceVersion,
  independentPackagesConfig,
  linkedPackagesConfig,
  overwriteLerna,
} from "./lib/release.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "..");

const workspaceVersion = await getWorkspaceVersion();

overwriteLerna(linkedPackagesConfig);
const linked = (await getLernaList()).filter((pkg) => pkg.version === workspaceVersion && pkg.private === false);

overwriteLerna(independentPackagesConfig);
const unlinked = (await getLernaChanged()).filter((pkg) => pkg.private === false);

const relativeLocation = (pkg) => {
  return {
    ...pkg,
    location: relative(root, pkg.location),
  };
};
const list = [...linked, ...unlinked].map(relativeLocation);

/*
[
  {
    "name": "@aws-sdk/ec2-metadata-service",
    "version": "3.964.0",
    "private": false,
    "location": "packages/ec2-metadata-service"
  },
  {
    "name": "@aws-sdk/rds-signer",
    "version": "3.964.0",
    "private": false,
    "location": "packages/rds-signer"
  }
]
 */
console.log(JSON.stringify(list, null, 2));
