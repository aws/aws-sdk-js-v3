// smithy-typescript generated code
import {
  AutomaticJsonStringConversion as __AutomaticJsonStringConversion,
  ExceptionOptionType as __ExceptionOptionType,
} from "@smithy/smithy-client";
import { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import { RestJsonProtocolServiceException as __BaseException } from "./RestJsonProtocolServiceException";

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
  queryParamsMapOfStringList?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface ClientOptionalDefaults {
  member?: number | undefined;
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
 * @enum
 */
export const TestEnum = {
  BAR: "BAR",
  BAZ: "BAZ",
  FOO: "FOO",
} as const;
/**
 * @public
 */
export type TestEnum = (typeof TestEnum)[keyof typeof TestEnum];

export enum TestIntEnum {
  ONE = 1,
  TWO = 2,
}

/**
 * @public
 */
export interface Defaults {
  defaultString?: string | undefined;
  defaultBoolean?: boolean | undefined;
  defaultList?: string[] | undefined;
  defaultDocumentMap?: __DocumentType | undefined;
  defaultDocumentString?: __DocumentType | undefined;
  defaultDocumentBoolean?: __DocumentType | undefined;
  defaultDocumentList?: __DocumentType | undefined;
  defaultNullDocument?: __DocumentType | undefined;
  defaultTimestamp?: Date | undefined;
  defaultBlob?: Uint8Array | undefined;
  defaultByte?: number | undefined;
  defaultShort?: number | undefined;
  defaultInteger?: number | undefined;
  defaultLong?: number | undefined;
  defaultFloat?: number | undefined;
  defaultDouble?: number | undefined;
  defaultMap?: Record<string, string> | undefined;
  defaultEnum?: TestEnum | undefined;
  defaultIntEnum?: TestIntEnum | undefined;
  emptyString?: string | undefined;
  falseBoolean?: boolean | undefined;
  emptyBlob?: Uint8Array | undefined;
  zeroByte?: number | undefined;
  zeroShort?: number | undefined;
  zeroInteger?: number | undefined;
  zeroLong?: number | undefined;
  zeroFloat?: number | undefined;
  zeroDouble?: number | undefined;
}

/**
 * @public
 */
export interface Farewell {
  phrase?: string | undefined;
}

/**
 * @public
 */
export interface Dialog {
  language?: string | undefined;
  greeting?: string | undefined;
  farewell?: Farewell | undefined;
}

/**
 * @public
 */
export interface DocumentTypeInputOutput {
  stringValue?: string | undefined;
  documentValue?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface DocumentTypeAsMapValueInputOutput {
  docValuedMap?: Record<string, __DocumentType> | undefined;
}

/**
 * @public
 */
export interface DocumentTypeAsPayloadInputOutput {
  documentValue?: __DocumentType | undefined;
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
export interface HostLabelInput {
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
 * This error has test cases that test some of the dark corners of Amazon service
 * framework history. It should only be implemented by clients.
 * @public
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
export interface HttpChecksumRequiredInputOutput {
  foo?: string | undefined;
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
export interface HttpPrefixHeadersInput {
  foo?: string | undefined;
  fooMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface HttpPrefixHeadersOutput {
  foo?: string | undefined;
  fooMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface HttpPrefixHeadersInResponseInput {}

/**
 * @public
 */
export interface HttpPrefixHeadersInResponseOutput {
  prefixHeaders?: Record<string, string> | undefined;
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
export interface HttpRequestWithRegexLiteralInput {
  str: string | undefined;
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
  headerIntegerEnum?: IntegerEnum | undefined;
  headerIntegerEnumList?: IntegerEnum[] | undefined;
}

/**
 * @public
 */
export interface JsonBlobsInputOutput {
  data?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface JsonEnumsInputOutput {
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
export interface JsonIntEnumsInputOutput {
  integerEnum1?: IntegerEnum | undefined;
  integerEnum2?: IntegerEnum | undefined;
  integerEnum3?: IntegerEnum | undefined;
  integerEnumList?: IntegerEnum[] | undefined;
  integerEnumSet?: IntegerEnum[] | undefined;
  integerEnumMap?: Record<string, IntegerEnum> | undefined;
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
export interface JsonListsInputOutput {
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

  structureList?: StructureListMember[] | undefined;
}

/**
 * @public
 */
export interface JsonMapsInputOutput {
  denseStructMap?: Record<string, GreetingStruct> | undefined;
  denseNumberMap?: Record<string, number> | undefined;
  denseBooleanMap?: Record<string, boolean> | undefined;
  denseStringMap?: Record<string, string> | undefined;
  denseSetMap?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface JsonTimestampsInputOutput {
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
export interface RenamedGreeting {
  salutation?: string | undefined;
}

/**
 * A union with a representative set of types for members.
 * @public
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

/**
 * @public
 */
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
    enumValue: FooEnum;
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

  /**
   * @public
   */
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
    enumValue: (value: FooEnum) => T;
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
 * A shared structure that contains a single union member.
 * @public
 */
export interface UnionInputOutput {
  /**
   * A union with a representative set of types for members.
   * @public
   */
  contents?: MyUnion | undefined;
}

/**
 * @public
 */
export interface MalformedAcceptWithGenericStringOutput {
  payload?: string | undefined;
}

/**
 * @public
 */
export interface MalformedAcceptWithPayloadOutput {
  payload?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface MalformedBlobInput {
  blob?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface MalformedBooleanInput {
  booleanInBody?: boolean | undefined;
  booleanInPath: boolean | undefined;
  booleanInQuery?: boolean | undefined;
  booleanInHeader?: boolean | undefined;
}

/**
 * @public
 */
export interface MalformedByteInput {
  byteInBody?: number | undefined;
  byteInPath: number | undefined;
  byteInQuery?: number | undefined;
  byteInHeader?: number | undefined;
}

/**
 * @public
 */
export interface MalformedContentTypeWithGenericStringInput {
  payload?: string | undefined;
}

/**
 * @public
 */
export interface MalformedContentTypeWithoutBodyEmptyInputInput {
  header?: string | undefined;
}

/**
 * @public
 */
export interface MalformedContentTypeWithPayloadInput {
  payload?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface MalformedDoubleInput {
  doubleInBody?: number | undefined;
  doubleInPath: number | undefined;
  doubleInQuery?: number | undefined;
  doubleInHeader?: number | undefined;
}

/**
 * @public
 */
export interface MalformedFloatInput {
  floatInBody?: number | undefined;
  floatInPath: number | undefined;
  floatInQuery?: number | undefined;
  floatInHeader?: number | undefined;
}

/**
 * @public
 */
export interface MalformedIntegerInput {
  integerInBody?: number | undefined;
  integerInPath: number | undefined;
  integerInQuery?: number | undefined;
  integerInHeader?: number | undefined;
}

/**
 * @public
 */
export interface MalformedListInput {
  bodyList?: string[] | undefined;
}

/**
 * @public
 */
export interface MalformedLongInput {
  longInBody?: number | undefined;
  longInPath: number | undefined;
  longInQuery?: number | undefined;
  longInHeader?: number | undefined;
}

/**
 * @public
 */
export interface MalformedMapInput {
  bodyMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface MalformedRequestBodyInput {
  int?: number | undefined;
  float?: number | undefined;
}

/**
 * @public
 */
export interface MalformedShortInput {
  shortInBody?: number | undefined;
  shortInPath: number | undefined;
  shortInQuery?: number | undefined;
  shortInHeader?: number | undefined;
}

/**
 * @public
 */
export interface MalformedStringInput {
  blob?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface MalformedTimestampBodyDateTimeInput {
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface MalformedTimestampBodyDefaultInput {
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface MalformedTimestampBodyHttpDateInput {
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface MalformedTimestampHeaderDateTimeInput {
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface MalformedTimestampHeaderDefaultInput {
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface MalformedTimestampHeaderEpochInput {
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface MalformedTimestampPathDefaultInput {
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface MalformedTimestampPathEpochInput {
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface MalformedTimestampPathHttpDateInput {
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface MalformedTimestampQueryDefaultInput {
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface MalformedTimestampQueryEpochInput {
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface MalformedTimestampQueryHttpDateInput {
  timestamp: Date | undefined;
}

/**
 * @public
 */
export type SimpleUnion = SimpleUnion.IntMember | SimpleUnion.StringMember | SimpleUnion.$UnknownMember;

/**
 * @public
 */
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

  /**
   * @public
   */
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
 * @public
 */
export interface MalformedUnionInput {
  union?: SimpleUnion | undefined;
}

/**
 * @public
 */
export interface MediaTypeHeaderInput {
  json?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface MediaTypeHeaderOutput {
  json?: __AutomaticJsonStringConversion | string | undefined;
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
export interface OmitsSerializingEmptyListsInput {
  queryStringList?: string[] | undefined;
  queryIntegerList?: number[] | undefined;
  queryDoubleList?: number[] | undefined;
  queryBooleanList?: boolean[] | undefined;
  queryTimestampList?: Date[] | undefined;
  queryEnumList?: FooEnum[] | undefined;
  queryIntegerEnumList?: IntegerEnum[] | undefined;
}

/**
 * @public
 */
export interface OperationWithDefaultsInput {
  defaults?: Defaults | undefined;
  clientOptionalDefaults?: ClientOptionalDefaults | undefined;
  topLevelDefault?: string | undefined;
  otherTopLevelDefault?: number | undefined;
}

/**
 * @public
 */
export interface OperationWithDefaultsOutput {
  defaultString?: string | undefined;
  defaultBoolean?: boolean | undefined;
  defaultList?: string[] | undefined;
  defaultDocumentMap?: __DocumentType | undefined;
  defaultDocumentString?: __DocumentType | undefined;
  defaultDocumentBoolean?: __DocumentType | undefined;
  defaultDocumentList?: __DocumentType | undefined;
  defaultNullDocument?: __DocumentType | undefined;
  defaultTimestamp?: Date | undefined;
  defaultBlob?: Uint8Array | undefined;
  defaultByte?: number | undefined;
  defaultShort?: number | undefined;
  defaultInteger?: number | undefined;
  defaultLong?: number | undefined;
  defaultFloat?: number | undefined;
  defaultDouble?: number | undefined;
  defaultMap?: Record<string, string> | undefined;
  defaultEnum?: TestEnum | undefined;
  defaultIntEnum?: TestIntEnum | undefined;
  emptyString?: string | undefined;
  falseBoolean?: boolean | undefined;
  emptyBlob?: Uint8Array | undefined;
  zeroByte?: number | undefined;
  zeroShort?: number | undefined;
  zeroInteger?: number | undefined;
  zeroLong?: number | undefined;
  zeroFloat?: number | undefined;
  zeroDouble?: number | undefined;
}

/**
 * @public
 */
export interface TopLevel {
  dialog: Dialog | undefined;
  dialogList?: Dialog[] | undefined;
  dialogMap?: Record<string, Dialog> | undefined;
}

/**
 * @public
 */
export interface OperationWithNestedStructureInput {
  topLevel: TopLevel | undefined;
}

/**
 * @public
 */
export interface OperationWithNestedStructureOutput {
  dialog: Dialog | undefined;
  dialogList?: Dialog[] | undefined;
  dialogMap?: Record<string, Dialog> | undefined;
}

/**
 * @public
 */
export interface PayloadConfig {
  data?: number | undefined;
}

/**
 * @public
 */
export interface Unit {}

/**
 * @public
 */
export type PlayerAction = PlayerAction.QuitMember | PlayerAction.$UnknownMember;

/**
 * @public
 */
export namespace PlayerAction {
  /**
   * Quit the game.
   * @public
   */
  export interface QuitMember {
    quit: Unit;
    $unknown?: never;
  }

  /**
   * @public
   */
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
 * @public
 */
export interface PostPlayerActionInput {
  action?: PlayerAction | undefined;
}

/**
 * @public
 */
export interface PostPlayerActionOutput {
  action: PlayerAction | undefined;
}

/**
 * @public
 */
export type UnionWithJsonName =
  | UnionWithJsonName.BarMember
  | UnionWithJsonName.BazMember
  | UnionWithJsonName.FooMember
  | UnionWithJsonName.$UnknownMember;

/**
 * @public
 */
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

  /**
   * @public
   */
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
 * @public
 */
export interface PostUnionWithJsonNameInput {
  value?: UnionWithJsonName | undefined;
}

/**
 * @public
 */
export interface PostUnionWithJsonNameOutput {
  value: UnionWithJsonName | undefined;
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
export interface ResponseCodeHttpFallbackInputOutput {}

/**
 * @public
 */
export interface ResponseCodeRequiredOutput {
  responseCode: number | undefined;
}

/**
 * @public
 */
export interface SimpleScalarPropertiesInputOutput {
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
export interface SparseJsonListsInputOutput {
  sparseStringList?: string[] | undefined;
  sparseShortList?: number[] | undefined;
}

/**
 * @public
 */
export interface SparseJsonMapsInputOutput {
  sparseStructMap?: Record<string, GreetingStruct> | undefined;
  sparseNumberMap?: Record<string, number> | undefined;
  sparseBooleanMap?: Record<string, boolean> | undefined;
  sparseStringMap?: Record<string, string> | undefined;
  sparseSetMap?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface StreamingTraitsInputOutput {
  foo?: string | undefined;
  blob?: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface StreamingTraitsRequireLengthInput {
  foo?: string | undefined;
  blob?: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface StreamingTraitsWithMediaTypeInputOutput {
  foo?: string | undefined;
  blob?: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface TestConfig {
  timeout?: number | undefined;
}

/**
 * @public
 */
export interface TestBodyStructureInputOutput {
  testId?: string | undefined;
  testConfig?: TestConfig | undefined;
}

/**
 * @public
 */
export interface TestNoPayloadInputOutput {
  testId?: string | undefined;
}

/**
 * @public
 */
export interface TestPayloadBlobInputOutput {
  contentType?: string | undefined;
  data?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface TestPayloadStructureInputOutput {
  testId?: string | undefined;
  payloadConfig?: PayloadConfig | undefined;
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
export interface RecursiveShapesInputOutput {
  nested?: RecursiveShapesInputOutputNested1 | undefined;
}
