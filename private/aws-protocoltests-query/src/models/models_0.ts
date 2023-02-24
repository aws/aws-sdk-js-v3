// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { QueryProtocolServiceException as __BaseException } from "./QueryProtocolServiceException";

export interface GreetingStruct {
  hi?: string;
}

/**
 * @internal
 */
export const GreetingStructFilterSensitiveLog = (obj: GreetingStruct): any => ({
  ...obj,
});

export enum FooEnum {
  BAR = "Bar",
  BAZ = "Baz",
  FOO = "Foo",
  ONE = "1",
  ZERO = "0",
}

export enum IntegerEnum {
  A = 1,
  B = 2,
  C = 3,
}

export interface DatetimeOffsetsOutput {
  datetime?: Date;
}

/**
 * @internal
 */
export const DatetimeOffsetsOutputFilterSensitiveLog = (obj: DatetimeOffsetsOutput): any => ({
  ...obj,
});

export interface EmptyInputAndEmptyOutputInput {}

/**
 * @internal
 */
export const EmptyInputAndEmptyOutputInputFilterSensitiveLog = (obj: EmptyInputAndEmptyOutputInput): any => ({
  ...obj,
});

export interface EmptyInputAndEmptyOutputOutput {}

/**
 * @internal
 */
export const EmptyInputAndEmptyOutputOutputFilterSensitiveLog = (obj: EmptyInputAndEmptyOutputOutput): any => ({
  ...obj,
});

export interface HostLabelInput {
  label: string | undefined;
}

/**
 * @internal
 */
export const HostLabelInputFilterSensitiveLog = (obj: HostLabelInput): any => ({
  ...obj,
});

export interface FlattenedXmlMapOutput {
  myMap?: Record<string, FooEnum | string>;
}

/**
 * @internal
 */
export const FlattenedXmlMapOutputFilterSensitiveLog = (obj: FlattenedXmlMapOutput): any => ({
  ...obj,
});

export interface FlattenedXmlMapWithXmlNameOutput {
  myMap?: Record<string, string>;
}

/**
 * @internal
 */
export const FlattenedXmlMapWithXmlNameOutputFilterSensitiveLog = (obj: FlattenedXmlMapWithXmlNameOutput): any => ({
  ...obj,
});

export interface FlattenedXmlMapWithXmlNamespaceOutput {
  myMap?: Record<string, string>;
}

/**
 * @internal
 */
export const FlattenedXmlMapWithXmlNamespaceOutputFilterSensitiveLog = (
  obj: FlattenedXmlMapWithXmlNamespaceOutput
): any => ({
  ...obj,
});

export interface ComplexNestedErrorData {
  Foo?: string;
}

/**
 * @internal
 */
export const ComplexNestedErrorDataFilterSensitiveLog = (obj: ComplexNestedErrorData): any => ({
  ...obj,
});

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

export interface GreetingWithErrorsOutput {
  greeting?: string;
}

/**
 * @internal
 */
export const GreetingWithErrorsOutputFilterSensitiveLog = (obj: GreetingWithErrorsOutput): any => ({
  ...obj,
});

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

export interface IgnoresWrappingXmlNameOutput {
  foo?: string;
}

/**
 * @internal
 */
export const IgnoresWrappingXmlNameOutputFilterSensitiveLog = (obj: IgnoresWrappingXmlNameOutput): any => ({
  ...obj,
});

export interface NoInputAndOutputInput {}

/**
 * @internal
 */
export const NoInputAndOutputInputFilterSensitiveLog = (obj: NoInputAndOutputInput): any => ({
  ...obj,
});

export interface NoInputAndOutputOutput {}

/**
 * @internal
 */
export const NoInputAndOutputOutputFilterSensitiveLog = (obj: NoInputAndOutputOutput): any => ({
  ...obj,
});

export interface QueryIdempotencyTokenAutoFillInput {
  token?: string;
}

/**
 * @internal
 */
export const QueryIdempotencyTokenAutoFillInputFilterSensitiveLog = (obj: QueryIdempotencyTokenAutoFillInput): any => ({
  ...obj,
});

export interface NestedStructWithList {
  ListArg?: string[];
}

/**
 * @internal
 */
export const NestedStructWithListFilterSensitiveLog = (obj: NestedStructWithList): any => ({
  ...obj,
});

export interface QueryListsInput {
  ListArg?: string[];
  ComplexListArg?: GreetingStruct[];
  FlattenedListArg?: string[];
  ListArgWithXmlNameMember?: string[];
  FlattenedListArgWithXmlName?: string[];
  NestedWithList?: NestedStructWithList;
}

/**
 * @internal
 */
export const QueryListsInputFilterSensitiveLog = (obj: QueryListsInput): any => ({
  ...obj,
});

export interface NestedStructWithMap {
  MapArg?: Record<string, string>;
}

/**
 * @internal
 */
export const NestedStructWithMapFilterSensitiveLog = (obj: NestedStructWithMap): any => ({
  ...obj,
});

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
 * @internal
 */
export const QueryMapsInputFilterSensitiveLog = (obj: QueryMapsInput): any => ({
  ...obj,
});

export interface QueryTimestampsInput {
  normalFormat?: Date;
  epochMember?: Date;
  epochTarget?: Date;
}

/**
 * @internal
 */
export const QueryTimestampsInputFilterSensitiveLog = (obj: QueryTimestampsInput): any => ({
  ...obj,
});

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
 * @internal
 */
export const SimpleInputParamsInputFilterSensitiveLog = (obj: SimpleInputParamsInput): any => ({
  ...obj,
});

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
 * @internal
 */
export const SimpleScalarXmlPropertiesOutputFilterSensitiveLog = (obj: SimpleScalarXmlPropertiesOutput): any => ({
  ...obj,
});

export interface XmlBlobsOutput {
  data?: Uint8Array;
}

/**
 * @internal
 */
export const XmlBlobsOutputFilterSensitiveLog = (obj: XmlBlobsOutput): any => ({
  ...obj,
});

export interface StructureListMember {
  a?: string;
  b?: string;
}

/**
 * @internal
 */
export const StructureListMemberFilterSensitiveLog = (obj: StructureListMember): any => ({
  ...obj,
});

export interface XmlListsOutput {
  stringList?: string[];
  stringSet?: string[];
  integerList?: number[];
  booleanList?: boolean[];
  timestampList?: Date[];
  enumList?: (FooEnum | string)[];
  intEnumList?: (IntegerEnum | number)[];
  /**
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
 * @internal
 */
export const XmlListsOutputFilterSensitiveLog = (obj: XmlListsOutput): any => ({
  ...obj,
});

export interface XmlMapsOutput {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @internal
 */
export const XmlMapsOutputFilterSensitiveLog = (obj: XmlMapsOutput): any => ({
  ...obj,
});

export interface XmlEnumsOutput {
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumSet?: (FooEnum | string)[];
  fooEnumMap?: Record<string, FooEnum | string>;
}

/**
 * @internal
 */
export const XmlEnumsOutputFilterSensitiveLog = (obj: XmlEnumsOutput): any => ({
  ...obj,
});

export interface XmlIntEnumsOutput {
  intEnum1?: IntegerEnum | number;
  intEnum2?: IntegerEnum | number;
  intEnum3?: IntegerEnum | number;
  intEnumList?: (IntegerEnum | number)[];
  intEnumSet?: (IntegerEnum | number)[];
  intEnumMap?: Record<string, IntegerEnum | number>;
}

/**
 * @internal
 */
export const XmlIntEnumsOutputFilterSensitiveLog = (obj: XmlIntEnumsOutput): any => ({
  ...obj,
});

export interface XmlMapsXmlNameOutput {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @internal
 */
export const XmlMapsXmlNameOutputFilterSensitiveLog = (obj: XmlMapsXmlNameOutput): any => ({
  ...obj,
});

export interface XmlNamespaceNested {
  foo?: string;
  values?: string[];
}

/**
 * @internal
 */
export const XmlNamespaceNestedFilterSensitiveLog = (obj: XmlNamespaceNested): any => ({
  ...obj,
});

export interface XmlNamespacesOutput {
  nested?: XmlNamespaceNested;
}

/**
 * @internal
 */
export const XmlNamespacesOutputFilterSensitiveLog = (obj: XmlNamespacesOutput): any => ({
  ...obj,
});

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
 * @internal
 */
export const XmlTimestampsOutputFilterSensitiveLog = (obj: XmlTimestampsOutput): any => ({
  ...obj,
});

export interface StructArg {
  StringArg?: string;
  OtherArg?: boolean;
  RecursiveArg?: StructArg;
}

/**
 * @internal
 */
export const StructArgFilterSensitiveLog = (obj: StructArg): any => ({
  ...obj,
});

export interface NestedStructuresInput {
  Nested?: StructArg;
}

/**
 * @internal
 */
export const NestedStructuresInputFilterSensitiveLog = (obj: NestedStructuresInput): any => ({
  ...obj,
});

export interface RecursiveXmlShapesOutputNested1 {
  foo?: string;
  nested?: RecursiveXmlShapesOutputNested2;
}

/**
 * @internal
 */
export const RecursiveXmlShapesOutputNested1FilterSensitiveLog = (obj: RecursiveXmlShapesOutputNested1): any => ({
  ...obj,
});

export interface RecursiveXmlShapesOutputNested2 {
  bar?: string;
  recursiveMember?: RecursiveXmlShapesOutputNested1;
}

/**
 * @internal
 */
export const RecursiveXmlShapesOutputNested2FilterSensitiveLog = (obj: RecursiveXmlShapesOutputNested2): any => ({
  ...obj,
});

export interface RecursiveXmlShapesOutput {
  nested?: RecursiveXmlShapesOutputNested1;
}

/**
 * @internal
 */
export const RecursiveXmlShapesOutputFilterSensitiveLog = (obj: RecursiveXmlShapesOutput): any => ({
  ...obj,
});
