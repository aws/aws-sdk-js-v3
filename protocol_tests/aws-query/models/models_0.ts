import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface EmptyInputAndEmptyOutputInput {}

export namespace EmptyInputAndEmptyOutputInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputInput): any => ({
    ...obj,
  });
}

export interface EmptyInputAndEmptyOutputOutput {}

export namespace EmptyInputAndEmptyOutputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputOutput): any => ({
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

export enum FooEnum {
  BAR = "Bar",
  BAZ = "Baz",
  FOO = "Foo",
  ONE = "1",
  ZERO = "0",
}

export interface FlattenedXmlMapOutput {
  myMap?: { [key: string]: FooEnum | string };
}

export namespace FlattenedXmlMapOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlattenedXmlMapOutput): any => ({
    ...obj,
  });
}

export interface FlattenedXmlMapWithXmlNameOutput {
  myMap?: { [key: string]: string };
}

export namespace FlattenedXmlMapWithXmlNameOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlattenedXmlMapWithXmlNameOutput): any => ({
    ...obj,
  });
}

export interface FlattenedXmlMapWithXmlNamespaceOutput {
  myMap?: { [key: string]: string };
}

export namespace FlattenedXmlMapWithXmlNamespaceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlattenedXmlMapWithXmlNamespaceOutput): any => ({
    ...obj,
  });
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
export interface ComplexError extends __SmithyException, $MetadataBearer {
  name: "ComplexError";
  $fault: "client";
  TopLevel?: string;
  Nested?: ComplexNestedErrorData;
}

export namespace ComplexError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplexError): any => ({
    ...obj,
  });
}

export interface CustomCodeError extends __SmithyException, $MetadataBearer {
  name: "CustomCodeError";
  $fault: "client";
  Message?: string;
}

export namespace CustomCodeError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomCodeError): any => ({
    ...obj,
  });
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
export interface InvalidGreeting extends __SmithyException, $MetadataBearer {
  name: "InvalidGreeting";
  $fault: "client";
  Message?: string;
}

export namespace InvalidGreeting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidGreeting): any => ({
    ...obj,
  });
}

export interface IgnoresWrappingXmlNameOutput {
  foo?: string;
}

export namespace IgnoresWrappingXmlNameOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IgnoresWrappingXmlNameOutput): any => ({
    ...obj,
  });
}

export interface NoInputAndOutputOutput {}

export namespace NoInputAndOutputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoInputAndOutputOutput): any => ({
    ...obj,
  });
}

export interface QueryIdempotencyTokenAutoFillInput {
  token?: string;
}

export namespace QueryIdempotencyTokenAutoFillInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryIdempotencyTokenAutoFillInput): any => ({
    ...obj,
  });
}

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

export interface NestedStructWithList {
  ListArg?: string[];
}

export namespace NestedStructWithList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NestedStructWithList): any => ({
    ...obj,
  });
}

export interface QueryListsInput {
  ListArg?: string[];
  ComplexListArg?: GreetingStruct[];
  FlattenedListArg?: string[];
  ListArgWithXmlNameMember?: string[];
  FlattenedListArgWithXmlName?: string[];
  NestedWithList?: NestedStructWithList;
}

export namespace QueryListsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryListsInput): any => ({
    ...obj,
  });
}

export interface NestedStructWithMap {
  MapArg?: { [key: string]: string };
}

export namespace NestedStructWithMap {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NestedStructWithMap): any => ({
    ...obj,
  });
}

export interface QueryMapsInput {
  MapArg?: { [key: string]: string };
  RenamedMapArg?: { [key: string]: string };
  ComplexMapArg?: { [key: string]: GreetingStruct };
  MapWithXmlMemberName?: { [key: string]: string };
  FlattenedMap?: { [key: string]: string };
  FlattenedMapWithXmlName?: { [key: string]: string };
  MapOfLists?: { [key: string]: string[] };
  NestedStructWithMap?: NestedStructWithMap;
}

export namespace QueryMapsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryMapsInput): any => ({
    ...obj,
  });
}

export interface QueryTimestampsInput {
  normalFormat?: Date;
  epochMember?: Date;
  epochTarget?: Date;
}

export namespace QueryTimestampsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryTimestampsInput): any => ({
    ...obj,
  });
}

export interface SimpleInputParamsInput {
  Foo?: string;
  Bar?: string;
  Baz?: boolean;
  Bam?: number;
  FloatValue?: number;
  Boo?: number;
  Qux?: Uint8Array;
  FooEnum?: FooEnum | string;
}

export namespace SimpleInputParamsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimpleInputParamsInput): any => ({
    ...obj,
  });
}

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

export namespace SimpleScalarXmlPropertiesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimpleScalarXmlPropertiesOutput): any => ({
    ...obj,
  });
}

export interface XmlBlobsOutput {
  data?: Uint8Array;
}

export namespace XmlBlobsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlBlobsOutput): any => ({
    ...obj,
  });
}

export interface StructureListMember {
  a?: string;
  b?: string;
}

export namespace StructureListMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StructureListMember): any => ({
    ...obj,
  });
}

export interface XmlListsOutput {
  stringList?: string[];
  stringSet?: string[];
  integerList?: number[];
  booleanList?: boolean[];
  timestampList?: Date[];
  enumList?: (FooEnum | string)[];
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

export namespace XmlListsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlListsOutput): any => ({
    ...obj,
  });
}

export interface XmlMapsOutput {
  myMap?: { [key: string]: GreetingStruct };
}

export namespace XmlMapsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlMapsOutput): any => ({
    ...obj,
  });
}

export interface XmlEnumsOutput {
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumSet?: (FooEnum | string)[];
  fooEnumMap?: { [key: string]: FooEnum | string };
}

export namespace XmlEnumsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlEnumsOutput): any => ({
    ...obj,
  });
}

export interface XmlMapsXmlNameOutput {
  myMap?: { [key: string]: GreetingStruct };
}

export namespace XmlMapsXmlNameOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlMapsXmlNameOutput): any => ({
    ...obj,
  });
}

export interface XmlNamespaceNested {
  foo?: string;
  values?: string[];
}

export namespace XmlNamespaceNested {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlNamespaceNested): any => ({
    ...obj,
  });
}

export interface XmlNamespacesOutput {
  nested?: XmlNamespaceNested;
}

export namespace XmlNamespacesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlNamespacesOutput): any => ({
    ...obj,
  });
}

export interface XmlTimestampsOutput {
  normal?: Date;
  dateTime?: Date;
  epochSeconds?: Date;
  httpDate?: Date;
}

export namespace XmlTimestampsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XmlTimestampsOutput): any => ({
    ...obj,
  });
}

export interface StructArg {
  StringArg?: string;
  OtherArg?: boolean;
  RecursiveArg?: StructArg;
}

export namespace StructArg {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StructArg): any => ({
    ...obj,
  });
}

export interface NestedStructuresInput {
  Nested?: StructArg;
}

export namespace NestedStructuresInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NestedStructuresInput): any => ({
    ...obj,
  });
}

export interface RecursiveXmlShapesOutputNested1 {
  foo?: string;
  nested?: RecursiveXmlShapesOutputNested2;
}

export namespace RecursiveXmlShapesOutputNested1 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecursiveXmlShapesOutputNested1): any => ({
    ...obj,
  });
}

export interface RecursiveXmlShapesOutputNested2 {
  bar?: string;
  recursiveMember?: RecursiveXmlShapesOutputNested1;
}

export namespace RecursiveXmlShapesOutputNested2 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecursiveXmlShapesOutputNested2): any => ({
    ...obj,
  });
}

export interface RecursiveXmlShapesOutput {
  nested?: RecursiveXmlShapesOutputNested1;
}

export namespace RecursiveXmlShapesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecursiveXmlShapesOutput): any => ({
    ...obj,
  });
}
