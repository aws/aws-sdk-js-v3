import { Endpoint } from "@aws-sdk/types";

import { parseUrl } from ".";

describe("parseUrl", () => {
  const testCases = new Map<string, Endpoint>([
    [
      "https://www.example.com/path/to%20the/file.ext?snap=cr%C3%A4ckle&snap=p%C3%B4p&fizz=buzz&quux",
      {
        protocol: "https:",
        hostname: "www.example.com",
        path: "/path/to%20the/file.ext",
        query: {
          snap: ["cräckle", "pôp"],
          fizz: "buzz",
          quux: null,
        },
      },
    ],
    [
      "http://example.com:54321",
      {
        protocol: "http:",
        hostname: "example.com",
        port: 54321,
        path: "/",
      },
    ],
    [
      "https://example.com?foo=bar",
      {
        protocol: "https:",
        hostname: "example.com",
        path: "/",
        query: { foo: "bar" },
      },
    ],
  ]);

  const testFunc = typeof URL !== "undefined" ? it : xit;

  for (const [url, parsed] of testCases) {
    testFunc(`should correctly parse ${url}`, () => {
      expect(parseUrl(url)).toEqual(parsed);
    });
  }
});
