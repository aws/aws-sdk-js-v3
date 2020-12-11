import { Endpoint } from "@aws-sdk/types";

import { parseUrl } from "./";

describe("parseUrl", () => {
  describe("should correctly parse string", () => {
    const successCases: [string, Endpoint][] = [
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
    ];

    successCases.forEach(([url, parsed]) => {
      it(url, () => {
        expect(parseUrl(url)).toEqual(parsed);
      });
    });
  });

  describe("should throw error", () => {
    const failureCases: [string, Error][] = [
      ["example.com", new TypeError("Invalid URL: example.com")],
      ["endpoint", new TypeError("Invalid URL: endpoint")],
    ];

    failureCases.forEach(([url, error]) => {
      it(url, () => {
        expect(() => {
          const output = parseUrl(url);
          console.log(output);
        }).toThrow(error);
      });
    });
  });
});
