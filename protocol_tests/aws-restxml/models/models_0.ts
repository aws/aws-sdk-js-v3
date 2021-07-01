import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum FooEnum {
  BAR = "Bar",
  BAZ = "Baz",
  FOO = "Foo",
  ONE = "1",
  ZERO = "0",
}

export interface AllQueryStringTypesInput {
  queryString?: string;
  queryStringList?: string[];
  queryStringSet?: string[];
  queryByte?: number;
  queryShort?: number;
  queryInteger?: number;
  queryIntegerList?: number[];
  queryIntegerSet?: number[];
  queryLong?: number;
  queryFloat?: number;
  queryDouble?: number;
  queryDoubleList?: number[];
  queryBoolean?: boolean;
  queryBooleanList?: boolean[];
  queryTimestamp?: Date;
  queryTimestampList?: Date[];
  queryEnum?: FooEnum | string;
  queryEnumList?: (FooEnum | string)[];
  queryParamsMapOfStrings?: { [key: string]: string };
}

export namespace AllQueryStringTypesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllQueryStringTypesInput): any => ({
    ...obj,
  });
}

export interface PayloadWithXmlName {
  name?: string;
}

export namespace PayloadWithXmlName {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PayloadWithXmlName): any => ({
    ...obj,
  });
}

export interface BodyWithXmlNameInputOutput {
  nested?: PayloadWithXmlName;
}

export namespace BodyWithXmlNameInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BodyWithXmlNameInputOutput): any => ({
    ...obj,
  });
}

export interface ComplexNestedErrorData {
  Foo?: string;
}

export namespace ComplexNestedErrorData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplexNestedErrorData): any => ({
    ...obj,
  });
}

/**
 * This error is thrown when a request is invalid.
 */
export interface ComplexError extends __SmithyException, $MetadataBearer {
  name: "ComplexError";
  $fault: "client";
  Header?: string;
  TopLevel?: string;
  Nested?: ComplexNestedErrorData;
}

export namespace ComplexError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplexError): any => ({
    ...obj,
  });
}

export interface ConstantAndVariableQueryStringInput {
  baz?: string;
  maybeSet?: string;
}

export namespace ConstantAndVariableQueryStringInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConstantAndVariableQueryStringInput): any => ({
    ...obj,
  });
}

export interface ConstantQueryStringInput {
  hello: string | undefined;
}

export namespace ConstantQueryStringInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConstantQueryStringInput): any => ({
    ...obj,
  });
}

export interface EmptyInputAndEmptyOutputInput {}

export namespace EmptyInputAndEmptyOutputInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputInput): any => ({
    ...obj,
  });
}

export interface EmptyInputAndEmptyOutputOutput {}

export namespace EmptyInputAndEmptyOutputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputOutput): any => ({
    ...obj,
  });
}

export interface HostLabelHeaderInput {
  accountId: string | undefined;
}

export namespace HostLabelHeaderInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostLabelHeaderInput): any => ({
    ...obj,
  });
}

export interface HostLabelInput {
  label: string | undefined;
}

export namespace HostLabelInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostLabelInput): any => ({
    ...obj,
  });
}

export interface FlattenedXmlMapInputOutput {
  myMap?: { [key: string]: FooEnum | string };
}

export namespace FlattenedXmlMapInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlattenedXmlMapInputOutput): any => ({
    ...obj,
  });
}

export interface FlattenedXmlMapWithXmlNameInputOutput {
  myMap?: { [key: string]: string };
}

export namespace FlattenedXmlMapWithXmlNameInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlattenedXmlMapWithXmlNameInputOutput): any => ({
    ...obj,
  });
}

export interface FlattenedXmlMapWithXmlNamespaceOutput {
  myMap?: { [key: string]: string };
}

export namespace FlattenedXmlMapWithXmlNamespaceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlattenedXmlMapWithXmlNamespaceOutput): any => ({
    ...obj,
  });
}

export interface GreetingWithErrorsOutput {
  greeting?: string;
}

export namespace GreetingWithErrorsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GreetingWithErrorsOutput): any => ({
    ...obj,
  });
}

/**
 * This error is thrown when an invalid greeting value is provided.
 */
export interface InvalidGreeting extends __SmithyException, $MetadataBearer {
  name: "InvalidGreeting";
  $fault: "client";
  Message?: string;
}

export namespace InvalidGreeting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidGreeting): any => ({
    ...obj,
  });
}

export interface HttpPayloadTraitsInputOutput {
  foo?: string;
  blob?: Uint8Array;
}

export namespace HttpPayloadTraitsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPayloadTraitsInputOutput): any => ({
    ...obj,
  });
}

export interface HttpPayloadTraitsWithMediaTypeInputOutput {
  foo?: string;
  blob?: Uint8Array;
}

export namespace HttpPayloadTraitsWithMediaTypeInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPayloadTraitsWithMediaTypeInputOutput): any => ({
    ...obj,
  });
}

export interface HttpPayloadWithMemberXmlNameInputOutput {
  nested?: PayloadWithXmlName;
}

export namespace HttpPayloadWithMemberXmlNameInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPayloadWithMemberXmlNameInputOutput): any => ({
    ...obj,
  });
}

export interface NestedPayload {
  greeting?: string;
  name?: string;
}

export namespace NestedPayload {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NestedPayload): any => ({
    ...obj,
  });
}

export interface HttpPayloadWithStructureInputOutput {
  nested?: NestedPayload;
}

export namespace HttpPayloadWithStructureInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPayloadWithStructureInputOutput): any => ({
    ...obj,
  });
}

export interface HttpPayloadWithXmlNameInputOutput {
  nested?: PayloadWithXmlName;
}

export namespace HttpPayloadWithXmlNameInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPayloadWithXmlNameInputOutput): any => ({
    ...obj,
  });
}

export interface PayloadWithXmlNamespace {
  name?: string;
}

export namespace PayloadWithXmlNamespace {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PayloadWithXmlNamespace): any => ({
    ...obj,
  });
}

export interface HttpPayloadWithXmlNamespaceInputOutput {
  nested?: PayloadWithXmlNamespace;
}

export namespace HttpPayloadWithXmlNamespaceInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPayloadWithXmlNamespaceInputOutput): any => ({
    ...obj,
  });
}

export interface PayloadWithXmlNamespaceAndPrefix {
  name?: string;
}

export namespace PayloadWithXmlNamespaceAndPrefix {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PayloadWithXmlNamespaceAndPrefix): any => ({
    ...obj,
  });
}

export interface HttpPayloadWithXmlNamespaceAndPrefixInputOutput {
  nested?: PayloadWithXmlNamespaceAndPrefix;
}

export namespace HttpPayloadWithXmlNamespaceAndPrefixInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPayloadWithXmlNamespaceAndPrefixInputOutput): any => ({
    ...obj,
  });
}

export interface HttpPrefixHeadersInputOutput {
  foo?: string;
  fooMap?: { [key: string]: string };
}

export namespace HttpPrefixHeadersInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPrefixHeadersInputOutput): any => ({
    ...obj,
  });
}

export interface HttpRequestWithFloatLabelsInput {
  float: number | undefined;
  double: number | undefined;
}

export namespace HttpRequestWithFloatLabelsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRequestWithFloatLabelsInput): any => ({
    ...obj,
  });
}

export interface HttpRequestWithGreedyLabelInPathInput {
  foo: string | undefined;
  baz: string | undefined;
}

export namespace HttpRequestWithGreedyLabelInPathInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRequestWithGreedyLabelInPathInput): any => ({
    ...obj,
  });
}

export interface HttpRequestWithLabelsInput {
  string: string | undefined;
  short: number | undefined;
  integer: number | undefined;
  long: number | undefined;
  float: number | undefined;
  double: number | undefined;
  /**
   * Serialized in the path as true or false.
   */
  boolean: boolean | undefined;

  /**
   * Note that this member has no format, so it's serialized as an RFC 3399 date-time.
   */
  timestamp: Date | undefined;
}

export namespace HttpRequestWithLabelsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRequestWithLabelsInput): any => ({
    ...obj,
  });
}

export interface HttpRequestWithLabelsAndTimestampFormatInput {
  memberEpochSeconds: Date | undefined;
  memberHttpDate: Date | undefined;
  memberDateTime: Date | undefined;
  defaultFormat: Date | undefined;
  targetEpochSeconds: Date | undefined;
  targetHttpDate: Date | undefined;
  targetDateTime: Date | undefined;
}

export namespace HttpRequestWithLabelsAndTimestampFormatInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRequestWithLabelsAndTimestampFormatInput): any => ({
    ...obj,
  });
}

export interface HttpResponseCodeOutput {
  Status?: number;
}

export namespace HttpResponseCodeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpResponseCodeOutput): any => ({
    ...obj,
  });
}

export interface IgnoreQueryParamsInResponseOutput {
  baz?: string;
}

export namespace IgnoreQueryParamsInResponseOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IgnoreQueryParamsInResponseOutput): any => ({
    ...obj,
  });
}

export interface InputAndOutputWithHeadersIO {
  headerString?: string;
  headerByte?: number;
  headerShort?: number;
  headerInteger?: number;
  headerLong?: number;
  headerFloat?: number;
  headerDouble?: number;
  headerTrueBool?: boolean;
  headerFalseBool?: boolean;
  headerStringList?: string[];
  headerStringSet?: string[];
  headerIntegerList?: number[];
  headerBooleanList?: boolean[];
  headerTimestampList?: Date[];
  headerEnum?: FooEnum | string;
  headerEnumList?: (FooEnum | string)[];
}

export namespace InputAndOutputWithHeadersIO {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputAndOutputWithHeadersIO): any => ({
    ...obj,
  });
}

export interface NestedXmlMapsInputOutput {
  nestedMap?: { [key: string]: { [key: string]: FooEnum | string } };
  flatNestedMap?: { [key: string]: { [key: string]: FooEnum | string } };
}

export namespace NestedXmlMapsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NestedXmlMapsInputOutput): any => ({
    ...obj,
  });
}

export interface NoInputAndOutputOutput {}

export namespace NoInputAndOutputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoInputAndOutputOutput): any => ({
    ...obj,
  });
}

export interface NullAndEmptyHeadersIO {
  a?: string;
  b?: string;
  c?: string[];
}

export namespace NullAndEmptyHeadersIO {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NullAndEmptyHeadersIO): any => ({
    ...obj,
  });
}

export interface OmitsNullSerializesEmptyStringInput {
  nullValue?: string;
  emptyString?: string;
}

export namespace OmitsNullSerializesEmptyStringInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OmitsNullSerializesEmptyStringInput): any => ({
    ...obj,
  });
}

export interface QueryIdempotencyTokenAutoFillInput {
  token?: string;
}

export namespace QueryIdempotencyTokenAutoFillInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryIdempotencyTokenAutoFillInput): any => ({
    ...obj,
  });
}

export interface QueryParamsAsStringListMapInput {
  qux?: string;
  foo?: { [key: string]: string[] };
}

export namespace QueryParamsAsStringListMapInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryParamsAsStringListMapInput): any => ({
    ...obj,
  });
}

export interface QueryPrecedenceInput {
  foo?: string;
  baz?: { [key: string]: string };
}

export namespace QueryPrecedenceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryPrecedenceInput): any => ({
    ...obj,
  });
}

export interface SimpleScalarPropertiesInputOutput {
  foo?: string;
  stringValue?: string;
  trueBooleanValue?: boolean;
  falseBooleanValue?: boolean;
  byteValue?: number;
  shortValue?: number;
  integerValue?: number;
  longValue?: number;
  floatValue?: number;
  doubleValue?: number;
}

export namespace SimpleScalarPropertiesInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimpleScalarPropertiesInputOutput): any => ({
    ...obj,
  });
}

export interface TimestampFormatHeadersIO {
  memberEpochSeconds?: Date;
  memberHttpDate?: Date;
  memberDateTime?: Date;
  defaultFormat?: Date;
  targetEpochSeconds?: Date;
  targetHttpDate?: Date;
  targetDateTime?: Date;
}

export namespace TimestampFormatHeadersIO {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimestampFormatHeadersIO): any => ({
    ...obj,
  });
}

export interface XmlAttributesInputOutput {
  foo?: string;
  attr?: string;
}

export namespace XmlAttributesInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlAttributesInputOutput): any => ({
    ...obj,
  });
}

export interface XmlAttributesOnPayloadInputOutput {
  payload?: XmlAttributesInputOutput;
}

export namespace XmlAttributesOnPayloadInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlAttributesOnPayloadInputOutput): any => ({
    ...obj,
  });
}

export interface XmlBlobsInputOutput {
  data?: Uint8Array;
}

export namespace XmlBlobsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlBlobsInputOutput): any => ({
    ...obj,
  });
}

export interface StructureListMember {
  a?: string;
  b?: string;
}

export namespace StructureListMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StructureListMember): any => ({
    ...obj,
  });
}

export interface XmlListsInputOutput {
  stringList?: string[];
  stringSet?: string[];
  integerList?: number[];
  booleanList?: boolean[];
  timestampList?: Date[];
  enumList?: (FooEnum | string)[];
  /**
   * A list of lists of strings.
   */
  nestedStringList?: string[][];

  renamedListMembers?: string[];
  flattenedList?: string[];
  flattenedList2?: string[];
  flattenedListWithMemberNamespace?: string[];
  flattenedListWithNamespace?: string[];
  structureList?: StructureListMember[];
  flattenedStructureList?: StructureListMember[];
}

export namespace XmlListsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlListsInputOutput): any => ({
    ...obj,
  });
}

export interface GreetingStruct {
  hi?: string;
}

export namespace GreetingStruct {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GreetingStruct): any => ({
    ...obj,
  });
}

export interface XmlMapsInputOutput {
  myMap?: { [key: string]: GreetingStruct };
}

export namespace XmlMapsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlMapsInputOutput): any => ({
    ...obj,
  });
}

export interface XmlEmptyStringsInputOutput {
  emptyString?: string;
}

export namespace XmlEmptyStringsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlEmptyStringsInputOutput): any => ({
    ...obj,
  });
}

export interface XmlEnumsInputOutput {
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumSet?: (FooEnum | string)[];
  fooEnumMap?: { [key: string]: FooEnum | string };
}

export namespace XmlEnumsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlEnumsInputOutput): any => ({
    ...obj,
  });
}

export interface XmlMapsXmlNameInputOutput {
  myMap?: { [key: string]: GreetingStruct };
}

export namespace XmlMapsXmlNameInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlMapsXmlNameInputOutput): any => ({
    ...obj,
  });
}

export interface XmlNamespaceNested {
  foo?: string;
  values?: string[];
}

export namespace XmlNamespaceNested {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlNamespaceNested): any => ({
    ...obj,
  });
}

export interface XmlNamespacesInputOutput {
  nested?: XmlNamespaceNested;
}

export namespace XmlNamespacesInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlNamespacesInputOutput): any => ({
    ...obj,
  });
}

export interface XmlTimestampsInputOutput {
  normal?: Date;
  dateTime?: Date;
  epochSeconds?: Date;
  httpDate?: Date;
}

export namespace XmlTimestampsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlTimestampsInputOutput): any => ({
    ...obj,
  });
}

export interface XmlNestedUnionStruct {
  stringValue?: string;
  booleanValue?: boolean;
  byteValue?: number;
  shortValue?: number;
  integerValue?: number;
  longValue?: number;
  floatValue?: number;
  doubleValue?: number;
}

export namespace XmlNestedUnionStruct {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlNestedUnionStruct): any => ({
    ...obj,
  });
}

export type XmlUnionShape =
  | XmlUnionShape.BooleanValueMember
  | XmlUnionShape.ByteValueMember
  | XmlUnionShape.DoubleValueMember
  | XmlUnionShape.FloatValueMember
  | XmlUnionShape.IntegerValueMember
  | XmlUnionShape.LongValueMember
  | XmlUnionShape.ShortValueMember
  | XmlUnionShape.StringValueMember
  | XmlUnionShape.StructValueMember
  | XmlUnionShape.UnionValueMember
  | XmlUnionShape.$UnknownMember;

export namespace XmlUnionShape {
  export interface StringValueMember {
    stringValue: string;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface BooleanValueMember {
    stringValue?: never;
    booleanValue: boolean;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface ByteValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue: number;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface ShortValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue: number;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface IntegerValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue: number;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface LongValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue: number;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface FloatValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue: number;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface DoubleValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue: number;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface UnionValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue: XmlUnionShape;
    structValue?: never;
    $unknown?: never;
  }

  export interface StructValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue: XmlNestedUnionStruct;
    $unknown?: never;
  }

  export interface $UnknownMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    booleanValue: (value: boolean) => T;
    byteValue: (value: number) => T;
    shortValue: (value: number) => T;
    integerValue: (value: number) => T;
    longValue: (value: number) => T;
    floatValue: (value: number) => T;
    doubleValue: (value: number) => T;
    unionValue: (value: XmlUnionShape) => T;
    structValue: (value: XmlNestedUnionStruct) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: XmlUnionShape, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.byteValue !== undefined) return visitor.byteValue(value.byteValue);
    if (value.shortValue !== undefined) return visitor.shortValue(value.shortValue);
    if (value.integerValue !== undefined) return visitor.integerValue(value.integerValue);
    if (value.longValue !== undefined) return visitor.longValue(value.longValue);
    if (value.floatValue !== undefined) return visitor.floatValue(value.floatValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.unionValue !== undefined) return visitor.unionValue(value.unionValue);
    if (value.structValue !== undefined) return visitor.structValue(value.structValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlUnionShape): any => {
    if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
    if (obj.booleanValue !== undefined) return { booleanValue: obj.booleanValue };
    if (obj.byteValue !== undefined) return { byteValue: obj.byteValue };
    if (obj.shortValue !== undefined) return { shortValue: obj.shortValue };
    if (obj.integerValue !== undefined) return { integerValue: obj.integerValue };
    if (obj.longValue !== undefined) return { longValue: obj.longValue };
    if (obj.floatValue !== undefined) return { floatValue: obj.floatValue };
    if (obj.doubleValue !== undefined) return { doubleValue: obj.doubleValue };
    if (obj.unionValue !== undefined) return { unionValue: XmlUnionShape.filterSensitiveLog(obj.unionValue) };
    if (obj.structValue !== undefined) return { structValue: XmlNestedUnionStruct.filterSensitiveLog(obj.structValue) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface RecursiveShapesInputOutputNested1 {
  foo?: string;
  nested?: RecursiveShapesInputOutputNested2;
}

export namespace RecursiveShapesInputOutputNested1 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecursiveShapesInputOutputNested1): any => ({
    ...obj,
  });
}

export interface RecursiveShapesInputOutputNested2 {
  bar?: string;
  recursiveMember?: RecursiveShapesInputOutputNested1;
}

export namespace RecursiveShapesInputOutputNested2 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecursiveShapesInputOutputNested2): any => ({
    ...obj,
  });
}

export interface XmlUnionsInputOutput {
  unionValue?: XmlUnionShape;
}

export namespace XmlUnionsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlUnionsInputOutput): any => ({
    ...obj,
    ...(obj.unionValue && { unionValue: XmlUnionShape.filterSensitiveLog(obj.unionValue) }),
  });
}

export interface RecursiveShapesInputOutput {
  nested?: RecursiveShapesInputOutputNested1;
}

export namespace RecursiveShapesInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecursiveShapesInputOutput): any => ({
    ...obj,
  });
}
