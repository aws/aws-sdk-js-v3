import { fileURLToPath } from "url";
import path from "node:path";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const lerna = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "..", "lerna.json"), "utf-8"));

/**
 * Converts stat objects from {BundlerSizeBenchmarker} to markdown report.
 */
export class ReportMarkdown {
  constructor() {
    this.rows = [];
  }

  push(stat) {
    this.rows.push(stat);
  }

  toMarkdown() {
    return `| Application | SDK Version | browser:Webpack | browser:Rollup | browser:EsBuild |
| :------ | :------ | :----------- | :------ | :----- | 
${this.rows
  .map((row) => {
    const { app, webpack, rollup, esbuild } = row;
    return `|${app}|${lerna.version}|${webpack}|${rollup}|${esbuild}|`;
  })
  .join("\n")}`;
  }
}
