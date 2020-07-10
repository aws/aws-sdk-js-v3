import {
  SENSITIVE_STRING,
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException,
  isa as __isa,
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface EmptyStruct {
  __type?: "EmptyStruct";
}

export namespace EmptyStruct {
  export const filterSensitiveLog = (obj: EmptyStruct): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmptyStruct => __isa(o, "EmptyStruct");
}

export interface ErrorWithMembers extends __SmithyException, $MetadataBearer {
  name: "ErrorWithMembers";
  $fault: "client";
  Code?: string;
  ComplexData?: KitchenSink;
  IntegerField?: number;
  ListField?: string[];
  MapField?: { [key: string]: string };
  Message?: string;
  /**
   * abc
   */
  StringField?: string;
}

export namespace ErrorWithMembers {
  export const filterSensitiveLog = (obj: ErrorWithMembers): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ErrorWithMembers => __isa(o, "ErrorWithMembers");
}

export interface ErrorWithoutMembers extends __SmithyException, $MetadataBearer {
  name: "ErrorWithoutMembers";
  $fault: "server";
}

export namespace ErrorWithoutMembers {
  export const filterSensitiveLog = (obj: ErrorWithoutMembers): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ErrorWithoutMembers => __isa(o, "ErrorWithoutMembers");
}

export interface KitchenSink {
  __type?: "KitchenSink";
  Blob?: Uint8Array;
  Boolean?: boolean;
  Double?: number;
  EmptyStruct?: EmptyStruct;
  Float?: number;
  HttpdateTimestamp?: Date;
  Integer?: number;
  Iso8601Timestamp?: Date;
  JsonValue?: __LazyJsonString | string;
  ListOfLists?: string[][];
  ListOfMapsOfStrings?: { [key: string]: string }[];
  ListOfStrings?: string[];
  ListOfStructs?: SimpleStruct[];
  Long?: number;
  MapOfListsOfStrings?: { [key: string]: string[] };
  MapOfMaps?: { [key: string]: { [key: string]: string } };
  MapOfStrings?: { [key: string]: string };
  MapOfStructs?: { [key: string]: SimpleStruct };
  RecursiveList?: KitchenSink[];
  RecursiveMap?: { [key: string]: KitchenSink };
  RecursiveStruct?: KitchenSink;
  SimpleStruct?: SimpleStruct;
  String?: string;
  StructWithLocationName?: StructWithLocationName;
  Timestamp?: Date;
  UnixTimestamp?: Date;
}

export namespace KitchenSink {
  export const filterSensitiveLog = (obj: KitchenSink): any => ({
    ...obj,
  });
  export const isa = (o: any): o is KitchenSink => __isa(o, "KitchenSink");
}

export interface SimpleStruct {
  __type?: "SimpleStruct";
  Value?: string;
}

export namespace SimpleStruct {
  export const filterSensitiveLog = (obj: SimpleStruct): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SimpleStruct => __isa(o, "SimpleStruct");
}

export interface StructWithLocationName {
  __type?: "StructWithLocationName";
  Value?: string;
}

export namespace StructWithLocationName {
  export const filterSensitiveLog = (obj: StructWithLocationName): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StructWithLocationName => __isa(o, "StructWithLocationName");
}
