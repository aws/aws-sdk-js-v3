import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { convertToAttr } from "./convertToAttr";
import { NativeAttributeBinary, NativeAttributeValue } from "./models";

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
}

/**
 * Convert a JavaScript object into a DynamoDB record.
 *
 * @param data - The data to convert to a DynamoDB record
 * @param options - An optional configuration object for `marshall`
 *
 */
export function marshall(data: Set<string>, options?: marshallOptions): AttributeValue.SSMember;
export function marshall(data: Set<number>, options?: marshallOptions): AttributeValue.NSMember;
export function marshall(data: Set<NativeAttributeBinary>, options?: marshallOptions): AttributeValue.BSMember;
export function marshall<M extends { [K in keyof M]: NativeAttributeValue }>(
  data: M,
  options?: marshallOptions
): Record<string, AttributeValue>;
export function marshall<L extends NativeAttributeValue[]>(data: L, options?: marshallOptions): AttributeValue[];
export function marshall(data: string, options?: marshallOptions): AttributeValue.SMember;
export function marshall(data: number, options?: marshallOptions): AttributeValue.NMember;
export function marshall(data: NativeAttributeBinary, options?: marshallOptions): AttributeValue.BMember;
export function marshall(data: null, options?: marshallOptions): AttributeValue.NULLMember;
export function marshall(data: boolean, options?: marshallOptions): AttributeValue.BOOLMember;
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
