import { Sha256 } from "@aws-crypto/sha256-js";
import { AwsCredentialIdentity } from "@aws-sdk/types";
import { toHex } from "@aws-sdk/util-hex-encoding";

import { clearCredentialCache, createScope, getSigningKey } from "./credentialDerivation";

describe("createScope", () => {
  it("should create a scoped identifier for the credentials used", () => {
    expect(createScope("date", "region", "service")).toBe("date/region/service/aws4_request");
  });
});

describe("getSigningKey", () => {
  beforeEach(clearCredentialCache);

  const credentials: AwsCredentialIdentity = {
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
    it("should return the same signing key when called with the same date, region, service, and credentials", async () => {
      const mockSha256Constructor = jest.fn().mockImplementation((args) => {
        return new Sha256(args);
      });
      const key1 = await getSigningKey(mockSha256Constructor, credentials, shortDate, region, service);
      const key2 = await getSigningKey(mockSha256Constructor, credentials, shortDate, region, service);
      expect(key1).toBe(key2);
      expect(mockSha256Constructor).toHaveBeenCalledTimes(6);
    });

    it("should cache a maximum of 50 entries", async () => {
      const keys: Array<Uint8Array> = new Array(50);
      // fill the cache
      for (let i = 0; i < 50; i++) {
        keys[i] = await getSigningKey(Sha256, credentials, shortDate, `us-foo-${i.toString(10)}`, service);
      }

      // evict the oldest member from the cache
      await getSigningKey(Sha256, credentials, shortDate, `us-foo-50`, service);

      // the second oldest member should still be in cache
      await expect(getSigningKey(Sha256, credentials, shortDate, `us-foo-1`, service)).resolves.toStrictEqual(keys[1]);

      // the oldest member should not be in the cache
      await expect(getSigningKey(Sha256, credentials, shortDate, `us-foo-0`, service)).resolves.not.toBe(keys[0]);
    });
  });
});
