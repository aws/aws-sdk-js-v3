// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RpcV2ProtocolServiceException as __BaseException } from "./RpcV2ProtocolServiceException";

/**
 * Describes one specific validation failure for an input member.
 * @public
 */
export interface ValidationExceptionField {
  /**
   * A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
   * @public
   */
  path: string | undefined;

  /**
   * A detailed description of the validation failure.
   * @public
   */
  message: string | undefined;
}

/**
 * A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * A list of specific failures encountered while validating the input.
   * A member can appear in this list more than once if it failed to satisfy multiple constraints.
   * @public
   */
  fieldList?: ValidationExceptionField[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.fieldList = opts.fieldList;
  }
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
export interface GreetingStruct {
  hi?: string;
}

/**
 * @public
 */
export interface EmptyStructure {}

/**
 * @public
 */
export interface Float16Output {
  value?: number;
}

/**
 * @public
 */
export interface FractionalSecondsOutput {
  datetime?: Date;
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
export interface SimpleStructure {
  value?: string;
}

/**
 * @public
 */
export interface RpcV2CborDenseMapsInputOutput {
  denseStructMap?: Record<string, GreetingStruct>;
  denseNumberMap?: Record<string, number>;
  denseBooleanMap?: Record<string, boolean>;
  denseStringMap?: Record<string, string>;
  denseSetMap?: Record<string, string[]>;
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
export interface StructureListMember {
  a?: string;
  b?: string;
}

/**
 * @public
 */
export interface RpcV2CborListInputOutput {
  stringList?: string[];
  stringSet?: string[];
  integerList?: number[];
  booleanList?: boolean[];
  timestampList?: Date[];
  enumList?: FooEnum[];
  intEnumList?: IntegerEnum[];
  /**
   * A list of lists of strings.
   * @public
   */
  nestedStringList?: string[][];

  structureList?: StructureListMember[];
  blobList?: Uint8Array[];
}

/**
 * @public
 */
export interface RpcV2CborSparseMapsInputOutput {
  sparseStructMap?: Record<string, GreetingStruct>;
  sparseNumberMap?: Record<string, number>;
  sparseBooleanMap?: Record<string, boolean>;
  sparseStringMap?: Record<string, string>;
  sparseSetMap?: Record<string, string[]>;
}

/**
 * @public
 */
export interface SimpleScalarStructure {
  trueBooleanValue?: boolean;
  falseBooleanValue?: boolean;
  byteValue?: number;
  doubleValue?: number;
  floatValue?: number;
  integerValue?: number;
  longValue?: number;
  shortValue?: number;
  stringValue?: string;
  blobValue?: Uint8Array;
}

/**
 * @public
 */
export interface SparseNullsOperationInputOutput {
  sparseStringList?: string[];
  sparseStringMap?: Record<string, string>;
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
