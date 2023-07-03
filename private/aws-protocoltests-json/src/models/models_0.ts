// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { JsonProtocolServiceException as __BaseException } from "./JsonProtocolServiceException";

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
export interface DatetimeOffsetsOutput {
  datetime?: Date;
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
  Value?: string;
}

/**
 * @public
 */
export interface StructWithJsonName {
  Value?: string;
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
 * A union with a representative set of types for members.
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
    enumValue: FooEnum | string;
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
    enumValue: (value: FooEnum | string) => T;
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
 * @public
 * A shared structure that contains a single union member.
 */
export interface UnionInputOutput {
  /**
   * A union with a representative set of types for members.
   */
  contents?: MyUnion;
}

/**
 * @public
 */
export interface NullOperationInputOutput {
  string?: string;
  sparseStringList?: string[];
  sparseStringMap?: Record<string, string>;
}

/**
 * @public
 */
export interface OperationWithOptionalInputOutputInput {
  Value?: string;
}

/**
 * @public
 */
export interface OperationWithOptionalInputOutputOutput {
  Value?: string;
}

/**
 * @public
 */
export interface PutAndGetInlineDocumentsInputOutput {
  inlineDocument?: __DocumentType;
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
export interface SimpleScalarPropertiesInputOutput {
  floatValue?: number;
  doubleValue?: number;
}

/**
 * @public
 */
export interface KitchenSink {
  Blob?: Uint8Array;
  Boolean?: boolean;
  Double?: number;
  EmptyStruct?: EmptyStruct;
  Float?: number;
  HttpdateTimestamp?: Date;
  Integer?: number;
  Iso8601Timestamp?: Date;
  JsonValue?: __LazyJsonString | string;
  ListOfLists?: string[][];
  ListOfMapsOfStrings?: Record<string, string>[];
  ListOfStrings?: string[];
  ListOfStructs?: SimpleStruct[];
  Long?: number;
  MapOfListsOfStrings?: Record<string, string[]>;
  MapOfMaps?: Record<string, Record<string, string>>;
  MapOfStrings?: Record<string, string>;
  MapOfStructs?: Record<string, SimpleStruct>;
  RecursiveList?: KitchenSink[];
  RecursiveMap?: Record<string, KitchenSink>;
  RecursiveStruct?: KitchenSink;
  SimpleStruct?: SimpleStruct;
  String?: string;
  StructWithJsonName?: StructWithJsonName;
  Timestamp?: Date;
  UnixTimestamp?: Date;
}

/**
 * @public
 */
export class ErrorWithMembers extends __BaseException {
  readonly name: "ErrorWithMembers" = "ErrorWithMembers";
  readonly $fault: "client" = "client";
  Code?: string;
  ComplexData?: KitchenSink;
  IntegerField?: number;
  ListField?: string[];
  MapField?: Record<string, string>;
  Message?: string;
  /**
   * abc
   */
  StringField?: string;
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
