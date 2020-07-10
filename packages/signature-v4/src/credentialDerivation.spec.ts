import { Sha256 } from "@aws-crypto/sha256-js";
import { Credentials } from "@aws-sdk/types";
import { toHex } from "@aws-sdk/util-hex-encoding";

import { clearCredentialCache, createScope, getSigningKey } from "./credentialDerivation";

describe("createScope", () => {
  it("should create a scoped identifier for the credentials used", () => {
    expect(createScope("date", "region", "service")).toBe("date/region/service/aws4_request");
  });
});

describe("getSigningKey", () => {
  beforeEach(clearCredentialCache);

  const credentials: Credentials = {
    accessKeyId: "foo",
    secretAccessKey: "bar",
  };
  const shortDate = "19700101";
  const region = "us-foo-1";
  const service = "bar";

  it(
    "should return a buffer containing a signing key derived from the" +
      " provided credentials, date, region, and service",
    () => {
      return expect(getSigningKey(Sha256, credentials, shortDate, region, service).then(toHex)).resolves.toBe(
        "b7c34d23320b5cd909500c889eac033a33c93f5a4bf67f71988a58f299e62e0a"
      );
    }
  );

  it("should trap errors encountered while hashing", () => {
    return expect(
      getSigningKey(
        jest.fn(() => {
          throw new Error("PANIC");
        }),
        credentials,
        shortDate,
        region,
        service
      )
    ).rejects.toMatchObject(new Error("PANIC"));
  });

  describe("caching", () => {
    it("should return the same promise when called with the same date, region, service, and credentials", () => {
      const promise1 = getSigningKey(Sha256, credentials, shortDate, region, service);
      const promise2 = getSigningKey(Sha256, credentials, shortDate, region, service);
      expect(promise1).toBe(promise2);
    });

    it("should cache a maximum of 50 entries", () => {
      const keyPromises: Array<Promise<Uint8Array>> = new Array(50);
      // fill the cache
      for (let i = 0; i < 50; i++) {
        keyPromises[i] = getSigningKey(Sha256, credentials, shortDate, `us-foo-${i.toString(10)}`, service);
      }

      // evict the oldest member from the cache
      getSigningKey(Sha256, credentials, shortDate, `us-foo-50`, service);

      // the second oldest member should still be in cache
      expect(keyPromises[1]).toBe(getSigningKey(Sha256, credentials, shortDate, `us-foo-1`, service));

      // the oldest member should not be in the cache
      expect(keyPromises[0]).not.toBe(getSigningKey(Sha256, credentials, shortDate, `us-foo-0`, service));
    });
  });
});
