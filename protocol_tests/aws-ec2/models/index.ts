import {
  SmithyException as __SmithyException,
  isa as __isa,
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
  export function isa(o: any): o is ComplexError {
    return __isa(o, "ComplexError");
  }
}

export interface ComplexNestedErrorData {
  __type?: "ComplexNestedErrorData";
  Foo?: string;
}

export namespace ComplexNestedErrorData {
  export function isa(o: any): o is ComplexNestedErrorData {
    return __isa(o, "ComplexNestedErrorData");
  }
}

export interface EmptyInputAndEmptyOutputInput {
  __type?: "EmptyInputAndEmptyOutputInput";
}

export namespace EmptyInputAndEmptyOutputInput {
  export function isa(o: any): o is EmptyInputAndEmptyOutputInput {
    return __isa(o, "EmptyInputAndEmptyOutputInput");
  }
}

export interface EmptyInputAndEmptyOutputOutput {
  __type?: "EmptyInputAndEmptyOutputOutput";
}

export namespace EmptyInputAndEmptyOutputOutput {
  export function isa(o: any): o is EmptyInputAndEmptyOutputOutput {
    return __isa(o, "EmptyInputAndEmptyOutputOutput");
  }
}

export interface GreetingWithErrorsOutput {
  __type?: "GreetingWithErrorsOutput";
  greeting?: string;
}

export namespace GreetingWithErrorsOutput {
  export function isa(o: any): o is GreetingWithErrorsOutput {
    return __isa(o, "GreetingWithErrorsOutput");
  }
}

export interface IgnoresWrappingXmlNameOutput {
  __type?: "IgnoresWrappingXmlNameOutput";
  foo?: string;
}

export namespace IgnoresWrappingXmlNameOutput {
  export function isa(o: any): o is IgnoresWrappingXmlNameOutput {
    return __isa(o, "IgnoresWrappingXmlNameOutput");
  }
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
  export function isa(o: any): o is InvalidGreeting {
    return __isa(o, "InvalidGreeting");
  }
}

export interface NestedStructuresInput {
  __type?: "NestedStructuresInput";
  Nested?: StructArg;
}

export namespace NestedStructuresInput {
  export function isa(o: any): o is NestedStructuresInput {
    return __isa(o, "NestedStructuresInput");
  }
}

export interface NoInputAndOutputOutput {
  __type?: "NoInputAndOutputOutput";
}

export namespace NoInputAndOutputOutput {
  export function isa(o: any): o is NoInputAndOutputOutput {
    return __isa(o, "NoInputAndOutputOutput");
  }
}

export interface QueryIdempotencyTokenAutoFillInput {
  __type?: "QueryIdempotencyTokenAutoFillInput";
  token?: string;
}

export namespace QueryIdempotencyTokenAutoFillInput {
  export function isa(o: any): o is QueryIdempotencyTokenAutoFillInput {
    return __isa(o, "QueryIdempotencyTokenAutoFillInput");
  }
}

export interface QueryListsInput {
  __type?: "QueryListsInput";
  ComplexListArg?: Array<GreetingStruct>;
  ListArg?: Array<string>;
  ListArgWithXmlName?: Array<string>;
  ListArgWithXmlNameMember?: Array<string>;
}

export namespace QueryListsInput {
  export function isa(o: any): o is QueryListsInput {
    return __isa(o, "QueryListsInput");
  }
}

export interface QueryTimestampsInput {
  __type?: "QueryTimestampsInput";
  epochMember?: Date;
  epochTarget?: Date;
  normalFormat?: Date;
}

export namespace QueryTimestampsInput {
  export function isa(o: any): o is QueryTimestampsInput {
    return __isa(o, "QueryTimestampsInput");
  }
}

export interface RecursiveXmlShapesOutput {
  __type?: "RecursiveXmlShapesOutput";
  nested?: RecursiveXmlShapesOutputNested1;
}

export namespace RecursiveXmlShapesOutput {
  export function isa(o: any): o is RecursiveXmlShapesOutput {
    return __isa(o, "RecursiveXmlShapesOutput");
  }
}

export interface RecursiveXmlShapesOutputNested1 {
  __type?: "RecursiveXmlShapesOutputNested1";
  foo?: string;
  nested?: RecursiveXmlShapesOutputNested2;
}

export namespace RecursiveXmlShapesOutputNested1 {
  export function isa(o: any): o is RecursiveXmlShapesOutputNested1 {
    return __isa(o, "RecursiveXmlShapesOutputNested1");
  }
}

export interface RecursiveXmlShapesOutputNested2 {
  __type?: "RecursiveXmlShapesOutputNested2";
  bar?: string;
  recursiveMember?: RecursiveXmlShapesOutputNested1;
}

export namespace RecursiveXmlShapesOutputNested2 {
  export function isa(o: any): o is RecursiveXmlShapesOutputNested2 {
    return __isa(o, "RecursiveXmlShapesOutputNested2");
  }
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
  export function isa(o: any): o is SimpleInputParamsInput {
    return __isa(o, "SimpleInputParamsInput");
  }
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
  export function isa(o: any): o is SimpleScalarXmlPropertiesOutput {
    return __isa(o, "SimpleScalarXmlPropertiesOutput");
  }
}

export interface StructArg {
  __type?: "StructArg";
  OtherArg?: boolean;
  RecursiveArg?: StructArg;
  StringArg?: string;
}

export namespace StructArg {
  export function isa(o: any): o is StructArg {
    return __isa(o, "StructArg");
  }
}

export interface StructureListMember {
  __type?: "StructureListMember";
  a?: string;
  b?: string;
}

export namespace StructureListMember {
  export function isa(o: any): o is StructureListMember {
    return __isa(o, "StructureListMember");
  }
}

export interface XmlBlobsOutput {
  __type?: "XmlBlobsOutput";
  data?: Uint8Array;
}

export namespace XmlBlobsOutput {
  export function isa(o: any): o is XmlBlobsOutput {
    return __isa(o, "XmlBlobsOutput");
  }
}

export interface XmlEnumsOutput {
  __type?: "XmlEnumsOutput";
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: Array<FooEnum | string>;
  fooEnumMap?: { [key: string]: FooEnum | string };
  fooEnumSet?: Set<FooEnum | string>;
}

export namespace XmlEnumsOutput {
  export function isa(o: any): o is XmlEnumsOutput {
    return __isa(o, "XmlEnumsOutput");
  }
}

export interface XmlListsOutput {
  __type?: "XmlListsOutput";
  booleanList?: Array<boolean>;
  enumList?: Array<FooEnum | string>;
  flattenedList?: Array<string>;
  flattenedList2?: Array<string>;
  integerList?: Array<number>;
  /**
   * A list of lists of strings.
   */
  nestedStringList?: Array<Array<string>>;

  renamedListMembers?: Array<string>;
  stringList?: Array<string>;
  stringSet?: Set<string>;
  structureList?: Array<StructureListMember>;
  timestampList?: Array<Date>;
}

export namespace XmlListsOutput {
  export function isa(o: any): o is XmlListsOutput {
    return __isa(o, "XmlListsOutput");
  }
}

export interface XmlNamespaceNested {
  __type?: "XmlNamespaceNested";
  foo?: string;
  values?: Array<string>;
}

export namespace XmlNamespaceNested {
  export function isa(o: any): o is XmlNamespaceNested {
    return __isa(o, "XmlNamespaceNested");
  }
}

export interface XmlNamespacesOutput {
  __type?: "XmlNamespacesOutput";
  nested?: XmlNamespaceNested;
}

export namespace XmlNamespacesOutput {
  export function isa(o: any): o is XmlNamespacesOutput {
    return __isa(o, "XmlNamespacesOutput");
  }
}

export interface XmlTimestampsOutput {
  __type?: "XmlTimestampsOutput";
  dateTime?: Date;
  epochSeconds?: Date;
  httpDate?: Date;
  normal?: Date;
}

export namespace XmlTimestampsOutput {
  export function isa(o: any): o is XmlTimestampsOutput {
    return __isa(o, "XmlTimestampsOutput");
  }
}

export type FooEnum = "0" | "1" | "Bar" | "Baz" | "Foo"

export interface GreetingStruct {
  __type?: "GreetingStruct";
  hi?: string;
}

export namespace GreetingStruct {
  export function isa(o: any): o is GreetingStruct {
    return __isa(o, "GreetingStruct");
  }
}
