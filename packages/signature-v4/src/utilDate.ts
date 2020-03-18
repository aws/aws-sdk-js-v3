import { DateInput } from "@aws-sdk/types";

export function iso8601(date: Date): string {
  return date.toISOString().replace(/\.\d{3}Z$/, "Z");
}

export function toDate(time: DateInput): Date {
  if (typeof time === "number") {
    return new Date(time * 1000);
  }

  if (typeof time === "string") {
    if (Number(time)) {
      return new Date(Number(time) * 1000);
    }
    return new Date(time);
  }

  return time;
}
