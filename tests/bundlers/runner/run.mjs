import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import prettier from "prettier";

import { ReportMarkdown } from "./ReportMarkdown.mjs";
import { BundlerSizeBenchmarker } from "./BundlerSizeBenchmarker.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const applicationFolder = path.join(__dirname, "..", "applications");
const report = new ReportMarkdown();

for (const app of fs.readdirSync(applicationFolder)) {
  const benchmarker = new BundlerSizeBenchmarker({ application: app });

  const stat = await benchmarker.all();
  console.log(stat);
  report.push(stat);
}

const reportMd = path.join(__dirname, "..", "..", "..", "benchmark", "bundlers", "report.md");

const formatted = prettier.format(report.toMarkdown(), {
  filepath: reportMd,
});

fs.writeFileSync(reportMd, formatted);
