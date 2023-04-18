import { strictParseByte, strictParseDouble, strictParseFloat32, strictParseShort } from "./parse-utils";

// Build indexes outside so we allocate them once.
const DAYS: Array<String> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// These must be kept in order
// prettier-ignore
const MONTHS: Array<String> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * @internal
 *
 * Builds a proper UTC HttpDate timestamp from a Date object
 * since not all environments will have this as the expected
 * format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString}
 * - Prior to ECMAScript 2018, the format of the return value
 * - varied according to the platform. The most common return
 * - value was an RFC-1123 formatted date stamp, which is a
 * - slightly updated version of RFC-822 date stamps.
 */
export function dateToUtcString(date: Date): string {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const dayOfWeek = date.getUTCDay();
  const dayOfMonthInt = date.getUTCDate();
  const hoursInt = date.getUTCHours();
  const minutesInt = date.getUTCMinutes();
  const secondsInt = date.getUTCSeconds();

  // Build 0 prefixed strings for contents that need to be
  // two digits and where we get an integer back.
  const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
  const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
  const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
  const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;

  return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}

const RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);

/**
 * @internal
 *
 * Parses a value into a Date. Returns undefined if the input is null or
 * undefined, throws an error if the input is not a string that can be parsed
 * as an RFC 3339 date.
 *
 * Input strings must conform to RFC3339 section 5.6, and cannot have a UTC
 * offset. Fractional precision is supported.
 *
 * @see {@link https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14}
 *
 * @param value - the value to parse
 * @returns a Date or undefined
 */
export const parseRfc3339DateTime = (value: unknown): Date | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-3339 date-times must be expressed as strings");
  }
  const match = RFC3339.exec(value);
  if (!match) {
    throw new TypeError("Invalid RFC-3339 date-time value");
  }

  const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;

  const year = strictParseShort(stripLeadingZeroes(yearStr))!;
  const month = parseDateValue(monthStr, "month", 1, 12);
  const day = parseDateValue(dayStr, "day", 1, 31);

  return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
};

const RFC3339_WITH_OFFSET = new RegExp(
  /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/
);

/**
 * @internal
 *
 * Parses a value into a Date. Returns undefined if the input is null or
 * undefined, throws an error if the input is not a string that can be parsed
 * as an RFC 3339 date.
 *
 * Input strings must conform to RFC3339 section 5.6, and can have a UTC
 * offset. Fractional precision is supported.
 *
 * @see {@link https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14}
 *
 * @param value - the value to parse
 * @returns a Date or undefined
 */
export const parseRfc3339DateTimeWithOffset = (value: unknown): Date | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-3339 date-times must be expressed as strings");
  }
  const match = RFC3339_WITH_OFFSET.exec(value);
  if (!match) {
    throw new TypeError("Invalid RFC-3339 date-time value");
  }

  const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;

  const year = strictParseShort(stripLeadingZeroes(yearStr))!;
  const month = parseDateValue(monthStr, "month", 1, 12);
  const day = parseDateValue(dayStr, "day", 1, 31);
  const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });

  // The final regex capture group is either an offset, or "z". If it is not a "z",
  // attempt to parse the offset and adjust the date.
  if (offsetStr.toUpperCase() != "Z") {
    date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
  }
  return date;
};

const IMF_FIXDATE = new RegExp(
  /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
);
const RFC_850_DATE = new RegExp(
  /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
);
const ASC_TIME = new RegExp(
  /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/
);

/**
 * @internal
 *
 * Parses a value into a Date. Returns undefined if the input is null or
 * undefined, throws an error if the input is not a string that can be parsed
 * as an RFC 7231 IMF-fixdate or obs-date.
 *
 * Input strings must conform to RFC7231 section 7.1.1.1. Fractional seconds are supported.
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7231.html#section-7.1.1.1}
 *
 * @param value - the value to parse
 * @returns a Date or undefined
 */
export const parseRfc7231DateTime = (value: unknown): Date | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-7231 date-times must be expressed as strings");
  }

  let match = IMF_FIXDATE.exec(value);
  if (match) {
    const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    return buildDate(
      strictParseShort(stripLeadingZeroes(yearStr))!,
      parseMonthByShortName(monthStr),
      parseDateValue(dayStr, "day", 1, 31),
      { hours, minutes, seconds, fractionalMilliseconds }
    );
  }

  match = RFC_850_DATE.exec(value);
  if (match) {
    const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    // RFC 850 dates use 2-digit years. So we parse the year specifically,
    // and then once we've constructed the entire date, we adjust it if the resultant date
    // is too far in the future.
    return adjustRfc850Year(
      buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
        hours,
        minutes,
        seconds,
        fractionalMilliseconds,
      })
    );
  }

  match = ASC_TIME.exec(value);
  if (match) {
    const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
    return buildDate(
      strictParseShort(stripLeadingZeroes(yearStr))!,
      parseMonthByShortName(monthStr),
      parseDateValue(dayStr.trimLeft(), "day", 1, 31),
      { hours, minutes, seconds, fractionalMilliseconds }
    );
  }

  throw new TypeError("Invalid RFC-7231 date-time value");
};

/**
 * @internal
 *
 * Parses a value into a Date. Returns undefined if the input is null or
 * undefined, throws an error if the input is not a number or a parseable string.
 *
 * Input strings must be an integer or floating point number. Fractional seconds are supported.
 *
 * @param value - the value to parse
 * @returns a Date or undefined
 */
export const parseEpochTimestamp = (value: unknown): Date | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }

  let valueAsDouble: number;
  if (typeof value === "number") {
    valueAsDouble = value;
  } else if (typeof value === "string") {
    valueAsDouble = strictParseDouble(value)!;
  } else {
    throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
  }

  if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
    throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
  }
  return new Date(Math.round(valueAsDouble * 1000));
};

interface RawTime {
  hours: string;
  minutes: string;
  seconds: string;
  fractionalMilliseconds: string | undefined;
}

/**
 * Build a date from a numeric year, month, date, and an match with named groups
 * "H", "m", s", and "frac", representing hours, minutes, seconds, and optional fractional seconds.
 * @param year - numeric year
 * @param month - numeric month, 1-indexed
 * @param day - numeric year
 * @param match - match with groups "H", "m", s", and "frac"
 */
const buildDate = (year: number, month: number, day: number, time: RawTime): Date => {
  const adjustedMonth = month - 1; // JavaScript, and our internal data structures, expect 0-indexed months
  validateDayOfMonth(year, adjustedMonth, day);
  // Adjust month down by 1
  return new Date(
    Date.UTC(
      year,
      adjustedMonth,
      day,
      parseDateValue(time.hours, "hour", 0, 23),
      parseDateValue(time.minutes, "minute", 0, 59),
      // seconds can go up to 60 for leap seconds
      parseDateValue(time.seconds, "seconds", 0, 60),
      parseMilliseconds(time.fractionalMilliseconds)
    )
  );
};

/**
 * RFC 850 dates use a 2-digit year; start with the assumption that if it doesn't
 * match the current year, then it's a date in the future, then let adjustRfc850Year adjust
 * the final date back to the past if it's too far in the future.
 *
 * Example: in 2021, start with the assumption that '11' is '2111', and that '22' is '2022'.
 * adjustRfc850Year will adjust '11' to 2011, (as 2111 is more than 50 years in the future),
 * but keep '22' as 2022. in 2099, '11' will represent '2111', but '98' should be '2098'.
 * There's no description of an RFC 850 date being considered too far in the past in RFC-7231,
 * so it's entirely possible that 2011 is a valid interpretation of '11' in 2099.
 * @param value - the 2 digit year to parse
 * @returns number a year that is equal to or greater than the current UTC year
 */
const parseTwoDigitYear = (value: string): number => {
  const thisYear = new Date().getUTCFullYear();
  const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value))!;
  if (valueInThisCentury < thisYear) {
    // This may end up returning a year that adjustRfc850Year turns back by 100.
    // That's fine! We don't know the other components of the date yet, so there are
    // boundary conditions that only adjustRfc850Year can handle.
    return valueInThisCentury + 100;
  }
  return valueInThisCentury;
};

const FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1000;

/**
 * Adjusts the year value found in RFC 850 dates according to the rules
 * expressed in RFC7231, which state:
 *
 * <blockquote>Recipients of a timestamp value in rfc850-date format, which uses a
 * two-digit year, MUST interpret a timestamp that appears to be more
 * than 50 years in the future as representing the most recent year in
 * the past that had the same last two digits.</blockquote>
 *
 * @param input - a Date that assumes the two-digit year was in the future
 * @returns a Date that is in the past if input is \> 50 years in the future
 */
const adjustRfc850Year = (input: Date): Date => {
  if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
    return new Date(
      Date.UTC(
        input.getUTCFullYear() - 100,
        input.getUTCMonth(),
        input.getUTCDate(),
        input.getUTCHours(),
        input.getUTCMinutes(),
        input.getUTCSeconds(),
        input.getUTCMilliseconds()
      )
    );
  }
  return input;
};

const parseMonthByShortName = (value: string): number => {
  const monthIdx = MONTHS.indexOf(value);
  if (monthIdx < 0) {
    throw new TypeError(`Invalid month: ${value}`);
  }
  return monthIdx + 1;
};

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * Validate the day is valid for the given month.
 * @param year - the year
 * @param month - the month (0-indexed)
 * @param day - the day of the month
 */
const validateDayOfMonth = (year: number, month: number, day: number) => {
  let maxDays = DAYS_IN_MONTH[month];
  if (month === 1 && isLeapYear(year)) {
    maxDays = 29;
  }

  if (day > maxDays) {
    throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
  }
};

const isLeapYear = (year: number): boolean => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const parseDateValue = (value: string, type: string, lower: number, upper: number): number => {
  const dateVal = strictParseByte(stripLeadingZeroes(value))!;
  if (dateVal < lower || dateVal > upper) {
    throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
  }
  return dateVal;
};

const parseMilliseconds = (value: string | undefined): number => {
  if (value === null || value === undefined) {
    return 0;
  }

  return strictParseFloat32("0." + value)! * 1000;
};

// Parses offset string and returns offset in milliseconds.
const parseOffsetToMilliseconds = (value: string): number => {
  const directionStr = value[0];
  let direction = 1;
  if (directionStr == "+") {
    direction = 1;
  } else if (directionStr == "-") {
    direction = -1;
  } else {
    throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
  }

  const hour = Number(value.substring(1, 3));
  const minute = Number(value.substring(4, 6));
  return direction * (hour * 60 + minute) * 60 * 1000;
};

const stripLeadingZeroes = (value: string): string => {
  let idx = 0;
  while (idx < value.length - 1 && value.charAt(idx) === "0") {
    idx++;
  }
  if (idx === 0) {
    return value;
  }
  return value.slice(idx);
};
