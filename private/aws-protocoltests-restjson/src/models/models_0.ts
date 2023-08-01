// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@smithy/smithy-client";
import { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import { RestJsonProtocolServiceException as __BaseException } from "./RestJsonProtocolServiceException";

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
  queryParamsMapOfStringList?: Record<string, string[]>;
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
export interface DocumentTypeInputOutput {
  stringValue?: string;
  documentValue?: __DocumentType;
}

/**
 * @public
 */
export interface DocumentTypeAsPayloadInputOutput {
  documentValue?: __DocumentType;
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
  payload?: StringEnum | string;
}

/**
 * @public
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
export interface HttpChecksumRequiredInputOutput {
  foo?: string;
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
export interface HttpPrefixHeadersInput {
  foo?: string;
  fooMap?: Record<string, string>;
}

/**
 * @public
 */
export interface HttpPrefixHeadersOutput {
  foo?: string;
  fooMap?: Record<string, string>;
}

/**
 * @public
 */
export interface HttpPrefixHeadersInResponseInput {}

/**
 * @public
 */
export interface HttpPrefixHeadersInResponseOutput {
  prefixHeaders?: Record<string, string>;
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
   * @public
   * Serialized in the path as true or false.
   */
  boolean: boolean | undefined;

  /**
   * @public
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
export interface HttpRequestWithRegexLiteralInput {
  str: string | undefined;
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
export interface StringPayloadInput {
  payload?: string;
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
  headerIntegerEnum?: IntegerEnum | number;
  headerIntegerEnumList?: (IntegerEnum | number)[];
}

/**
 * @public
 */
export interface JsonBlobsInputOutput {
  data?: Uint8Array;
}

/**
 * @public
 */
export interface JsonEnumsInputOutput {
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
export interface JsonIntEnumsInputOutput {
  integerEnum1?: IntegerEnum | number;
  integerEnum2?: IntegerEnum | number;
  integerEnum3?: IntegerEnum | number;
  integerEnumList?: (IntegerEnum | number)[];
  integerEnumSet?: (IntegerEnum | number)[];
  integerEnumMap?: Record<string, IntegerEnum | number>;
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
   * @public
   * A list of lists of strings.
   */
  nestedStringList?: string[][];

  structureList?: StructureListMember[];
}

/**
 * @public
 */
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
 * @public
 */
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
 * @public
 */
export interface RenamedGreeting {
  salutation?: string;
}

/**
 * @public
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
 * @public
 * A shared structure that contains a single union member.
 */
export interface UnionInputOutput {
  /**
   * @public
   * A union with a representative set of types for members.
   */
  contents?: MyUnion;
}

/**
 * @public
 */
export interface MalformedAcceptWithGenericStringOutput {
  payload?: string;
}

/**
 * @public
 */
export interface MalformedAcceptWithPayloadOutput {
  payload?: Uint8Array;
}

/**
 * @public
 */
export interface MalformedBlobInput {
  blob?: Uint8Array;
}

/**
 * @public
 */
export interface MalformedBooleanInput {
  booleanInBody?: boolean;
  booleanInPath: boolean | undefined;
  booleanInQuery?: boolean;
  booleanInHeader?: boolean;
}

/**
 * @public
 */
export interface MalformedByteInput {
  byteInBody?: number;
  byteInPath: number | undefined;
  byteInQuery?: number;
  byteInHeader?: number;
}

/**
 * @public
 */
export interface MalformedContentTypeWithGenericStringInput {
  payload?: string;
}

/**
 * @public
 */
export interface MalformedContentTypeWithPayloadInput {
  payload?: Uint8Array;
}

/**
 * @public
 */
export interface MalformedDoubleInput {
  doubleInBody?: number;
  doubleInPath: number | undefined;
  doubleInQuery?: number;
  doubleInHeader?: number;
}

/**
 * @public
 */
export interface MalformedFloatInput {
  floatInBody?: number;
  floatInPath: number | undefined;
  floatInQuery?: number;
  floatInHeader?: number;
}

/**
 * @public
 */
export interface MalformedIntegerInput {
  integerInBody?: number;
  integerInPath: number | undefined;
  integerInQuery?: number;
  integerInHeader?: number;
}

/**
 * @public
 */
export interface MalformedListInput {
  bodyList?: string[];
}

/**
 * @public
 */
export interface MalformedLongInput {
  longInBody?: number;
  longInPath: number | undefined;
  longInQuery?: number;
  longInHeader?: number;
}

/**
 * @public
 */
export interface MalformedMapInput {
  bodyMap?: Record<string, string>;
}

/**
 * @public
 */
export interface MalformedRequestBodyInput {
  int?: number;
  float?: number;
}

/**
 * @public
 */
export interface MalformedShortInput {
  shortInBody?: number;
  shortInPath: number | undefined;
  shortInQuery?: number;
  shortInHeader?: number;
}

/**
 * @public
 */
export interface MalformedStringInput {
  blob?: __LazyJsonString | string;
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
  union?: SimpleUnion;
}

/**
 * @public
 */
export interface MediaTypeHeaderInput {
  json?: __LazyJsonString | string;
}

/**
 * @public
 */
export interface MediaTypeHeaderOutput {
  json?: __LazyJsonString | string;
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
export interface OmitsSerializingEmptyListsInput {
  queryStringList?: string[];
  queryIntegerList?: number[];
  queryDoubleList?: number[];
  queryBooleanList?: boolean[];
  queryTimestampList?: Date[];
  queryEnumList?: (FooEnum | string)[];
  queryIntegerEnumList?: (IntegerEnum | number)[];
}

/**
 * @public
 */
export interface PayloadConfig {
  data?: number;
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
   * @public
   * Quit the game.
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
  action?: PlayerAction;
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
  value?: UnionWithJsonName;
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
export interface StreamingTraitsInputOutput {
  foo?: string;
  blob?: StreamingBlobTypes;
}

/**
 * @internal
 */
export const StreamingTraitsInputOutputFilterSensitiveLog = (obj: StreamingTraitsInputOutput): any => ({
  ...obj,
});

/**
 * @public
 */
export interface StreamingTraitsRequireLengthInput {
  foo?: string;
  blob?: StreamingBlobTypes;
}

/**
 * @internal
 */
export const StreamingTraitsRequireLengthInputFilterSensitiveLog = (obj: StreamingTraitsRequireLengthInput): any => ({
  ...obj,
});

/**
 * @public
 */
export interface StreamingTraitsWithMediaTypeInputOutput {
  foo?: string;
  blob?: StreamingBlobTypes;
}

/**
 * @internal
 */
export const StreamingTraitsWithMediaTypeInputOutputFilterSensitiveLog = (
  obj: StreamingTraitsWithMediaTypeInputOutput
): any => ({
  ...obj,
});

/**
 * @public
 */
export interface TestConfig {
  timeout?: number;
}

/**
 * @public
 */
export interface TestBodyStructureInputOutput {
  testId?: string;
  testConfig?: TestConfig;
}

/**
 * @public
 */
export interface TestNoPayloadInputOutput {
  testId?: string;
}

/**
 * @public
 */
export interface TestPayloadBlobInputOutput {
  contentType?: string;
  data?: Uint8Array;
}

/**
 * @public
 */
export interface TestPayloadStructureInputOutput {
  testId?: string;
  payloadConfig?: PayloadConfig;
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
export interface RecursiveShapesInputOutput {
  nested?: RecursiveShapesInputOutputNested1;
}
