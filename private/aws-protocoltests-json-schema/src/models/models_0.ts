// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/smithy-client";
import type { DocumentType as __DocumentType } from "@smithy/types";

import type { FooEnum, IntegerEnum } from "./enums";

/**
 * @public
 */
export interface GreetingStruct {
  hi?: string | undefined;
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
    listValue: (value: string[]) => T;
    mapValue: (value: Record<string, string>) => T;
    structureValue: (value: GreetingStruct) => T;
    _: (name: string, value: any) => T;
  }
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
