import { fileURLToPath } from "url";
import path from "node:path";
import fs from "node:fs";
import prettier from "prettier";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPORT_PATH = path.join(__dirname, "..", "..", "..", "benchmark", "size", "report-bundlers.md");

function byteSize(num) {
  if (num > 1024 ** 2) {
    return (num / 1024 ** 2).toFixed(3) + " mb";
  }
  if (num > 1024) {
    return (num / 1024).toFixed(1) + " kb";
  }
  return num + " b";
}

/**
 * @param {Array<{app: string, stats: Array<{bundler: string, bytes: number}>}>} appResults
 * @param {string} sdkVersion
 */
export async function generateBundleSizeReport(appResults, sdkVersion) {
  if (!fs.existsSync(path.dirname(REPORT_PATH))) return;
  const rows = appResults.map(({ app, stats }) => {
    const byBundler = Object.fromEntries(stats.map(({ bundler, bytes }) => [bundler, bytes]));
    return `|${app}|${sdkVersion}|${byteSize(byBundler.webpack)}|${byteSize(byBundler.rollup)}|${byteSize(byBundler.esbuild)}|`;
  });

  const markdown = `| Application | SDK Version | browser:Webpack | browser:Rollup | browser:EsBuild |
| :------ | :------ | :----------- | :------ | :----- | 
${rows.join("\n")}`;

  const formatted = await prettier.format(markdown, { filepath: REPORT_PATH });
  fs.writeFileSync(REPORT_PATH, formatted);
}
