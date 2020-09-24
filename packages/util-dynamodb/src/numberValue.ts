/**
 * A class recognizable as a numeric value that stores the underlying number
 * as a string.
 *
 * Intended to be a deserialization target for the DynamoDB Document Client when
 * the `wrapNumbers` flag is set. This allows for numeric values that lose
 * precision when converted to JavaScript's `number` type.
 */
export class NumberValue {
  constructor(private readonly value: string) {}

  /**
   * Render the underlying value as a number when converting to JSON.
   */
  public toJSON() {
    return this.toNumber();
  }

  /**
   * Convert the underlying value to a JavaScript number.
   */
  public toNumber() {
    return Number(this.value);
  }

  /**
   * Return a string representing the unaltered value provided to the
   * constructor.
   */
  public toString() {
    return this.value;
  }
}
