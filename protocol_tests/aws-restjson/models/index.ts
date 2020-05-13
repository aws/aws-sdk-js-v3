import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AllQueryStringTypesInput {
  __type?: "AllQueryStringTypesInput";
  queryBoolean?: boolean;
  queryBooleanList?: boolean[];
  queryByte?: number;
  queryDouble?: number;
  queryDoubleList?: number[];
  queryEnum?: FooEnum | string;
  queryEnumList?: (FooEnum | string)[];
  queryFloat?: number;
  queryInteger?: number;
  queryIntegerList?: number[];
  queryIntegerSet?: number[];
  queryLong?: number;
  queryShort?: number;
  queryString?: string;
  queryStringList?: string[];
  queryStringSet?: string[];
  queryTimestamp?: Date;
  queryTimestampList?: Date[];
}

export namespace AllQueryStringTypesInput {
  export const filterSensitiveLog = (obj: AllQueryStringTypesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AllQueryStringTypesInput =>
    __isa(o, "AllQueryStringTypesInput");
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
  export const filterSensitiveLog = (obj: ComplexError): any => ({
    ...obj,
    ...(obj.Nested && {
      Nested: ComplexNestedErrorData.filterSensitiveLog(obj.Nested)
    })
  });
  export const isa = (o: any): o is ComplexError => __isa(o, "ComplexError");
}

export interface ComplexNestedErrorData {
  __type?: "ComplexNestedErrorData";
  Foo?: string;
}

export namespace ComplexNestedErrorData {
  export const filterSensitiveLog = (obj: ComplexNestedErrorData): any => ({
    ...obj
  });
  export const isa = (o: any): o is ComplexNestedErrorData =>
    __isa(o, "ComplexNestedErrorData");
}

export interface ConstantAndVariableQueryStringInput {
  __type?: "ConstantAndVariableQueryStringInput";
  baz?: string;
  maybeSet?: string;
}

export namespace ConstantAndVariableQueryStringInput {
  export const filterSensitiveLog = (
    obj: ConstantAndVariableQueryStringInput
  ): any => ({
    ...obj
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
    ...obj
  });
  export const isa = (o: any): o is ConstantQueryStringInput =>
    __isa(o, "ConstantQueryStringInput");
}

export interface EmptyInputAndEmptyOutputInput {
  __type?: "EmptyInputAndEmptyOutputInput";
}

export namespace EmptyInputAndEmptyOutputInput {
  export const filterSensitiveLog = (
    obj: EmptyInputAndEmptyOutputInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EmptyInputAndEmptyOutputInput =>
    __isa(o, "EmptyInputAndEmptyOutputInput");
}

export interface EmptyInputAndEmptyOutputOutput {
  __type?: "EmptyInputAndEmptyOutputOutput";
}

export namespace EmptyInputAndEmptyOutputOutput {
  export const filterSensitiveLog = (
    obj: EmptyInputAndEmptyOutputOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EmptyInputAndEmptyOutputOutput =>
    __isa(o, "EmptyInputAndEmptyOutputOutput");
}

/**
 * This error has test cases that test some of the dark corners of Amazon service
 * framework history. It should only be implemented by clients.
 */
export interface FooError extends __SmithyException, $MetadataBearer {
  name: "FooError";
  $fault: "server";
}

export namespace FooError {
  export const filterSensitiveLog = (obj: FooError): any => ({
    ...obj
  });
  export const isa = (o: any): o is FooError => __isa(o, "FooError");
}

export interface GreetingWithErrorsOutput {
  __type?: "GreetingWithErrorsOutput";
  greeting?: string;
}

export namespace GreetingWithErrorsOutput {
  export const filterSensitiveLog = (obj: GreetingWithErrorsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GreetingWithErrorsOutput =>
    __isa(o, "GreetingWithErrorsOutput");
}

export interface HttpPayloadTraitsInputOutput {
  __type?: "HttpPayloadTraitsInputOutput";
  blob?: Uint8Array;
  foo?: string;
}

export namespace HttpPayloadTraitsInputOutput {
  export const filterSensitiveLog = (
    obj: HttpPayloadTraitsInputOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpPayloadTraitsInputOutput =>
    __isa(o, "HttpPayloadTraitsInputOutput");
}

export interface HttpPayloadTraitsWithMediaTypeInputOutput {
  __type?: "HttpPayloadTraitsWithMediaTypeInputOutput";
  blob?: Uint8Array;
  foo?: string;
}

export namespace HttpPayloadTraitsWithMediaTypeInputOutput {
  export const filterSensitiveLog = (
    obj: HttpPayloadTraitsWithMediaTypeInputOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpPayloadTraitsWithMediaTypeInputOutput =>
    __isa(o, "HttpPayloadTraitsWithMediaTypeInputOutput");
}

export interface HttpPayloadWithStructureInputOutput {
  __type?: "HttpPayloadWithStructureInputOutput";
  nested?: NestedPayload;
}

export namespace HttpPayloadWithStructureInputOutput {
  export const filterSensitiveLog = (
    obj: HttpPayloadWithStructureInputOutput
  ): any => ({
    ...obj,
    ...(obj.nested && { nested: NestedPayload.filterSensitiveLog(obj.nested) })
  });
  export const isa = (o: any): o is HttpPayloadWithStructureInputOutput =>
    __isa(o, "HttpPayloadWithStructureInputOutput");
}

export interface HttpPrefixHeadersInputOutput {
  __type?: "HttpPrefixHeadersInputOutput";
  foo?: string;
  fooMap?: { [key: string]: string };
}

export namespace HttpPrefixHeadersInputOutput {
  export const filterSensitiveLog = (
    obj: HttpPrefixHeadersInputOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpPrefixHeadersInputOutput =>
    __isa(o, "HttpPrefixHeadersInputOutput");
}

export interface HttpRequestWithGreedyLabelInPathInput {
  __type?: "HttpRequestWithGreedyLabelInPathInput";
  baz: string | undefined;
  foo: string | undefined;
}

export namespace HttpRequestWithGreedyLabelInPathInput {
  export const filterSensitiveLog = (
    obj: HttpRequestWithGreedyLabelInPathInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpRequestWithGreedyLabelInPathInput =>
    __isa(o, "HttpRequestWithGreedyLabelInPathInput");
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
  export const filterSensitiveLog = (
    obj: HttpRequestWithLabelsAndTimestampFormatInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is HttpRequestWithLabelsAndTimestampFormatInput =>
    __isa(o, "HttpRequestWithLabelsAndTimestampFormatInput");
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
  export const filterSensitiveLog = (obj: HttpRequestWithLabelsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpRequestWithLabelsInput =>
    __isa(o, "HttpRequestWithLabelsInput");
}

export interface IgnoreQueryParamsInResponseOutput {
  __type?: "IgnoreQueryParamsInResponseOutput";
  baz?: string;
}

export namespace IgnoreQueryParamsInResponseOutput {
  export const filterSensitiveLog = (
    obj: IgnoreQueryParamsInResponseOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IgnoreQueryParamsInResponseOutput =>
    __isa(o, "IgnoreQueryParamsInResponseOutput");
}

export interface InputAndOutputWithHeadersIO {
  __type?: "InputAndOutputWithHeadersIO";
  headerBooleanList?: boolean[];
  headerByte?: number;
  headerDouble?: number;
  headerEnum?: FooEnum | string;
  headerEnumList?: (FooEnum | string)[];
  headerFalseBool?: boolean;
  headerFloat?: number;
  headerInteger?: number;
  headerIntegerList?: number[];
  headerLong?: number;
  headerShort?: number;
  headerString?: string;
  headerStringList?: string[];
  headerStringSet?: string[];
  headerTimestampList?: Date[];
  headerTrueBool?: boolean;
}

export namespace InputAndOutputWithHeadersIO {
  export const filterSensitiveLog = (
    obj: InputAndOutputWithHeadersIO
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputAndOutputWithHeadersIO =>
    __isa(o, "InputAndOutputWithHeadersIO");
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
    ...obj
  });
  export const isa = (o: any): o is InvalidGreeting =>
    __isa(o, "InvalidGreeting");
}

export interface JsonBlobsInputOutput {
  __type?: "JsonBlobsInputOutput";
  data?: Uint8Array;
}

export namespace JsonBlobsInputOutput {
  export const filterSensitiveLog = (obj: JsonBlobsInputOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is JsonBlobsInputOutput =>
    __isa(o, "JsonBlobsInputOutput");
}

export interface JsonEnumsInputOutput {
  __type?: "JsonEnumsInputOutput";
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumMap?: { [key: string]: FooEnum | string };
  fooEnumSet?: (FooEnum | string)[];
}

export namespace JsonEnumsInputOutput {
  export const filterSensitiveLog = (obj: JsonEnumsInputOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is JsonEnumsInputOutput =>
    __isa(o, "JsonEnumsInputOutput");
}

export interface JsonListsInputOutput {
  __type?: "JsonListsInputOutput";
  booleanList?: boolean[];
  enumList?: (FooEnum | string)[];
  integerList?: number[];
  /**
   * A list of lists of strings.
   */
  nestedStringList?: string[][];

  stringList?: string[];
  stringSet?: string[];
  structureList?: StructureListMember[];
  timestampList?: Date[];
}

export namespace JsonListsInputOutput {
  export const filterSensitiveLog = (obj: JsonListsInputOutput): any => ({
    ...obj,
    ...(obj.structureList && {
      structureList: obj.structureList.map(
        StructureListMember.filterSensitiveLog
      )
    })
  });
  export const isa = (o: any): o is JsonListsInputOutput =>
    __isa(o, "JsonListsInputOutput");
}

export interface JsonMapsInputOutput {
  __type?: "JsonMapsInputOutput";
  myMap?: { [key: string]: GreetingStruct };
}

export namespace JsonMapsInputOutput {
  export const filterSensitiveLog = (obj: JsonMapsInputOutput): any => ({
    ...obj,
    ...(obj.myMap && {
      myMap: Object.entries(obj.myMap).reduce(
        (acc: any, [key, value]: [string, GreetingStruct]) => ({
          ...acc,
          [key]: GreetingStruct.filterSensitiveLog(value)
        }),
        {}
      )
    })
  });
  export const isa = (o: any): o is JsonMapsInputOutput =>
    __isa(o, "JsonMapsInputOutput");
}

export interface JsonTimestampsInputOutput {
  __type?: "JsonTimestampsInputOutput";
  dateTime?: Date;
  epochSeconds?: Date;
  httpDate?: Date;
  normal?: Date;
}

export namespace JsonTimestampsInputOutput {
  export const filterSensitiveLog = (obj: JsonTimestampsInputOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is JsonTimestampsInputOutput =>
    __isa(o, "JsonTimestampsInputOutput");
}

export interface NestedPayload {
  __type?: "NestedPayload";
  greeting?: string;
  name?: string;
}

export namespace NestedPayload {
  export const filterSensitiveLog = (obj: NestedPayload): any => ({
    ...obj
  });
  export const isa = (o: any): o is NestedPayload => __isa(o, "NestedPayload");
}

export interface NoInputAndOutputOutput {
  __type?: "NoInputAndOutputOutput";
}

export namespace NoInputAndOutputOutput {
  export const filterSensitiveLog = (obj: NoInputAndOutputOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoInputAndOutputOutput =>
    __isa(o, "NoInputAndOutputOutput");
}

export interface NullAndEmptyHeadersIO {
  __type?: "NullAndEmptyHeadersIO";
  a?: string;
  b?: string;
  c?: string[];
}

export namespace NullAndEmptyHeadersIO {
  export const filterSensitiveLog = (obj: NullAndEmptyHeadersIO): any => ({
    ...obj
  });
  export const isa = (o: any): o is NullAndEmptyHeadersIO =>
    __isa(o, "NullAndEmptyHeadersIO");
}

export interface OmitsNullSerializesEmptyStringInput {
  __type?: "OmitsNullSerializesEmptyStringInput";
  emptyString?: string;
  nullValue?: string;
}

export namespace OmitsNullSerializesEmptyStringInput {
  export const filterSensitiveLog = (
    obj: OmitsNullSerializesEmptyStringInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OmitsNullSerializesEmptyStringInput =>
    __isa(o, "OmitsNullSerializesEmptyStringInput");
}

export interface QueryIdempotencyTokenAutoFillInput {
  __type?: "QueryIdempotencyTokenAutoFillInput";
  token?: string;
}

export namespace QueryIdempotencyTokenAutoFillInput {
  export const filterSensitiveLog = (
    obj: QueryIdempotencyTokenAutoFillInput
  ): any => ({
    ...obj
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
    ...(obj.nested && {
      nested: RecursiveShapesInputOutputNested1.filterSensitiveLog(obj.nested)
    })
  });
  export const isa = (o: any): o is RecursiveShapesInputOutput =>
    __isa(o, "RecursiveShapesInputOutput");
}

export interface RecursiveShapesInputOutputNested1 {
  __type?: "RecursiveShapesInputOutputNested1";
  foo?: string;
  nested?: RecursiveShapesInputOutputNested2;
}

export namespace RecursiveShapesInputOutputNested1 {
  export const filterSensitiveLog = (
    obj: RecursiveShapesInputOutputNested1
  ): any => ({
    ...obj,
    ...(obj.nested && {
      nested: RecursiveShapesInputOutputNested2.filterSensitiveLog(obj.nested)
    })
  });
  export const isa = (o: any): o is RecursiveShapesInputOutputNested1 =>
    __isa(o, "RecursiveShapesInputOutputNested1");
}

export interface RecursiveShapesInputOutputNested2 {
  __type?: "RecursiveShapesInputOutputNested2";
  bar?: string;
  recursiveMember?: RecursiveShapesInputOutputNested1;
}

export namespace RecursiveShapesInputOutputNested2 {
  export const filterSensitiveLog = (
    obj: RecursiveShapesInputOutputNested2
  ): any => ({
    ...obj,
    ...(obj.recursiveMember && {
      recursiveMember: RecursiveShapesInputOutputNested1.filterSensitiveLog(
        obj.recursiveMember
      )
    })
  });
  export const isa = (o: any): o is RecursiveShapesInputOutputNested2 =>
    __isa(o, "RecursiveShapesInputOutputNested2");
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
  export const filterSensitiveLog = (
    obj: SimpleScalarPropertiesInputOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SimpleScalarPropertiesInputOutput =>
    __isa(o, "SimpleScalarPropertiesInputOutput");
}

export interface StructureListMember {
  __type?: "StructureListMember";
  a?: string;
  b?: string;
}

export namespace StructureListMember {
  export const filterSensitiveLog = (obj: StructureListMember): any => ({
    ...obj
  });
  export const isa = (o: any): o is StructureListMember =>
    __isa(o, "StructureListMember");
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
  export const filterSensitiveLog = (obj: TimestampFormatHeadersIO): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimestampFormatHeadersIO =>
    __isa(o, "TimestampFormatHeadersIO");
}

export type FooEnum = "0" | "1" | "Bar" | "Baz" | "Foo";

export interface GreetingStruct {
  __type?: "GreetingStruct";
  hi?: string;
}

export namespace GreetingStruct {
  export const filterSensitiveLog = (obj: GreetingStruct): any => ({
    ...obj
  });
  export const isa = (o: any): o is GreetingStruct =>
    __isa(o, "GreetingStruct");
}
