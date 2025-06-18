import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { checkDir } from "./biome.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const timings = {};
const formatTime = (ms) => {
  return `${(ms / 1000).toFixed(2)}s`;
};

timings.start = performance.now();
console.log("formatting and linting scripts/lib/packages");
await checkDir(join(__dirname, "..", "..", "scripts"), { lint: true });
await checkDir(join(__dirname, "..", "..", "lib"), { lint: true });
await checkDir(join(__dirname, "..", "..", "packages"), { lint: true });
timings.lintCore = performance.now();
console.log("\t", formatTime(timings.lintCore - timings.start));

console.log("linting sample clients (s3/dynamodb)");
await checkDir(join(__dirname, "..", "..", "clients", "client-s3"), { lint: true, codegen: true });
await checkDir(join(__dirname, "..", "..", "clients", "client-dynamodb"), { lint: true, codegen: true });
timings.lintSampleClients = performance.now();
console.log("\t", formatTime(timings.lintSampleClients - timings.lintCore));

console.log("formatting all clients");
await checkDir(join(__dirname, "..", "..", "clients"), { lint: false, codegen: true });
timings.formatClients = performance.now();
console.log("\t", formatTime(timings.formatClients - timings.lintSampleClients));

console.log("formatting all private packages");
await checkDir(join(__dirname, "..", "..", "private"), { lint: false, codegen: true });
timings.formatPrivate = performance.now();
console.log("\t", formatTime(timings.formatPrivate - timings.formatClients));
