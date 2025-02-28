// smithy-typescript generated code
import {
  AutomaticJsonStringConversion as __AutomaticJsonStringConversion,
  ExceptionOptionType as __ExceptionOptionType,
} from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { JsonProtocolServiceException as __BaseException } from "./JsonProtocolServiceException";

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
    this.TopLevel = opts.TopLevel;
    this.Nested = opts.Nested;
  }
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
export interface EmptyStruct {}

/**
 * @public
 */
export interface HostLabelInput {
  label: string | undefined;
}

/**
 * @public
 */
export interface SimpleStruct {
  Value?: string | undefined;
}

/**
 * @public
 */
export interface StructWithJsonName {
  Value?: string | undefined;
}

/**
 * @public
 */
export class ErrorWithoutMembers extends __BaseException {
  readonly name: "ErrorWithoutMembers" = "ErrorWithoutMembers";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ErrorWithoutMembers, __BaseException>) {
    super({
      name: "ErrorWithoutMembers",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ErrorWithoutMembers.prototype);
  }
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
  intEnum1?: IntegerEnum | undefined;
  intEnum2?: IntegerEnum | undefined;
  intEnum3?: IntegerEnum | undefined;
  intEnumList?: IntegerEnum[] | undefined;
  intEnumSet?: IntegerEnum[] | undefined;
  intEnumMap?: Record<string, IntegerEnum> | undefined;
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
export interface NullOperationInputOutput {
  string?: string | undefined;
}

/**
 * @public
 */
export interface OperationWithOptionalInputOutputInput {
  Value?: string | undefined;
}

/**
 * @public
 */
export interface OperationWithOptionalInputOutputOutput {
  Value?: string | undefined;
}

/**
 * @public
 */
export interface PutAndGetInlineDocumentsInputOutput {
  inlineDocument?: __DocumentType | undefined;
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
export interface SimpleScalarPropertiesInputOutput {
  floatValue?: number | undefined;
  doubleValue?: number | undefined;
}

/**
 * @public
 */
export interface SparseNullsOperationInputOutput {
  sparseStringList?: string[] | undefined;
  sparseStringMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface KitchenSink {
  Blob?: Uint8Array | undefined;
  Boolean?: boolean | undefined;
  Double?: number | undefined;
  EmptyStruct?: EmptyStruct | undefined;
  Float?: number | undefined;
  HttpdateTimestamp?: Date | undefined;
  Integer?: number | undefined;
  Iso8601Timestamp?: Date | undefined;
  JsonValue?: __AutomaticJsonStringConversion | string | undefined;
  ListOfLists?: string[][] | undefined;
  ListOfMapsOfStrings?: Record<string, string>[] | undefined;
  ListOfStrings?: string[] | undefined;
  ListOfStructs?: SimpleStruct[] | undefined;
  Long?: number | undefined;
  MapOfListsOfStrings?: Record<string, string[]> | undefined;
  MapOfMaps?: Record<string, Record<string, string>> | undefined;
  MapOfStrings?: Record<string, string> | undefined;
  MapOfStructs?: Record<string, SimpleStruct> | undefined;
  RecursiveList?: KitchenSink[] | undefined;
  RecursiveMap?: Record<string, KitchenSink> | undefined;
  RecursiveStruct?: KitchenSink | undefined;
  SimpleStruct?: SimpleStruct | undefined;
  String?: string | undefined;
  StructWithJsonName?: StructWithJsonName | undefined;
  Timestamp?: Date | undefined;
  UnixTimestamp?: Date | undefined;
}

/**
 * @public
 */
export class ErrorWithMembers extends __BaseException {
  readonly name: "ErrorWithMembers" = "ErrorWithMembers";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  ComplexData?: KitchenSink | undefined;
  IntegerField?: number | undefined;
  ListField?: string[] | undefined;
  MapField?: Record<string, string> | undefined;
  Message?: string | undefined;
  /**
   * abc
   * @public
   */
  StringField?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ErrorWithMembers, __BaseException>) {
    super({
      name: "ErrorWithMembers",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ErrorWithMembers.prototype);
    this.Code = opts.Code;
    this.ComplexData = opts.ComplexData;
    this.IntegerField = opts.IntegerField;
    this.ListField = opts.ListField;
    this.MapField = opts.MapField;
    this.Message = opts.Message;
    this.StringField = opts.StringField;
  }
}
