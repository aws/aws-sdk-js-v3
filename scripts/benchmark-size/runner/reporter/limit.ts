import { readFileSync } from "fs";

import { readSize } from "../utils.js";

const validatingKeys = ["publishSize", "publishFiles"];
type ValidatingKeys = "publishSize" | "publishFiles";
interface Limit {
  limit?: number;
  hike?: number;
}

type PackageLimit = {
  [limit in ValidatingKeys]?: Limit;
};

type PackageSizeReportLine = {
  [key in ValidatingKeys]?: string | number;
} & {
  package: string;
};

type LimitConfig = {
  default: PackageLimit;
  [pkg: string]: PackageLimit;
};

export class LimitValidator {
  private readonly config: LimitConfig;
  constructor(options: { limitConfigPath: string }) {
    const raw = JSON.parse(readFileSync(options.limitConfigPath, { encoding: "utf8" }));
    this.config = { default: this.parsePackageLimit((raw as any)?.default) };
    Object.entries(raw).forEach(([key, value]) => {
      this.config[key] = this.parsePackageLimit(value);
    });
  }

  public validate(oldValue: PackageSizeReportLine, newValue: PackageSizeReportLine): void {
    const packageName = oldValue.package;
    const resolvedPackageLimit: PackageLimit = { ...this.config.default, ...this.config[packageName] };
    for (const limitKey of Object.keys(resolvedPackageLimit) as ValidatingKeys[]) {
      const oldReportValue = readSize(oldValue[limitKey]);
      const newReportValue = readSize(newValue[limitKey]);
      const limitRule = resolvedPackageLimit[limitKey];
      if (limitRule.limit && newReportValue > limitRule.limit) {
        throw new Error(
          `${packageName} package ${limitKey} is ${newReportValue}, exceeds the limit of ${limitRule.limit}`
        );
      }
      if (limitRule.hike && newReportValue > (limitRule.hike + 1) * oldReportValue) {
        throw new Error(
          `${packageName} package ${limitKey} is ${newReportValue}, increases by more than ${Math.round(
            limitRule.hike * 100
          )}%`
        );
      }
    }
  }

  private parsePackageLimit(value: unknown): PackageLimit {
    if (typeof value !== "object") {
      throw new Error(
        `Cannot parse the package limit ${value}. expect object with optional keys from ${validatingKeys}`
      );
    }
    const packageLimit: PackageLimit = {};
    for (const key of validatingKeys) {
      if ((value as any)?.[key]) {
        packageLimit[key] = this.parseLimit((value as any)?.[key]);
      }
    }
    return packageLimit;
  }

  private parseLimit(value: unknown): Limit {
    if (typeof value !== "object") {
      throw new Error(`Cannot parse the limit ${value}. expect object with optional keys: limit, hike`);
    }
    const result: Limit = {};
    // parse limit value
    if ((value as any)?.limit) {
      const limit = (value as any)?.limit;
      if (typeof limit !== "string") {
        throw new Error(`Cannot parse the limit ${limit}, expect string`);
      }
      result.limit = readSize(limit);
    }
    // parse hike
    if ((value as any)?.hike) {
      const hike = (value as any)?.hike;
      if (typeof hike !== "string") {
        throw new Error(`Cannot parse the hike ${hike}, expect string like "3 %"`);
      }
      const digitsReg = /^[\d]+/;
      const hikeDigits = parseInt(hike.match(digitsReg)?.[0]);
      if (hikeDigits === undefined || hike.replace(digitsReg, "").trim() !== "%") {
        throw new Error(`Cannot parse the hike ${hike}, expect string like "3 %"`);
      }
      result.hike = hikeDigits / 100;
    }
    return result;
  }
}
