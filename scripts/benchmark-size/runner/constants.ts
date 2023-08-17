import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dir = dirname(fileURLToPath(import.meta.url));
export const DEFAULT_TEST_SCOPE = join(dir, "..", "scope.json");
export const DEFAULT_BUNDLERS_CONFIG = join(dir, "..", "bundlers.json");
export const PROJECT_TEMPLATES_DIR = join(dir, "templates");
export const PROJECT_ROOT = join(dir, "..", "..", "..");
export const DEFAULT_RAW_OUTPUT_PATH = join(PROJECT_ROOT, "benchmark", "size", "raw");
export const DEFAULT_REPORT_PATH = join(PROJECT_ROOT, "benchmark", "size", "report.md");
export const DEFAULT_LIMIT_CONFIG_PATH = join(dir, "..", "limit.json");
export const PORT = 4873;
