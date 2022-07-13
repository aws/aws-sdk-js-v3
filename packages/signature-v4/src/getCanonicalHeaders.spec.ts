import { HttpRequest } from "@aws-sdk/protocol-http";
import { HeaderBag } from "@aws-sdk/types";

import { ALWAYS_UNSIGNABLE_HEADERS } from "./constants";
import { getCanonicalHeaders } from "./getCanonicalHeaders";

describe("getCanonicalHeaders", () => {
  it("should downcase all headers", () => {
    expect(
      getCanonicalHeaders(
        new HttpRequest({
          method: "POST",
          protocol: "https:",
          path: "/",
          headers: {
            fOo: "bar",
            BaZ: "QUUX",
            HoSt: "foo.us-east-1.amazonaws.com",
          },
          hostname: "foo.us-east-1.amazonaws.com",
        })
      )
    ).toEqual({
      foo: "bar",
      baz: "QUUX",
      host: "foo.us-east-1.amazonaws.com",
    });
  });

  it("should remove all unsignable headers", () => {
    const request = new HttpRequest({
      method: "POST",
      protocol: "https:",
      path: "/",
      headers: {
        "x-amz-user-agent": "aws-sdk-js-v3",
        host: "foo.us-east-1.amazonaws.com",
        foo: "bar",
      },
      hostname: "foo.us-east-1.amazonaws.com",
    });
    for (const headerName of Object.keys(ALWAYS_UNSIGNABLE_HEADERS)) {
      request.headers[headerName] = "baz";
    }

    expect(getCanonicalHeaders(request)).toEqual({
      "x-amz-user-agent": "aws-sdk-js-v3",
      host: "foo.us-east-1.amazonaws.com",
      foo: "bar",
    });
  });

  it("should ignore headers with undefined values", () => {
    const headers: HeaderBag = {
      "x-amz-user-agent": "aws-sdk-js-v3",
      host: "foo.us-east-1.amazonaws.com",
      ":authority": "",
    };

    const request = new HttpRequest({
      method: "POST",
      protocol: "https:",
      path: "/",
      headers: {
        ...headers,
        foo: undefined,
        bar: null,
      },
      hostname: "foo.us-east-1.amazonaws.com",
    });

    expect(getCanonicalHeaders(request)).toEqual(headers);
  });

  it("should allow specifying custom unsignable headers", () => {
    const request = new HttpRequest({
      method: "POST",
      protocol: "https:",
      path: "/",
      headers: {
        host: "foo.us-east-1.amazonaws.com",
        foo: "bar",
        "user-agent": "foo-user",
      },
      hostname: "foo.us-east-1.amazonaws.com",
    });

    expect(getCanonicalHeaders(request, new Set(["foo"]))).toEqual({
      host: "foo.us-east-1.amazonaws.com",
    });
  });

  it("should allow specifying custom signable headers that override unsignable ones", () => {
    const request = new HttpRequest({
      method: "POST",
      protocol: "https:",
      path: "/",
      headers: {
        host: "foo.us-east-1.amazonaws.com",
        foo: "bar",
        "user-agent": "foo-user",
      },
      hostname: "foo.us-east-1.amazonaws.com",
    });

    expect(getCanonicalHeaders(request, new Set(["foo"]), new Set(["foo", "user-agent"]))).toEqual({
      host: "foo.us-east-1.amazonaws.com",
      foo: "bar",
      "user-agent": "foo-user",
    });
  });
});
