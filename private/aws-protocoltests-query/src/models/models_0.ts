// smithy-typescript generated code
import { FooEnum, IntegerEnum } from "./enums";

/**
 * @public
 */
export interface GreetingStruct {
  hi?: string | undefined;
}

/**
 * @public
 */
export interface DatetimeOffsetsOutput {
  datetime?: Date | undefined;
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
  myMap?: Record<string, FooEnum> | undefined;
}

/**
 * @public
 */
export interface FlattenedXmlMapWithXmlNameOutput {
  myMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface FlattenedXmlMapWithXmlNamespaceOutput {
  myMap?: Record<string, string> | undefined;
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
export interface ComplexNestedErrorData {
  Foo?: string | undefined;
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
export interface IgnoresWrappingXmlNameOutput {
  foo?: string | undefined;
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
  encoding?: string | undefined;
  data?: string | undefined;
}

/**
 * @public
 */
export interface QueryIdempotencyTokenAutoFillInput {
  token?: string | undefined;
}

/**
 * @public
 */
export interface NestedStructWithList {
  ListArg?: string[] | undefined;
}

/**
 * @public
 */
export interface QueryListsInput {
  ListArg?: string[] | undefined;
  ComplexListArg?: GreetingStruct[] | undefined;
  FlattenedListArg?: string[] | undefined;
  ListArgWithXmlNameMember?: string[] | undefined;
  FlattenedListArgWithXmlName?: string[] | undefined;
  NestedWithList?: NestedStructWithList | undefined;
}

/**
 * @public
 */
export interface NestedStructWithMap {
  MapArg?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface QueryMapsInput {
  MapArg?: Record<string, string> | undefined;
  RenamedMapArg?: Record<string, string> | undefined;
  ComplexMapArg?: Record<string, GreetingStruct> | undefined;
  MapWithXmlMemberName?: Record<string, string> | undefined;
  FlattenedMap?: Record<string, string> | undefined;
  FlattenedMapWithXmlName?: Record<string, string> | undefined;
  MapOfLists?: Record<string, string[]> | undefined;
  NestedStructWithMap?: NestedStructWithMap | undefined;
}

/**
 * @public
 */
export interface QueryTimestampsInput {
  normalFormat?: Date | undefined;
  epochMember?: Date | undefined;
  epochTarget?: Date | undefined;
}

/**
 * @public
 */
export interface SimpleInputParamsInput {
  Foo?: string | undefined;
  Bar?: string | undefined;
  Baz?: boolean | undefined;
  Bam?: number | undefined;
  FloatValue?: number | undefined;
  Boo?: number | undefined;
  Qux?: Uint8Array | undefined;
  FooEnum?: FooEnum | undefined;
  IntegerEnum?: IntegerEnum | undefined;
}

/**
 * @public
 */
export interface SimpleScalarXmlPropertiesOutput {
  stringValue?: string | undefined;
  emptyStringValue?: string | undefined;
  trueBooleanValue?: boolean | undefined;
  falseBooleanValue?: boolean | undefined;
  byteValue?: number | undefined;
  shortValue?: number | undefined;
  integerValue?: number | undefined;
  longValue?: number | undefined;
  floatValue?: number | undefined;
  doubleValue?: number | undefined;
}

/**
 * @public
 */
export interface XmlBlobsOutput {
  data?: Uint8Array | undefined;
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
export interface XmlListsOutput {
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

  renamedListMembers?: string[] | undefined;
  flattenedList?: string[] | undefined;
  flattenedList2?: string[] | undefined;
  flattenedListWithMemberNamespace?: string[] | undefined;
  flattenedListWithNamespace?: string[] | undefined;
  structureList?: StructureListMember[] | undefined;
}

/**
 * @public
 */
export interface XmlMapsOutput {
  myMap?: Record<string, GreetingStruct> | undefined;
}

/**
 * @public
 */
export interface XmlEnumsOutput {
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
export interface XmlIntEnumsOutput {
  intEnum1?: IntegerEnum | undefined;
  intEnum2?: IntegerEnum | undefined;
  intEnum3?: IntegerEnum | undefined;
  intEnumList?: IntegerEnum[] | undefined;
  intEnumSet?: IntegerEnum[] | undefined;
  intEnumMap?: Record<string, IntegerEnum> | undefined;
}

/**
 * @public
 */
export interface XmlMapsXmlNameOutput {
  myMap?: Record<string, GreetingStruct> | undefined;
}

/**
 * @public
 */
export interface XmlNamespaceNested {
  foo?: string | undefined;
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface XmlNamespacesOutput {
  nested?: XmlNamespaceNested | undefined;
}

/**
 * @public
 */
export interface XmlTimestampsOutput {
  normal?: Date | undefined;
  dateTime?: Date | undefined;
  dateTimeOnTarget?: Date | undefined;
  epochSeconds?: Date | undefined;
  epochSecondsOnTarget?: Date | undefined;
  httpDate?: Date | undefined;
  httpDateOnTarget?: Date | undefined;
}

/**
 * @public
 */
export interface StructArg {
  StringArg?: string | undefined;
  OtherArg?: boolean | undefined;
  RecursiveArg?: StructArg | undefined;
}

/**
 * @public
 */
export interface NestedStructuresInput {
  Nested?: StructArg | undefined;
}

/**
 * @public
 */
export interface RecursiveXmlShapesOutputNested1 {
  foo?: string | undefined;
  nested?: RecursiveXmlShapesOutputNested2 | undefined;
}

/**
 * @public
 */
export interface RecursiveXmlShapesOutputNested2 {
  bar?: string | undefined;
  recursiveMember?: RecursiveXmlShapesOutputNested1 | undefined;
}

/**
 * @public
 */
export interface RecursiveXmlShapesOutput {
  nested?: RecursiveXmlShapesOutputNested1 | undefined;
}
