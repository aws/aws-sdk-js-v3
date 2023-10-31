import { NumberValue as INumberValue } from "./models";

/**
 *
 * Class for storing DynamoDB numbers that exceed the scale of
 * JavaScript's MAX_SAFE_INTEGER and MIN_SAFE_INTEGER, or the
 * decimal precision limit.
 *
 * This class does not support mathematical operations in JavaScript.
 * Convert the contained string value to your application-specific
 * large number implementation to perform mathematical operations.
 *
 * @public
 *
 */
export class NumberValue implements INumberValue {
  public value: string;

  /**
   * This class does not validate that your string input is a valid number.
   *
   * @param value - a precise number, or any BigInt or string, or AttributeValue.
   */
  public constructor(value: number | Number | BigInt | string | { N: string }) {
    if (typeof value === "object" && "N" in value) {
      this.value = String(value.N);
    } else {
      this.value = String(value);
    }

    const valueOf = typeof value.valueOf() === "number" ? (value.valueOf() as number) : 0;
    const imprecise =
      valueOf > Number.MAX_SAFE_INTEGER ||
      valueOf < Number.MIN_SAFE_INTEGER ||
      Math.abs(valueOf) === Infinity ||
      Number.isNaN(valueOf);

    if (imprecise) {
      throw new Error(
        `NumberValue should not be initialized with an imprecise number=${valueOf}. Use a string instead.`
      );
    }
  }

  /**
   * This class does not validate that your string input is a valid number.
   *
   * @param value - a precise number, or any BigInt or string, or AttributeValue.
   */
  public static from(value: number | Number | BigInt | string | { N: string }) {
    return new NumberValue(value);
  }

  /**
   * @returns the AttributeValue form for DynamoDB.
   */
  public toAttributeValue() {
    return {
      N: this.toString(),
    };
  }

  /**
   * @returns BigInt representation.
   *
   * @throws SyntaxError if the string representation is not convertable to a BigInt.
   */
  public toBigInt() {
    const stringValue = this.toString();
    return BigInt(stringValue);
  }

  /**
   * @override
   *
   * @returns string representation. This is the canonical format in DynamoDB.
   */
  public toString() {
    return String(this.value);
  }

  /**
   * @override
   */
  public valueOf() {
    return this.toString();
  }
}
