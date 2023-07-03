// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RestXmlProtocolServiceException as __BaseException } from "./RestXmlProtocolServiceException";

/**
 * @public
 */
export interface GreetingStruct {
  hi?: string;
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
  queryIntegerEnum?: IntegerEnum | number;
  queryIntegerEnumList?: (IntegerEnum | number)[];
  queryParamsMapOfStrings?: Record<string, string>;
}

/**
 * @public
 */
export interface PayloadWithXmlName {
  name?: string;
}

/**
 * @public
 */
export interface BodyWithXmlNameInputOutput {
  nested?: PayloadWithXmlName;
}

/**
 * @public
 */
export interface ComplexNestedErrorData {
  Foo?: string;
}

/**
 * @public
 * This error is thrown when a request is invalid.
 */
export class ComplexError extends __BaseException {
  readonly name: "ComplexError" = "ComplexError";
  readonly $fault: "client" = "client";
  Header?: string;
  TopLevel?: string;
  Nested?: ComplexNestedErrorData;
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
  baz?: string;
  maybeSet?: string;
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
export interface DatetimeOffsetsOutput {
  datetime?: Date;
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
export interface HostLabelInput {
  label: string | undefined;
}

/**
 * @public
 */
export interface FlattenedXmlMapInputOutput {
  myMap?: Record<string, FooEnum | string>;
}

/**
 * @public
 */
export interface FlattenedXmlMapWithXmlNameInputOutput {
  myMap?: Record<string, string>;
}

/**
 * @public
 */
export interface FlattenedXmlMapWithXmlNamespaceOutput {
  myMap?: Record<string, string>;
}

/**
 * @public
 */
export interface FractionalSecondsOutput {
  datetime?: Date;
  httpdate?: Date;
}

/**
 * @public
 */
export interface GreetingWithErrorsOutput {
  greeting?: string;
}

/**
 * @public
 * This error is thrown when an invalid greeting value is provided.
 */
export class InvalidGreeting extends __BaseException {
  readonly name: "InvalidGreeting" = "InvalidGreeting";
  readonly $fault: "client" = "client";
  Message?: string;
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
export interface HttpPayloadTraitsInputOutput {
  foo?: string;
  blob?: Uint8Array;
}

/**
 * @public
 */
export interface HttpPayloadTraitsWithMediaTypeInputOutput {
  foo?: string;
  blob?: Uint8Array;
}

/**
 * @public
 */
export interface HttpPayloadWithMemberXmlNameInputOutput {
  nested?: PayloadWithXmlName;
}

/**
 * @public
 */
export interface NestedPayload {
  greeting?: string;
  name?: string;
}

/**
 * @public
 */
export interface HttpPayloadWithStructureInputOutput {
  nested?: NestedPayload;
}

/**
 * @public
 */
export interface HttpPayloadWithXmlNameInputOutput {
  nested?: PayloadWithXmlName;
}

/**
 * @public
 */
export interface PayloadWithXmlNamespace {
  name?: string;
}

/**
 * @public
 */
export interface HttpPayloadWithXmlNamespaceInputOutput {
  nested?: PayloadWithXmlNamespace;
}

/**
 * @public
 */
export interface PayloadWithXmlNamespaceAndPrefix {
  name?: string;
}

/**
 * @public
 */
export interface HttpPayloadWithXmlNamespaceAndPrefixInputOutput {
  nested?: PayloadWithXmlNamespaceAndPrefix;
}

/**
 * @public
 */
export interface HttpPrefixHeadersInputOutput {
  foo?: string;
  fooMap?: Record<string, string>;
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
   */
  boolean: boolean | undefined;

  /**
   * Note that this member has no format, so it's serialized as an RFC 3399 date-time.
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
  Status?: number;
}

/**
 * @public
 */
export interface IgnoreQueryParamsInResponseOutput {
  baz?: string;
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface NestedXmlMapsInputOutput {
  nestedMap?: Record<string, Record<string, FooEnum | string>>;
  flatNestedMap?: Record<string, Record<string, FooEnum | string>>;
}

/**
 * @public
 */
export interface NoInputAndOutputOutput {}

/**
 * @public
 */
export interface NullAndEmptyHeadersIO {
  a?: string;
  b?: string;
  c?: string[];
}

/**
 * @public
 */
export interface OmitsNullSerializesEmptyStringInput {
  nullValue?: string;
  emptyString?: string;
}

/**
 * @public
 */
export interface PutWithContentEncodingInput {
  encoding?: string;
  data?: string;
}

/**
 * @public
 */
export interface QueryIdempotencyTokenAutoFillInput {
  token?: string;
}

/**
 * @public
 */
export interface QueryParamsAsStringListMapInput {
  qux?: string;
  foo?: Record<string, string[]>;
}

/**
 * @public
 */
export interface QueryPrecedenceInput {
  foo?: string;
  baz?: Record<string, string>;
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface TimestampFormatHeadersIO {
  memberEpochSeconds?: Date;
  memberHttpDate?: Date;
  memberDateTime?: Date;
  defaultFormat?: Date;
  targetEpochSeconds?: Date;
  targetHttpDate?: Date;
  targetDateTime?: Date;
}

/**
 * @public
 */
export interface XmlAttributesInputOutput {
  foo?: string;
  attr?: string;
}

/**
 * @public
 */
export interface XmlAttributesOnPayloadInputOutput {
  payload?: XmlAttributesInputOutput;
}

/**
 * @public
 */
export interface XmlBlobsInputOutput {
  data?: Uint8Array;
}

/**
 * @public
 */
export interface StructureListMember {
  a?: string;
  b?: string;
}

/**
 * @public
 */
export interface XmlListsInputOutput {
  stringList?: string[];
  stringSet?: string[];
  integerList?: number[];
  booleanList?: boolean[];
  timestampList?: Date[];
  enumList?: (FooEnum | string)[];
  intEnumList?: (IntegerEnum | number)[];
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

/**
 * @public
 */
export interface XmlMapsInputOutput {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @public
 */
export interface XmlEmptyStringsInputOutput {
  emptyString?: string;
}

/**
 * @public
 */
export interface XmlEnumsInputOutput {
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumSet?: (FooEnum | string)[];
  fooEnumMap?: Record<string, FooEnum | string>;
}

/**
 * @public
 */
export interface XmlIntEnumsInputOutput {
  intEnum1?: IntegerEnum | number;
  intEnum2?: IntegerEnum | number;
  intEnum3?: IntegerEnum | number;
  intEnumList?: (IntegerEnum | number)[];
  intEnumSet?: (IntegerEnum | number)[];
  intEnumMap?: Record<string, IntegerEnum | number>;
}

/**
 * @public
 */
export interface XmlMapsXmlNameInputOutput {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @public
 */
export interface XmlNamespaceNested {
  foo?: string;
  values?: string[];
}

/**
 * @public
 */
export interface XmlNamespacesInputOutput {
  nested?: XmlNamespaceNested;
}

/**
 * @public
 */
export interface XmlTimestampsInputOutput {
  normal?: Date;
  dateTime?: Date;
  dateTimeOnTarget?: Date;
  epochSeconds?: Date;
  epochSecondsOnTarget?: Date;
  httpDate?: Date;
  httpDateOnTarget?: Date;
}

/**
 * @public
 */
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
  foo?: string;
  nested?: RecursiveShapesInputOutputNested2;
}

/**
 * @public
 */
export interface RecursiveShapesInputOutputNested2 {
  bar?: string;
  recursiveMember?: RecursiveShapesInputOutputNested1;
}

/**
 * @public
 */
export interface XmlUnionsInputOutput {
  unionValue?: XmlUnionShape;
}

/**
 * @public
 */
export interface RecursiveShapesInputOutput {
  nested?: RecursiveShapesInputOutputNested1;
}
