import esbuild from "esbuild";
import { existsSync, lstatSync, readFileSync, writeFileSync } from "fs";
import { ensureFileSync } from "fs-extra";
import * as rollup from "rollup";
import webpack from "webpack";

import { PackageSizeReportOutput } from "../calculate-size";
import { prettifySize } from "../utils.js";
import { LimitValidator } from "./limit.js";

const HEADER = `| Package | Version | Publish Size | browser:Webpack | browser:Rollup | browser:EsBuild |
| :------ | :------ | :----------- | :------ | :----- | :------- |`;

export type Column =
  | "package"
  | "version"
  | "publishSize"
  | "webpackCompatibility"
  | "rollupCompatibility"
  | "esbuildCompatibility";

export const columns: Column[] = [
  "package",
  "version",
  "publishSize",
  "webpackCompatibility",
  "rollupCompatibility",
  "esbuildCompatibility",
];

type ReportLine = { [key in Column]: any };

type Report = ReportLine[];

export const validateOutputPath = () => {};

const readReport = (path: string): Report => {
  if (!existsSync(path) || !lstatSync(path).isFile()) {
    ensureFileSync(path);
  }
  const content = readFileSync(path, { encoding: "utf8" });
  const lines = content.trim().split("\n");
  const headers = [lines[0], lines[1]].join("\n");
  if (headers !== HEADER && content?.length !== 0) {
    // Header is not the same and report file is not empty
    throw new Error(`Invalid report table headers. Expected ${HEADER}`);
  }

  return lines.slice(2).map((line) => {
    let records = line
      .trim()
      .split("|")
      .map((record) => record.trim());
    // remove the first of last `|` in each table line
    records = records.slice(1, records.length - 1);
    if (records.length !== columns.length) {
      throw new Error("Cannot parse existing report, column mismatches");
    }
    return records.reduce((acc, record, i) => {
      acc[columns[i]] = record;
      return acc;
    }, {} as ReportLine);
  });
};

const writeReport = (path: string, report: Report): void => {
  const body = report
    .sort((lineA, lineB) => (lineA.package as string).localeCompare(lineB.package))
    .map((line) => {
      const records = [];
      for (const column of columns) {
        records.push(line[column]);
      }
      return `|${records.join("|")}|`;
    })
    .map((line) => line + "\n")
    .join("");
  writeFileSync(path, `${HEADER}\n${body}`);
};

const populateLineContent = (
  report: PackageSizeReportOutput,
  options: {
    webpackVersion: string;
    esbuildVersion: string;
    rollupVersion: string;
  }
): ReportLine => ({
  package: report.name,
  version: report.version,
  publishSize: prettifySize(report.publishSize),
  webpackCompatibility: `${report.webpackSize ? `✅(${options.webpackVersion})` : "N/A"}`,
  rollupCompatibility: `${report.rollupSize ? `✅(${options.rollupVersion})` : "N/A"}`,
  esbuildCompatibility: `${report.esbuildSize ? `✅(${options.esbuildVersion})` : "N/A"}`,
});

export const updateReport = (
  output: PackageSizeReportOutput[],
  options: {
    reportPath: string;
    limitConfigPath: string;
  }
): void => {
  console.info(`Updating ${output.length} rows in the report ${options.reportPath}`);
  const validator = new LimitValidator(options);
  const report = readReport(options.reportPath);
  const { version: esbuildVersion } = esbuild;
  const { version: webpackVersion } = webpack;
  const { VERSION: rollupVersion } = rollup;
  const newLines = output.map((line) =>
    populateLineContent(line, {
      esbuildVersion,
      webpackVersion,
      rollupVersion,
    })
  );
  const newReportedPackages = newLines.map((line) => line.package);
  const existingReportLines = report.filter((line) => !newReportedPackages.includes(line.package));
  const newReport: Report = [...existingReportLines, ...newLines];
  writeReport(options.reportPath, newReport);

  console.info("Report is updated, validating the new result with the limit configurations.");
  const errorMessages = [];
  for (const newReportLine of newLines) {
    const existingReportLine = report.find((oldLine) => oldLine.package === newReportLine.package);
    // There won't be existing report line for new results
    try {
      if (existingReportLine) {
        validator.validate(existingReportLine, newReportLine);
      }
    } catch (e) {
      errorMessages.push(e?.message);
    }
  }
  if (errorMessages.length > 0) {
    throw new Error(`Limit validation has failed: \n${errorMessages.join("\n")}`);
  }
};
