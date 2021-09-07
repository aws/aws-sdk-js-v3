import { parseEpochTimestamp, parseRfc3339DateTime, parseRfc7231DateTime } from "./date-utils";

describe("parseRfc3339DateTime", () => {
  it.each([null, undefined])("returns undefined for %s", (value) => {
    expect(parseRfc3339DateTime(value)).toBeUndefined();
  });

  describe("parses properly formatted dates", () => {
    it("with fractional seconds", () => {
      expect(parseRfc3339DateTime("1985-04-12T23:20:50.52Z")).toEqual(new Date(Date.UTC(1985, 3, 12, 23, 20, 50, 520)));
    });
    it("without fractional seconds", () => {
      expect(parseRfc3339DateTime("1985-04-12T23:20:50Z")).toEqual(new Date(Date.UTC(1985, 3, 12, 23, 20, 50, 0)));
    });
    it("with leap seconds", () => {
      expect(parseRfc3339DateTime("1990-12-31T15:59:60Z")).toEqual(new Date(Date.UTC(1990, 11, 31, 15, 59, 60, 0)));
    });
    it("with leap days", () => {
      expect(parseRfc3339DateTime("2004-02-29T15:59:59Z")).toEqual(new Date(Date.UTC(2004, 1, 29, 15, 59, 59, 0)));
    });
    it("with leading zeroes", () => {
      expect(parseRfc3339DateTime("0004-02-09T05:09:09.09Z")).toEqual(new Date(Date.UTC(4, 1, 9, 5, 9, 9, 90)));
      expect(parseRfc3339DateTime("0004-02-09T00:00:00.00Z")).toEqual(new Date(Date.UTC(4, 1, 9, 0, 0, 0, 0)));
    });
  });

  it.each([
    "85-04-12T23:20:50.52Z",
    "985-04-12T23:20:50.52Z",
    "1985-13-12T23:20:50.52Z",
    "1985-00-12T23:20:50.52Z",
    "1985-4-12T23:20:50.52Z",
    "1985-04-32T23:20:50.52Z",
    "1985-04-00T23:20:50.52Z",
    "1985-04-05T24:20:50.52Z",
    "1985-04-05T23:61:50.52Z",
    "1985-04-05T23:20:61.52Z",
    "1985-04-31T23:20:50.52Z",
    "2005-02-29T15:59:59Z",
    "Mon, 31 Dec 1990 15:59:60 GMT",
    "Monday, 31-Dec-90 15:59:60 GMT",
    "Mon Dec 31 15:59:60 1990",
    "1985-04-12T23:20:50.52Z1985-04-12T23:20:50.52Z",
    "1985-04-12T23:20:50.52ZA",
    "A1985-04-12T23:20:50.52Z",
  ])("rejects %s", (value) => {
    expect(() => parseRfc3339DateTime(value)).toThrowError();
  });
});

describe("parseRfc7231DateTime", () => {
  it.each([null, undefined])("returns undefined for %s", (value) => {
    expect(parseRfc7231DateTime(value)).toBeUndefined();
  });

  describe("parses properly formatted dates", () => {
    describe("with fractional seconds", () => {
      it.each([
        ["imf-fixdate", "Sun, 06 Nov 1994 08:49:37.52 GMT"],
        ["rfc-850", "Sunday, 06-Nov-94 08:49:37.52 GMT"],
        ["asctime", "Sun Nov  6 08:49:37.52 1994"],
      ])("in format %s", (_, value) => {
        expect(parseRfc7231DateTime(value)).toEqual(new Date(Date.UTC(1994, 10, 6, 8, 49, 37, 520)));
      });
    });
    describe("without fractional seconds", () => {
      it.each([
        ["imf-fixdate", "Sun, 06 Nov 1994 08:49:37 GMT"],
        ["rfc-850", "Sunday, 06-Nov-94 08:49:37 GMT"],
        ["asctime", "Sun Nov  6 08:49:37 1994"],
      ])("in format %s", (_, value) => {
        expect(parseRfc7231DateTime(value)).toEqual(new Date(Date.UTC(1994, 10, 6, 8, 49, 37, 0)));
      });
    });
    describe("with leap seconds", () => {
      it.each([
        ["imf-fixdate", "Mon, 31 Dec 1990 15:59:60 GMT"],
        ["rfc-850", "Monday, 31-Dec-90 15:59:60 GMT"],
        ["asctime", "Mon Dec 31 15:59:60 1990"],
      ])("in format %s", (_, value) => {
        expect(parseRfc7231DateTime(value)).toEqual(new Date(Date.UTC(1990, 11, 31, 15, 59, 60, 0)));
      });
    });
    describe("with leap days", () => {
      it.each([
        ["imf-fixdate", "Sun, 29 Feb 2004 15:59:59 GMT"],
        ["rfc-850", "Sunday, 29-Feb-04 15:59:59 GMT"],
        ["asctime", "Sun Feb 29 15:59:59 2004"],
      ])("in format %s", (_, value) => {
        expect(parseRfc7231DateTime(value)).toEqual(new Date(Date.UTC(2004, 1, 29, 15, 59, 59, 0)));
      });
    });
    describe("with leading zeroes", () => {
      it.each([
        ["imf-fixdate", "Sun, 06 Nov 0004 08:09:07.02 GMT", 4],
        ["rfc-850", "Sunday, 06-Nov-04 08:09:07.02 GMT", 2004],
        ["asctime", "Sun Nov  6 08:09:07.02 0004", 4],
      ])("in format %s", (_, value, year) => {
        expect(parseRfc7231DateTime(value)).toEqual(new Date(Date.UTC(year, 10, 6, 8, 9, 7, 20)));
      });
    });
    describe("with all-zero components", () => {
      it.each([
        ["imf-fixdate", "Sun, 06 Nov 0004 00:00:00.00 GMT", 4],
        ["rfc-850", "Sunday, 06-Nov-04 00:00:00.00 GMT", 2004],
        ["asctime", "Sun Nov  6 00:00:00.00 0004", 4],
      ])("in format %s", (_, value, year) => {
        expect(parseRfc7231DateTime(value)).toEqual(new Date(Date.UTC(year, 10, 6, 0, 0, 0, 0)));
      });
    });
  });

  describe("when parsing rfc-850 dates", () => {
    it("properly adjusts 2-digit years", () => {
      // These tests will fail in a couple of decades. Good luck future developers.
      expect(parseRfc7231DateTime("Friday, 31-Dec-99 12:34:56.789 GMT")).toEqual(
        new Date(Date.UTC(1999, 11, 31, 12, 34, 56, 789))
      );
      expect(parseRfc7231DateTime("Thursday, 31-Dec-65 12:34:56.789 GMT")).toEqual(
        new Date(Date.UTC(2065, 11, 31, 12, 34, 56, 789))
      );
    });
  });

  it.each([
    "1985-04-12T23:20:50.52Z",
    "1985-04-12T23:20:50Z",

    "Sun, 06 Nov 0004 08:09:07.02 GMTSun, 06 Nov 0004 08:09:07.02 GMT",
    "Sun, 06 Nov 0004 08:09:07.02 GMTA",
    "ASun, 06 Nov 0004 08:09:07.02 GMT",
    "Sun, 06 Nov 94 08:49:37 GMT",
    "Sun, 06 Dov 1994 08:49:37 GMT",
    "Mun, 06 Nov 1994 08:49:37 GMT",
    "Sunday, 06 Nov 1994 08:49:37 GMT",
    "Sun, 06 November 1994 08:49:37 GMT",
    "Sun, 06 Nov 1994 24:49:37 GMT",
    "Sun, 06 Nov 1994 08:69:37 GMT",
    "Sun, 06 Nov 1994 08:49:67 GMT",
    "Sun, 06-11-1994 08:49:37 GMT",
    "Sun, 06 11 1994 08:49:37 GMT",
    "Sun, 31 Nov 1994 08:49:37 GMT",
    "Sun, 29 Feb 2005 15:59:59 GMT",

    "Sunday, 06-Nov-04 08:09:07.02 GMTSunday, 06-Nov-04 08:09:07.02 GMT",
    "ASunday, 06-Nov-04 08:09:07.02 GMT",
    "Sunday, 06-Nov-04 08:09:07.02 GMTA",
    "Sunday, 06-Nov-1994 08:49:37 GMT",
    "Sunday, 06-Dov-94 08:49:37 GMT",
    "Sundae, 06-Nov-94 08:49:37 GMT",
    "Sun, 06-Nov-94 08:49:37 GMT",
    "Sunday, 06-November-94 08:49:37 GMT",
    "Sunday, 06-Nov-94 24:49:37 GMT",
    "Sunday, 06-Nov-94 08:69:37 GMT",
    "Sunday, 06-Nov-94 08:49:67 GMT",
    "Sunday, 06 11 94 08:49:37 GMT",
    "Sunday, 06-11-1994 08:49:37 GMT",
    "Sunday, 31-Nov-94 08:49:37 GMT",
    "Sunday, 29-Feb-05 15:59:59 GMT",

    "Sun Nov  6 08:09:07.02 0004Sun Nov  6 08:09:07.02 0004",
    "ASun Nov  6 08:09:07.02 0004",
    "Sun Nov  6 08:09:07.02 0004A",
    "Sun Nov  6 08:49:37 94",
    "Sun Dov  6 08:49:37 1994",
    "Mun Nov  6 08:49:37 1994",
    "Sunday Nov  6 08:49:37 1994",
    "Sun November  6 08:49:37 1994",
    "Sun Nov  6 24:49:37 1994",
    "Sun Nov  6 08:69:37 1994",
    "Sun Nov  6 08:49:67 1994",
    "Sun 06-11 08:49:37 1994",
    "Sun 06 11 08:49:37 1994",
    "Sun 11  6 08:49:37 1994",
    "Sun Nov 31 08:49:37 1994",
    "Sun Feb 29 15:59:59 2005",
    "Sun Nov 6 08:49:37 1994",
  ])("rejects %s", (value) => {
    expect(() => parseRfc7231DateTime(value)).toThrowError();
  });
});

describe("parseEpochTimestamp", () => {
  it.each([null, undefined])("returns undefined for %s", (value) => {
    expect(parseEpochTimestamp(value)).toBeUndefined();
  });

  describe("parses properly formatted dates", () => {
    describe("with fractional seconds", () => {
      it.each(["482196050.52", 482196050.52])("parses %s", (value) => {
        expect(parseEpochTimestamp(value)).toEqual(new Date(Date.UTC(1985, 3, 12, 23, 20, 50, 520)));
      });
    });
    describe("without fractional seconds", () => {
      it.each(["482196050", 482196050, 482196050.0])("parses %s", (value) => {
        expect(parseEpochTimestamp(value)).toEqual(new Date(Date.UTC(1985, 3, 12, 23, 20, 50, 0)));
      });
    });
  });
  it.each([
    "1985-04-12T23:20:50.52Z",
    "1985-04-12T23:20:50Z",
    "Mon, 31 Dec 1990 15:59:60 GMT",
    "Monday, 31-Dec-90 15:59:60 GMT",
    "Mon Dec 31 15:59:60 1990",
    "NaN",
    NaN,
    "Infinity",
    Infinity,
    "0x42",
  ])("rejects %s", (value) => {
    expect(() => parseEpochTimestamp(value)).toThrowError();
  });
});
