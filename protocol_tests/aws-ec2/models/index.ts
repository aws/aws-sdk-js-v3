import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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
    ...(obj.Nested && {
      Nested: ComplexNestedErrorData.filterSensitiveLog(obj.Nested)
    })
  });
  export const isa = (o: any): o is ComplexError => __isa(o, "ComplexError");
}

export interface ComplexNestedErrorData {
  __type?: "ComplexNestedErrorData";
  Foo?: string;
}

export namespace ComplexNestedErrorData {
  export const filterSensitiveLog = (obj: ComplexNestedErrorData): any => ({
    ...obj
  });
  export const isa = (o: any): o is ComplexNestedErrorData =>
    __isa(o, "ComplexNestedErrorData");
}

export interface EmptyInputAndEmptyOutputInput {
  __type?: "EmptyInputAndEmptyOutputInput";
}

export namespace EmptyInputAndEmptyOutputInput {
  export const filterSensitiveLog = (
    obj: EmptyInputAndEmptyOutputInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EmptyInputAndEmptyOutputInput =>
    __isa(o, "EmptyInputAndEmptyOutputInput");
}

export interface EmptyInputAndEmptyOutputOutput {
  __type?: "EmptyInputAndEmptyOutputOutput";
}

export namespace EmptyInputAndEmptyOutputOutput {
  export const filterSensitiveLog = (
    obj: EmptyInputAndEmptyOutputOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EmptyInputAndEmptyOutputOutput =>
    __isa(o, "EmptyInputAndEmptyOutputOutput");
}

export interface GreetingWithErrorsOutput {
  __type?: "GreetingWithErrorsOutput";
  greeting?: string;
}

export namespace GreetingWithErrorsOutput {
  export const filterSensitiveLog = (obj: GreetingWithErrorsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GreetingWithErrorsOutput =>
    __isa(o, "GreetingWithErrorsOutput");
}

export interface IgnoresWrappingXmlNameOutput {
  __type?: "IgnoresWrappingXmlNameOutput";
  foo?: string;
}

export namespace IgnoresWrappingXmlNameOutput {
  export const filterSensitiveLog = (
    obj: IgnoresWrappingXmlNameOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IgnoresWrappingXmlNameOutput =>
    __isa(o, "IgnoresWrappingXmlNameOutput");
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
    ...obj
  });
  export const isa = (o: any): o is InvalidGreeting =>
    __isa(o, "InvalidGreeting");
}

export interface NestedStructuresInput {
  __type?: "NestedStructuresInput";
  Nested?: StructArg;
}

export namespace NestedStructuresInput {
  export const filterSensitiveLog = (obj: NestedStructuresInput): any => ({
    ...obj,
    ...(obj.Nested && { Nested: StructArg.filterSensitiveLog(obj.Nested) })
  });
  export const isa = (o: any): o is NestedStructuresInput =>
    __isa(o, "NestedStructuresInput");
}

export interface NoInputAndOutputOutput {
  __type?: "NoInputAndOutputOutput";
}

export namespace NoInputAndOutputOutput {
  export const filterSensitiveLog = (obj: NoInputAndOutputOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoInputAndOutputOutput =>
    __isa(o, "NoInputAndOutputOutput");
}

export interface QueryIdempotencyTokenAutoFillInput {
  __type?: "QueryIdempotencyTokenAutoFillInput";
  token?: string;
}

export namespace QueryIdempotencyTokenAutoFillInput {
  export const filterSensitiveLog = (
    obj: QueryIdempotencyTokenAutoFillInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is QueryIdempotencyTokenAutoFillInput =>
    __isa(o, "QueryIdempotencyTokenAutoFillInput");
}

export interface QueryListsInput {
  __type?: "QueryListsInput";
  ComplexListArg?: GreetingStruct[];
  ListArg?: string[];
  ListArgWithXmlName?: string[];
  ListArgWithXmlNameMember?: string[];
}

export namespace QueryListsInput {
  export const filterSensitiveLog = (obj: QueryListsInput): any => ({
    ...obj,
    ...(obj.ComplexListArg && {
      ComplexListArg: obj.ComplexListArg.map(GreetingStruct.filterSensitiveLog)
    })
  });
  export const isa = (o: any): o is QueryListsInput =>
    __isa(o, "QueryListsInput");
}

export interface QueryTimestampsInput {
  __type?: "QueryTimestampsInput";
  epochMember?: Date;
  epochTarget?: Date;
  normalFormat?: Date;
}

export namespace QueryTimestampsInput {
  export const filterSensitiveLog = (obj: QueryTimestampsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is QueryTimestampsInput =>
    __isa(o, "QueryTimestampsInput");
}

export interface RecursiveXmlShapesOutput {
  __type?: "RecursiveXmlShapesOutput";
  nested?: RecursiveXmlShapesOutputNested1;
}

export namespace RecursiveXmlShapesOutput {
  export const filterSensitiveLog = (obj: RecursiveXmlShapesOutput): any => ({
    ...obj,
    ...(obj.nested && {
      nested: RecursiveXmlShapesOutputNested1.filterSensitiveLog(obj.nested)
    })
  });
  export const isa = (o: any): o is RecursiveXmlShapesOutput =>
    __isa(o, "RecursiveXmlShapesOutput");
}

export interface RecursiveXmlShapesOutputNested1 {
  __type?: "RecursiveXmlShapesOutputNested1";
  foo?: string;
  nested?: RecursiveXmlShapesOutputNested2;
}

export namespace RecursiveXmlShapesOutputNested1 {
  export const filterSensitiveLog = (
    obj: RecursiveXmlShapesOutputNested1
  ): any => ({
    ...obj,
    ...(obj.nested && {
      nested: RecursiveXmlShapesOutputNested2.filterSensitiveLog(obj.nested)
    })
  });
  export const isa = (o: any): o is RecursiveXmlShapesOutputNested1 =>
    __isa(o, "RecursiveXmlShapesOutputNested1");
}

export interface RecursiveXmlShapesOutputNested2 {
  __type?: "RecursiveXmlShapesOutputNested2";
  bar?: string;
  recursiveMember?: RecursiveXmlShapesOutputNested1;
}

export namespace RecursiveXmlShapesOutputNested2 {
  export const filterSensitiveLog = (
    obj: RecursiveXmlShapesOutputNested2
  ): any => ({
    ...obj,
    ...(obj.recursiveMember && {
      recursiveMember: RecursiveXmlShapesOutputNested1.filterSensitiveLog(
        obj.recursiveMember
      )
    })
  });
  export const isa = (o: any): o is RecursiveXmlShapesOutputNested2 =>
    __isa(o, "RecursiveXmlShapesOutputNested2");
}

export interface SimpleInputParamsInput {
  __type?: "SimpleInputParamsInput";
  Bam?: number;
  Bar?: string;
  Baz?: boolean;
  Boo?: number;
  Foo?: string;
  FooEnum?: FooEnum | string;
  HasQueryAndXmlName?: string;
  HasQueryName?: string;
  Qux?: Uint8Array;
  UsesXmlName?: string;
}

export namespace SimpleInputParamsInput {
  export const filterSensitiveLog = (obj: SimpleInputParamsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is SimpleInputParamsInput =>
    __isa(o, "SimpleInputParamsInput");
}

export interface SimpleScalarXmlPropertiesOutput {
  __type?: "SimpleScalarXmlPropertiesOutput";
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
  export const filterSensitiveLog = (
    obj: SimpleScalarXmlPropertiesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SimpleScalarXmlPropertiesOutput =>
    __isa(o, "SimpleScalarXmlPropertiesOutput");
}

export interface StructArg {
  __type?: "StructArg";
  OtherArg?: boolean;
  RecursiveArg?: StructArg;
  StringArg?: string;
}

export namespace StructArg {
  export const filterSensitiveLog = (obj: StructArg): any => ({
    ...obj,
    ...(obj.RecursiveArg && {
      RecursiveArg: StructArg.filterSensitiveLog(obj.RecursiveArg)
    })
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
    ...obj
  });
  export const isa = (o: any): o is StructureListMember =>
    __isa(o, "StructureListMember");
}

export interface XmlBlobsOutput {
  __type?: "XmlBlobsOutput";
  data?: Uint8Array;
}

export namespace XmlBlobsOutput {
  export const filterSensitiveLog = (obj: XmlBlobsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is XmlBlobsOutput =>
    __isa(o, "XmlBlobsOutput");
}

export interface XmlEnumsOutput {
  __type?: "XmlEnumsOutput";
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumMap?: { [key: string]: FooEnum | string };
  fooEnumSet?: (FooEnum | string)[];
}

export namespace XmlEnumsOutput {
  export const filterSensitiveLog = (obj: XmlEnumsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is XmlEnumsOutput =>
    __isa(o, "XmlEnumsOutput");
}

export interface XmlListsOutput {
  __type?: "XmlListsOutput";
  booleanList?: boolean[];
  enumList?: (FooEnum | string)[];
  flattenedList?: string[];
  flattenedList2?: string[];
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
    ...(obj.structureList && {
      structureList: obj.structureList.map(
        StructureListMember.filterSensitiveLog
      )
    })
  });
  export const isa = (o: any): o is XmlListsOutput =>
    __isa(o, "XmlListsOutput");
}

export interface XmlNamespaceNested {
  __type?: "XmlNamespaceNested";
  foo?: string;
  values?: string[];
}

export namespace XmlNamespaceNested {
  export const filterSensitiveLog = (obj: XmlNamespaceNested): any => ({
    ...obj
  });
  export const isa = (o: any): o is XmlNamespaceNested =>
    __isa(o, "XmlNamespaceNested");
}

export interface XmlNamespacesOutput {
  __type?: "XmlNamespacesOutput";
  nested?: XmlNamespaceNested;
}

export namespace XmlNamespacesOutput {
  export const filterSensitiveLog = (obj: XmlNamespacesOutput): any => ({
    ...obj,
    ...(obj.nested && {
      nested: XmlNamespaceNested.filterSensitiveLog(obj.nested)
    })
  });
  export const isa = (o: any): o is XmlNamespacesOutput =>
    __isa(o, "XmlNamespacesOutput");
}

export interface XmlTimestampsOutput {
  __type?: "XmlTimestampsOutput";
  dateTime?: Date;
  epochSeconds?: Date;
  httpDate?: Date;
  normal?: Date;
}

export namespace XmlTimestampsOutput {
  export const filterSensitiveLog = (obj: XmlTimestampsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is XmlTimestampsOutput =>
    __isa(o, "XmlTimestampsOutput");
}

export type FooEnum = "0" | "1" | "Bar" | "Baz" | "Foo";

export interface GreetingStruct {
  __type?: "GreetingStruct";
  hi?: string;
}

export namespace GreetingStruct {
  export const filterSensitiveLog = (obj: GreetingStruct): any => ({
    ...obj
  });
  export const isa = (o: any): o is GreetingStruct =>
    __isa(o, "GreetingStruct");
}
