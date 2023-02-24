import { isIpAddress } from "../isIpAddress";
import { isValidHostLabel } from "../isValidHostLabel";
import { isVirtualHostableS3Bucket } from "./isVirtualHostableS3Bucket";

jest.mock("../isIpAddress");
jest.mock("../isValidHostLabel");

describe(isVirtualHostableS3Bucket.name, () => {
  const mockValue = "mockvalue";

  beforeEach(() => {
    (isIpAddress as jest.Mock).mockReturnValue(false);
    (isValidHostLabel as jest.Mock).mockReturnValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns false if value is not a valid host label", () => {
    (isValidHostLabel as jest.Mock).mockReturnValue(false);
    expect(isVirtualHostableS3Bucket(mockValue)).toBe(false);
    expect(isValidHostLabel).toHaveBeenCalledWith(mockValue);
    expect(isIpAddress).not.toHaveBeenCalled();
  });

  it("returns false if value is less than 3 characters", () => {
    const valueWithTwoChars = "ab";
    expect(isVirtualHostableS3Bucket(valueWithTwoChars)).toBe(false);
    expect(isValidHostLabel).toHaveBeenCalledWith(valueWithTwoChars);
    expect(isIpAddress).not.toHaveBeenCalled();
  });

  it("returns false if value is greater than 63 characters", () => {
    const valueWith64Chars = "a".repeat(64);
    expect(isVirtualHostableS3Bucket(valueWith64Chars)).toBe(false);
    expect(isValidHostLabel).toHaveBeenCalledWith(valueWith64Chars);
    expect(isIpAddress).not.toHaveBeenCalled();
  });

  it("returns false if value contains upper case characters", () => {
    const valueWithUpperCaseChars = "aBc";
    expect(isVirtualHostableS3Bucket(valueWithUpperCaseChars)).toBe(false);
    expect(isValidHostLabel).toHaveBeenCalledWith(valueWithUpperCaseChars);
    expect(isIpAddress).not.toHaveBeenCalled();
  });

  it("returns false if value is an IP address", () => {
    (isIpAddress as jest.Mock).mockReturnValue(true);
    expect(isVirtualHostableS3Bucket(mockValue)).toBe(false);
    expect(isValidHostLabel).toHaveBeenCalledWith(mockValue);
    expect(isIpAddress).toHaveBeenCalledWith(mockValue);
  });

  it("returns true when all conditions are checked", () => {
    expect(isVirtualHostableS3Bucket(mockValue)).toBe(true);
    expect(isValidHostLabel).toHaveBeenCalledWith(mockValue);
    expect(isIpAddress).toHaveBeenCalledWith(mockValue);
  });

  describe("when allowSubDomains is true", () => {
    it.each([2, 4, 8])("calls itself when %s times when allowSubDomains is true", (num: number) => {
      const input = Array.from(Array(num).keys())
        .map((i) => `${mockValue}${i}`)
        .join(".");

      expect(isVirtualHostableS3Bucket(input, true)).toBe(true);
      expect(isValidHostLabel).toHaveBeenCalledTimes(num);
      expect(isIpAddress).toHaveBeenCalledTimes(num);

      for (const i of [...Array(num).keys()]) {
        expect(isValidHostLabel).toHaveBeenNthCalledWith(i + 1, `${mockValue}${i}`);
        expect(isIpAddress).toHaveBeenNthCalledWith(i + 1, `${mockValue}${i}`);
      }
    });

    describe("returns false when any of the subdomains is not valid", () => {
      const mockSubdomain = "mocksubdomain";
      const mockValueWithSubdomain = `${mockValue}.${mockSubdomain}`;

      it("returns false if value is not a valid host label", () => {
        (isValidHostLabel as jest.Mock).mockReturnValueOnce(true);
        (isValidHostLabel as jest.Mock).mockReturnValueOnce(false);

        expect(isVirtualHostableS3Bucket(mockValueWithSubdomain, true)).toBe(false);
        expect(isValidHostLabel).toHaveBeenNthCalledWith(1, mockValue);
        expect(isValidHostLabel).toHaveBeenNthCalledWith(2, mockSubdomain);
      });

      it("returns false if value is less than 3 characters", () => {
        const valueWithTwoChars = "ab";
        expect(isVirtualHostableS3Bucket(`${mockValue}.${valueWithTwoChars}`, true)).toBe(false);
      });

      it("returns false if value is greater than 63 characters", () => {
        const valueWith64Chars = "a".repeat(64);
        expect(isVirtualHostableS3Bucket(`${mockValue}.${valueWith64Chars}`, true)).toBe(false);
      });

      it("returns false if value contains upper case characters", () => {
        const valueWithUpperCaseChars = "aBc";
        expect(isVirtualHostableS3Bucket(`${mockValue}.${valueWithUpperCaseChars}`, true)).toBe(false);
      });

      it("returns false if value is an IP address", () => {
        (isIpAddress as jest.Mock).mockReturnValueOnce(false);
        (isIpAddress as jest.Mock).mockReturnValueOnce(true);

        expect(isVirtualHostableS3Bucket(mockValueWithSubdomain, true)).toBe(false);
        expect(isIpAddress).toHaveBeenNthCalledWith(1, mockValue);
        expect(isIpAddress).toHaveBeenNthCalledWith(2, mockSubdomain);
      });
    });
  });
});
