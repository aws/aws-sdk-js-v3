// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@aws-sdk/smithy-client";
import { DocumentType as __DocumentType } from "@aws-sdk/types";

import { JsonProtocolServiceException as __BaseException } from "./JsonProtocolServiceException";

export interface GreetingStruct {
  hi?: string;
}

export namespace GreetingStruct {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GreetingStruct): any => ({
    ...obj,
  });
}

export enum FooEnum {
  BAR = "Bar",
  BAZ = "Baz",
  FOO = "Foo",
  ONE = "1",
  ZERO = "0",
}

export interface ComplexNestedErrorData {
  Foo?: string;
}

export namespace ComplexNestedErrorData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplexNestedErrorData): any => ({
    ...obj,
  });
}

/**
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

export interface EmptyStruct {}

export namespace EmptyStruct {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmptyStruct): any => ({
    ...obj,
  });
}

export interface HostLabelInput {
  label: string | undefined;
}

export namespace HostLabelInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostLabelInput): any => ({
    ...obj,
  });
}

export interface SimpleStruct {
  Value?: string;
}

export namespace SimpleStruct {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimpleStruct): any => ({
    ...obj,
  });
}

export interface StructWithJsonName {
  Value?: string;
}

export namespace StructWithJsonName {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StructWithJsonName): any => ({
    ...obj,
  });
}

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

export namespace GreetingWithErrorsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GreetingWithErrorsOutput): any => ({
    ...obj,
  });
}

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

export interface JsonEnumsInputOutput {
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumSet?: (FooEnum | string)[];
  fooEnumMap?: { [key: string]: FooEnum | string };
}

export namespace JsonEnumsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonEnumsInputOutput): any => ({
    ...obj,
  });
}

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
    mapValue: { [key: string]: string };
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
    mapValue: (value: { [key: string]: string }) => T;
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MyUnion): any => {
    if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
    if (obj.booleanValue !== undefined) return { booleanValue: obj.booleanValue };
    if (obj.numberValue !== undefined) return { numberValue: obj.numberValue };
    if (obj.blobValue !== undefined) return { blobValue: obj.blobValue };
    if (obj.timestampValue !== undefined) return { timestampValue: obj.timestampValue };
    if (obj.enumValue !== undefined) return { enumValue: obj.enumValue };
    if (obj.listValue !== undefined) return { listValue: obj.listValue };
    if (obj.mapValue !== undefined) return { mapValue: obj.mapValue };
    if (obj.structureValue !== undefined)
      return { structureValue: GreetingStruct.filterSensitiveLog(obj.structureValue) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * A shared structure that contains a single union member.
 */
export interface UnionInputOutput {
  /**
   * A union with a representative set of types for members.
   */
  contents?: MyUnion;
}

export namespace UnionInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnionInputOutput): any => ({
    ...obj,
    ...(obj.contents && { contents: MyUnion.filterSensitiveLog(obj.contents) }),
  });
}

export interface NullOperationInputOutput {
  string?: string;
  sparseStringList?: string[];
  sparseStringMap?: { [key: string]: string };
}

export namespace NullOperationInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NullOperationInputOutput): any => ({
    ...obj,
  });
}

export interface OperationWithOptionalInputOutputInput {
  Value?: string;
}

export namespace OperationWithOptionalInputOutputInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperationWithOptionalInputOutputInput): any => ({
    ...obj,
  });
}

export interface OperationWithOptionalInputOutputOutput {
  Value?: string;
}

export namespace OperationWithOptionalInputOutputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperationWithOptionalInputOutputOutput): any => ({
    ...obj,
  });
}

export interface PutAndGetInlineDocumentsInputOutput {
  inlineDocument?: __DocumentType;
}

export namespace PutAndGetInlineDocumentsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAndGetInlineDocumentsInputOutput): any => ({
    ...obj,
  });
}

export interface SimpleScalarPropertiesInputOutput {
  floatValue?: number;
  doubleValue?: number;
}

export namespace SimpleScalarPropertiesInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimpleScalarPropertiesInputOutput): any => ({
    ...obj,
  });
}

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
  ListOfMapsOfStrings?: { [key: string]: string }[];
  ListOfStrings?: string[];
  ListOfStructs?: SimpleStruct[];
  Long?: number;
  MapOfListsOfStrings?: { [key: string]: string[] };
  MapOfMaps?: { [key: string]: { [key: string]: string } };
  MapOfStrings?: { [key: string]: string };
  MapOfStructs?: { [key: string]: SimpleStruct };
  RecursiveList?: KitchenSink[];
  RecursiveMap?: { [key: string]: KitchenSink };
  RecursiveStruct?: KitchenSink;
  SimpleStruct?: SimpleStruct;
  String?: string;
  StructWithJsonName?: StructWithJsonName;
  Timestamp?: Date;
  UnixTimestamp?: Date;
}

export namespace KitchenSink {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KitchenSink): any => ({
    ...obj,
  });
}

export class ErrorWithMembers extends __BaseException {
  readonly name: "ErrorWithMembers" = "ErrorWithMembers";
  readonly $fault: "client" = "client";
  Code?: string;
  ComplexData?: KitchenSink;
  IntegerField?: number;
  ListField?: string[];
  MapField?: { [key: string]: string };
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
