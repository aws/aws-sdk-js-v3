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

export interface HostLabelInput {
  label: string | undefined;
}

export namespace HostLabelInput {
  export const filterSensitiveLog = (obj: HostLabelInput): any => ({
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
  TopLevel?: string;
  Nested?: ComplexNestedErrorData;
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
  ListArg?: string[];
  ComplexListArg?: GreetingStruct[];
  ListArgWithXmlNameMember?: string[];
  ListArgWithXmlName?: string[];
}

export namespace QueryListsInput {
  export const filterSensitiveLog = (obj: QueryListsInput): any => ({
    ...obj,
  });
}

export interface QueryTimestampsInput {
  normalFormat?: Date;
  epochMember?: Date;
  epochTarget?: Date;
}

export namespace QueryTimestampsInput {
  export const filterSensitiveLog = (obj: QueryTimestampsInput): any => ({
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

export interface SimpleInputParamsInput {
  Foo?: string;
  Bar?: string;
  Baz?: boolean;
  Bam?: number;
  Boo?: number;
  Qux?: Uint8Array;
  FooEnum?: FooEnum | string;
  HasQueryName?: string;
  HasQueryAndXmlName?: string;
  UsesXmlName?: string;
}

export namespace SimpleInputParamsInput {
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
  export const filterSensitiveLog = (obj: XmlListsOutput): any => ({
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
  export const filterSensitiveLog = (obj: XmlEnumsOutput): any => ({
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
  normal?: Date;
  dateTime?: Date;
  epochSeconds?: Date;
  httpDate?: Date;
}

export namespace XmlTimestampsOutput {
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
