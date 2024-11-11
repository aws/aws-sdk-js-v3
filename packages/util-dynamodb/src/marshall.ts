import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { convertToAttr } from "./convertToAttr";
import { NativeAttributeBinary, NativeAttributeValue } from "./models";
import { NumberValue } from "./NumberValue";

/**
 * An optional configuration object for `marshall`
 */
export interface marshallOptions {
  /**
   * Whether to automatically convert empty strings, blobs, and sets to `null`
   */
  convertEmptyValues?: boolean;
  /**
   * Whether to remove undefined values while marshalling.
   */
  removeUndefinedValues?: boolean;
  /**
   * Whether to convert typeof object to map attribute.
   */
  convertClassInstanceToMap?: boolean;
  /**
   * Whether to convert the top level container
   * if it is a map or list.
   *
   * Default is true when using the DynamoDBDocumentClient,
   * but false if directly using the marshall function (backwards compatibility).
   */
  convertTopLevelContainer?: boolean;
  /**
   * Whether to allow numbers beyond Number.MAX_SAFE_INTEGER during marshalling.
   * When set to true, allows numbers that may lose precision when converted to JavaScript numbers.
   * When false (default), throws an error if a number exceeds Number.MAX_SAFE_INTEGER to prevent
   * unintended loss of precision. Consider using the NumberValue type from @aws-sdk/lib-dynamodb
   * for precise handling of large numbers.
   */
  allowImpreciseNumbers?: boolean;
}

/**
 * Convert a JavaScript object into a DynamoDB record.
 *
 * @param data - The data to convert to a DynamoDB record
 * @param options - An optional configuration object for `marshall`
 *
 */
export function marshall(data: null, options?: marshallOptions): AttributeValue.NULLMember;
export function marshall(
  data: Set<bigint> | Set<number> | Set<NumberValue>,
  options?: marshallOptions
): AttributeValue.NSMember;
export function marshall(data: Set<string>, options?: marshallOptions): AttributeValue.SSMember;
export function marshall(data: Set<NativeAttributeBinary>, options?: marshallOptions): AttributeValue.BSMember;
export function marshall(data: NativeAttributeBinary, options?: marshallOptions): AttributeValue.BMember;
export function marshall(data: boolean, options?: marshallOptions): AttributeValue.BOOLMember;
export function marshall(data: number | NumberValue | bigint, options?: marshallOptions): AttributeValue.NMember;
export function marshall(data: string, options?: marshallOptions): AttributeValue.SMember;
export function marshall(data: boolean, options?: marshallOptions): AttributeValue.BOOLMember;
export function marshall<O extends { convertTopLevelContainer: true }>(
  data: NativeAttributeValue[],
  options: marshallOptions & O
): AttributeValue.LMember;
export function marshall<O extends { convertTopLevelContainer: false }>(
  data: NativeAttributeValue[],
  options: marshallOptions & O
): AttributeValue[];
export function marshall<O extends { convertTopLevelContainer: boolean }>(
  data: NativeAttributeValue[],
  options: marshallOptions & O
): AttributeValue[] | AttributeValue.LMember;
export function marshall(data: NativeAttributeValue[], options?: marshallOptions): AttributeValue[];
export function marshall<O extends { convertTopLevelContainer: true }>(
  data: Map<string, NativeAttributeValue> | Record<string, NativeAttributeValue>,
  options: marshallOptions & O
): AttributeValue.MMember;
export function marshall<O extends { convertTopLevelContainer: false }>(
  data: Map<string, NativeAttributeValue> | Record<string, NativeAttributeValue>,
  options: marshallOptions & O
): Record<string, AttributeValue>;
export function marshall<O extends { convertTopLevelContainer: boolean }>(
  data: Map<string, NativeAttributeValue> | Record<string, NativeAttributeValue>,
  options: marshallOptions & O
): Record<string, AttributeValue> | AttributeValue.MMember;
export function marshall(
  data: Map<string, NativeAttributeValue> | Record<string, NativeAttributeValue>,
  options?: marshallOptions
): Record<string, AttributeValue>;
export function marshall(data: any, options?: marshallOptions): any;
/**
 * This signature will be unmatchable but is included for information.
 */
export function marshall(data: unknown, options?: marshallOptions): AttributeValue.$UnknownMember;
export function marshall(data: unknown, options?: marshallOptions) {
  const attributeValue: AttributeValue = convertToAttr(data, options);
  const [key, value] = Object.entries(attributeValue)[0];

  switch (key) {
    case "M":
    case "L":
      return options?.convertTopLevelContainer ? attributeValue : value;
    case "SS":
    case "NS":
    case "BS":
    case "S":
    case "N":
    case "B":
    case "NULL":
    case "BOOL":
    case "$unknown":
    default:
      return attributeValue;
  }
}
