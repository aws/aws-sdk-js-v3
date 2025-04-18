// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RestXmlProtocolServiceException as __BaseException } from "./RestXmlProtocolServiceException";

/**
 * @public
 */
export interface GreetingStruct {
  hi?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FooEnum = {
  BAR: "Bar",
  BAZ: "Baz",
  FOO: "Foo",
  ONE: "1",
  ZERO: "0",
} as const;
/**
 * @public
 */
export type FooEnum = (typeof FooEnum)[keyof typeof FooEnum];

export enum IntegerEnum {
  A = 1,
  B = 2,
  C = 3,
}

/**
 * @public
 */
export interface AllQueryStringTypesInput {
  queryString?: string | undefined;
  queryStringList?: string[] | undefined;
  queryStringSet?: string[] | undefined;
  queryByte?: number | undefined;
  queryShort?: number | undefined;
  queryInteger?: number | undefined;
  queryIntegerList?: number[] | undefined;
  queryIntegerSet?: number[] | undefined;
  queryLong?: number | undefined;
  queryFloat?: number | undefined;
  queryDouble?: number | undefined;
  queryDoubleList?: number[] | undefined;
  queryBoolean?: boolean | undefined;
  queryBooleanList?: boolean[] | undefined;
  queryTimestamp?: Date | undefined;
  queryTimestampList?: Date[] | undefined;
  queryEnum?: FooEnum | undefined;
  queryEnumList?: FooEnum[] | undefined;
  queryIntegerEnum?: IntegerEnum | undefined;
  queryIntegerEnumList?: IntegerEnum[] | undefined;
  queryParamsMapOfStrings?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PayloadWithXmlName {
  name?: string | undefined;
}

/**
 * @public
 */
export interface BodyWithXmlNameInputOutput {
  nested?: PayloadWithXmlName | undefined;
}

/**
 * @public
 */
export interface ComplexNestedErrorData {
  Foo?: string | undefined;
}

/**
 * This error is thrown when a request is invalid.
 * @public
 */
export class ComplexError extends __BaseException {
  readonly name: "ComplexError" = "ComplexError";
  readonly $fault: "client" = "client";
  Header?: string | undefined;
  TopLevel?: string | undefined;
  Nested?: ComplexNestedErrorData | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ComplexError, __BaseException>) {
    super({
      name: "ComplexError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ComplexError.prototype);
    this.Header = opts.Header;
    this.TopLevel = opts.TopLevel;
    this.Nested = opts.Nested;
  }
}

/**
 * @public
 */
export interface ConstantAndVariableQueryStringInput {
  baz?: string | undefined;
  maybeSet?: string | undefined;
}

/**
 * @public
 */
export interface ConstantQueryStringInput {
  hello: string | undefined;
}

/**
 * @public
 */
export interface ContentTypeParametersInput {
  value?: number | undefined;
}

/**
 * @public
 */
export interface ContentTypeParametersOutput {}

/**
 * @public
 */
export interface DatetimeOffsetsOutput {
  datetime?: Date | undefined;
}

/**
 * @public
 */
export interface EmptyInputAndEmptyOutputInput {}

/**
 * @public
 */
export interface EmptyInputAndEmptyOutputOutput {}

/**
 * @public
 */
export interface HostLabelHeaderInput {
  accountId: string | undefined;
}

/**
 * @public
 */
export interface EndpointWithHostLabelOperationRequest {
  label: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StringEnum = {
  V: "enumvalue",
} as const;
/**
 * @public
 */
export type StringEnum = (typeof StringEnum)[keyof typeof StringEnum];

/**
 * @public
 */
export interface EnumPayloadInput {
  payload?: StringEnum | undefined;
}

/**
 * @public
 */
export interface FlattenedXmlMapRequest {
  myMap?: Record<string, FooEnum> | undefined;
}

/**
 * @public
 */
export interface FlattenedXmlMapResponse {
  myMap?: Record<string, FooEnum> | undefined;
}

/**
 * @public
 */
export interface FlattenedXmlMapWithXmlNameRequest {
  myMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface FlattenedXmlMapWithXmlNameResponse {
  myMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface FlattenedXmlMapWithXmlNamespaceOutput {
  myMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface FractionalSecondsOutput {
  datetime?: Date | undefined;
}

/**
 * @public
 */
export interface GreetingWithErrorsOutput {
  greeting?: string | undefined;
}

/**
 * This error is thrown when an invalid greeting value is provided.
 * @public
 */
export class InvalidGreeting extends __BaseException {
  readonly name: "InvalidGreeting" = "InvalidGreeting";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGreeting, __BaseException>) {
    super({
      name: "InvalidGreeting",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGreeting.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface HttpEmptyPrefixHeadersInput {
  prefixHeaders?: Record<string, string> | undefined;
  specificHeader?: string | undefined;
}

/**
 * @public
 */
export interface HttpEmptyPrefixHeadersOutput {
  prefixHeaders?: Record<string, string> | undefined;
  specificHeader?: string | undefined;
}

/**
 * @public
 */
export interface HttpPayloadTraitsInputOutput {
  foo?: string | undefined;
  blob?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface HttpPayloadTraitsWithMediaTypeInputOutput {
  foo?: string | undefined;
  blob?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface HttpPayloadWithMemberXmlNameInputOutput {
  nested?: PayloadWithXmlName | undefined;
}

/**
 * @public
 */
export interface NestedPayload {
  greeting?: string | undefined;
  name?: string | undefined;
}

/**
 * @public
 */
export interface HttpPayloadWithStructureInputOutput {
  nested?: NestedPayload | undefined;
}

/**
 * @public
 */
export type UnionPayload = UnionPayload.GreetingMember | UnionPayload.$UnknownMember;

/**
 * @public
 */
export namespace UnionPayload {
  export interface GreetingMember {
    greeting: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    greeting?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    greeting: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UnionPayload, visitor: Visitor<T>): T => {
    if (value.greeting !== undefined) return visitor.greeting(value.greeting);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface HttpPayloadWithUnionInputOutput {
  nested?: UnionPayload | undefined;
}

/**
 * @public
 */
export interface HttpPayloadWithXmlNameInputOutput {
  nested?: PayloadWithXmlName | undefined;
}

/**
 * @public
 */
export interface PayloadWithXmlNamespace {
  name?: string | undefined;
}

/**
 * @public
 */
export interface HttpPayloadWithXmlNamespaceInputOutput {
  nested?: PayloadWithXmlNamespace | undefined;
}

/**
 * @public
 */
export interface PayloadWithXmlNamespaceAndPrefix {
  name?: string | undefined;
}

/**
 * @public
 */
export interface HttpPayloadWithXmlNamespaceAndPrefixInputOutput {
  nested?: PayloadWithXmlNamespaceAndPrefix | undefined;
}

/**
 * @public
 */
export interface HttpPrefixHeadersInputOutput {
  foo?: string | undefined;
  fooMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface HttpRequestWithFloatLabelsInput {
  float: number | undefined;
  double: number | undefined;
}

/**
 * @public
 */
export interface HttpRequestWithGreedyLabelInPathInput {
  foo: string | undefined;
  baz: string | undefined;
}

/**
 * @public
 */
export interface HttpRequestWithLabelsInput {
  string: string | undefined;
  short: number | undefined;
  integer: number | undefined;
  long: number | undefined;
  float: number | undefined;
  double: number | undefined;
  /**
   * Serialized in the path as true or false.
   * @public
   */
  boolean: boolean | undefined;

  /**
   * Note that this member has no format, so it's serialized as an RFC 3399 date-time.
   * @public
   */
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface HttpRequestWithLabelsAndTimestampFormatInput {
  memberEpochSeconds: Date | undefined;
  memberHttpDate: Date | undefined;
  memberDateTime: Date | undefined;
  defaultFormat: Date | undefined;
  targetEpochSeconds: Date | undefined;
  targetHttpDate: Date | undefined;
  targetDateTime: Date | undefined;
}

/**
 * @public
 */
export interface HttpResponseCodeOutput {
  Status?: number | undefined;
}

/**
 * @public
 */
export interface StringPayloadInput {
  payload?: string | undefined;
}

/**
 * @public
 */
export interface IgnoreQueryParamsInResponseOutput {
  baz?: string | undefined;
}

/**
 * @public
 */
export interface InputAndOutputWithHeadersIO {
  headerString?: string | undefined;
  headerByte?: number | undefined;
  headerShort?: number | undefined;
  headerInteger?: number | undefined;
  headerLong?: number | undefined;
  headerFloat?: number | undefined;
  headerDouble?: number | undefined;
  headerTrueBool?: boolean | undefined;
  headerFalseBool?: boolean | undefined;
  headerStringList?: string[] | undefined;
  headerStringSet?: string[] | undefined;
  headerIntegerList?: number[] | undefined;
  headerBooleanList?: boolean[] | undefined;
  headerTimestampList?: Date[] | undefined;
  headerEnum?: FooEnum | undefined;
  headerEnumList?: FooEnum[] | undefined;
}

/**
 * @public
 */
export interface NestedXmlMapsRequest {
  nestedMap?: Record<string, Record<string, FooEnum>> | undefined;
  flatNestedMap?: Record<string, Record<string, FooEnum>> | undefined;
}

/**
 * @public
 */
export interface NestedXmlMapsResponse {
  nestedMap?: Record<string, Record<string, FooEnum>> | undefined;
  flatNestedMap?: Record<string, Record<string, FooEnum>> | undefined;
}

/**
 * @public
 */
export interface NestedXmlMapWithXmlNameRequest {
  nestedXmlMapWithXmlNameMap?: Record<string, Record<string, string>> | undefined;
}

/**
 * @public
 */
export interface NestedXmlMapWithXmlNameResponse {
  nestedXmlMapWithXmlNameMap?: Record<string, Record<string, string>> | undefined;
}

/**
 * @public
 */
export interface NoInputAndOutputOutput {}

/**
 * @public
 */
export interface NullAndEmptyHeadersIO {
  a?: string | undefined;
  b?: string | undefined;
  c?: string[] | undefined;
}

/**
 * @public
 */
export interface OmitsNullSerializesEmptyStringInput {
  nullValue?: string | undefined;
  emptyString?: string | undefined;
}

/**
 * @public
 */
export interface PutWithContentEncodingInput {
  encoding?: string | undefined;
  data?: string | undefined;
}

/**
 * @public
 */
export interface QueryIdempotencyTokenAutoFillInput {
  token?: string | undefined;
}

/**
 * @public
 */
export interface QueryParamsAsStringListMapInput {
  qux?: string | undefined;
  foo?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface QueryPrecedenceInput {
  foo?: string | undefined;
  baz?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SimpleScalarPropertiesRequest {
  foo?: string | undefined;
  stringValue?: string | undefined;
  trueBooleanValue?: boolean | undefined;
  falseBooleanValue?: boolean | undefined;
  byteValue?: number | undefined;
  shortValue?: number | undefined;
  integerValue?: number | undefined;
  longValue?: number | undefined;
  floatValue?: number | undefined;
  doubleValue?: number | undefined;
}

/**
 * @public
 */
export interface SimpleScalarPropertiesResponse {
  foo?: string | undefined;
  stringValue?: string | undefined;
  trueBooleanValue?: boolean | undefined;
  falseBooleanValue?: boolean | undefined;
  byteValue?: number | undefined;
  shortValue?: number | undefined;
  integerValue?: number | undefined;
  longValue?: number | undefined;
  floatValue?: number | undefined;
  doubleValue?: number | undefined;
}

/**
 * @public
 */
export interface TimestampFormatHeadersIO {
  memberEpochSeconds?: Date | undefined;
  memberHttpDate?: Date | undefined;
  memberDateTime?: Date | undefined;
  defaultFormat?: Date | undefined;
  targetEpochSeconds?: Date | undefined;
  targetHttpDate?: Date | undefined;
  targetDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface XmlAttributesRequest {
  foo?: string | undefined;
  attr?: string | undefined;
}

/**
 * @public
 */
export interface XmlAttributesResponse {
  foo?: string | undefined;
  attr?: string | undefined;
}

/**
 * @public
 */
export interface XmlAttributesPayloadRequest {
  foo?: string | undefined;
  attr?: string | undefined;
}

/**
 * @public
 */
export interface XmlAttributesOnPayloadRequest {
  payload?: XmlAttributesPayloadRequest | undefined;
}

/**
 * @public
 */
export interface XmlAttributesPayloadResponse {
  foo?: string | undefined;
  attr?: string | undefined;
}

/**
 * @public
 */
export interface XmlAttributesOnPayloadResponse {
  payload?: XmlAttributesPayloadResponse | undefined;
}

/**
 * @public
 */
export interface XmlBlobsRequest {
  data?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface XmlBlobsResponse {
  data?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface XmlEmptyBlobsRequest {
  data?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface XmlEmptyBlobsResponse {
  data?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface StructureListMember {
  a?: string | undefined;
  b?: string | undefined;
}

/**
 * @public
 */
export interface XmlEmptyListsRequest {
  stringList?: string[] | undefined;
  stringSet?: string[] | undefined;
  integerList?: number[] | undefined;
  booleanList?: boolean[] | undefined;
  timestampList?: Date[] | undefined;
  enumList?: FooEnum[] | undefined;
  intEnumList?: IntegerEnum[] | undefined;
  /**
   * A list of lists of strings.
   * @public
   */
  nestedStringList?: string[][] | undefined;

  renamedListMembers?: string[] | undefined;
  flattenedList?: string[] | undefined;
  flattenedList2?: string[] | undefined;
  flattenedListWithMemberNamespace?: string[] | undefined;
  flattenedListWithNamespace?: string[] | undefined;
  structureList?: StructureListMember[] | undefined;
  flattenedStructureList?: StructureListMember[] | undefined;
}

/**
 * @public
 */
export interface XmlEmptyListsResponse {
  stringList?: string[] | undefined;
  stringSet?: string[] | undefined;
  integerList?: number[] | undefined;
  booleanList?: boolean[] | undefined;
  timestampList?: Date[] | undefined;
  enumList?: FooEnum[] | undefined;
  intEnumList?: IntegerEnum[] | undefined;
  /**
   * A list of lists of strings.
   * @public
   */
  nestedStringList?: string[][] | undefined;

  renamedListMembers?: string[] | undefined;
  flattenedList?: string[] | undefined;
  flattenedList2?: string[] | undefined;
  flattenedListWithMemberNamespace?: string[] | undefined;
  flattenedListWithNamespace?: string[] | undefined;
  structureList?: StructureListMember[] | undefined;
  flattenedStructureList?: StructureListMember[] | undefined;
}

/**
 * @public
 */
export interface XmlEmptyMapsRequest {
  myMap?: Record<string, GreetingStruct> | undefined;
}

/**
 * @public
 */
export interface XmlEmptyMapsResponse {
  myMap?: Record<string, GreetingStruct> | undefined;
}

/**
 * @public
 */
export interface XmlEmptyStringsRequest {
  emptyString?: string | undefined;
}

/**
 * @public
 */
export interface XmlEmptyStringsResponse {
  emptyString?: string | undefined;
}

/**
 * @public
 */
export interface XmlEnumsRequest {
  fooEnum1?: FooEnum | undefined;
  fooEnum2?: FooEnum | undefined;
  fooEnum3?: FooEnum | undefined;
  fooEnumList?: FooEnum[] | undefined;
  fooEnumSet?: FooEnum[] | undefined;
  fooEnumMap?: Record<string, FooEnum> | undefined;
}

/**
 * @public
 */
export interface XmlEnumsResponse {
  fooEnum1?: FooEnum | undefined;
  fooEnum2?: FooEnum | undefined;
  fooEnum3?: FooEnum | undefined;
  fooEnumList?: FooEnum[] | undefined;
  fooEnumSet?: FooEnum[] | undefined;
  fooEnumMap?: Record<string, FooEnum> | undefined;
}

/**
 * @public
 */
export interface XmlIntEnumsRequest {
  intEnum1?: IntegerEnum | undefined;
  intEnum2?: IntegerEnum | undefined;
  intEnum3?: IntegerEnum | undefined;
  intEnumList?: IntegerEnum[] | undefined;
  intEnumSet?: IntegerEnum[] | undefined;
  intEnumMap?: Record<string, IntegerEnum> | undefined;
}

/**
 * @public
 */
export interface XmlIntEnumsResponse {
  intEnum1?: IntegerEnum | undefined;
  intEnum2?: IntegerEnum | undefined;
  intEnum3?: IntegerEnum | undefined;
  intEnumList?: IntegerEnum[] | undefined;
  intEnumSet?: IntegerEnum[] | undefined;
  intEnumMap?: Record<string, IntegerEnum> | undefined;
}

/**
 * @public
 */
export interface XmlListsRequest {
  stringList?: string[] | undefined;
  stringSet?: string[] | undefined;
  integerList?: number[] | undefined;
  booleanList?: boolean[] | undefined;
  timestampList?: Date[] | undefined;
  enumList?: FooEnum[] | undefined;
  intEnumList?: IntegerEnum[] | undefined;
  /**
   * A list of lists of strings.
   * @public
   */
  nestedStringList?: string[][] | undefined;

  renamedListMembers?: string[] | undefined;
  flattenedList?: string[] | undefined;
  flattenedList2?: string[] | undefined;
  flattenedListWithMemberNamespace?: string[] | undefined;
  flattenedListWithNamespace?: string[] | undefined;
  structureList?: StructureListMember[] | undefined;
  flattenedStructureList?: StructureListMember[] | undefined;
}

/**
 * @public
 */
export interface XmlListsResponse {
  stringList?: string[] | undefined;
  stringSet?: string[] | undefined;
  integerList?: number[] | undefined;
  booleanList?: boolean[] | undefined;
  timestampList?: Date[] | undefined;
  enumList?: FooEnum[] | undefined;
  intEnumList?: IntegerEnum[] | undefined;
  /**
   * A list of lists of strings.
   * @public
   */
  nestedStringList?: string[][] | undefined;

  renamedListMembers?: string[] | undefined;
  flattenedList?: string[] | undefined;
  flattenedList2?: string[] | undefined;
  flattenedListWithMemberNamespace?: string[] | undefined;
  flattenedListWithNamespace?: string[] | undefined;
  structureList?: StructureListMember[] | undefined;
  flattenedStructureList?: StructureListMember[] | undefined;
}

/**
 * @public
 */
export interface XmlMapsRequest {
  myMap?: Record<string, GreetingStruct> | undefined;
}

/**
 * @public
 */
export interface XmlMapsResponse {
  myMap?: Record<string, GreetingStruct> | undefined;
}

/**
 * @public
 */
export interface XmlMapsXmlNameRequest {
  myMap?: Record<string, GreetingStruct> | undefined;
}

/**
 * @public
 */
export interface XmlMapsXmlNameResponse {
  myMap?: Record<string, GreetingStruct> | undefined;
}

/**
 * @public
 */
export interface XmlMapWithXmlNamespaceRequest {
  myMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface XmlMapWithXmlNamespaceResponse {
  myMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface XmlNamespaceNested {
  foo?: string | undefined;
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface XmlNamespacesRequest {
  nested?: XmlNamespaceNested | undefined;
}

/**
 * @public
 */
export interface XmlNamespacesResponse {
  nested?: XmlNamespaceNested | undefined;
}

/**
 * @public
 */
export interface XmlTimestampsRequest {
  normal?: Date | undefined;
  dateTime?: Date | undefined;
  dateTimeOnTarget?: Date | undefined;
  epochSeconds?: Date | undefined;
  epochSecondsOnTarget?: Date | undefined;
  httpDate?: Date | undefined;
  httpDateOnTarget?: Date | undefined;
}

/**
 * @public
 */
export interface XmlTimestampsResponse {
  normal?: Date | undefined;
  dateTime?: Date | undefined;
  dateTimeOnTarget?: Date | undefined;
  epochSeconds?: Date | undefined;
  epochSecondsOnTarget?: Date | undefined;
  httpDate?: Date | undefined;
  httpDateOnTarget?: Date | undefined;
}

/**
 * @public
 */
export interface XmlNestedUnionStruct {
  stringValue?: string | undefined;
  booleanValue?: boolean | undefined;
  byteValue?: number | undefined;
  shortValue?: number | undefined;
  integerValue?: number | undefined;
  longValue?: number | undefined;
  floatValue?: number | undefined;
  doubleValue?: number | undefined;
}

/**
 * @public
 */
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

/**
 * @public
 */
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

  /**
   * @public
   */
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
}

/**
 * @public
 */
export interface RecursiveShapesInputOutputNested1 {
  foo?: string | undefined;
  nested?: RecursiveShapesInputOutputNested2 | undefined;
}

/**
 * @public
 */
export interface RecursiveShapesInputOutputNested2 {
  bar?: string | undefined;
  recursiveMember?: RecursiveShapesInputOutputNested1 | undefined;
}

/**
 * @public
 */
export interface XmlUnionsRequest {
  unionValue?: XmlUnionShape | undefined;
}

/**
 * @public
 */
export interface XmlUnionsResponse {
  unionValue?: XmlUnionShape | undefined;
}

/**
 * @public
 */
export interface RecursiveShapesRequest {
  nested?: RecursiveShapesInputOutputNested1 | undefined;
}

/**
 * @public
 */
export interface RecursiveShapesResponse {
  nested?: RecursiveShapesInputOutputNested1 | undefined;
}
