import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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
  export const filterSensitiveLog = (obj: ComplexError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ComplexError => __isa(o, "ComplexError");
}

export interface ComplexNestedErrorData {
  __type?: "ComplexNestedErrorData";
  Foo?: string;
}

export namespace ComplexNestedErrorData {
  export const filterSensitiveLog = (obj: ComplexNestedErrorData): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ComplexNestedErrorData => __isa(o, "ComplexNestedErrorData");
}

export interface EmptyInputAndEmptyOutputInput {
  __type?: "EmptyInputAndEmptyOutputInput";
}

export namespace EmptyInputAndEmptyOutputInput {
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmptyInputAndEmptyOutputInput => __isa(o, "EmptyInputAndEmptyOutputInput");
}

export interface EmptyInputAndEmptyOutputOutput {
  __type?: "EmptyInputAndEmptyOutputOutput";
}

export namespace EmptyInputAndEmptyOutputOutput {
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmptyInputAndEmptyOutputOutput => __isa(o, "EmptyInputAndEmptyOutputOutput");
}

export interface FlattenedXmlMapOutput {
  __type?: "FlattenedXmlMapOutput";
  myMap?: { [key: string]: FooEnum | string };
}

export namespace FlattenedXmlMapOutput {
  export const filterSensitiveLog = (obj: FlattenedXmlMapOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FlattenedXmlMapOutput => __isa(o, "FlattenedXmlMapOutput");
}

export interface FlattenedXmlMapWithXmlNameOutput {
  __type?: "FlattenedXmlMapWithXmlNameOutput";
  myMap?: { [key: string]: string };
}

export namespace FlattenedXmlMapWithXmlNameOutput {
  export const filterSensitiveLog = (obj: FlattenedXmlMapWithXmlNameOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FlattenedXmlMapWithXmlNameOutput => __isa(o, "FlattenedXmlMapWithXmlNameOutput");
}

export interface GreetingWithErrorsOutput {
  __type?: "GreetingWithErrorsOutput";
  greeting?: string;
}

export namespace GreetingWithErrorsOutput {
  export const filterSensitiveLog = (obj: GreetingWithErrorsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GreetingWithErrorsOutput => __isa(o, "GreetingWithErrorsOutput");
}

export interface IgnoresWrappingXmlNameOutput {
  __type?: "IgnoresWrappingXmlNameOutput";
  foo?: string;
}

export namespace IgnoresWrappingXmlNameOutput {
  export const filterSensitiveLog = (obj: IgnoresWrappingXmlNameOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IgnoresWrappingXmlNameOutput => __isa(o, "IgnoresWrappingXmlNameOutput");
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
  export const isa = (o: any): o is InvalidGreeting => __isa(o, "InvalidGreeting");
}

export interface NestedStructuresInput {
  __type?: "NestedStructuresInput";
  Nested?: StructArg;
}

export namespace NestedStructuresInput {
  export const filterSensitiveLog = (obj: NestedStructuresInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NestedStructuresInput => __isa(o, "NestedStructuresInput");
}

export interface NoInputAndOutputOutput {
  __type?: "NoInputAndOutputOutput";
}

export namespace NoInputAndOutputOutput {
  export const filterSensitiveLog = (obj: NoInputAndOutputOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NoInputAndOutputOutput => __isa(o, "NoInputAndOutputOutput");
}

export interface QueryIdempotencyTokenAutoFillInput {
  __type?: "QueryIdempotencyTokenAutoFillInput";
  token?: string;
}

export namespace QueryIdempotencyTokenAutoFillInput {
  export const filterSensitiveLog = (obj: QueryIdempotencyTokenAutoFillInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryIdempotencyTokenAutoFillInput =>
    __isa(o, "QueryIdempotencyTokenAutoFillInput");
}

export interface QueryListsInput {
  __type?: "QueryListsInput";
  ListArg?: string[];
  ComplexListArg?: GreetingStruct[];
  FlattenedListArg?: string[];
  ListArgWithXmlNameMember?: string[];
  FlattenedListArgWithXmlName?: string[];
}

export namespace QueryListsInput {
  export const filterSensitiveLog = (obj: QueryListsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryListsInput => __isa(o, "QueryListsInput");
}

export interface QueryMapsInput {
  __type?: "QueryMapsInput";
  MapArg?: { [key: string]: string };
  RenamedMapArg?: { [key: string]: string };
  ComplexMapArg?: { [key: string]: GreetingStruct };
  MapWithXmlMemberName?: { [key: string]: string };
  FlattenedMap?: { [key: string]: string };
  FlattenedMapWithXmlName?: { [key: string]: string };
  MapOfLists?: { [key: string]: string[] };
}

export namespace QueryMapsInput {
  export const filterSensitiveLog = (obj: QueryMapsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryMapsInput => __isa(o, "QueryMapsInput");
}

export interface QueryTimestampsInput {
  __type?: "QueryTimestampsInput";
  normalFormat?: Date;
  epochMember?: Date;
  epochTarget?: Date;
}

export namespace QueryTimestampsInput {
  export const filterSensitiveLog = (obj: QueryTimestampsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryTimestampsInput => __isa(o, "QueryTimestampsInput");
}

export interface RecursiveXmlShapesOutput {
  __type?: "RecursiveXmlShapesOutput";
  nested?: RecursiveXmlShapesOutputNested1;
}

export namespace RecursiveXmlShapesOutput {
  export const filterSensitiveLog = (obj: RecursiveXmlShapesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecursiveXmlShapesOutput => __isa(o, "RecursiveXmlShapesOutput");
}

export interface RecursiveXmlShapesOutputNested1 {
  __type?: "RecursiveXmlShapesOutputNested1";
  foo?: string;
  nested?: RecursiveXmlShapesOutputNested2;
}

export namespace RecursiveXmlShapesOutputNested1 {
  export const filterSensitiveLog = (obj: RecursiveXmlShapesOutputNested1): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecursiveXmlShapesOutputNested1 => __isa(o, "RecursiveXmlShapesOutputNested1");
}

export interface RecursiveXmlShapesOutputNested2 {
  __type?: "RecursiveXmlShapesOutputNested2";
  bar?: string;
  recursiveMember?: RecursiveXmlShapesOutputNested1;
}

export namespace RecursiveXmlShapesOutputNested2 {
  export const filterSensitiveLog = (obj: RecursiveXmlShapesOutputNested2): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecursiveXmlShapesOutputNested2 => __isa(o, "RecursiveXmlShapesOutputNested2");
}

export interface SimpleInputParamsInput {
  __type?: "SimpleInputParamsInput";
  Foo?: string;
  Bar?: string;
  Baz?: boolean;
  Bam?: number;
  Boo?: number;
  Qux?: Uint8Array;
  FooEnum?: FooEnum | string;
}

export namespace SimpleInputParamsInput {
  export const filterSensitiveLog = (obj: SimpleInputParamsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SimpleInputParamsInput => __isa(o, "SimpleInputParamsInput");
}

export interface SimpleScalarXmlPropertiesOutput {
  __type?: "SimpleScalarXmlPropertiesOutput";
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
  export const filterSensitiveLog = (obj: SimpleScalarXmlPropertiesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SimpleScalarXmlPropertiesOutput => __isa(o, "SimpleScalarXmlPropertiesOutput");
}

export interface StructArg {
  __type?: "StructArg";
  StringArg?: string;
  OtherArg?: boolean;
  RecursiveArg?: StructArg;
}

export namespace StructArg {
  export const filterSensitiveLog = (obj: StructArg): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StructArg => __isa(o, "StructArg");
}

export interface StructureListMember {
  __type?: "StructureListMember";
  a?: string;
  b?: string;
}

export namespace StructureListMember {
  export const filterSensitiveLog = (obj: StructureListMember): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StructureListMember => __isa(o, "StructureListMember");
}

export interface XmlBlobsOutput {
  __type?: "XmlBlobsOutput";
  data?: Uint8Array;
}

export namespace XmlBlobsOutput {
  export const filterSensitiveLog = (obj: XmlBlobsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlBlobsOutput => __isa(o, "XmlBlobsOutput");
}

export interface XmlEnumsOutput {
  __type?: "XmlEnumsOutput";
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumSet?: (FooEnum | string)[];
  fooEnumMap?: { [key: string]: FooEnum | string };
}

export namespace XmlEnumsOutput {
  export const filterSensitiveLog = (obj: XmlEnumsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlEnumsOutput => __isa(o, "XmlEnumsOutput");
}

export interface XmlListsOutput {
  __type?: "XmlListsOutput";
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
  structureList?: StructureListMember[];
}

export namespace XmlListsOutput {
  export const filterSensitiveLog = (obj: XmlListsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlListsOutput => __isa(o, "XmlListsOutput");
}

export interface XmlMapsOutput {
  __type?: "XmlMapsOutput";
  myMap?: { [key: string]: GreetingStruct };
}

export namespace XmlMapsOutput {
  export const filterSensitiveLog = (obj: XmlMapsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlMapsOutput => __isa(o, "XmlMapsOutput");
}

export interface XmlMapsXmlNameOutput {
  __type?: "XmlMapsXmlNameOutput";
  myMap?: { [key: string]: GreetingStruct };
}

export namespace XmlMapsXmlNameOutput {
  export const filterSensitiveLog = (obj: XmlMapsXmlNameOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlMapsXmlNameOutput => __isa(o, "XmlMapsXmlNameOutput");
}

export interface XmlNamespaceNested {
  __type?: "XmlNamespaceNested";
  foo?: string;
  values?: string[];
}

export namespace XmlNamespaceNested {
  export const filterSensitiveLog = (obj: XmlNamespaceNested): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlNamespaceNested => __isa(o, "XmlNamespaceNested");
}

export interface XmlNamespacesOutput {
  __type?: "XmlNamespacesOutput";
  nested?: XmlNamespaceNested;
}

export namespace XmlNamespacesOutput {
  export const filterSensitiveLog = (obj: XmlNamespacesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlNamespacesOutput => __isa(o, "XmlNamespacesOutput");
}

export interface XmlTimestampsOutput {
  __type?: "XmlTimestampsOutput";
  normal?: Date;
  dateTime?: Date;
  epochSeconds?: Date;
  httpDate?: Date;
}

export namespace XmlTimestampsOutput {
  export const filterSensitiveLog = (obj: XmlTimestampsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is XmlTimestampsOutput => __isa(o, "XmlTimestampsOutput");
}

export type FooEnum = "0" | "1" | "Bar" | "Baz" | "Foo";

export interface GreetingStruct {
  __type?: "GreetingStruct";
  hi?: string;
}

export namespace GreetingStruct {
  export const filterSensitiveLog = (obj: GreetingStruct): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GreetingStruct => __isa(o, "GreetingStruct");
}
