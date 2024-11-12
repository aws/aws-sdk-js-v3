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
  fieldList?: ValidationExceptionField[] | undefined;

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
export interface GreetingStruct {
  hi?: string | undefined;
}

/**
 * @public
 */
export interface EmptyStructure {}

/**
 * @public
 */
export interface Float16Output {
  value?: number | undefined;
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
export interface SimpleStructure {
  value?: string | undefined;
}

/**
 * @public
 */
export interface RpcV2CborDenseMapsInputOutput {
  denseStructMap?: Record<string, GreetingStruct> | undefined;
  denseNumberMap?: Record<string, number> | undefined;
  denseBooleanMap?: Record<string, boolean> | undefined;
  denseStringMap?: Record<string, string> | undefined;
  denseSetMap?: Record<string, string[]> | undefined;
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
  a?: string | undefined;
  b?: string | undefined;
}

/**
 * @public
 */
export interface RpcV2CborListInputOutput {
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
  blobList?: Uint8Array[] | undefined;
}

/**
 * @public
 */
export interface RpcV2CborSparseMapsInputOutput {
  sparseStructMap?: Record<string, GreetingStruct> | undefined;
  sparseNumberMap?: Record<string, number> | undefined;
  sparseBooleanMap?: Record<string, boolean> | undefined;
  sparseStringMap?: Record<string, string> | undefined;
  sparseSetMap?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface SimpleScalarStructure {
  trueBooleanValue?: boolean | undefined;
  falseBooleanValue?: boolean | undefined;
  byteValue?: number | undefined;
  doubleValue?: number | undefined;
  floatValue?: number | undefined;
  integerValue?: number | undefined;
  longValue?: number | undefined;
  shortValue?: number | undefined;
  stringValue?: string | undefined;
  blobValue?: Uint8Array | undefined;
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
