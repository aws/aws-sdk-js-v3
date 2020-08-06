import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AllQueryStringTypesInput {
  __type?: "AllQueryStringTypesInput";
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
}

export namespace AllQueryStringTypesInput {
  export const filterSensitiveLog = (obj: AllQueryStringTypesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AllQueryStringTypesInput => __isa(o, "AllQueryStringTypesInput");
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
  export const filterSensitiveLog = (obj: ComplexError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ComplexError => __isa(o, "ComplexError");
}

export interface ComplexNestedErrorData {
  __type?: "ComplexNestedErrorData";
  Foo?: string;
}

export namespace ComplexNestedErrorData {
  export const filterSensitiveLog = (obj: ComplexNestedErrorData): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ComplexNestedErrorData => __isa(o, "ComplexNestedErrorData");
}

export interface ConstantAndVariableQueryStringInput {
  __type?: "ConstantAndVariableQueryStringInput";
  baz?: string;
  maybeSet?: string;
}

export namespace ConstantAndVariableQueryStringInput {
  export const filterSensitiveLog = (obj: ConstantAndVariableQueryStringInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConstantAndVariableQueryStringInput =>
    __isa(o, "ConstantAndVariableQueryStringInput");
}

export interface ConstantQueryStringInput {
  __type?: "ConstantQueryStringInput";
  hello: string | undefined;
}

export namespace ConstantQueryStringInput {
  export const filterSensitiveLog = (obj: ConstantQueryStringInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConstantQueryStringInput => __isa(o, "ConstantQueryStringInput");
}

export interface EmptyInputAndEmptyOutputInput {
  __type?: "EmptyInputAndEmptyOutputInput";
}

export namespace EmptyInputAndEmptyOutputInput {
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmptyInputAndEmptyOutputInput => __isa(o, "EmptyInputAndEmptyOutputInput");
}

export interface EmptyInputAndEmptyOutputOutput {
  __type?: "EmptyInputAndEmptyOutputOutput";
}

export namespace EmptyInputAndEmptyOutputOutput {
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmptyInputAndEmptyOutputOutput => __isa(o, "EmptyInputAndEmptyOutputOutput");
}

export interface FlattenedXmlMapInputOutput {
  __type?: "FlattenedXmlMapInputOutput";
  myMap?: { [key: string]: FooEnum | string };
}

export namespace FlattenedXmlMapInputOutput {
  export const filterSensitiveLog = (obj: FlattenedXmlMapInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FlattenedXmlMapInputOutput => __isa(o, "FlattenedXmlMapInputOutput");
}

export interface FlattenedXmlMapWithXmlNameInputOutput {
  __type?: "FlattenedXmlMapWithXmlNameInputOutput";
  myMap?: { [key: string]: string };
}

export namespace FlattenedXmlMapWithXmlNameInputOutput {
  export const filterSensitiveLog = (obj: FlattenedXmlMapWithXmlNameInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FlattenedXmlMapWithXmlNameInputOutput =>
    __isa(o, "FlattenedXmlMapWithXmlNameInputOutput");
}

export interface GreetingWithErrorsOutput {
  __type?: "GreetingWithErrorsOutput";
  greeting?: string;
}

export namespace GreetingWithErrorsOutput {
  export const filterSensitiveLog = (obj: GreetingWithErrorsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GreetingWithErrorsOutput => __isa(o, "GreetingWithErrorsOutput");
}

export interface HttpPayloadTraitsInputOutput {
  __type?: "HttpPayloadTraitsInputOutput";
  foo?: string;
  blob?: Uint8Array;
}

export namespace HttpPayloadTraitsInputOutput {
  export const filterSensitiveLog = (obj: HttpPayloadTraitsInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HttpPayloadTraitsInputOutput => __isa(o, "HttpPayloadTraitsInputOutput");
}

export interface HttpPayloadTraitsWithMediaTypeInputOutput {
  __type?: "HttpPayloadTraitsWithMediaTypeInputOutput";
  foo?: string;
  blob?: Uint8Array;
}

export namespace HttpPayloadTraitsWithMediaTypeInputOutput {
  export const filterSensitiveLog = (obj: HttpPayloadTraitsWithMediaTypeInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HttpPayloadTraitsWithMediaTypeInputOutput =>
    __isa(o, "HttpPayloadTraitsWithMediaTypeInputOutput");
}

export interface HttpPayloadWithStructureInputOutput {
  __type?: "HttpPayloadWithStructureInputOutput";
  nested?: NestedPayload;
}

export namespace HttpPayloadWithStructureInputOutput {
  export const filterSensitiveLog = (obj: HttpPayloadWithStructureInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HttpPayloadWithStructureInputOutput =>
    __isa(o, "HttpPayloadWithStructureInputOutput");
}

export interface HttpPayloadWithXmlNameInputOutput {
  __type?: "HttpPayloadWithXmlNameInputOutput";
  nested?: PayloadWithXmlName;
}

export namespace HttpPayloadWithXmlNameInputOutput {
  export const filterSensitiveLog = (obj: HttpPayloadWithXmlNameInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HttpPayloadWithXmlNameInputOutput => __isa(o, "HttpPayloadWithXmlNameInputOutput");
}

export interface HttpPayloadWithXmlNamespaceAndPrefixInputOutput {
  __type?: "HttpPayloadWithXmlNamespaceAndPrefixInputOutput";
  nested?: PayloadWithXmlNamespaceAndPrefix;
}

export namespace HttpPayloadWithXmlNamespaceAndPrefixInputOutput {
  export const filterSensitiveLog = (obj: HttpPayloadWithXmlNamespaceAndPrefixInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HttpPayloadWithXmlNamespaceAndPrefixInputOutput =>
    __isa(o, "HttpPayloadWithXmlNamespaceAndPrefixInputOutput");
}

export interface HttpPayloadWithXmlNamespaceInputOutput {
  __type?: "HttpPayloadWithXmlNamespaceInputOutput";
  nested?: PayloadWithXmlNamespace;
}

export namespace HttpPayloadWithXmlNamespaceInputOutput {
  export const filterSensitiveLog = (obj: HttpPayloadWithXmlNamespaceInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HttpPayloadWithXmlNamespaceInputOutput =>
    __isa(o, "HttpPayloadWithXmlNamespaceInputOutput");
}

export interface HttpPrefixHeadersInputOutput {
  __type?: "HttpPrefixHeadersInputOutput";
  foo?: string;
  fooMap?: { [key: string]: string };
}

export namespace HttpPrefixHeadersInputOutput {
  export const filterSensitiveLog = (obj: HttpPrefixHeadersInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HttpPrefixHeadersInputOutput => __isa(o, "HttpPrefixHeadersInputOutput");
}

export interface HttpRequestWithGreedyLabelInPathInput {
  __type?: "HttpRequestWithGreedyLabelInPathInput";
  foo: string | undefined;
  baz: string | undefined;
}

export namespace HttpRequestWithGreedyLabelInPathInput {
  export const filterSensitiveLog = (obj: HttpRequestWithGreedyLabelInPathInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HttpRequestWithGreedyLabelInPathInput =>
    __isa(o, "HttpRequestWithGreedyLabelInPathInput");
}

export interface HttpRequestWithLabelsAndTimestampFormatInput {
  __type?: "HttpRequestWithLabelsAndTimestampFormatInput";
  memberEpochSeconds: Date | undefined;
  memberHttpDate: Date | undefined;
  memberDateTime: Date | undefined;
  defaultFormat: Date | undefined;
  targetEpochSeconds: Date | undefined;
  targetHttpDate: Date | undefined;
  targetDateTime: Date | undefined;
}

export namespace HttpRequestWithLabelsAndTimestampFormatInput {
  export const filterSensitiveLog = (obj: HttpRequestWithLabelsAndTimestampFormatInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HttpRequestWithLabelsAndTimestampFormatInput =>
    __isa(o, "HttpRequestWithLabelsAndTimestampFormatInput");
}

export interface HttpRequestWithLabelsInput {
  __type?: "HttpRequestWithLabelsInput";
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
  export const filterSensitiveLog = (obj: HttpRequestWithLabelsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HttpRequestWithLabelsInput => __isa(o, "HttpRequestWithLabelsInput");
}

export interface IgnoreQueryParamsInResponseOutput {
  __type?: "IgnoreQueryParamsInResponseOutput";
  baz?: string;
}

export namespace IgnoreQueryParamsInResponseOutput {
  export const filterSensitiveLog = (obj: IgnoreQueryParamsInResponseOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IgnoreQueryParamsInResponseOutput => __isa(o, "IgnoreQueryParamsInResponseOutput");
}

export interface InputAndOutputWithHeadersIO {
  __type?: "InputAndOutputWithHeadersIO";
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
  export const filterSensitiveLog = (obj: InputAndOutputWithHeadersIO): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InputAndOutputWithHeadersIO => __isa(o, "InputAndOutputWithHeadersIO");
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
  export const filterSensitiveLog = (obj: InvalidGreeting): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidGreeting => __isa(o, "InvalidGreeting");
}

export interface NestedPayload {
  __type?: "NestedPayload";
  greeting?: string;
  name?: string;
}

export namespace NestedPayload {
  export const filterSensitiveLog = (obj: NestedPayload): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NestedPayload => __isa(o, "NestedPayload");
}

export interface NoInputAndOutputOutput {
  __type?: "NoInputAndOutputOutput";
}

export namespace NoInputAndOutputOutput {
  export const filterSensitiveLog = (obj: NoInputAndOutputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NoInputAndOutputOutput => __isa(o, "NoInputAndOutputOutput");
}

export interface NullAndEmptyHeadersIO {
  __type?: "NullAndEmptyHeadersIO";
  a?: string;
  b?: string;
  c?: string[];
}

export namespace NullAndEmptyHeadersIO {
  export const filterSensitiveLog = (obj: NullAndEmptyHeadersIO): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NullAndEmptyHeadersIO => __isa(o, "NullAndEmptyHeadersIO");
}

export interface OmitsNullSerializesEmptyStringInput {
  __type?: "OmitsNullSerializesEmptyStringInput";
  nullValue?: string;
  emptyString?: string;
}

export namespace OmitsNullSerializesEmptyStringInput {
  export const filterSensitiveLog = (obj: OmitsNullSerializesEmptyStringInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OmitsNullSerializesEmptyStringInput =>
    __isa(o, "OmitsNullSerializesEmptyStringInput");
}

export interface PayloadWithXmlName {
  __type?: "PayloadWithXmlName";
  name?: string;
}

export namespace PayloadWithXmlName {
  export const filterSensitiveLog = (obj: PayloadWithXmlName): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PayloadWithXmlName => __isa(o, "PayloadWithXmlName");
}

export interface PayloadWithXmlNamespace {
  __type?: "PayloadWithXmlNamespace";
  name?: string;
}

export namespace PayloadWithXmlNamespace {
  export const filterSensitiveLog = (obj: PayloadWithXmlNamespace): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PayloadWithXmlNamespace => __isa(o, "PayloadWithXmlNamespace");
}

export interface PayloadWithXmlNamespaceAndPrefix {
  __type?: "PayloadWithXmlNamespaceAndPrefix";
  name?: string;
}

export namespace PayloadWithXmlNamespaceAndPrefix {
  export const filterSensitiveLog = (obj: PayloadWithXmlNamespaceAndPrefix): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PayloadWithXmlNamespaceAndPrefix => __isa(o, "PayloadWithXmlNamespaceAndPrefix");
}

export interface QueryIdempotencyTokenAutoFillInput {
  __type?: "QueryIdempotencyTokenAutoFillInput";
  token?: string;
}

export namespace QueryIdempotencyTokenAutoFillInput {
  export const filterSensitiveLog = (obj: QueryIdempotencyTokenAutoFillInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryIdempotencyTokenAutoFillInput =>
    __isa(o, "QueryIdempotencyTokenAutoFillInput");
}

export interface RecursiveShapesInputOutput {
  __type?: "RecursiveShapesInputOutput";
  nested?: RecursiveShapesInputOutputNested1;
}

export namespace RecursiveShapesInputOutput {
  export const filterSensitiveLog = (obj: RecursiveShapesInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecursiveShapesInputOutput => __isa(o, "RecursiveShapesInputOutput");
}

export interface RecursiveShapesInputOutputNested1 {
  __type?: "RecursiveShapesInputOutputNested1";
  foo?: string;
  nested?: RecursiveShapesInputOutputNested2;
}

export namespace RecursiveShapesInputOutputNested1 {
  export const filterSensitiveLog = (obj: RecursiveShapesInputOutputNested1): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecursiveShapesInputOutputNested1 => __isa(o, "RecursiveShapesInputOutputNested1");
}

export interface RecursiveShapesInputOutputNested2 {
  __type?: "RecursiveShapesInputOutputNested2";
  bar?: string;
  recursiveMember?: RecursiveShapesInputOutputNested1;
}

export namespace RecursiveShapesInputOutputNested2 {
  export const filterSensitiveLog = (obj: RecursiveShapesInputOutputNested2): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecursiveShapesInputOutputNested2 => __isa(o, "RecursiveShapesInputOutputNested2");
}

export interface SimpleScalarPropertiesInputOutput {
  __type?: "SimpleScalarPropertiesInputOutput";
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
  export const filterSensitiveLog = (obj: SimpleScalarPropertiesInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SimpleScalarPropertiesInputOutput => __isa(o, "SimpleScalarPropertiesInputOutput");
}

export interface StructureListMember {
  __type?: "StructureListMember";
  a?: string;
  b?: string;
}

export namespace StructureListMember {
  export const filterSensitiveLog = (obj: StructureListMember): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StructureListMember => __isa(o, "StructureListMember");
}

export interface TimestampFormatHeadersIO {
  __type?: "TimestampFormatHeadersIO";
  memberEpochSeconds?: Date;
  memberHttpDate?: Date;
  memberDateTime?: Date;
  defaultFormat?: Date;
  targetEpochSeconds?: Date;
  targetHttpDate?: Date;
  targetDateTime?: Date;
}

export namespace TimestampFormatHeadersIO {
  export const filterSensitiveLog = (obj: TimestampFormatHeadersIO): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TimestampFormatHeadersIO => __isa(o, "TimestampFormatHeadersIO");
}

export interface XmlAttributesInputOutput {
  __type?: "XmlAttributesInputOutput";
  foo?: string;
  attr?: string;
}

export namespace XmlAttributesInputOutput {
  export const filterSensitiveLog = (obj: XmlAttributesInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlAttributesInputOutput => __isa(o, "XmlAttributesInputOutput");
}

export interface XmlAttributesOnPayloadInputOutput {
  __type?: "XmlAttributesOnPayloadInputOutput";
  payload?: XmlAttributesInputOutput;
}

export namespace XmlAttributesOnPayloadInputOutput {
  export const filterSensitiveLog = (obj: XmlAttributesOnPayloadInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlAttributesOnPayloadInputOutput => __isa(o, "XmlAttributesOnPayloadInputOutput");
}

export interface XmlBlobsInputOutput {
  __type?: "XmlBlobsInputOutput";
  data?: Uint8Array;
}

export namespace XmlBlobsInputOutput {
  export const filterSensitiveLog = (obj: XmlBlobsInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlBlobsInputOutput => __isa(o, "XmlBlobsInputOutput");
}

export interface XmlEnumsInputOutput {
  __type?: "XmlEnumsInputOutput";
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumSet?: (FooEnum | string)[];
  fooEnumMap?: { [key: string]: FooEnum | string };
}

export namespace XmlEnumsInputOutput {
  export const filterSensitiveLog = (obj: XmlEnumsInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlEnumsInputOutput => __isa(o, "XmlEnumsInputOutput");
}

export interface XmlListsInputOutput {
  __type?: "XmlListsInputOutput";
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
  structureList?: StructureListMember[];
}

export namespace XmlListsInputOutput {
  export const filterSensitiveLog = (obj: XmlListsInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlListsInputOutput => __isa(o, "XmlListsInputOutput");
}

export interface XmlMapsInputOutput {
  __type?: "XmlMapsInputOutput";
  myMap?: { [key: string]: GreetingStruct };
}

export namespace XmlMapsInputOutput {
  export const filterSensitiveLog = (obj: XmlMapsInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlMapsInputOutput => __isa(o, "XmlMapsInputOutput");
}

export interface XmlMapsXmlNameInputOutput {
  __type?: "XmlMapsXmlNameInputOutput";
  myMap?: { [key: string]: GreetingStruct };
}

export namespace XmlMapsXmlNameInputOutput {
  export const filterSensitiveLog = (obj: XmlMapsXmlNameInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlMapsXmlNameInputOutput => __isa(o, "XmlMapsXmlNameInputOutput");
}

export interface XmlNamespaceNested {
  __type?: "XmlNamespaceNested";
  foo?: string;
  values?: string[];
}

export namespace XmlNamespaceNested {
  export const filterSensitiveLog = (obj: XmlNamespaceNested): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlNamespaceNested => __isa(o, "XmlNamespaceNested");
}

export interface XmlNamespacesInputOutput {
  __type?: "XmlNamespacesInputOutput";
  nested?: XmlNamespaceNested;
}

export namespace XmlNamespacesInputOutput {
  export const filterSensitiveLog = (obj: XmlNamespacesInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlNamespacesInputOutput => __isa(o, "XmlNamespacesInputOutput");
}

export interface XmlTimestampsInputOutput {
  __type?: "XmlTimestampsInputOutput";
  normal?: Date;
  dateTime?: Date;
  epochSeconds?: Date;
  httpDate?: Date;
}

export namespace XmlTimestampsInputOutput {
  export const filterSensitiveLog = (obj: XmlTimestampsInputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlTimestampsInputOutput => __isa(o, "XmlTimestampsInputOutput");
}

export type FooEnum = "0" | "1" | "Bar" | "Baz" | "Foo";

export interface GreetingStruct {
  __type?: "GreetingStruct";
  hi?: string;
}

export namespace GreetingStruct {
  export const filterSensitiveLog = (obj: GreetingStruct): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GreetingStruct => __isa(o, "GreetingStruct");
}
