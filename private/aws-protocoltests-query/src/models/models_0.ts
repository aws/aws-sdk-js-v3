// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { QueryProtocolServiceException as __BaseException } from "./QueryProtocolServiceException";

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
export interface HostLabelInput {
  label: string | undefined;
}

/**
 * @public
 */
export interface FlattenedXmlMapOutput {
  myMap?: Record<string, FooEnum | string>;
}

/**
 * @public
 */
export interface FlattenedXmlMapWithXmlNameOutput {
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
    this.TopLevel = opts.TopLevel;
    this.Nested = opts.Nested;
  }
}

/**
 * @public
 */
export class CustomCodeError extends __BaseException {
  readonly name: "CustomCodeError" = "CustomCodeError";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomCodeError, __BaseException>) {
    super({
      name: "CustomCodeError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomCodeError.prototype);
    this.Message = opts.Message;
  }
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
export interface IgnoresWrappingXmlNameOutput {
  foo?: string;
}

/**
 * @public
 */
export interface NoInputAndOutputInput {}

/**
 * @public
 */
export interface NoInputAndOutputOutput {}

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
export interface NestedStructWithList {
  ListArg?: string[];
}

/**
 * @public
 */
export interface QueryListsInput {
  ListArg?: string[];
  ComplexListArg?: GreetingStruct[];
  FlattenedListArg?: string[];
  ListArgWithXmlNameMember?: string[];
  FlattenedListArgWithXmlName?: string[];
  NestedWithList?: NestedStructWithList;
}

/**
 * @public
 */
export interface NestedStructWithMap {
  MapArg?: Record<string, string>;
}

/**
 * @public
 */
export interface QueryMapsInput {
  MapArg?: Record<string, string>;
  RenamedMapArg?: Record<string, string>;
  ComplexMapArg?: Record<string, GreetingStruct>;
  MapWithXmlMemberName?: Record<string, string>;
  FlattenedMap?: Record<string, string>;
  FlattenedMapWithXmlName?: Record<string, string>;
  MapOfLists?: Record<string, string[]>;
  NestedStructWithMap?: NestedStructWithMap;
}

/**
 * @public
 */
export interface QueryTimestampsInput {
  normalFormat?: Date;
  epochMember?: Date;
  epochTarget?: Date;
}

/**
 * @public
 */
export interface SimpleInputParamsInput {
  Foo?: string;
  Bar?: string;
  Baz?: boolean;
  Bam?: number;
  FloatValue?: number;
  Boo?: number;
  Qux?: Uint8Array;
  FooEnum?: FooEnum | string;
  IntegerEnum?: IntegerEnum | number;
}

/**
 * @public
 */
export interface SimpleScalarXmlPropertiesOutput {
  stringValue?: string;
  emptyStringValue?: string;
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
export interface XmlBlobsOutput {
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
export interface XmlListsOutput {
  stringList?: string[];
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

  renamedListMembers?: string[];
  flattenedList?: string[];
  flattenedList2?: string[];
  flattenedListWithMemberNamespace?: string[];
  flattenedListWithNamespace?: string[];
  structureList?: StructureListMember[];
}

/**
 * @public
 */
export interface XmlMapsOutput {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @public
 */
export interface XmlEnumsOutput {
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
export interface XmlIntEnumsOutput {
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
export interface XmlMapsXmlNameOutput {
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
export interface XmlNamespacesOutput {
  nested?: XmlNamespaceNested;
}

/**
 * @public
 */
export interface XmlTimestampsOutput {
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
export interface StructArg {
  StringArg?: string;
  OtherArg?: boolean;
  RecursiveArg?: StructArg;
}

/**
 * @public
 */
export interface NestedStructuresInput {
  Nested?: StructArg;
}

/**
 * @public
 */
export interface RecursiveXmlShapesOutputNested1 {
  foo?: string;
  nested?: RecursiveXmlShapesOutputNested2;
}

/**
 * @public
 */
export interface RecursiveXmlShapesOutputNested2 {
  bar?: string;
  recursiveMember?: RecursiveXmlShapesOutputNested1;
}

/**
 * @public
 */
export interface RecursiveXmlShapesOutput {
  nested?: RecursiveXmlShapesOutputNested1;
}
