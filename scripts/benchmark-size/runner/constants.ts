import { join } from "path";

export const DEFAULT_TEST_SCOPE = join(__dirname, "..", "scope.json");
export const DEFAULT_BUNDLERS_CONFIG = join(__dirname, "..", "bundlers.json");
export const PROJECT_TEMPLATES_DIR = join(__dirname, "templates");
export const PROJECT_ROOT = join(__dirname, "..", "..", "..");
export const DEFAULT_RAW_OUTPUT_PATH = join(PROJECT_ROOT, "benchmark", "size", "raw");
export const DEFAULT_REPORT_PATH = join(PROJECT_ROOT, "benchmark", "size", "report.md");
export const DEFAULT_LIMIT_CONFIG_PATH = join(__dirname, "..", "limit.json");
export const PORT = 4873;
