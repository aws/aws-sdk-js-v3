import { DynamoDBNumber } from "./DynamoDBNumber";

const BIG_DECIMAL =
  "123456789012345678901234567890123456789012345678901234567890.123456789012345678901234567890123456789012345678901234567890";
const BIG_INT = "123456789012345678901234567890123456789012345678901234567890";

describe(DynamoDBNumber.name, () => {
  it("can be statically constructed from numbers", () => {
    expect(DynamoDBNumber.from(123.123).toString()).toEqual("123.123");

    expect(() => DynamoDBNumber.from(1.23e100)).toThrow();
    expect(() => DynamoDBNumber.from(Infinity)).toThrow();
    expect(() => DynamoDBNumber.from(-Infinity)).toThrow();
    expect(() => DynamoDBNumber.from(NaN)).toThrow();
  });

  it("can be statically constructed from strings", () => {
    expect(DynamoDBNumber.from(BIG_DECIMAL).toString()).toEqual(BIG_DECIMAL);
  });

  it("can be statically constructed from BigInts", () => {
    expect(DynamoDBNumber.from(BigInt(BIG_INT)).toString()).toEqual(BIG_INT);
  });

  it("can convert to number", () => {
    expect(DynamoDBNumber.from(BIG_DECIMAL).toNumber(true)).toEqual(Number(BIG_DECIMAL));
    expect(() => DynamoDBNumber.from(BIG_DECIMAL).toNumber(false)).toThrow();
  });

  it("can convert to AttributeValue", () => {
    expect(DynamoDBNumber.from(BIG_DECIMAL).toAttributeValue()).toEqual({
      N: BIG_DECIMAL,
    });
  });

  it("can convert to string", () => {
    expect(DynamoDBNumber.from(BIG_DECIMAL).toString()).toEqual(BIG_DECIMAL);
  });

  it("can convert to BigInt", () => {
    expect(DynamoDBNumber.from(BIG_INT).toBigInt()).toEqual(BigInt(BIG_INT));
  });
});
