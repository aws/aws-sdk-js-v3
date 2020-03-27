import {
  SmithyException as __SmithyException,
  isa as __isa,
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AllQueryStringTypesInput {
  __type?: "AllQueryStringTypesInput";
  queryBoolean?: boolean;
  queryBooleanList?: Array<boolean>;
  queryByte?: number;
  queryDouble?: number;
  queryDoubleList?: Array<number>;
  queryEnum?: FooEnum | string;
  queryEnumList?: Array<FooEnum | string>;
  queryFloat?: number;
  queryInteger?: number;
  queryIntegerList?: Array<number>;
  queryIntegerSet?: Set<number>;
  queryLong?: number;
  queryShort?: number;
  queryString?: string;
  queryStringList?: Array<string>;
  queryStringSet?: Set<string>;
  queryTimestamp?: Date;
  queryTimestampList?: Array<Date>;
}

export namespace AllQueryStringTypesInput {
  export function isa(o: any): o is AllQueryStringTypesInput {
    return __isa(o, "AllQueryStringTypesInput");
  }
}

/**
 * This error is thrown when a request is invalid.
 */
export interface ComplexError extends __SmithyException, $MetadataBearer {
  name: "ComplexError";
  $fault: "client";
  Header?: string;
  Nested?: ComplexNestedErrorData;
  TopLevel?: string;
}

export namespace ComplexError {
  export function isa(o: any): o is ComplexError {
    return __isa(o, "ComplexError");
  }
}

export interface ComplexNestedErrorData {
  __type?: "ComplexNestedErrorData";
  Foo?: string;
}

export namespace ComplexNestedErrorData {
  export function isa(o: any): o is ComplexNestedErrorData {
    return __isa(o, "ComplexNestedErrorData");
  }
}

export interface ConstantAndVariableQueryStringInput {
  __type?: "ConstantAndVariableQueryStringInput";
  baz?: string;
  maybeSet?: string;
}

export namespace ConstantAndVariableQueryStringInput {
  export function isa(o: any): o is ConstantAndVariableQueryStringInput {
    return __isa(o, "ConstantAndVariableQueryStringInput");
  }
}

export interface ConstantQueryStringInput {
  __type?: "ConstantQueryStringInput";
  hello: string | undefined;
}

export namespace ConstantQueryStringInput {
  export function isa(o: any): o is ConstantQueryStringInput {
    return __isa(o, "ConstantQueryStringInput");
  }
}

export interface EmptyInputAndEmptyOutputInput {
  __type?: "EmptyInputAndEmptyOutputInput";
}

export namespace EmptyInputAndEmptyOutputInput {
  export function isa(o: any): o is EmptyInputAndEmptyOutputInput {
    return __isa(o, "EmptyInputAndEmptyOutputInput");
  }
}

export interface EmptyInputAndEmptyOutputOutput {
  __type?: "EmptyInputAndEmptyOutputOutput";
}

export namespace EmptyInputAndEmptyOutputOutput {
  export function isa(o: any): o is EmptyInputAndEmptyOutputOutput {
    return __isa(o, "EmptyInputAndEmptyOutputOutput");
  }
}

export interface FlattenedXmlMapInputOutput {
  __type?: "FlattenedXmlMapInputOutput";
  myMap?: { [key: string]: FooEnum | string };
}

export namespace FlattenedXmlMapInputOutput {
  export function isa(o: any): o is FlattenedXmlMapInputOutput {
    return __isa(o, "FlattenedXmlMapInputOutput");
  }
}

export interface FlattenedXmlMapWithXmlNameInputOutput {
  __type?: "FlattenedXmlMapWithXmlNameInputOutput";
  myMap?: { [key: string]: string };
}

export namespace FlattenedXmlMapWithXmlNameInputOutput {
  export function isa(o: any): o is FlattenedXmlMapWithXmlNameInputOutput {
    return __isa(o, "FlattenedXmlMapWithXmlNameInputOutput");
  }
}

export interface GreetingWithErrorsOutput {
  __type?: "GreetingWithErrorsOutput";
  greeting?: string;
}

export namespace GreetingWithErrorsOutput {
  export function isa(o: any): o is GreetingWithErrorsOutput {
    return __isa(o, "GreetingWithErrorsOutput");
  }
}

export interface HttpPayloadTraitsInputOutput {
  __type?: "HttpPayloadTraitsInputOutput";
  blob?: Uint8Array;
  foo?: string;
}

export namespace HttpPayloadTraitsInputOutput {
  export function isa(o: any): o is HttpPayloadTraitsInputOutput {
    return __isa(o, "HttpPayloadTraitsInputOutput");
  }
}

export interface HttpPayloadTraitsWithMediaTypeInputOutput {
  __type?: "HttpPayloadTraitsWithMediaTypeInputOutput";
  blob?: Uint8Array;
  foo?: string;
}

export namespace HttpPayloadTraitsWithMediaTypeInputOutput {
  export function isa(o: any): o is HttpPayloadTraitsWithMediaTypeInputOutput {
    return __isa(o, "HttpPayloadTraitsWithMediaTypeInputOutput");
  }
}

export interface HttpPayloadWithStructureInputOutput {
  __type?: "HttpPayloadWithStructureInputOutput";
  nested?: NestedPayload;
}

export namespace HttpPayloadWithStructureInputOutput {
  export function isa(o: any): o is HttpPayloadWithStructureInputOutput {
    return __isa(o, "HttpPayloadWithStructureInputOutput");
  }
}

export interface HttpPayloadWithXmlNameInputOutput {
  __type?: "HttpPayloadWithXmlNameInputOutput";
  nested?: PayloadWithXmlName;
}

export namespace HttpPayloadWithXmlNameInputOutput {
  export function isa(o: any): o is HttpPayloadWithXmlNameInputOutput {
    return __isa(o, "HttpPayloadWithXmlNameInputOutput");
  }
}

export interface HttpPayloadWithXmlNamespaceAndPrefixInputOutput {
  __type?: "HttpPayloadWithXmlNamespaceAndPrefixInputOutput";
  nested?: PayloadWithXmlNamespaceAndPrefix;
}

export namespace HttpPayloadWithXmlNamespaceAndPrefixInputOutput {
  export function isa(o: any): o is HttpPayloadWithXmlNamespaceAndPrefixInputOutput {
    return __isa(o, "HttpPayloadWithXmlNamespaceAndPrefixInputOutput");
  }
}

export interface HttpPayloadWithXmlNamespaceInputOutput {
  __type?: "HttpPayloadWithXmlNamespaceInputOutput";
  nested?: PayloadWithXmlNamespace;
}

export namespace HttpPayloadWithXmlNamespaceInputOutput {
  export function isa(o: any): o is HttpPayloadWithXmlNamespaceInputOutput {
    return __isa(o, "HttpPayloadWithXmlNamespaceInputOutput");
  }
}

export interface HttpPrefixHeadersInputOutput {
  __type?: "HttpPrefixHeadersInputOutput";
  foo?: string;
  fooMap?: { [key: string]: string };
}

export namespace HttpPrefixHeadersInputOutput {
  export function isa(o: any): o is HttpPrefixHeadersInputOutput {
    return __isa(o, "HttpPrefixHeadersInputOutput");
  }
}

export interface HttpRequestWithGreedyLabelInPathInput {
  __type?: "HttpRequestWithGreedyLabelInPathInput";
  baz: string | undefined;
  foo: string | undefined;
}

export namespace HttpRequestWithGreedyLabelInPathInput {
  export function isa(o: any): o is HttpRequestWithGreedyLabelInPathInput {
    return __isa(o, "HttpRequestWithGreedyLabelInPathInput");
  }
}

export interface HttpRequestWithLabelsAndTimestampFormatInput {
  __type?: "HttpRequestWithLabelsAndTimestampFormatInput";
  defaultFormat: Date | undefined;
  memberDateTime: Date | undefined;
  memberEpochSeconds: Date | undefined;
  memberHttpDate: Date | undefined;
  targetDateTime: Date | undefined;
  targetEpochSeconds: Date | undefined;
  targetHttpDate: Date | undefined;
}

export namespace HttpRequestWithLabelsAndTimestampFormatInput {
  export function isa(o: any): o is HttpRequestWithLabelsAndTimestampFormatInput {
    return __isa(o, "HttpRequestWithLabelsAndTimestampFormatInput");
  }
}

export interface HttpRequestWithLabelsInput {
  __type?: "HttpRequestWithLabelsInput";
  /**
   * Serialized in the path as true or false.
   */
  boolean: boolean | undefined;

  double: number | undefined;
  float: number | undefined;
  integer: number | undefined;
  long: number | undefined;
  short: number | undefined;
  string: string | undefined;
  /**
   * Note that this member has no format, so it's serialized as an RFC 3399 date-time.
   */
  timestamp: Date | undefined;
}

export namespace HttpRequestWithLabelsInput {
  export function isa(o: any): o is HttpRequestWithLabelsInput {
    return __isa(o, "HttpRequestWithLabelsInput");
  }
}

export interface IgnoreQueryParamsInResponseOutput {
  __type?: "IgnoreQueryParamsInResponseOutput";
  baz?: string;
}

export namespace IgnoreQueryParamsInResponseOutput {
  export function isa(o: any): o is IgnoreQueryParamsInResponseOutput {
    return __isa(o, "IgnoreQueryParamsInResponseOutput");
  }
}

export interface InputAndOutputWithHeadersIO {
  __type?: "InputAndOutputWithHeadersIO";
  headerBooleanList?: Array<boolean>;
  headerByte?: number;
  headerDouble?: number;
  headerEnum?: FooEnum | string;
  headerEnumList?: Array<FooEnum | string>;
  headerFalseBool?: boolean;
  headerFloat?: number;
  headerInteger?: number;
  headerIntegerList?: Array<number>;
  headerLong?: number;
  headerShort?: number;
  headerString?: string;
  headerStringList?: Array<string>;
  headerStringSet?: Set<string>;
  headerTimestampList?: Array<Date>;
  headerTrueBool?: boolean;
}

export namespace InputAndOutputWithHeadersIO {
  export function isa(o: any): o is InputAndOutputWithHeadersIO {
    return __isa(o, "InputAndOutputWithHeadersIO");
  }
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
  export function isa(o: any): o is InvalidGreeting {
    return __isa(o, "InvalidGreeting");
  }
}

export interface NestedPayload {
  __type?: "NestedPayload";
  greeting?: string;
  name?: string;
}

export namespace NestedPayload {
  export function isa(o: any): o is NestedPayload {
    return __isa(o, "NestedPayload");
  }
}

export interface NoInputAndOutputOutput {
  __type?: "NoInputAndOutputOutput";
}

export namespace NoInputAndOutputOutput {
  export function isa(o: any): o is NoInputAndOutputOutput {
    return __isa(o, "NoInputAndOutputOutput");
  }
}

export interface NullAndEmptyHeadersIO {
  __type?: "NullAndEmptyHeadersIO";
  a?: string;
  b?: string;
  c?: Array<string>;
}

export namespace NullAndEmptyHeadersIO {
  export function isa(o: any): o is NullAndEmptyHeadersIO {
    return __isa(o, "NullAndEmptyHeadersIO");
  }
}

export interface OmitsNullSerializesEmptyStringInput {
  __type?: "OmitsNullSerializesEmptyStringInput";
  emptyString?: string;
  nullValue?: string;
}

export namespace OmitsNullSerializesEmptyStringInput {
  export function isa(o: any): o is OmitsNullSerializesEmptyStringInput {
    return __isa(o, "OmitsNullSerializesEmptyStringInput");
  }
}

export interface PayloadWithXmlName {
  __type?: "PayloadWithXmlName";
  name?: string;
}

export namespace PayloadWithXmlName {
  export function isa(o: any): o is PayloadWithXmlName {
    return __isa(o, "PayloadWithXmlName");
  }
}

export interface PayloadWithXmlNamespace {
  __type?: "PayloadWithXmlNamespace";
  name?: string;
}

export namespace PayloadWithXmlNamespace {
  export function isa(o: any): o is PayloadWithXmlNamespace {
    return __isa(o, "PayloadWithXmlNamespace");
  }
}

export interface PayloadWithXmlNamespaceAndPrefix {
  __type?: "PayloadWithXmlNamespaceAndPrefix";
  name?: string;
}

export namespace PayloadWithXmlNamespaceAndPrefix {
  export function isa(o: any): o is PayloadWithXmlNamespaceAndPrefix {
    return __isa(o, "PayloadWithXmlNamespaceAndPrefix");
  }
}

export interface QueryIdempotencyTokenAutoFillInput {
  __type?: "QueryIdempotencyTokenAutoFillInput";
  token?: string;
}

export namespace QueryIdempotencyTokenAutoFillInput {
  export function isa(o: any): o is QueryIdempotencyTokenAutoFillInput {
    return __isa(o, "QueryIdempotencyTokenAutoFillInput");
  }
}

export interface RecursiveShapesInputOutput {
  __type?: "RecursiveShapesInputOutput";
  nested?: RecursiveShapesInputOutputNested1;
}

export namespace RecursiveShapesInputOutput {
  export function isa(o: any): o is RecursiveShapesInputOutput {
    return __isa(o, "RecursiveShapesInputOutput");
  }
}

export interface RecursiveShapesInputOutputNested1 {
  __type?: "RecursiveShapesInputOutputNested1";
  foo?: string;
  nested?: RecursiveShapesInputOutputNested2;
}

export namespace RecursiveShapesInputOutputNested1 {
  export function isa(o: any): o is RecursiveShapesInputOutputNested1 {
    return __isa(o, "RecursiveShapesInputOutputNested1");
  }
}

export interface RecursiveShapesInputOutputNested2 {
  __type?: "RecursiveShapesInputOutputNested2";
  bar?: string;
  recursiveMember?: RecursiveShapesInputOutputNested1;
}

export namespace RecursiveShapesInputOutputNested2 {
  export function isa(o: any): o is RecursiveShapesInputOutputNested2 {
    return __isa(o, "RecursiveShapesInputOutputNested2");
  }
}

export interface SimpleScalarPropertiesInputOutput {
  __type?: "SimpleScalarPropertiesInputOutput";
  byteValue?: number;
  doubleValue?: number;
  falseBooleanValue?: boolean;
  floatValue?: number;
  foo?: string;
  integerValue?: number;
  longValue?: number;
  shortValue?: number;
  stringValue?: string;
  trueBooleanValue?: boolean;
}

export namespace SimpleScalarPropertiesInputOutput {
  export function isa(o: any): o is SimpleScalarPropertiesInputOutput {
    return __isa(o, "SimpleScalarPropertiesInputOutput");
  }
}

export interface StructureListMember {
  __type?: "StructureListMember";
  a?: string;
  b?: string;
}

export namespace StructureListMember {
  export function isa(o: any): o is StructureListMember {
    return __isa(o, "StructureListMember");
  }
}

export interface TimestampFormatHeadersIO {
  __type?: "TimestampFormatHeadersIO";
  defaultFormat?: Date;
  memberDateTime?: Date;
  memberEpochSeconds?: Date;
  memberHttpDate?: Date;
  targetDateTime?: Date;
  targetEpochSeconds?: Date;
  targetHttpDate?: Date;
}

export namespace TimestampFormatHeadersIO {
  export function isa(o: any): o is TimestampFormatHeadersIO {
    return __isa(o, "TimestampFormatHeadersIO");
  }
}

export interface XmlAttributesInputOutput {
  __type?: "XmlAttributesInputOutput";
  attr?: string;
  foo?: string;
}

export namespace XmlAttributesInputOutput {
  export function isa(o: any): o is XmlAttributesInputOutput {
    return __isa(o, "XmlAttributesInputOutput");
  }
}

export interface XmlAttributesOnPayloadInputOutput {
  __type?: "XmlAttributesOnPayloadInputOutput";
  payload?: XmlAttributesInputOutput;
}

export namespace XmlAttributesOnPayloadInputOutput {
  export function isa(o: any): o is XmlAttributesOnPayloadInputOutput {
    return __isa(o, "XmlAttributesOnPayloadInputOutput");
  }
}

export interface XmlBlobsInputOutput {
  __type?: "XmlBlobsInputOutput";
  data?: Uint8Array;
}

export namespace XmlBlobsInputOutput {
  export function isa(o: any): o is XmlBlobsInputOutput {
    return __isa(o, "XmlBlobsInputOutput");
  }
}

export interface XmlEnumsInputOutput {
  __type?: "XmlEnumsInputOutput";
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: Array<FooEnum | string>;
  fooEnumMap?: { [key: string]: FooEnum | string };
  fooEnumSet?: Set<FooEnum | string>;
}

export namespace XmlEnumsInputOutput {
  export function isa(o: any): o is XmlEnumsInputOutput {
    return __isa(o, "XmlEnumsInputOutput");
  }
}

export interface XmlListsInputOutput {
  __type?: "XmlListsInputOutput";
  booleanList?: Array<boolean>;
  enumList?: Array<FooEnum | string>;
  flattenedList?: Array<string>;
  flattenedList2?: Array<string>;
  integerList?: Array<number>;
  /**
   * A list of lists of strings.
   */
  nestedStringList?: Array<Array<string>>;

  renamedListMembers?: Array<string>;
  stringList?: Array<string>;
  stringSet?: Set<string>;
  structureList?: Array<StructureListMember>;
  timestampList?: Array<Date>;
}

export namespace XmlListsInputOutput {
  export function isa(o: any): o is XmlListsInputOutput {
    return __isa(o, "XmlListsInputOutput");
  }
}

export interface XmlMapsInputOutput {
  __type?: "XmlMapsInputOutput";
  myMap?: { [key: string]: GreetingStruct };
}

export namespace XmlMapsInputOutput {
  export function isa(o: any): o is XmlMapsInputOutput {
    return __isa(o, "XmlMapsInputOutput");
  }
}

export interface XmlMapsXmlNameInputOutput {
  __type?: "XmlMapsXmlNameInputOutput";
  myMap?: { [key: string]: GreetingStruct };
}

export namespace XmlMapsXmlNameInputOutput {
  export function isa(o: any): o is XmlMapsXmlNameInputOutput {
    return __isa(o, "XmlMapsXmlNameInputOutput");
  }
}

export interface XmlNamespaceNested {
  __type?: "XmlNamespaceNested";
  foo?: string;
  values?: Array<string>;
}

export namespace XmlNamespaceNested {
  export function isa(o: any): o is XmlNamespaceNested {
    return __isa(o, "XmlNamespaceNested");
  }
}

export interface XmlNamespacesInputOutput {
  __type?: "XmlNamespacesInputOutput";
  nested?: XmlNamespaceNested;
}

export namespace XmlNamespacesInputOutput {
  export function isa(o: any): o is XmlNamespacesInputOutput {
    return __isa(o, "XmlNamespacesInputOutput");
  }
}

export interface XmlTimestampsInputOutput {
  __type?: "XmlTimestampsInputOutput";
  dateTime?: Date;
  epochSeconds?: Date;
  httpDate?: Date;
  normal?: Date;
}

export namespace XmlTimestampsInputOutput {
  export function isa(o: any): o is XmlTimestampsInputOutput {
    return __isa(o, "XmlTimestampsInputOutput");
  }
}

export type FooEnum = "0" | "1" | "Bar" | "Baz" | "Foo"

export interface GreetingStruct {
  __type?: "GreetingStruct";
  hi?: string;
}

export namespace GreetingStruct {
  export function isa(o: any): o is GreetingStruct {
    return __isa(o, "GreetingStruct");
  }
}
