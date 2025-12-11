// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type { FooEnum, IntegerEnum, RequiredEnum, RequiredIntEnum, TestEnum, TestIntEnum } from "./enums";

/**
 * @public
 */
export interface GreetingStruct {
  hi?: string | undefined;
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
 * @public
 */
export interface GreetingWithErrorsInput {
  greeting?: string | undefined;
}

/**
 * @public
 */
export interface GreetingWithErrorsOutput {
  greeting?: string | undefined;
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
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
}

/**
 * @public
 */
export interface JsonUnionsInput {
  /**
   * A union with a representative set of types for members.
   * @public
   */
  contents?: MyUnion | undefined;
}

/**
 * @public
 */
export interface JsonUnionsOutput {
  /**
   * A union with a representative set of types for members.
   * @public
   */
  contents?: MyUnion | undefined;
}

/**
 * @public
 */
export interface NoInputAndOutputOutput {}

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
export interface OperationWithRequiredMembersWithDefaultsOutput {
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
  requiredEnum: RequiredEnum | undefined;
  requiredIntEnum: RequiredIntEnum | undefined;
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
export interface SimpleScalarPropertiesInput {
  floatValue?: number | undefined;
  doubleValue?: number | undefined;
}

/**
 * @public
 */
export interface SimpleScalarPropertiesOutput {
  floatValue?: number | undefined;
  doubleValue?: number | undefined;
}
