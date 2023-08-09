import { execa as exec } from "execa";
import { existsSync, promises as fsPromise } from "fs";

import { PROJECT_ROOT } from "./constants.js";

export const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve();
    }, ms);
  });

export const validateRuntime = async () => {
  try {
    await exec("yarn", ["--version"]);
  } catch (e) {
    console.error("yarn is not available, please install yarn globally");
    throw e;
  }
  try {
    await exec("yarn", ["--silent", "lerna", "--version"], {
      cwd: PROJECT_ROOT,
    });
  } catch (e) {
    console.error("lerna is not available in project root, please install lerna.");
    throw e;
  }
};

export const prettifySize = (size: number): string => {
  const units = ["", "KB", "MB"];
  const jump = 1024;
  let unitIndex = 0;
  while (size / jump > 1 && unitIndex < units.length - 1) {
    unitIndex++;
    size = size / jump;
  }
  return `${Math.round(size * 10) / 10} ${units[unitIndex]}`.trim();
};

export const readSize = (value: string | number): number => {
  if (typeof value === "number") {
    return value;
  }
  const digitsReg = /^[\d.]+/;
  const unitReg = /(kb|mb)$/;
  const multiplier = {
    kb: 1024,
    mb: 1024 * 1024,
  };
  let lowercaseValue = value.toLowerCase();
  const digits = lowercaseValue.match(digitsReg)?.[0];
  lowercaseValue = lowercaseValue.replace(digitsReg, "");
  const unit = lowercaseValue.match(unitReg)?.[0];
  lowercaseValue = lowercaseValue.replace(unitReg, "");
  if (digits === undefined || lowercaseValue.trim().length !== 0) {
    throw new Error(`Cannot parse the limit ${JSON.stringify(value)}, expect values like 10 KB, 100 MB`);
  }
  return parseFloat(digits) * (unit ? multiplier[unit] : 1);
};

export const isFile = async (path: string): Promise<boolean> =>
  existsSync(path) && (await fsPromise.lstat(path)).isFile();
