// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { RestXmlProtocolServiceException as __BaseException } from "./RestXmlProtocolServiceException";

export interface GreetingStruct {
  hi?: string;
}

/**
 * @internal
 */
export const GreetingStructFilterSensitiveLog = (obj: GreetingStruct): any => ({
  ...obj,
});

export enum FooEnum {
  BAR = "Bar",
  BAZ = "Baz",
  FOO = "Foo",
  ONE = "1",
  ZERO = "0",
}

export enum IntegerEnum {
  A = 1,
  B = 2,
  C = 3,
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
  queryIntegerEnum?: IntegerEnum | number;
  queryIntegerEnumList?: (IntegerEnum | number)[];
  queryParamsMapOfStrings?: Record<string, string>;
}

/**
 * @internal
 */
export const AllQueryStringTypesInputFilterSensitiveLog = (obj: AllQueryStringTypesInput): any => ({
  ...obj,
});

export interface PayloadWithXmlName {
  name?: string;
}

/**
 * @internal
 */
export const PayloadWithXmlNameFilterSensitiveLog = (obj: PayloadWithXmlName): any => ({
  ...obj,
});

export interface BodyWithXmlNameInputOutput {
  nested?: PayloadWithXmlName;
}

/**
 * @internal
 */
export const BodyWithXmlNameInputOutputFilterSensitiveLog = (obj: BodyWithXmlNameInputOutput): any => ({
  ...obj,
});

export interface ComplexNestedErrorData {
  Foo?: string;
}

/**
 * @internal
 */
export const ComplexNestedErrorDataFilterSensitiveLog = (obj: ComplexNestedErrorData): any => ({
  ...obj,
});

/**
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

export interface ConstantAndVariableQueryStringInput {
  baz?: string;
  maybeSet?: string;
}

/**
 * @internal
 */
export const ConstantAndVariableQueryStringInputFilterSensitiveLog = (
  obj: ConstantAndVariableQueryStringInput
): any => ({
  ...obj,
});

export interface ConstantQueryStringInput {
  hello: string | undefined;
}

/**
 * @internal
 */
export const ConstantQueryStringInputFilterSensitiveLog = (obj: ConstantQueryStringInput): any => ({
  ...obj,
});

export interface DatetimeOffsetsOutput {
  datetime?: Date;
}

/**
 * @internal
 */
export const DatetimeOffsetsOutputFilterSensitiveLog = (obj: DatetimeOffsetsOutput): any => ({
  ...obj,
});

export interface EmptyInputAndEmptyOutputInput {}

/**
 * @internal
 */
export const EmptyInputAndEmptyOutputInputFilterSensitiveLog = (obj: EmptyInputAndEmptyOutputInput): any => ({
  ...obj,
});

export interface EmptyInputAndEmptyOutputOutput {}

/**
 * @internal
 */
export const EmptyInputAndEmptyOutputOutputFilterSensitiveLog = (obj: EmptyInputAndEmptyOutputOutput): any => ({
  ...obj,
});

export interface HostLabelHeaderInput {
  accountId: string | undefined;
}

/**
 * @internal
 */
export const HostLabelHeaderInputFilterSensitiveLog = (obj: HostLabelHeaderInput): any => ({
  ...obj,
});

export interface HostLabelInput {
  label: string | undefined;
}

/**
 * @internal
 */
export const HostLabelInputFilterSensitiveLog = (obj: HostLabelInput): any => ({
  ...obj,
});

export interface FlattenedXmlMapInputOutput {
  myMap?: Record<string, FooEnum | string>;
}

/**
 * @internal
 */
export const FlattenedXmlMapInputOutputFilterSensitiveLog = (obj: FlattenedXmlMapInputOutput): any => ({
  ...obj,
});

export interface FlattenedXmlMapWithXmlNameInputOutput {
  myMap?: Record<string, string>;
}

/**
 * @internal
 */
export const FlattenedXmlMapWithXmlNameInputOutputFilterSensitiveLog = (
  obj: FlattenedXmlMapWithXmlNameInputOutput
): any => ({
  ...obj,
});

export interface FlattenedXmlMapWithXmlNamespaceOutput {
  myMap?: Record<string, string>;
}

/**
 * @internal
 */
export const FlattenedXmlMapWithXmlNamespaceOutputFilterSensitiveLog = (
  obj: FlattenedXmlMapWithXmlNamespaceOutput
): any => ({
  ...obj,
});

export interface GreetingWithErrorsOutput {
  greeting?: string;
}

/**
 * @internal
 */
export const GreetingWithErrorsOutputFilterSensitiveLog = (obj: GreetingWithErrorsOutput): any => ({
  ...obj,
});

/**
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

export interface HttpPayloadTraitsInputOutput {
  foo?: string;
  blob?: Uint8Array;
}

/**
 * @internal
 */
export const HttpPayloadTraitsInputOutputFilterSensitiveLog = (obj: HttpPayloadTraitsInputOutput): any => ({
  ...obj,
});

export interface HttpPayloadTraitsWithMediaTypeInputOutput {
  foo?: string;
  blob?: Uint8Array;
}

/**
 * @internal
 */
export const HttpPayloadTraitsWithMediaTypeInputOutputFilterSensitiveLog = (
  obj: HttpPayloadTraitsWithMediaTypeInputOutput
): any => ({
  ...obj,
});

export interface HttpPayloadWithMemberXmlNameInputOutput {
  nested?: PayloadWithXmlName;
}

/**
 * @internal
 */
export const HttpPayloadWithMemberXmlNameInputOutputFilterSensitiveLog = (
  obj: HttpPayloadWithMemberXmlNameInputOutput
): any => ({
  ...obj,
});

export interface NestedPayload {
  greeting?: string;
  name?: string;
}

/**
 * @internal
 */
export const NestedPayloadFilterSensitiveLog = (obj: NestedPayload): any => ({
  ...obj,
});

export interface HttpPayloadWithStructureInputOutput {
  nested?: NestedPayload;
}

/**
 * @internal
 */
export const HttpPayloadWithStructureInputOutputFilterSensitiveLog = (
  obj: HttpPayloadWithStructureInputOutput
): any => ({
  ...obj,
});

export interface HttpPayloadWithXmlNameInputOutput {
  nested?: PayloadWithXmlName;
}

/**
 * @internal
 */
export const HttpPayloadWithXmlNameInputOutputFilterSensitiveLog = (obj: HttpPayloadWithXmlNameInputOutput): any => ({
  ...obj,
});

export interface PayloadWithXmlNamespace {
  name?: string;
}

/**
 * @internal
 */
export const PayloadWithXmlNamespaceFilterSensitiveLog = (obj: PayloadWithXmlNamespace): any => ({
  ...obj,
});

export interface HttpPayloadWithXmlNamespaceInputOutput {
  nested?: PayloadWithXmlNamespace;
}

/**
 * @internal
 */
export const HttpPayloadWithXmlNamespaceInputOutputFilterSensitiveLog = (
  obj: HttpPayloadWithXmlNamespaceInputOutput
): any => ({
  ...obj,
});

export interface PayloadWithXmlNamespaceAndPrefix {
  name?: string;
}

/**
 * @internal
 */
export const PayloadWithXmlNamespaceAndPrefixFilterSensitiveLog = (obj: PayloadWithXmlNamespaceAndPrefix): any => ({
  ...obj,
});

export interface HttpPayloadWithXmlNamespaceAndPrefixInputOutput {
  nested?: PayloadWithXmlNamespaceAndPrefix;
}

/**
 * @internal
 */
export const HttpPayloadWithXmlNamespaceAndPrefixInputOutputFilterSensitiveLog = (
  obj: HttpPayloadWithXmlNamespaceAndPrefixInputOutput
): any => ({
  ...obj,
});

export interface HttpPrefixHeadersInputOutput {
  foo?: string;
  fooMap?: Record<string, string>;
}

/**
 * @internal
 */
export const HttpPrefixHeadersInputOutputFilterSensitiveLog = (obj: HttpPrefixHeadersInputOutput): any => ({
  ...obj,
});

export interface HttpRequestWithFloatLabelsInput {
  float: number | undefined;
  double: number | undefined;
}

/**
 * @internal
 */
export const HttpRequestWithFloatLabelsInputFilterSensitiveLog = (obj: HttpRequestWithFloatLabelsInput): any => ({
  ...obj,
});

export interface HttpRequestWithGreedyLabelInPathInput {
  foo: string | undefined;
  baz: string | undefined;
}

/**
 * @internal
 */
export const HttpRequestWithGreedyLabelInPathInputFilterSensitiveLog = (
  obj: HttpRequestWithGreedyLabelInPathInput
): any => ({
  ...obj,
});

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
 * @internal
 */
export const HttpRequestWithLabelsInputFilterSensitiveLog = (obj: HttpRequestWithLabelsInput): any => ({
  ...obj,
});

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
 * @internal
 */
export const HttpRequestWithLabelsAndTimestampFormatInputFilterSensitiveLog = (
  obj: HttpRequestWithLabelsAndTimestampFormatInput
): any => ({
  ...obj,
});

export interface HttpResponseCodeOutput {
  Status?: number;
}

/**
 * @internal
 */
export const HttpResponseCodeOutputFilterSensitiveLog = (obj: HttpResponseCodeOutput): any => ({
  ...obj,
});

export interface IgnoreQueryParamsInResponseOutput {
  baz?: string;
}

/**
 * @internal
 */
export const IgnoreQueryParamsInResponseOutputFilterSensitiveLog = (obj: IgnoreQueryParamsInResponseOutput): any => ({
  ...obj,
});

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
 * @internal
 */
export const InputAndOutputWithHeadersIOFilterSensitiveLog = (obj: InputAndOutputWithHeadersIO): any => ({
  ...obj,
});

export interface NestedXmlMapsInputOutput {
  nestedMap?: Record<string, Record<string, FooEnum | string>>;
  flatNestedMap?: Record<string, Record<string, FooEnum | string>>;
}

/**
 * @internal
 */
export const NestedXmlMapsInputOutputFilterSensitiveLog = (obj: NestedXmlMapsInputOutput): any => ({
  ...obj,
});

export interface NoInputAndOutputOutput {}

/**
 * @internal
 */
export const NoInputAndOutputOutputFilterSensitiveLog = (obj: NoInputAndOutputOutput): any => ({
  ...obj,
});

export interface NullAndEmptyHeadersIO {
  a?: string;
  b?: string;
  c?: string[];
}

/**
 * @internal
 */
export const NullAndEmptyHeadersIOFilterSensitiveLog = (obj: NullAndEmptyHeadersIO): any => ({
  ...obj,
});

export interface OmitsNullSerializesEmptyStringInput {
  nullValue?: string;
  emptyString?: string;
}

/**
 * @internal
 */
export const OmitsNullSerializesEmptyStringInputFilterSensitiveLog = (
  obj: OmitsNullSerializesEmptyStringInput
): any => ({
  ...obj,
});

export interface QueryIdempotencyTokenAutoFillInput {
  token?: string;
}

/**
 * @internal
 */
export const QueryIdempotencyTokenAutoFillInputFilterSensitiveLog = (obj: QueryIdempotencyTokenAutoFillInput): any => ({
  ...obj,
});

export interface QueryParamsAsStringListMapInput {
  qux?: string;
  foo?: Record<string, string[]>;
}

/**
 * @internal
 */
export const QueryParamsAsStringListMapInputFilterSensitiveLog = (obj: QueryParamsAsStringListMapInput): any => ({
  ...obj,
});

export interface QueryPrecedenceInput {
  foo?: string;
  baz?: Record<string, string>;
}

/**
 * @internal
 */
export const QueryPrecedenceInputFilterSensitiveLog = (obj: QueryPrecedenceInput): any => ({
  ...obj,
});

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
 * @internal
 */
export const SimpleScalarPropertiesInputOutputFilterSensitiveLog = (obj: SimpleScalarPropertiesInputOutput): any => ({
  ...obj,
});

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
 * @internal
 */
export const TimestampFormatHeadersIOFilterSensitiveLog = (obj: TimestampFormatHeadersIO): any => ({
  ...obj,
});

export interface XmlAttributesInputOutput {
  foo?: string;
  attr?: string;
}

/**
 * @internal
 */
export const XmlAttributesInputOutputFilterSensitiveLog = (obj: XmlAttributesInputOutput): any => ({
  ...obj,
});

export interface XmlAttributesOnPayloadInputOutput {
  payload?: XmlAttributesInputOutput;
}

/**
 * @internal
 */
export const XmlAttributesOnPayloadInputOutputFilterSensitiveLog = (obj: XmlAttributesOnPayloadInputOutput): any => ({
  ...obj,
});

export interface XmlBlobsInputOutput {
  data?: Uint8Array;
}

/**
 * @internal
 */
export const XmlBlobsInputOutputFilterSensitiveLog = (obj: XmlBlobsInputOutput): any => ({
  ...obj,
});

export interface StructureListMember {
  a?: string;
  b?: string;
}

/**
 * @internal
 */
export const StructureListMemberFilterSensitiveLog = (obj: StructureListMember): any => ({
  ...obj,
});

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
 * @internal
 */
export const XmlListsInputOutputFilterSensitiveLog = (obj: XmlListsInputOutput): any => ({
  ...obj,
});

export interface XmlMapsInputOutput {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @internal
 */
export const XmlMapsInputOutputFilterSensitiveLog = (obj: XmlMapsInputOutput): any => ({
  ...obj,
});

export interface XmlEmptyStringsInputOutput {
  emptyString?: string;
}

/**
 * @internal
 */
export const XmlEmptyStringsInputOutputFilterSensitiveLog = (obj: XmlEmptyStringsInputOutput): any => ({
  ...obj,
});

export interface XmlEnumsInputOutput {
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumSet?: (FooEnum | string)[];
  fooEnumMap?: Record<string, FooEnum | string>;
}

/**
 * @internal
 */
export const XmlEnumsInputOutputFilterSensitiveLog = (obj: XmlEnumsInputOutput): any => ({
  ...obj,
});

export interface XmlIntEnumsInputOutput {
  intEnum1?: IntegerEnum | number;
  intEnum2?: IntegerEnum | number;
  intEnum3?: IntegerEnum | number;
  intEnumList?: (IntegerEnum | number)[];
  intEnumSet?: (IntegerEnum | number)[];
  intEnumMap?: Record<string, IntegerEnum | number>;
}

/**
 * @internal
 */
export const XmlIntEnumsInputOutputFilterSensitiveLog = (obj: XmlIntEnumsInputOutput): any => ({
  ...obj,
});

export interface XmlMapsXmlNameInputOutput {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @internal
 */
export const XmlMapsXmlNameInputOutputFilterSensitiveLog = (obj: XmlMapsXmlNameInputOutput): any => ({
  ...obj,
});

export interface XmlNamespaceNested {
  foo?: string;
  values?: string[];
}

/**
 * @internal
 */
export const XmlNamespaceNestedFilterSensitiveLog = (obj: XmlNamespaceNested): any => ({
  ...obj,
});

export interface XmlNamespacesInputOutput {
  nested?: XmlNamespaceNested;
}

/**
 * @internal
 */
export const XmlNamespacesInputOutputFilterSensitiveLog = (obj: XmlNamespacesInputOutput): any => ({
  ...obj,
});

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
 * @internal
 */
export const XmlTimestampsInputOutputFilterSensitiveLog = (obj: XmlTimestampsInputOutput): any => ({
  ...obj,
});

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
 * @internal
 */
export const XmlNestedUnionStructFilterSensitiveLog = (obj: XmlNestedUnionStruct): any => ({
  ...obj,
});

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
}
/**
 * @internal
 */
export const XmlUnionShapeFilterSensitiveLog = (obj: XmlUnionShape): any => {
  if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
  if (obj.booleanValue !== undefined) return { booleanValue: obj.booleanValue };
  if (obj.byteValue !== undefined) return { byteValue: obj.byteValue };
  if (obj.shortValue !== undefined) return { shortValue: obj.shortValue };
  if (obj.integerValue !== undefined) return { integerValue: obj.integerValue };
  if (obj.longValue !== undefined) return { longValue: obj.longValue };
  if (obj.floatValue !== undefined) return { floatValue: obj.floatValue };
  if (obj.doubleValue !== undefined) return { doubleValue: obj.doubleValue };
  if (obj.unionValue !== undefined) return { unionValue: XmlUnionShapeFilterSensitiveLog(obj.unionValue) };
  if (obj.structValue !== undefined) return { structValue: XmlNestedUnionStructFilterSensitiveLog(obj.structValue) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

export interface RecursiveShapesInputOutputNested1 {
  foo?: string;
  nested?: RecursiveShapesInputOutputNested2;
}

/**
 * @internal
 */
export const RecursiveShapesInputOutputNested1FilterSensitiveLog = (obj: RecursiveShapesInputOutputNested1): any => ({
  ...obj,
});

export interface RecursiveShapesInputOutputNested2 {
  bar?: string;
  recursiveMember?: RecursiveShapesInputOutputNested1;
}

/**
 * @internal
 */
export const RecursiveShapesInputOutputNested2FilterSensitiveLog = (obj: RecursiveShapesInputOutputNested2): any => ({
  ...obj,
});

export interface XmlUnionsInputOutput {
  unionValue?: XmlUnionShape;
}

/**
 * @internal
 */
export const XmlUnionsInputOutputFilterSensitiveLog = (obj: XmlUnionsInputOutput): any => ({
  ...obj,
  ...(obj.unionValue && { unionValue: XmlUnionShapeFilterSensitiveLog(obj.unionValue) }),
});

export interface RecursiveShapesInputOutput {
  nested?: RecursiveShapesInputOutputNested1;
}

/**
 * @internal
 */
export const RecursiveShapesInputOutputFilterSensitiveLog = (obj: RecursiveShapesInputOutput): any => ({
  ...obj,
});
