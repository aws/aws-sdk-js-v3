import { join } from "path";
import { execSync } from "child_process";
import { getDirName } from "./getDirName.mjs";

const __dirname = getDirName();
const FEATURES_FOLDER = join(__dirname, "..", "..", "features");

const execOptions = {
  ...process,
  cwd: __dirname,
  encoding: "utf-8",
};

export const getAllTags = () =>
  execSync(`grep -h ^@ ${join(FEATURES_FOLDER, "**", "*.feature")}`, execOptions).split(/[\n ]/g);
