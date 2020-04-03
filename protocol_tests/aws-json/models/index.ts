import {
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException,
  isa as __isa,
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface EmptyStruct {
  __type?: "EmptyStruct";
}

export namespace EmptyStruct {
  export function isa(o: any): o is EmptyStruct {
    return __isa(o, "EmptyStruct");
  }
}

export interface ErrorWithMembers extends __SmithyException, $MetadataBearer {
  name: "ErrorWithMembers";
  $fault: "client";
  Code?: string;
  ComplexData?: KitchenSink;
  IntegerField?: number;
  ListField?: Array<string>;
  MapField?: { [key: string]: string };
  Message?: string;
  /**
   * abc
   */
  StringField?: string;
}

export namespace ErrorWithMembers {
  export function isa(o: any): o is ErrorWithMembers {
    return __isa(o, "ErrorWithMembers");
  }
}

export interface ErrorWithoutMembers extends __SmithyException, $MetadataBearer {
  name: "ErrorWithoutMembers";
  $fault: "server";
}

export namespace ErrorWithoutMembers {
  export function isa(o: any): o is ErrorWithoutMembers {
    return __isa(o, "ErrorWithoutMembers");
  }
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
  ListOfLists?: Array<Array<string>>;
  ListOfMapsOfStrings?: Array<{ [key: string]: string }>;
  ListOfStrings?: Array<string>;
  ListOfStructs?: Array<SimpleStruct>;
  Long?: number;
  MapOfListsOfStrings?: { [key: string]: Array<string> };
  MapOfMaps?: { [key: string]: { [key: string]: string } };
  MapOfStrings?: { [key: string]: string };
  MapOfStructs?: { [key: string]: SimpleStruct };
  RecursiveList?: Array<KitchenSink>;
  RecursiveMap?: { [key: string]: KitchenSink };
  RecursiveStruct?: KitchenSink;
  SimpleStruct?: SimpleStruct;
  String?: string;
  StructWithLocationName?: StructWithLocationName;
  Timestamp?: Date;
  UnixTimestamp?: Date;
}

export namespace KitchenSink {
  export function isa(o: any): o is KitchenSink {
    return __isa(o, "KitchenSink");
  }
}

export interface SimpleStruct {
  __type?: "SimpleStruct";
  Value?: string;
}

export namespace SimpleStruct {
  export function isa(o: any): o is SimpleStruct {
    return __isa(o, "SimpleStruct");
  }
}

export interface StructWithLocationName {
  __type?: "StructWithLocationName";
  Value?: string;
}

export namespace StructWithLocationName {
  export function isa(o: any): o is StructWithLocationName {
    return __isa(o, "StructWithLocationName");
  }
}
