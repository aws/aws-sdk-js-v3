// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { JSONRPC10ServiceException as __BaseException } from "./JSONRPC10ServiceException";

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
export interface ClientOptionalDefaults {
  member?: number;
}

/**
 * @public
 */
export interface ComplexNestedErrorData {
  Foo?: string;
}

/**
 * This error is thrown when a request is invalid.
 * @public
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
export interface ContentTypeParametersInput {
  value?: number;
}

/**
 * @public
 */
export interface ContentTypeParametersOutput {}

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
  defaultString?: string;
  defaultBoolean?: boolean;
  defaultList?: string[];
  defaultDocumentMap?: __DocumentType;
  defaultDocumentString?: __DocumentType;
  defaultDocumentBoolean?: __DocumentType;
  defaultDocumentList?: __DocumentType;
  defaultNullDocument?: __DocumentType;
  defaultTimestamp?: Date;
  defaultBlob?: Uint8Array;
  defaultByte?: number;
  defaultShort?: number;
  defaultInteger?: number;
  defaultLong?: number;
  defaultFloat?: number;
  defaultDouble?: number;
  defaultMap?: Record<string, string>;
  defaultEnum?: TestEnum;
  defaultIntEnum?: TestIntEnum;
  emptyString?: string;
  falseBoolean?: boolean;
  emptyBlob?: Uint8Array;
  zeroByte?: number;
  zeroShort?: number;
  zeroInteger?: number;
  zeroLong?: number;
  zeroFloat?: number;
  zeroDouble?: number;
}

/**
 * @public
 */
export interface Farewell {
  phrase?: string;
}

/**
 * @public
 */
export interface Dialog {
  language?: string;
  greeting?: string;
  farewell?: Farewell;
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
export interface EndpointWithHostLabelOperationInput {
  label: string | undefined;
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
export interface GreetingWithErrorsInput {
  greeting?: string;
}

/**
 * @public
 */
export interface GreetingWithErrorsOutput {
  greeting?: string;
}

/**
 * This error is thrown when an invalid greeting value is provided.
 * @public
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
 * A union with a representative set of types for members.
 * @public
 */
export type MyUnion =
  | MyUnion.BlobValueMember
  | MyUnion.BooleanValueMember
  | MyUnion.EnumValueMember
  | MyUnion.IntEnumValueMember
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
    intEnumValue?: never;
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
    intEnumValue?: never;
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
    intEnumValue?: never;
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
    intEnumValue?: never;
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
    intEnumValue?: never;
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
    intEnumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    $unknown?: never;
  }

  export interface IntEnumValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    intEnumValue: IntegerEnum;
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
    intEnumValue?: never;
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
    intEnumValue?: never;
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
    intEnumValue?: never;
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
    intEnumValue?: never;
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
    intEnumValue: (value: IntegerEnum) => T;
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
    if (value.intEnumValue !== undefined) return visitor.intEnumValue(value.intEnumValue);
    if (value.listValue !== undefined) return visitor.listValue(value.listValue);
    if (value.mapValue !== undefined) return visitor.mapValue(value.mapValue);
    if (value.structureValue !== undefined) return visitor.structureValue(value.structureValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface JsonUnionsInput {
  /**
   * A union with a representative set of types for members.
   * @public
   */
  contents?: MyUnion;
}

/**
 * @public
 */
export interface JsonUnionsOutput {
  /**
   * A union with a representative set of types for members.
   * @public
   */
  contents?: MyUnion;
}

/**
 * @public
 */
export interface NoInputAndOutputOutput {}

/**
 * @public
 */
export interface OperationWithDefaultsInput {
  defaults?: Defaults;
  clientOptionalDefaults?: ClientOptionalDefaults;
  topLevelDefault?: string;
  otherTopLevelDefault?: number;
}

/**
 * @public
 */
export interface OperationWithDefaultsOutput {
  defaultString?: string;
  defaultBoolean?: boolean;
  defaultList?: string[];
  defaultDocumentMap?: __DocumentType;
  defaultDocumentString?: __DocumentType;
  defaultDocumentBoolean?: __DocumentType;
  defaultDocumentList?: __DocumentType;
  defaultNullDocument?: __DocumentType;
  defaultTimestamp?: Date;
  defaultBlob?: Uint8Array;
  defaultByte?: number;
  defaultShort?: number;
  defaultInteger?: number;
  defaultLong?: number;
  defaultFloat?: number;
  defaultDouble?: number;
  defaultMap?: Record<string, string>;
  defaultEnum?: TestEnum;
  defaultIntEnum?: TestIntEnum;
  emptyString?: string;
  falseBoolean?: boolean;
  emptyBlob?: Uint8Array;
  zeroByte?: number;
  zeroShort?: number;
  zeroInteger?: number;
  zeroLong?: number;
  zeroFloat?: number;
  zeroDouble?: number;
}

/**
 * @public
 */
export interface TopLevel {
  dialog: Dialog | undefined;
  dialogList?: Dialog[];
  dialogMap?: Record<string, Dialog>;
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
  dialogList?: Dialog[];
  dialogMap?: Record<string, Dialog>;
}

/**
 * @public
 */
export interface OperationWithRequiredMembersOutput {
  requiredString: string | undefined;
  requiredBoolean: boolean | undefined;
  requiredList: string[] | undefined;
  requiredTimestamp: Date | undefined;
  requiredBlob: Uint8Array | undefined;
  requiredByte: number | undefined;
  requiredShort: number | undefined;
  requiredInteger: number | undefined;
  requiredLong: number | undefined;
  requiredFloat: number | undefined;
  requiredDouble: number | undefined;
  requiredMap: Record<string, string> | undefined;
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
export interface SimpleScalarPropertiesInput {
  floatValue?: number;
  doubleValue?: number;
}

/**
 * @public
 */
export interface SimpleScalarPropertiesOutput {
  floatValue?: number;
  doubleValue?: number;
}
