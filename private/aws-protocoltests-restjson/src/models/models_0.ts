// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@aws-sdk/smithy-client";
import { DocumentType as __DocumentType } from "@aws-sdk/types";
import { Readable } from "stream";

import { RestJsonProtocolServiceException as __BaseException } from "./RestJsonProtocolServiceException";

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
  queryParamsMapOfStringList?: Record<string, string[]>;
}

/**
 * @internal
 */
export const AllQueryStringTypesInputFilterSensitiveLog = (obj: AllQueryStringTypesInput): any => ({
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

export interface DocumentTypeInputOutput {
  stringValue?: string;
  documentValue?: __DocumentType;
}

/**
 * @internal
 */
export const DocumentTypeInputOutputFilterSensitiveLog = (obj: DocumentTypeInputOutput): any => ({
  ...obj,
});

export interface DocumentTypeAsPayloadInputOutput {
  documentValue?: __DocumentType;
}

/**
 * @internal
 */
export const DocumentTypeAsPayloadInputOutputFilterSensitiveLog = (obj: DocumentTypeAsPayloadInputOutput): any => ({
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

export interface HostLabelInput {
  label: string | undefined;
}

/**
 * @internal
 */
export const HostLabelInputFilterSensitiveLog = (obj: HostLabelInput): any => ({
  ...obj,
});

export enum StringEnum {
  V = "enumvalue",
}

export interface EnumPayloadInput {
  payload?: StringEnum | string;
}

/**
 * @internal
 */
export const EnumPayloadInputFilterSensitiveLog = (obj: EnumPayloadInput): any => ({
  ...obj,
});

/**
 * This error has test cases that test some of the dark corners of Amazon service
 * framework history. It should only be implemented by clients.
 */
export class FooError extends __BaseException {
  readonly name: "FooError" = "FooError";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FooError, __BaseException>) {
    super({
      name: "FooError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, FooError.prototype);
  }
}

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

export interface HttpChecksumRequiredInputOutput {
  foo?: string;
}

/**
 * @internal
 */
export const HttpChecksumRequiredInputOutputFilterSensitiveLog = (obj: HttpChecksumRequiredInputOutput): any => ({
  ...obj,
});

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

export interface HttpPrefixHeadersInput {
  foo?: string;
  fooMap?: Record<string, string>;
}

/**
 * @internal
 */
export const HttpPrefixHeadersInputFilterSensitiveLog = (obj: HttpPrefixHeadersInput): any => ({
  ...obj,
});

export interface HttpPrefixHeadersOutput {
  foo?: string;
  fooMap?: Record<string, string>;
}

/**
 * @internal
 */
export const HttpPrefixHeadersOutputFilterSensitiveLog = (obj: HttpPrefixHeadersOutput): any => ({
  ...obj,
});

export interface HttpPrefixHeadersInResponseInput {}

/**
 * @internal
 */
export const HttpPrefixHeadersInResponseInputFilterSensitiveLog = (obj: HttpPrefixHeadersInResponseInput): any => ({
  ...obj,
});

export interface HttpPrefixHeadersInResponseOutput {
  prefixHeaders?: Record<string, string>;
}

/**
 * @internal
 */
export const HttpPrefixHeadersInResponseOutputFilterSensitiveLog = (obj: HttpPrefixHeadersInResponseOutput): any => ({
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

export interface HttpRequestWithRegexLiteralInput {
  str: string | undefined;
}

/**
 * @internal
 */
export const HttpRequestWithRegexLiteralInputFilterSensitiveLog = (obj: HttpRequestWithRegexLiteralInput): any => ({
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

export interface StringPayloadInput {
  payload?: string;
}

/**
 * @internal
 */
export const StringPayloadInputFilterSensitiveLog = (obj: StringPayloadInput): any => ({
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
  headerIntegerEnum?: IntegerEnum | number;
  headerIntegerEnumList?: (IntegerEnum | number)[];
}

/**
 * @internal
 */
export const InputAndOutputWithHeadersIOFilterSensitiveLog = (obj: InputAndOutputWithHeadersIO): any => ({
  ...obj,
});

export interface JsonBlobsInputOutput {
  data?: Uint8Array;
}

/**
 * @internal
 */
export const JsonBlobsInputOutputFilterSensitiveLog = (obj: JsonBlobsInputOutput): any => ({
  ...obj,
});

export interface JsonEnumsInputOutput {
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
export const JsonEnumsInputOutputFilterSensitiveLog = (obj: JsonEnumsInputOutput): any => ({
  ...obj,
});

export interface JsonIntEnumsInputOutput {
  integerEnum1?: IntegerEnum | number;
  integerEnum2?: IntegerEnum | number;
  integerEnum3?: IntegerEnum | number;
  integerEnumList?: (IntegerEnum | number)[];
  integerEnumSet?: (IntegerEnum | number)[];
  integerEnumMap?: Record<string, IntegerEnum | number>;
}

/**
 * @internal
 */
export const JsonIntEnumsInputOutputFilterSensitiveLog = (obj: JsonIntEnumsInputOutput): any => ({
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

export interface JsonListsInputOutput {
  stringList?: string[];
  sparseStringList?: string[];
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

  structureList?: StructureListMember[];
}

/**
 * @internal
 */
export const JsonListsInputOutputFilterSensitiveLog = (obj: JsonListsInputOutput): any => ({
  ...obj,
});

export interface JsonMapsInputOutput {
  denseStructMap?: Record<string, GreetingStruct>;
  sparseStructMap?: Record<string, GreetingStruct>;
  denseNumberMap?: Record<string, number>;
  denseBooleanMap?: Record<string, boolean>;
  denseStringMap?: Record<string, string>;
  sparseNumberMap?: Record<string, number>;
  sparseBooleanMap?: Record<string, boolean>;
  sparseStringMap?: Record<string, string>;
  denseSetMap?: Record<string, string[]>;
  sparseSetMap?: Record<string, string[]>;
}

/**
 * @internal
 */
export const JsonMapsInputOutputFilterSensitiveLog = (obj: JsonMapsInputOutput): any => ({
  ...obj,
});

export interface JsonTimestampsInputOutput {
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
export const JsonTimestampsInputOutputFilterSensitiveLog = (obj: JsonTimestampsInputOutput): any => ({
  ...obj,
});

export interface RenamedGreeting {
  salutation?: string;
}

/**
 * @internal
 */
export const RenamedGreetingFilterSensitiveLog = (obj: RenamedGreeting): any => ({
  ...obj,
});

/**
 * A union with a representative set of types for members.
 */
export type MyUnion =
  | MyUnion.BlobValueMember
  | MyUnion.BooleanValueMember
  | MyUnion.EnumValueMember
  | MyUnion.ListValueMember
  | MyUnion.MapValueMember
  | MyUnion.NumberValueMember
  | MyUnion.RenamedStructureValueMember
  | MyUnion.StringValueMember
  | MyUnion.StructureValueMember
  | MyUnion.TimestampValueMember
  | MyUnion.$UnknownMember;

export namespace MyUnion {
  export interface StringValueMember {
    stringValue: string;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface BooleanValueMember {
    stringValue?: never;
    booleanValue: boolean;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface NumberValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue: number;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface BlobValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue: Uint8Array;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface TimestampValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue: Date;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface EnumValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue: FooEnum | string;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface ListValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue: string[];
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface MapValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue: Record<string, string>;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface StructureValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue: GreetingStruct;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface RenamedStructureValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue: RenamedGreeting;
    $unknown?: never;
  }

  export interface $UnknownMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    booleanValue: (value: boolean) => T;
    numberValue: (value: number) => T;
    blobValue: (value: Uint8Array) => T;
    timestampValue: (value: Date) => T;
    enumValue: (value: FooEnum | string) => T;
    listValue: (value: string[]) => T;
    mapValue: (value: Record<string, string>) => T;
    structureValue: (value: GreetingStruct) => T;
    renamedStructureValue: (value: RenamedGreeting) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MyUnion, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.numberValue !== undefined) return visitor.numberValue(value.numberValue);
    if (value.blobValue !== undefined) return visitor.blobValue(value.blobValue);
    if (value.timestampValue !== undefined) return visitor.timestampValue(value.timestampValue);
    if (value.enumValue !== undefined) return visitor.enumValue(value.enumValue);
    if (value.listValue !== undefined) return visitor.listValue(value.listValue);
    if (value.mapValue !== undefined) return visitor.mapValue(value.mapValue);
    if (value.structureValue !== undefined) return visitor.structureValue(value.structureValue);
    if (value.renamedStructureValue !== undefined) return visitor.renamedStructureValue(value.renamedStructureValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}
/**
 * @internal
 */
export const MyUnionFilterSensitiveLog = (obj: MyUnion): any => {
  if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
  if (obj.booleanValue !== undefined) return { booleanValue: obj.booleanValue };
  if (obj.numberValue !== undefined) return { numberValue: obj.numberValue };
  if (obj.blobValue !== undefined) return { blobValue: obj.blobValue };
  if (obj.timestampValue !== undefined) return { timestampValue: obj.timestampValue };
  if (obj.enumValue !== undefined) return { enumValue: obj.enumValue };
  if (obj.listValue !== undefined) return { listValue: obj.listValue };
  if (obj.mapValue !== undefined) return { mapValue: obj.mapValue };
  if (obj.structureValue !== undefined) return { structureValue: GreetingStructFilterSensitiveLog(obj.structureValue) };
  if (obj.renamedStructureValue !== undefined)
    return { renamedStructureValue: RenamedGreetingFilterSensitiveLog(obj.renamedStructureValue) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * A shared structure that contains a single union member.
 */
export interface UnionInputOutput {
  /**
   * A union with a representative set of types for members.
   */
  contents?: MyUnion;
}

/**
 * @internal
 */
export const UnionInputOutputFilterSensitiveLog = (obj: UnionInputOutput): any => ({
  ...obj,
  ...(obj.contents && { contents: MyUnionFilterSensitiveLog(obj.contents) }),
});

export interface MalformedAcceptWithGenericStringOutput {
  payload?: string;
}

/**
 * @internal
 */
export const MalformedAcceptWithGenericStringOutputFilterSensitiveLog = (
  obj: MalformedAcceptWithGenericStringOutput
): any => ({
  ...obj,
});

export interface MalformedAcceptWithPayloadOutput {
  payload?: Uint8Array;
}

/**
 * @internal
 */
export const MalformedAcceptWithPayloadOutputFilterSensitiveLog = (obj: MalformedAcceptWithPayloadOutput): any => ({
  ...obj,
});

export interface MalformedBlobInput {
  blob?: Uint8Array;
}

/**
 * @internal
 */
export const MalformedBlobInputFilterSensitiveLog = (obj: MalformedBlobInput): any => ({
  ...obj,
});

export interface MalformedBooleanInput {
  booleanInBody?: boolean;
  booleanInPath: boolean | undefined;
  booleanInQuery?: boolean;
  booleanInHeader?: boolean;
}

/**
 * @internal
 */
export const MalformedBooleanInputFilterSensitiveLog = (obj: MalformedBooleanInput): any => ({
  ...obj,
});

export interface MalformedByteInput {
  byteInBody?: number;
  byteInPath: number | undefined;
  byteInQuery?: number;
  byteInHeader?: number;
}

/**
 * @internal
 */
export const MalformedByteInputFilterSensitiveLog = (obj: MalformedByteInput): any => ({
  ...obj,
});

export interface MalformedContentTypeWithGenericStringInput {
  payload?: string;
}

/**
 * @internal
 */
export const MalformedContentTypeWithGenericStringInputFilterSensitiveLog = (
  obj: MalformedContentTypeWithGenericStringInput
): any => ({
  ...obj,
});

export interface MalformedContentTypeWithPayloadInput {
  payload?: Uint8Array;
}

/**
 * @internal
 */
export const MalformedContentTypeWithPayloadInputFilterSensitiveLog = (
  obj: MalformedContentTypeWithPayloadInput
): any => ({
  ...obj,
});

export interface MalformedDoubleInput {
  doubleInBody?: number;
  doubleInPath: number | undefined;
  doubleInQuery?: number;
  doubleInHeader?: number;
}

/**
 * @internal
 */
export const MalformedDoubleInputFilterSensitiveLog = (obj: MalformedDoubleInput): any => ({
  ...obj,
});

export interface MalformedFloatInput {
  floatInBody?: number;
  floatInPath: number | undefined;
  floatInQuery?: number;
  floatInHeader?: number;
}

/**
 * @internal
 */
export const MalformedFloatInputFilterSensitiveLog = (obj: MalformedFloatInput): any => ({
  ...obj,
});

export interface MalformedIntegerInput {
  integerInBody?: number;
  integerInPath: number | undefined;
  integerInQuery?: number;
  integerInHeader?: number;
}

/**
 * @internal
 */
export const MalformedIntegerInputFilterSensitiveLog = (obj: MalformedIntegerInput): any => ({
  ...obj,
});

export interface MalformedListInput {
  bodyList?: string[];
}

/**
 * @internal
 */
export const MalformedListInputFilterSensitiveLog = (obj: MalformedListInput): any => ({
  ...obj,
});

export interface MalformedLongInput {
  longInBody?: number;
  longInPath: number | undefined;
  longInQuery?: number;
  longInHeader?: number;
}

/**
 * @internal
 */
export const MalformedLongInputFilterSensitiveLog = (obj: MalformedLongInput): any => ({
  ...obj,
});

export interface MalformedMapInput {
  bodyMap?: Record<string, string>;
}

/**
 * @internal
 */
export const MalformedMapInputFilterSensitiveLog = (obj: MalformedMapInput): any => ({
  ...obj,
});

export interface MalformedRequestBodyInput {
  int?: number;
  float?: number;
}

/**
 * @internal
 */
export const MalformedRequestBodyInputFilterSensitiveLog = (obj: MalformedRequestBodyInput): any => ({
  ...obj,
});

export interface MalformedShortInput {
  shortInBody?: number;
  shortInPath: number | undefined;
  shortInQuery?: number;
  shortInHeader?: number;
}

/**
 * @internal
 */
export const MalformedShortInputFilterSensitiveLog = (obj: MalformedShortInput): any => ({
  ...obj,
});

export interface MalformedStringInput {
  blob?: __LazyJsonString | string;
}

/**
 * @internal
 */
export const MalformedStringInputFilterSensitiveLog = (obj: MalformedStringInput): any => ({
  ...obj,
});

export interface MalformedTimestampBodyDateTimeInput {
  timestamp: Date | undefined;
}

/**
 * @internal
 */
export const MalformedTimestampBodyDateTimeInputFilterSensitiveLog = (
  obj: MalformedTimestampBodyDateTimeInput
): any => ({
  ...obj,
});

export interface MalformedTimestampBodyDefaultInput {
  timestamp: Date | undefined;
}

/**
 * @internal
 */
export const MalformedTimestampBodyDefaultInputFilterSensitiveLog = (obj: MalformedTimestampBodyDefaultInput): any => ({
  ...obj,
});

export interface MalformedTimestampBodyHttpDateInput {
  timestamp: Date | undefined;
}

/**
 * @internal
 */
export const MalformedTimestampBodyHttpDateInputFilterSensitiveLog = (
  obj: MalformedTimestampBodyHttpDateInput
): any => ({
  ...obj,
});

export interface MalformedTimestampHeaderDateTimeInput {
  timestamp: Date | undefined;
}

/**
 * @internal
 */
export const MalformedTimestampHeaderDateTimeInputFilterSensitiveLog = (
  obj: MalformedTimestampHeaderDateTimeInput
): any => ({
  ...obj,
});

export interface MalformedTimestampHeaderDefaultInput {
  timestamp: Date | undefined;
}

/**
 * @internal
 */
export const MalformedTimestampHeaderDefaultInputFilterSensitiveLog = (
  obj: MalformedTimestampHeaderDefaultInput
): any => ({
  ...obj,
});

export interface MalformedTimestampHeaderEpochInput {
  timestamp: Date | undefined;
}

/**
 * @internal
 */
export const MalformedTimestampHeaderEpochInputFilterSensitiveLog = (obj: MalformedTimestampHeaderEpochInput): any => ({
  ...obj,
});

export interface MalformedTimestampPathDefaultInput {
  timestamp: Date | undefined;
}

/**
 * @internal
 */
export const MalformedTimestampPathDefaultInputFilterSensitiveLog = (obj: MalformedTimestampPathDefaultInput): any => ({
  ...obj,
});

export interface MalformedTimestampPathEpochInput {
  timestamp: Date | undefined;
}

/**
 * @internal
 */
export const MalformedTimestampPathEpochInputFilterSensitiveLog = (obj: MalformedTimestampPathEpochInput): any => ({
  ...obj,
});

export interface MalformedTimestampPathHttpDateInput {
  timestamp: Date | undefined;
}

/**
 * @internal
 */
export const MalformedTimestampPathHttpDateInputFilterSensitiveLog = (
  obj: MalformedTimestampPathHttpDateInput
): any => ({
  ...obj,
});

export interface MalformedTimestampQueryDefaultInput {
  timestamp: Date | undefined;
}

/**
 * @internal
 */
export const MalformedTimestampQueryDefaultInputFilterSensitiveLog = (
  obj: MalformedTimestampQueryDefaultInput
): any => ({
  ...obj,
});

export interface MalformedTimestampQueryEpochInput {
  timestamp: Date | undefined;
}

/**
 * @internal
 */
export const MalformedTimestampQueryEpochInputFilterSensitiveLog = (obj: MalformedTimestampQueryEpochInput): any => ({
  ...obj,
});

export interface MalformedTimestampQueryHttpDateInput {
  timestamp: Date | undefined;
}

/**
 * @internal
 */
export const MalformedTimestampQueryHttpDateInputFilterSensitiveLog = (
  obj: MalformedTimestampQueryHttpDateInput
): any => ({
  ...obj,
});

export type SimpleUnion = SimpleUnion.IntMember | SimpleUnion.StringMember | SimpleUnion.$UnknownMember;

export namespace SimpleUnion {
  export interface IntMember {
    int: number;
    string?: never;
    $unknown?: never;
  }

  export interface StringMember {
    int?: never;
    string: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    int?: never;
    string?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    int: (value: number) => T;
    string: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SimpleUnion, visitor: Visitor<T>): T => {
    if (value.int !== undefined) return visitor.int(value.int);
    if (value.string !== undefined) return visitor.string(value.string);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}
/**
 * @internal
 */
export const SimpleUnionFilterSensitiveLog = (obj: SimpleUnion): any => {
  if (obj.int !== undefined) return { int: obj.int };
  if (obj.string !== undefined) return { string: obj.string };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

export interface MalformedUnionInput {
  union?: SimpleUnion;
}

/**
 * @internal
 */
export const MalformedUnionInputFilterSensitiveLog = (obj: MalformedUnionInput): any => ({
  ...obj,
  ...(obj.union && { union: SimpleUnionFilterSensitiveLog(obj.union) }),
});

export interface MediaTypeHeaderInput {
  json?: __LazyJsonString | string;
}

/**
 * @internal
 */
export const MediaTypeHeaderInputFilterSensitiveLog = (obj: MediaTypeHeaderInput): any => ({
  ...obj,
});

export interface MediaTypeHeaderOutput {
  json?: __LazyJsonString | string;
}

/**
 * @internal
 */
export const MediaTypeHeaderOutputFilterSensitiveLog = (obj: MediaTypeHeaderOutput): any => ({
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

export interface PayloadConfig {
  data?: number;
}

/**
 * @internal
 */
export const PayloadConfigFilterSensitiveLog = (obj: PayloadConfig): any => ({
  ...obj,
});

export interface Unit {}

/**
 * @internal
 */
export const UnitFilterSensitiveLog = (obj: Unit): any => ({
  ...obj,
});

export type PlayerAction = PlayerAction.QuitMember | PlayerAction.$UnknownMember;

export namespace PlayerAction {
  /**
   * Quit the game.
   */
  export interface QuitMember {
    quit: Unit;
    $unknown?: never;
  }

  export interface $UnknownMember {
    quit?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    quit: (value: Unit) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PlayerAction, visitor: Visitor<T>): T => {
    if (value.quit !== undefined) return visitor.quit(value.quit);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}
/**
 * @internal
 */
export const PlayerActionFilterSensitiveLog = (obj: PlayerAction): any => {
  if (obj.quit !== undefined) return { quit: UnitFilterSensitiveLog(obj.quit) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

export interface PostPlayerActionInput {
  action?: PlayerAction;
}

/**
 * @internal
 */
export const PostPlayerActionInputFilterSensitiveLog = (obj: PostPlayerActionInput): any => ({
  ...obj,
  ...(obj.action && { action: PlayerActionFilterSensitiveLog(obj.action) }),
});

export interface PostPlayerActionOutput {
  action: PlayerAction | undefined;
}

/**
 * @internal
 */
export const PostPlayerActionOutputFilterSensitiveLog = (obj: PostPlayerActionOutput): any => ({
  ...obj,
  ...(obj.action && { action: PlayerActionFilterSensitiveLog(obj.action) }),
});

export type UnionWithJsonName =
  | UnionWithJsonName.BarMember
  | UnionWithJsonName.BazMember
  | UnionWithJsonName.FooMember
  | UnionWithJsonName.$UnknownMember;

export namespace UnionWithJsonName {
  export interface FooMember {
    foo: string;
    bar?: never;
    baz?: never;
    $unknown?: never;
  }

  export interface BarMember {
    foo?: never;
    bar: string;
    baz?: never;
    $unknown?: never;
  }

  export interface BazMember {
    foo?: never;
    bar?: never;
    baz: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    foo?: never;
    bar?: never;
    baz?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    foo: (value: string) => T;
    bar: (value: string) => T;
    baz: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UnionWithJsonName, visitor: Visitor<T>): T => {
    if (value.foo !== undefined) return visitor.foo(value.foo);
    if (value.bar !== undefined) return visitor.bar(value.bar);
    if (value.baz !== undefined) return visitor.baz(value.baz);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}
/**
 * @internal
 */
export const UnionWithJsonNameFilterSensitiveLog = (obj: UnionWithJsonName): any => {
  if (obj.foo !== undefined) return { foo: obj.foo };
  if (obj.bar !== undefined) return { bar: obj.bar };
  if (obj.baz !== undefined) return { baz: obj.baz };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

export interface PostUnionWithJsonNameInput {
  value?: UnionWithJsonName;
}

/**
 * @internal
 */
export const PostUnionWithJsonNameInputFilterSensitiveLog = (obj: PostUnionWithJsonNameInput): any => ({
  ...obj,
  ...(obj.value && { value: UnionWithJsonNameFilterSensitiveLog(obj.value) }),
});

export interface PostUnionWithJsonNameOutput {
  value: UnionWithJsonName | undefined;
}

/**
 * @internal
 */
export const PostUnionWithJsonNameOutputFilterSensitiveLog = (obj: PostUnionWithJsonNameOutput): any => ({
  ...obj,
  ...(obj.value && { value: UnionWithJsonNameFilterSensitiveLog(obj.value) }),
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

export interface StreamingTraitsInputOutput {
  foo?: string;
  blob?: Readable | ReadableStream | Blob;
}

/**
 * @internal
 */
export const StreamingTraitsInputOutputFilterSensitiveLog = (obj: StreamingTraitsInputOutput): any => ({
  ...obj,
});

export interface StreamingTraitsRequireLengthInput {
  foo?: string;
  blob?: Readable | ReadableStream | Blob;
}

/**
 * @internal
 */
export const StreamingTraitsRequireLengthInputFilterSensitiveLog = (obj: StreamingTraitsRequireLengthInput): any => ({
  ...obj,
});

export interface StreamingTraitsWithMediaTypeInputOutput {
  foo?: string;
  blob?: Readable | ReadableStream | Blob;
}

/**
 * @internal
 */
export const StreamingTraitsWithMediaTypeInputOutputFilterSensitiveLog = (
  obj: StreamingTraitsWithMediaTypeInputOutput
): any => ({
  ...obj,
});

export interface TestConfig {
  timeout?: number;
}

/**
 * @internal
 */
export const TestConfigFilterSensitiveLog = (obj: TestConfig): any => ({
  ...obj,
});

export interface TestBodyStructureInputOutput {
  testId?: string;
  testConfig?: TestConfig;
}

/**
 * @internal
 */
export const TestBodyStructureInputOutputFilterSensitiveLog = (obj: TestBodyStructureInputOutput): any => ({
  ...obj,
});

export interface TestNoPayloadInputOutput {
  testId?: string;
}

/**
 * @internal
 */
export const TestNoPayloadInputOutputFilterSensitiveLog = (obj: TestNoPayloadInputOutput): any => ({
  ...obj,
});

export interface TestPayloadBlobInputOutput {
  contentType?: string;
  data?: Uint8Array;
}

/**
 * @internal
 */
export const TestPayloadBlobInputOutputFilterSensitiveLog = (obj: TestPayloadBlobInputOutput): any => ({
  ...obj,
});

export interface TestPayloadStructureInputOutput {
  testId?: string;
  payloadConfig?: PayloadConfig;
}

/**
 * @internal
 */
export const TestPayloadStructureInputOutputFilterSensitiveLog = (obj: TestPayloadStructureInputOutput): any => ({
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

export interface RecursiveShapesInputOutput {
  nested?: RecursiveShapesInputOutputNested1;
}

/**
 * @internal
 */
export const RecursiveShapesInputOutputFilterSensitiveLog = (obj: RecursiveShapesInputOutput): any => ({
  ...obj,
});
