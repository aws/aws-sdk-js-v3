import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface EmptyInputAndEmptyOutputInput {}

export namespace EmptyInputAndEmptyOutputInput {
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputInput): any => ({
    ...obj,
  });
}

export interface EmptyInputAndEmptyOutputOutput {}

export namespace EmptyInputAndEmptyOutputOutput {
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputOutput): any => ({
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
  export const filterSensitiveLog = (obj: FlattenedXmlMapOutput): any => ({
    ...obj,
  });
}

export interface FlattenedXmlMapWithXmlNameOutput {
  myMap?: { [key: string]: string };
}

export namespace FlattenedXmlMapWithXmlNameOutput {
  export const filterSensitiveLog = (obj: FlattenedXmlMapWithXmlNameOutput): any => ({
    ...obj,
  });
}

export interface FlattenedXmlMapWithXmlNamespaceOutput {
  myMap?: { [key: string]: string };
}

export namespace FlattenedXmlMapWithXmlNamespaceOutput {
  export const filterSensitiveLog = (obj: FlattenedXmlMapWithXmlNamespaceOutput): any => ({
    ...obj,
  });
}

export interface ComplexNestedErrorData {
  Foo?: string;
}

export namespace ComplexNestedErrorData {
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
  Nested?: ComplexNestedErrorData;
  TopLevel?: string;
}

export namespace ComplexError {
  export const filterSensitiveLog = (obj: ComplexError): any => ({
    ...obj,
  });
}

export interface GreetingWithErrorsOutput {
  greeting?: string;
}

export namespace GreetingWithErrorsOutput {
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
  export const filterSensitiveLog = (obj: InvalidGreeting): any => ({
    ...obj,
  });
}

export interface IgnoresWrappingXmlNameOutput {
  foo?: string;
}

export namespace IgnoresWrappingXmlNameOutput {
  export const filterSensitiveLog = (obj: IgnoresWrappingXmlNameOutput): any => ({
    ...obj,
  });
}

export interface NoInputAndOutputOutput {}

export namespace NoInputAndOutputOutput {
  export const filterSensitiveLog = (obj: NoInputAndOutputOutput): any => ({
    ...obj,
  });
}

export interface QueryIdempotencyTokenAutoFillInput {
  token?: string;
}

export namespace QueryIdempotencyTokenAutoFillInput {
  export const filterSensitiveLog = (obj: QueryIdempotencyTokenAutoFillInput): any => ({
    ...obj,
  });
}

export interface GreetingStruct {
  hi?: string;
}

export namespace GreetingStruct {
  export const filterSensitiveLog = (obj: GreetingStruct): any => ({
    ...obj,
  });
}

export interface QueryListsInput {
  ComplexListArg?: GreetingStruct[];
  FlattenedListArg?: string[];
  FlattenedListArgWithXmlName?: string[];
  ListArg?: string[];
  ListArgWithXmlNameMember?: string[];
}

export namespace QueryListsInput {
  export const filterSensitiveLog = (obj: QueryListsInput): any => ({
    ...obj,
  });
}

export interface QueryMapsInput {
  ComplexMapArg?: { [key: string]: GreetingStruct };
  FlattenedMap?: { [key: string]: string };
  FlattenedMapWithXmlName?: { [key: string]: string };
  MapArg?: { [key: string]: string };
  MapOfLists?: { [key: string]: string[] };
  MapWithXmlMemberName?: { [key: string]: string };
  RenamedMapArg?: { [key: string]: string };
}

export namespace QueryMapsInput {
  export const filterSensitiveLog = (obj: QueryMapsInput): any => ({
    ...obj,
  });
}

export interface QueryTimestampsInput {
  epochMember?: Date;
  epochTarget?: Date;
  normalFormat?: Date;
}

export namespace QueryTimestampsInput {
  export const filterSensitiveLog = (obj: QueryTimestampsInput): any => ({
    ...obj,
  });
}

export interface SimpleInputParamsInput {
  Bam?: number;
  Bar?: string;
  Baz?: boolean;
  Boo?: number;
  Foo?: string;
  FooEnum?: FooEnum | string;
  Qux?: Uint8Array;
}

export namespace SimpleInputParamsInput {
  export const filterSensitiveLog = (obj: SimpleInputParamsInput): any => ({
    ...obj,
  });
}

export interface SimpleScalarXmlPropertiesOutput {
  byteValue?: number;
  doubleValue?: number;
  emptyStringValue?: string;
  falseBooleanValue?: boolean;
  floatValue?: number;
  integerValue?: number;
  longValue?: number;
  shortValue?: number;
  stringValue?: string;
  trueBooleanValue?: boolean;
}

export namespace SimpleScalarXmlPropertiesOutput {
  export const filterSensitiveLog = (obj: SimpleScalarXmlPropertiesOutput): any => ({
    ...obj,
  });
}

export interface XmlBlobsOutput {
  data?: Uint8Array;
}

export namespace XmlBlobsOutput {
  export const filterSensitiveLog = (obj: XmlBlobsOutput): any => ({
    ...obj,
  });
}

export interface StructureListMember {
  a?: string;
  b?: string;
}

export namespace StructureListMember {
  export const filterSensitiveLog = (obj: StructureListMember): any => ({
    ...obj,
  });
}

export interface XmlListsOutput {
  booleanList?: boolean[];
  enumList?: (FooEnum | string)[];
  flattenedList?: string[];
  flattenedList2?: string[];
  flattenedListWithMemberNamespace?: string[];
  flattenedListWithNamespace?: string[];
  integerList?: number[];
  /**
   * A list of lists of strings.
   */
  nestedStringList?: string[][];

  renamedListMembers?: string[];
  stringList?: string[];
  stringSet?: string[];
  structureList?: StructureListMember[];
  timestampList?: Date[];
}

export namespace XmlListsOutput {
  export const filterSensitiveLog = (obj: XmlListsOutput): any => ({
    ...obj,
  });
}

export interface XmlMapsOutput {
  myMap?: { [key: string]: GreetingStruct };
}

export namespace XmlMapsOutput {
  export const filterSensitiveLog = (obj: XmlMapsOutput): any => ({
    ...obj,
  });
}

export interface XmlEnumsOutput {
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumMap?: { [key: string]: FooEnum | string };
  fooEnumSet?: (FooEnum | string)[];
}

export namespace XmlEnumsOutput {
  export const filterSensitiveLog = (obj: XmlEnumsOutput): any => ({
    ...obj,
  });
}

export interface XmlMapsXmlNameOutput {
  myMap?: { [key: string]: GreetingStruct };
}

export namespace XmlMapsXmlNameOutput {
  export const filterSensitiveLog = (obj: XmlMapsXmlNameOutput): any => ({
    ...obj,
  });
}

export interface XmlNamespaceNested {
  foo?: string;
  values?: string[];
}

export namespace XmlNamespaceNested {
  export const filterSensitiveLog = (obj: XmlNamespaceNested): any => ({
    ...obj,
  });
}

export interface XmlNamespacesOutput {
  nested?: XmlNamespaceNested;
}

export namespace XmlNamespacesOutput {
  export const filterSensitiveLog = (obj: XmlNamespacesOutput): any => ({
    ...obj,
  });
}

export interface XmlTimestampsOutput {
  dateTime?: Date;
  epochSeconds?: Date;
  httpDate?: Date;
  normal?: Date;
}

export namespace XmlTimestampsOutput {
  export const filterSensitiveLog = (obj: XmlTimestampsOutput): any => ({
    ...obj,
  });
}

export interface StructArg {
  OtherArg?: boolean;
  RecursiveArg?: StructArg;
  StringArg?: string;
}

export namespace StructArg {
  export const filterSensitiveLog = (obj: StructArg): any => ({
    ...obj,
  });
}

export interface NestedStructuresInput {
  Nested?: StructArg;
}

export namespace NestedStructuresInput {
  export const filterSensitiveLog = (obj: NestedStructuresInput): any => ({
    ...obj,
  });
}

export interface RecursiveXmlShapesOutputNested1 {
  foo?: string;
  nested?: RecursiveXmlShapesOutputNested2;
}

export namespace RecursiveXmlShapesOutputNested1 {
  export const filterSensitiveLog = (obj: RecursiveXmlShapesOutputNested1): any => ({
    ...obj,
  });
}

export interface RecursiveXmlShapesOutputNested2 {
  bar?: string;
  recursiveMember?: RecursiveXmlShapesOutputNested1;
}

export namespace RecursiveXmlShapesOutputNested2 {
  export const filterSensitiveLog = (obj: RecursiveXmlShapesOutputNested2): any => ({
    ...obj,
  });
}

export interface RecursiveXmlShapesOutput {
  nested?: RecursiveXmlShapesOutputNested1;
}

export namespace RecursiveXmlShapesOutput {
  export const filterSensitiveLog = (obj: RecursiveXmlShapesOutput): any => ({
    ...obj,
  });
}
