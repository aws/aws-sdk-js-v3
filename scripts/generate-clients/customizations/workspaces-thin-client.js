const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..", "..");

const indexTs = path.join(root, "clients", "client-workspaces-thin-client", "src", "index.ts");

/**
 * Exports aliases from the index of WorkSpacesThinClient.
 */
module.exports = function () {
  const indexContents = fs.readFileSync(indexTs, "utf-8");
  if (!indexContents.includes(`backwards compatible aliases`))
    fs.writeFileSync(
      indexTs,
      indexContents +
        `
import { WorkSpacesThinClient } from "./WorkSpacesThinClient";

/**
 * @deprecated use {WorkSpacesThinClient} (renamed) instead.
 * The aggregated client is called WorkSpacesThinClient,
 * and the barebones client is called WorkSpacesThinClientClient.
 *
 * Due to some code generation issues with the word "Client" in the service name,
 * we are maintaining a few backwards compatible aliases here.
 */
export const WorkSpacesThin = WorkSpacesThinClient;

export type { WorkSpacesThinClientPaginationConfiguration as WorkSpacesThinPaginationConfiguration } from "./pagination/Interfaces";
`
    );
};
