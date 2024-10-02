import { dirname } from "path";
import { fileURLToPath } from "url";

export const getDirName = () => dirname(fileURLToPath(import.meta.url));
