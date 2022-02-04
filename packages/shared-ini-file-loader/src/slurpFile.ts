// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises as fsPromises } from "fs";

const { readFile } = fsPromises;

export const slurpFile = async (path: string) => readFile(path, "utf8");
