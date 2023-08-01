// smithy-typescript generated code
import {
  CompositeCollectionValidator as __CompositeCollectionValidator,
  CompositeMapValidator as __CompositeMapValidator,
  CompositeStructureValidator as __CompositeStructureValidator,
  CompositeValidator as __CompositeValidator,
  EnumValidator as __EnumValidator,
  IntegerEnumValidator as __IntegerEnumValidator,
  MultiConstraintValidator as __MultiConstraintValidator,
  NoOpValidator as __NoOpValidator,
  RequiredValidator as __RequiredValidator,
  ServiceException as __BaseException,
  UniqueItemsValidator as __UniqueItemsValidator,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@smithy/smithy-client";
import { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";
import { Readable } from "stream";

/**
 * @public
 */
export interface GreetingStruct {
  hi?: string;
}

export namespace GreetingStruct {
  const memberValidators: {
    hi?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GreetingStruct, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "hi": {
            memberValidators["hi"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("hi").validate(obj.hi, `${path}/hi`)];
  };
}

/**
 * @public
 * @enum
 */
export const FooEnum = {
  BAR: "Bar",
  BAZ: "Baz",
  FOO: "Foo",
  ONE: "1",
  ZERO: "0",
} as const;
/**
 * @public
 */
export type FooEnum = (typeof FooEnum)[keyof typeof FooEnum];

export enum IntegerEnum {
  A = 1,
  B = 2,
  C = 3,
}

/**
 * @public
 */
export interface AllQueryStringTypesInput {
  queryString?: string;
  queryStringList?: string[];
  queryStringSet?: string[];
  queryByte?: number;
  queryShort?: number;
  queryInteger?: number;
  queryIntegerList?: number[];
  queryIntegerSet?: number[];
  queryLong?: number;
  queryFloat?: number;
  queryDouble?: number;
  queryDoubleList?: number[];
  queryBoolean?: boolean;
  queryBooleanList?: boolean[];
  queryTimestamp?: Date;
  queryTimestampList?: Date[];
  queryEnum?: FooEnum | string;
  queryEnumList?: (FooEnum | string)[];
  queryIntegerEnum?: IntegerEnum | number;
  queryIntegerEnumList?: (IntegerEnum | number)[];
  queryParamsMapOfStringList?: Record<string, string[]>;
}

export namespace AllQueryStringTypesInput {
  const memberValidators: {
    queryString?: __MultiConstraintValidator<string>;
    queryStringList?: __MultiConstraintValidator<Iterable<string>>;
    queryStringSet?: __MultiConstraintValidator<Iterable<string>>;
    queryByte?: __MultiConstraintValidator<number>;
    queryShort?: __MultiConstraintValidator<number>;
    queryInteger?: __MultiConstraintValidator<number>;
    queryIntegerList?: __MultiConstraintValidator<Iterable<number>>;
    queryIntegerSet?: __MultiConstraintValidator<Iterable<number>>;
    queryLong?: __MultiConstraintValidator<number>;
    queryFloat?: __MultiConstraintValidator<number>;
    queryDouble?: __MultiConstraintValidator<number>;
    queryDoubleList?: __MultiConstraintValidator<Iterable<number>>;
    queryBoolean?: __MultiConstraintValidator<boolean>;
    queryBooleanList?: __MultiConstraintValidator<Iterable<boolean>>;
    queryTimestamp?: __MultiConstraintValidator<Date>;
    queryTimestampList?: __MultiConstraintValidator<Iterable<Date>>;
    queryEnum?: __MultiConstraintValidator<string>;
    queryEnumList?: __MultiConstraintValidator<Iterable<string>>;
    queryIntegerEnum?: __MultiConstraintValidator<number>;
    queryIntegerEnumList?: __MultiConstraintValidator<Iterable<number>>;
    queryParamsMapOfStringList?: __MultiConstraintValidator<Record<string, string[]>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: AllQueryStringTypesInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "queryString": {
            memberValidators["queryString"] = new __NoOpValidator();
            break;
          }
          case "queryStringList": {
            memberValidators["queryStringList"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "queryStringSet": {
            memberValidators["queryStringSet"] = new __CompositeCollectionValidator<string>(
              new __CompositeValidator<string[]>([new __UniqueItemsValidator()]),
              new __NoOpValidator()
            );
            break;
          }
          case "queryByte": {
            memberValidators["queryByte"] = new __NoOpValidator();
            break;
          }
          case "queryShort": {
            memberValidators["queryShort"] = new __NoOpValidator();
            break;
          }
          case "queryInteger": {
            memberValidators["queryInteger"] = new __NoOpValidator();
            break;
          }
          case "queryIntegerList": {
            memberValidators["queryIntegerList"] = new __CompositeCollectionValidator<number>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "queryIntegerSet": {
            memberValidators["queryIntegerSet"] = new __CompositeCollectionValidator<number>(
              new __CompositeValidator<number[]>([new __UniqueItemsValidator()]),
              new __NoOpValidator()
            );
            break;
          }
          case "queryLong": {
            memberValidators["queryLong"] = new __NoOpValidator();
            break;
          }
          case "queryFloat": {
            memberValidators["queryFloat"] = new __NoOpValidator();
            break;
          }
          case "queryDouble": {
            memberValidators["queryDouble"] = new __NoOpValidator();
            break;
          }
          case "queryDoubleList": {
            memberValidators["queryDoubleList"] = new __CompositeCollectionValidator<number>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "queryBoolean": {
            memberValidators["queryBoolean"] = new __NoOpValidator();
            break;
          }
          case "queryBooleanList": {
            memberValidators["queryBooleanList"] = new __CompositeCollectionValidator<boolean>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "queryTimestamp": {
            memberValidators["queryTimestamp"] = new __NoOpValidator();
            break;
          }
          case "queryTimestampList": {
            memberValidators["queryTimestampList"] = new __CompositeCollectionValidator<Date>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "queryEnum": {
            memberValidators["queryEnum"] = new __CompositeValidator<string>([
              new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
            ]);
            break;
          }
          case "queryEnumList": {
            memberValidators["queryEnumList"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __CompositeValidator<string>([
                new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
              ])
            );
            break;
          }
          case "queryIntegerEnum": {
            memberValidators["queryIntegerEnum"] = new __CompositeValidator<number>([
              new __IntegerEnumValidator([1, 2, 3]),
            ]);
            break;
          }
          case "queryIntegerEnumList": {
            memberValidators["queryIntegerEnumList"] = new __CompositeCollectionValidator<number>(
              new __NoOpValidator(),
              new __CompositeValidator<number>([new __IntegerEnumValidator([1, 2, 3])])
            );
            break;
          }
          case "queryParamsMapOfStringList": {
            memberValidators["queryParamsMapOfStringList"] = new __CompositeMapValidator<string[]>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __CompositeCollectionValidator<string>(new __NoOpValidator(), new __NoOpValidator())
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("queryString").validate(obj.queryString, `${path}/queryString`),
      ...getMemberValidator("queryStringList").validate(obj.queryStringList, `${path}/queryStringList`),
      ...getMemberValidator("queryStringSet").validate(obj.queryStringSet, `${path}/queryStringSet`),
      ...getMemberValidator("queryByte").validate(obj.queryByte, `${path}/queryByte`),
      ...getMemberValidator("queryShort").validate(obj.queryShort, `${path}/queryShort`),
      ...getMemberValidator("queryInteger").validate(obj.queryInteger, `${path}/queryInteger`),
      ...getMemberValidator("queryIntegerList").validate(obj.queryIntegerList, `${path}/queryIntegerList`),
      ...getMemberValidator("queryIntegerSet").validate(obj.queryIntegerSet, `${path}/queryIntegerSet`),
      ...getMemberValidator("queryLong").validate(obj.queryLong, `${path}/queryLong`),
      ...getMemberValidator("queryFloat").validate(obj.queryFloat, `${path}/queryFloat`),
      ...getMemberValidator("queryDouble").validate(obj.queryDouble, `${path}/queryDouble`),
      ...getMemberValidator("queryDoubleList").validate(obj.queryDoubleList, `${path}/queryDoubleList`),
      ...getMemberValidator("queryBoolean").validate(obj.queryBoolean, `${path}/queryBoolean`),
      ...getMemberValidator("queryBooleanList").validate(obj.queryBooleanList, `${path}/queryBooleanList`),
      ...getMemberValidator("queryTimestamp").validate(obj.queryTimestamp, `${path}/queryTimestamp`),
      ...getMemberValidator("queryTimestampList").validate(obj.queryTimestampList, `${path}/queryTimestampList`),
      ...getMemberValidator("queryEnum").validate(obj.queryEnum, `${path}/queryEnum`),
      ...getMemberValidator("queryEnumList").validate(obj.queryEnumList, `${path}/queryEnumList`),
      ...getMemberValidator("queryIntegerEnum").validate(obj.queryIntegerEnum, `${path}/queryIntegerEnum`),
      ...getMemberValidator("queryIntegerEnumList").validate(obj.queryIntegerEnumList, `${path}/queryIntegerEnumList`),
      ...getMemberValidator("queryParamsMapOfStringList").validate(
        obj.queryParamsMapOfStringList,
        `${path}/queryParamsMapOfStringList`
      ),
    ];
  };
}

/**
 * @public
 */
export interface ComplexNestedErrorData {
  Foo?: string;
}

export namespace ComplexNestedErrorData {
  const memberValidators: {
    Foo?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ComplexNestedErrorData, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "Foo": {
            memberValidators["Foo"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("Foo").validate(obj.Foo, `${path}/Foo`)];
  };
}

/**
 * @public
 * This error is thrown when a request is invalid.
 */
export class ComplexError extends __BaseException {
  readonly name: "ComplexError" = "ComplexError";
  readonly $fault: "client" = "client";
  Header?: string;
  TopLevel?: string;
  Nested?: ComplexNestedErrorData;
  constructor(opts: __ExceptionOptionType<ComplexError, __BaseException>) {
    super({
      name: "ComplexError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ComplexError.prototype);
    this.Header = opts.Header;
    this.TopLevel = opts.TopLevel;
    this.Nested = opts.Nested;
  }
}

/**
 * @public
 */
export interface ConstantAndVariableQueryStringInput {
  baz?: string;
  maybeSet?: string;
}

export namespace ConstantAndVariableQueryStringInput {
  const memberValidators: {
    baz?: __MultiConstraintValidator<string>;
    maybeSet?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ConstantAndVariableQueryStringInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "baz": {
            memberValidators["baz"] = new __NoOpValidator();
            break;
          }
          case "maybeSet": {
            memberValidators["maybeSet"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("baz").validate(obj.baz, `${path}/baz`),
      ...getMemberValidator("maybeSet").validate(obj.maybeSet, `${path}/maybeSet`),
    ];
  };
}

/**
 * @public
 */
export interface ConstantQueryStringInput {
  hello: string | undefined;
}

export namespace ConstantQueryStringInput {
  const memberValidators: {
    hello?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ConstantQueryStringInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "hello": {
            memberValidators["hello"] = new __CompositeValidator<string>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("hello").validate(obj.hello, `${path}/hello`)];
  };
}

/**
 * @public
 */
export interface DatetimeOffsetsOutput {
  datetime?: Date;
}

export namespace DatetimeOffsetsOutput {
  const memberValidators: {
    datetime?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: DatetimeOffsetsOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "datetime": {
            memberValidators["datetime"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("datetime").validate(obj.datetime, `${path}/datetime`)];
  };
}

/**
 * @public
 */
export interface DocumentTypeInputOutput {
  stringValue?: string;
  documentValue?: __DocumentType;
}

export namespace DocumentTypeInputOutput {
  const memberValidators: {
    stringValue?: __MultiConstraintValidator<string>;
    documentValue?: __MultiConstraintValidator<__DocumentType>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: DocumentTypeInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "stringValue": {
            memberValidators["stringValue"] = new __NoOpValidator();
            break;
          }
          case "documentValue": {
            memberValidators["documentValue"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("stringValue").validate(obj.stringValue, `${path}/stringValue`),
      ...getMemberValidator("documentValue").validate(obj.documentValue, `${path}/documentValue`),
    ];
  };
}

/**
 * @public
 */
export interface DocumentTypeAsPayloadInputOutput {
  documentValue?: __DocumentType;
}

export namespace DocumentTypeAsPayloadInputOutput {
  const memberValidators: {
    documentValue?: __MultiConstraintValidator<__DocumentType>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: DocumentTypeAsPayloadInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "documentValue": {
            memberValidators["documentValue"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("documentValue").validate(obj.documentValue, `${path}/documentValue`)];
  };
}

/**
 * @public
 */
export interface EmptyInputAndEmptyOutputInput {}

export namespace EmptyInputAndEmptyOutputInput {
  const memberValidators: {} = {};
  /**
   * @internal
   */
  export const validate = (obj: EmptyInputAndEmptyOutputInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
        }
      }
      return memberValidators[member]!;
    }
    return [];
  };
}

/**
 * @public
 */
export interface EmptyInputAndEmptyOutputOutput {}

export namespace EmptyInputAndEmptyOutputOutput {
  const memberValidators: {} = {};
  /**
   * @internal
   */
  export const validate = (obj: EmptyInputAndEmptyOutputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
        }
      }
      return memberValidators[member]!;
    }
    return [];
  };
}

/**
 * @public
 */
export interface HostLabelInput {
  label: string | undefined;
}

export namespace HostLabelInput {
  const memberValidators: {
    label?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HostLabelInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "label": {
            memberValidators["label"] = new __CompositeValidator<string>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("label").validate(obj.label, `${path}/label`)];
  };
}

/**
 * @public
 * @enum
 */
export const StringEnum = {
  V: "enumvalue",
} as const;
/**
 * @public
 */
export type StringEnum = (typeof StringEnum)[keyof typeof StringEnum];

/**
 * @public
 */
export interface EnumPayloadInput {
  payload?: StringEnum | string;
}

export namespace EnumPayloadInput {
  const memberValidators: {
    payload?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: EnumPayloadInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "payload": {
            memberValidators["payload"] = new __CompositeValidator<string>([
              new __EnumValidator(["enumvalue"], ["enumvalue"]),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("payload").validate(obj.payload, `${path}/payload`)];
  };
}

/**
 * @public
 * This error has test cases that test some of the dark corners of Amazon service
 * framework history. It should only be implemented by clients.
 */
export class FooError extends __BaseException {
  readonly name: "FooError" = "FooError";
  readonly $fault: "server" = "server";
  constructor(opts: __ExceptionOptionType<FooError, __BaseException>) {
    super({
      name: "FooError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, FooError.prototype);
  }
}

/**
 * @public
 */
export interface FractionalSecondsOutput {
  datetime?: Date;
  httpdate?: Date;
}

export namespace FractionalSecondsOutput {
  const memberValidators: {
    datetime?: __MultiConstraintValidator<Date>;
    httpdate?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: FractionalSecondsOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "datetime": {
            memberValidators["datetime"] = new __NoOpValidator();
            break;
          }
          case "httpdate": {
            memberValidators["httpdate"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("datetime").validate(obj.datetime, `${path}/datetime`),
      ...getMemberValidator("httpdate").validate(obj.httpdate, `${path}/httpdate`),
    ];
  };
}

/**
 * @public
 */
export interface GreetingWithErrorsOutput {
  greeting?: string;
}

export namespace GreetingWithErrorsOutput {
  const memberValidators: {
    greeting?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GreetingWithErrorsOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "greeting": {
            memberValidators["greeting"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("greeting").validate(obj.greeting, `${path}/greeting`)];
  };
}

/**
 * @public
 * This error is thrown when an invalid greeting value is provided.
 */
export class InvalidGreeting extends __BaseException {
  readonly name: "InvalidGreeting" = "InvalidGreeting";
  readonly $fault: "client" = "client";
  Message?: string;
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

/**
 * @public
 */
export interface HttpChecksumRequiredInputOutput {
  foo?: string;
}

export namespace HttpChecksumRequiredInputOutput {
  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpChecksumRequiredInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("foo").validate(obj.foo, `${path}/foo`)];
  };
}

/**
 * @public
 */
export interface HttpPayloadTraitsInputOutput {
  foo?: string;
  blob?: Uint8Array;
}

export namespace HttpPayloadTraitsInputOutput {
  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
    blob?: __MultiConstraintValidator<Uint8Array>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpPayloadTraitsInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __NoOpValidator();
            break;
          }
          case "blob": {
            memberValidators["blob"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
      ...getMemberValidator("blob").validate(obj.blob, `${path}/blob`),
    ];
  };
}

/**
 * @public
 */
export interface HttpPayloadTraitsWithMediaTypeInputOutput {
  foo?: string;
  blob?: Uint8Array;
}

export namespace HttpPayloadTraitsWithMediaTypeInputOutput {
  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
    blob?: __MultiConstraintValidator<Uint8Array>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpPayloadTraitsWithMediaTypeInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __NoOpValidator();
            break;
          }
          case "blob": {
            memberValidators["blob"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
      ...getMemberValidator("blob").validate(obj.blob, `${path}/blob`),
    ];
  };
}

/**
 * @public
 */
export interface NestedPayload {
  greeting?: string;
  name?: string;
}

export namespace NestedPayload {
  const memberValidators: {
    greeting?: __MultiConstraintValidator<string>;
    name?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: NestedPayload, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "greeting": {
            memberValidators["greeting"] = new __NoOpValidator();
            break;
          }
          case "name": {
            memberValidators["name"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("greeting").validate(obj.greeting, `${path}/greeting`),
      ...getMemberValidator("name").validate(obj.name, `${path}/name`),
    ];
  };
}

/**
 * @public
 */
export interface HttpPayloadWithStructureInputOutput {
  nested?: NestedPayload;
}

export namespace HttpPayloadWithStructureInputOutput {
  const memberValidators: {
    nested?: __MultiConstraintValidator<NestedPayload>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpPayloadWithStructureInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "nested": {
            memberValidators["nested"] = new __CompositeStructureValidator<NestedPayload>(
              new __NoOpValidator(),
              NestedPayload.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("nested").validate(obj.nested, `${path}/nested`)];
  };
}

/**
 * @public
 */
export interface HttpPrefixHeadersInput {
  foo?: string;
  fooMap?: Record<string, string>;
}

export namespace HttpPrefixHeadersInput {
  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
    fooMap?: __MultiConstraintValidator<Record<string, string>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpPrefixHeadersInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __NoOpValidator();
            break;
          }
          case "fooMap": {
            memberValidators["fooMap"] = new __CompositeMapValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
      ...getMemberValidator("fooMap").validate(obj.fooMap, `${path}/fooMap`),
    ];
  };
}

/**
 * @public
 */
export interface HttpPrefixHeadersOutput {
  foo?: string;
  fooMap?: Record<string, string>;
}

export namespace HttpPrefixHeadersOutput {
  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
    fooMap?: __MultiConstraintValidator<Record<string, string>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpPrefixHeadersOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __NoOpValidator();
            break;
          }
          case "fooMap": {
            memberValidators["fooMap"] = new __CompositeMapValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
      ...getMemberValidator("fooMap").validate(obj.fooMap, `${path}/fooMap`),
    ];
  };
}

/**
 * @public
 */
export interface HttpPrefixHeadersInResponseInput {}

export namespace HttpPrefixHeadersInResponseInput {
  const memberValidators: {} = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpPrefixHeadersInResponseInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
        }
      }
      return memberValidators[member]!;
    }
    return [];
  };
}

/**
 * @public
 */
export interface HttpPrefixHeadersInResponseOutput {
  prefixHeaders?: Record<string, string>;
}

export namespace HttpPrefixHeadersInResponseOutput {
  const memberValidators: {
    prefixHeaders?: __MultiConstraintValidator<Record<string, string>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpPrefixHeadersInResponseOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "prefixHeaders": {
            memberValidators["prefixHeaders"] = new __CompositeMapValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("prefixHeaders").validate(obj.prefixHeaders, `${path}/prefixHeaders`)];
  };
}

/**
 * @public
 */
export interface HttpRequestWithFloatLabelsInput {
  float: number | undefined;
  double: number | undefined;
}

export namespace HttpRequestWithFloatLabelsInput {
  const memberValidators: {
    float?: __MultiConstraintValidator<number>;
    double?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpRequestWithFloatLabelsInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "float": {
            memberValidators["float"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
          case "double": {
            memberValidators["double"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("float").validate(obj.float, `${path}/float`),
      ...getMemberValidator("double").validate(obj.double, `${path}/double`),
    ];
  };
}

/**
 * @public
 */
export interface HttpRequestWithGreedyLabelInPathInput {
  foo: string | undefined;
  baz: string | undefined;
}

export namespace HttpRequestWithGreedyLabelInPathInput {
  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
    baz?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpRequestWithGreedyLabelInPathInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __CompositeValidator<string>([new __RequiredValidator()]);
            break;
          }
          case "baz": {
            memberValidators["baz"] = new __CompositeValidator<string>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
      ...getMemberValidator("baz").validate(obj.baz, `${path}/baz`),
    ];
  };
}

/**
 * @public
 */
export interface HttpRequestWithLabelsInput {
  string: string | undefined;
  short: number | undefined;
  integer: number | undefined;
  long: number | undefined;
  float: number | undefined;
  double: number | undefined;
  /**
   * @public
   * Serialized in the path as true or false.
   */
  boolean: boolean | undefined;

  /**
   * @public
   * Note that this member has no format, so it's serialized as an RFC 3399 date-time.
   */
  timestamp: Date | undefined;
}

export namespace HttpRequestWithLabelsInput {
  const memberValidators: {
    string?: __MultiConstraintValidator<string>;
    short?: __MultiConstraintValidator<number>;
    integer?: __MultiConstraintValidator<number>;
    long?: __MultiConstraintValidator<number>;
    float?: __MultiConstraintValidator<number>;
    double?: __MultiConstraintValidator<number>;
    boolean?: __MultiConstraintValidator<boolean>;
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpRequestWithLabelsInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "string": {
            memberValidators["string"] = new __CompositeValidator<string>([new __RequiredValidator()]);
            break;
          }
          case "short": {
            memberValidators["short"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
          case "integer": {
            memberValidators["integer"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
          case "long": {
            memberValidators["long"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
          case "float": {
            memberValidators["float"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
          case "double": {
            memberValidators["double"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
          case "boolean": {
            memberValidators["boolean"] = new __CompositeValidator<boolean>([new __RequiredValidator()]);
            break;
          }
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("string").validate(obj.string, `${path}/string`),
      ...getMemberValidator("short").validate(obj.short, `${path}/short`),
      ...getMemberValidator("integer").validate(obj.integer, `${path}/integer`),
      ...getMemberValidator("long").validate(obj.long, `${path}/long`),
      ...getMemberValidator("float").validate(obj.float, `${path}/float`),
      ...getMemberValidator("double").validate(obj.double, `${path}/double`),
      ...getMemberValidator("boolean").validate(obj.boolean, `${path}/boolean`),
      ...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`),
    ];
  };
}

/**
 * @public
 */
export interface HttpRequestWithLabelsAndTimestampFormatInput {
  memberEpochSeconds: Date | undefined;
  memberHttpDate: Date | undefined;
  memberDateTime: Date | undefined;
  defaultFormat: Date | undefined;
  targetEpochSeconds: Date | undefined;
  targetHttpDate: Date | undefined;
  targetDateTime: Date | undefined;
}

export namespace HttpRequestWithLabelsAndTimestampFormatInput {
  const memberValidators: {
    memberEpochSeconds?: __MultiConstraintValidator<Date>;
    memberHttpDate?: __MultiConstraintValidator<Date>;
    memberDateTime?: __MultiConstraintValidator<Date>;
    defaultFormat?: __MultiConstraintValidator<Date>;
    targetEpochSeconds?: __MultiConstraintValidator<Date>;
    targetHttpDate?: __MultiConstraintValidator<Date>;
    targetDateTime?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpRequestWithLabelsAndTimestampFormatInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "memberEpochSeconds": {
            memberValidators["memberEpochSeconds"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
          case "memberHttpDate": {
            memberValidators["memberHttpDate"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
          case "memberDateTime": {
            memberValidators["memberDateTime"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
          case "defaultFormat": {
            memberValidators["defaultFormat"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
          case "targetEpochSeconds": {
            memberValidators["targetEpochSeconds"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
          case "targetHttpDate": {
            memberValidators["targetHttpDate"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
          case "targetDateTime": {
            memberValidators["targetDateTime"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("memberEpochSeconds").validate(obj.memberEpochSeconds, `${path}/memberEpochSeconds`),
      ...getMemberValidator("memberHttpDate").validate(obj.memberHttpDate, `${path}/memberHttpDate`),
      ...getMemberValidator("memberDateTime").validate(obj.memberDateTime, `${path}/memberDateTime`),
      ...getMemberValidator("defaultFormat").validate(obj.defaultFormat, `${path}/defaultFormat`),
      ...getMemberValidator("targetEpochSeconds").validate(obj.targetEpochSeconds, `${path}/targetEpochSeconds`),
      ...getMemberValidator("targetHttpDate").validate(obj.targetHttpDate, `${path}/targetHttpDate`),
      ...getMemberValidator("targetDateTime").validate(obj.targetDateTime, `${path}/targetDateTime`),
    ];
  };
}

/**
 * @public
 */
export interface HttpRequestWithRegexLiteralInput {
  str: string | undefined;
}

export namespace HttpRequestWithRegexLiteralInput {
  const memberValidators: {
    str?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpRequestWithRegexLiteralInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "str": {
            memberValidators["str"] = new __CompositeValidator<string>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("str").validate(obj.str, `${path}/str`)];
  };
}

/**
 * @public
 */
export interface HttpResponseCodeOutput {
  Status?: number;
}

export namespace HttpResponseCodeOutput {
  const memberValidators: {
    Status?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HttpResponseCodeOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "Status": {
            memberValidators["Status"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("Status").validate(obj.Status, `${path}/Status`)];
  };
}

/**
 * @public
 */
export interface StringPayloadInput {
  payload?: string;
}

export namespace StringPayloadInput {
  const memberValidators: {
    payload?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: StringPayloadInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "payload": {
            memberValidators["payload"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("payload").validate(obj.payload, `${path}/payload`)];
  };
}

/**
 * @public
 */
export interface IgnoreQueryParamsInResponseOutput {
  baz?: string;
}

export namespace IgnoreQueryParamsInResponseOutput {
  const memberValidators: {
    baz?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: IgnoreQueryParamsInResponseOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "baz": {
            memberValidators["baz"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("baz").validate(obj.baz, `${path}/baz`)];
  };
}

/**
 * @public
 */
export interface InputAndOutputWithHeadersIO {
  headerString?: string;
  headerByte?: number;
  headerShort?: number;
  headerInteger?: number;
  headerLong?: number;
  headerFloat?: number;
  headerDouble?: number;
  headerTrueBool?: boolean;
  headerFalseBool?: boolean;
  headerStringList?: string[];
  headerStringSet?: string[];
  headerIntegerList?: number[];
  headerBooleanList?: boolean[];
  headerTimestampList?: Date[];
  headerEnum?: FooEnum | string;
  headerEnumList?: (FooEnum | string)[];
  headerIntegerEnum?: IntegerEnum | number;
  headerIntegerEnumList?: (IntegerEnum | number)[];
}

export namespace InputAndOutputWithHeadersIO {
  const memberValidators: {
    headerString?: __MultiConstraintValidator<string>;
    headerByte?: __MultiConstraintValidator<number>;
    headerShort?: __MultiConstraintValidator<number>;
    headerInteger?: __MultiConstraintValidator<number>;
    headerLong?: __MultiConstraintValidator<number>;
    headerFloat?: __MultiConstraintValidator<number>;
    headerDouble?: __MultiConstraintValidator<number>;
    headerTrueBool?: __MultiConstraintValidator<boolean>;
    headerFalseBool?: __MultiConstraintValidator<boolean>;
    headerStringList?: __MultiConstraintValidator<Iterable<string>>;
    headerStringSet?: __MultiConstraintValidator<Iterable<string>>;
    headerIntegerList?: __MultiConstraintValidator<Iterable<number>>;
    headerBooleanList?: __MultiConstraintValidator<Iterable<boolean>>;
    headerTimestampList?: __MultiConstraintValidator<Iterable<Date>>;
    headerEnum?: __MultiConstraintValidator<string>;
    headerEnumList?: __MultiConstraintValidator<Iterable<string>>;
    headerIntegerEnum?: __MultiConstraintValidator<number>;
    headerIntegerEnumList?: __MultiConstraintValidator<Iterable<number>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: InputAndOutputWithHeadersIO, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "headerString": {
            memberValidators["headerString"] = new __NoOpValidator();
            break;
          }
          case "headerByte": {
            memberValidators["headerByte"] = new __NoOpValidator();
            break;
          }
          case "headerShort": {
            memberValidators["headerShort"] = new __NoOpValidator();
            break;
          }
          case "headerInteger": {
            memberValidators["headerInteger"] = new __NoOpValidator();
            break;
          }
          case "headerLong": {
            memberValidators["headerLong"] = new __NoOpValidator();
            break;
          }
          case "headerFloat": {
            memberValidators["headerFloat"] = new __NoOpValidator();
            break;
          }
          case "headerDouble": {
            memberValidators["headerDouble"] = new __NoOpValidator();
            break;
          }
          case "headerTrueBool": {
            memberValidators["headerTrueBool"] = new __NoOpValidator();
            break;
          }
          case "headerFalseBool": {
            memberValidators["headerFalseBool"] = new __NoOpValidator();
            break;
          }
          case "headerStringList": {
            memberValidators["headerStringList"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "headerStringSet": {
            memberValidators["headerStringSet"] = new __CompositeCollectionValidator<string>(
              new __CompositeValidator<string[]>([new __UniqueItemsValidator()]),
              new __NoOpValidator()
            );
            break;
          }
          case "headerIntegerList": {
            memberValidators["headerIntegerList"] = new __CompositeCollectionValidator<number>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "headerBooleanList": {
            memberValidators["headerBooleanList"] = new __CompositeCollectionValidator<boolean>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "headerTimestampList": {
            memberValidators["headerTimestampList"] = new __CompositeCollectionValidator<Date>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "headerEnum": {
            memberValidators["headerEnum"] = new __CompositeValidator<string>([
              new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
            ]);
            break;
          }
          case "headerEnumList": {
            memberValidators["headerEnumList"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __CompositeValidator<string>([
                new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
              ])
            );
            break;
          }
          case "headerIntegerEnum": {
            memberValidators["headerIntegerEnum"] = new __CompositeValidator<number>([
              new __IntegerEnumValidator([1, 2, 3]),
            ]);
            break;
          }
          case "headerIntegerEnumList": {
            memberValidators["headerIntegerEnumList"] = new __CompositeCollectionValidator<number>(
              new __NoOpValidator(),
              new __CompositeValidator<number>([new __IntegerEnumValidator([1, 2, 3])])
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("headerString").validate(obj.headerString, `${path}/headerString`),
      ...getMemberValidator("headerByte").validate(obj.headerByte, `${path}/headerByte`),
      ...getMemberValidator("headerShort").validate(obj.headerShort, `${path}/headerShort`),
      ...getMemberValidator("headerInteger").validate(obj.headerInteger, `${path}/headerInteger`),
      ...getMemberValidator("headerLong").validate(obj.headerLong, `${path}/headerLong`),
      ...getMemberValidator("headerFloat").validate(obj.headerFloat, `${path}/headerFloat`),
      ...getMemberValidator("headerDouble").validate(obj.headerDouble, `${path}/headerDouble`),
      ...getMemberValidator("headerTrueBool").validate(obj.headerTrueBool, `${path}/headerTrueBool`),
      ...getMemberValidator("headerFalseBool").validate(obj.headerFalseBool, `${path}/headerFalseBool`),
      ...getMemberValidator("headerStringList").validate(obj.headerStringList, `${path}/headerStringList`),
      ...getMemberValidator("headerStringSet").validate(obj.headerStringSet, `${path}/headerStringSet`),
      ...getMemberValidator("headerIntegerList").validate(obj.headerIntegerList, `${path}/headerIntegerList`),
      ...getMemberValidator("headerBooleanList").validate(obj.headerBooleanList, `${path}/headerBooleanList`),
      ...getMemberValidator("headerTimestampList").validate(obj.headerTimestampList, `${path}/headerTimestampList`),
      ...getMemberValidator("headerEnum").validate(obj.headerEnum, `${path}/headerEnum`),
      ...getMemberValidator("headerEnumList").validate(obj.headerEnumList, `${path}/headerEnumList`),
      ...getMemberValidator("headerIntegerEnum").validate(obj.headerIntegerEnum, `${path}/headerIntegerEnum`),
      ...getMemberValidator("headerIntegerEnumList").validate(
        obj.headerIntegerEnumList,
        `${path}/headerIntegerEnumList`
      ),
    ];
  };
}

/**
 * @public
 */
export interface JsonBlobsInputOutput {
  data?: Uint8Array;
}

export namespace JsonBlobsInputOutput {
  const memberValidators: {
    data?: __MultiConstraintValidator<Uint8Array>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: JsonBlobsInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "data": {
            memberValidators["data"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("data").validate(obj.data, `${path}/data`)];
  };
}

/**
 * @public
 */
export interface JsonEnumsInputOutput {
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumSet?: (FooEnum | string)[];
  fooEnumMap?: Record<string, FooEnum | string>;
}

export namespace JsonEnumsInputOutput {
  const memberValidators: {
    fooEnum1?: __MultiConstraintValidator<string>;
    fooEnum2?: __MultiConstraintValidator<string>;
    fooEnum3?: __MultiConstraintValidator<string>;
    fooEnumList?: __MultiConstraintValidator<Iterable<string>>;
    fooEnumSet?: __MultiConstraintValidator<Iterable<string>>;
    fooEnumMap?: __MultiConstraintValidator<Record<string, FooEnum | string>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: JsonEnumsInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "fooEnum1": {
            memberValidators["fooEnum1"] = new __CompositeValidator<string>([
              new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
            ]);
            break;
          }
          case "fooEnum2": {
            memberValidators["fooEnum2"] = new __CompositeValidator<string>([
              new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
            ]);
            break;
          }
          case "fooEnum3": {
            memberValidators["fooEnum3"] = new __CompositeValidator<string>([
              new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
            ]);
            break;
          }
          case "fooEnumList": {
            memberValidators["fooEnumList"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __CompositeValidator<string>([
                new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
              ])
            );
            break;
          }
          case "fooEnumSet": {
            memberValidators["fooEnumSet"] = new __CompositeCollectionValidator<string>(
              new __CompositeValidator<(FooEnum | string)[]>([new __UniqueItemsValidator()]),
              new __CompositeValidator<string>([
                new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
              ])
            );
            break;
          }
          case "fooEnumMap": {
            memberValidators["fooEnumMap"] = new __CompositeMapValidator<FooEnum | string>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __CompositeValidator<string>([
                new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
              ])
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("fooEnum1").validate(obj.fooEnum1, `${path}/fooEnum1`),
      ...getMemberValidator("fooEnum2").validate(obj.fooEnum2, `${path}/fooEnum2`),
      ...getMemberValidator("fooEnum3").validate(obj.fooEnum3, `${path}/fooEnum3`),
      ...getMemberValidator("fooEnumList").validate(obj.fooEnumList, `${path}/fooEnumList`),
      ...getMemberValidator("fooEnumSet").validate(obj.fooEnumSet, `${path}/fooEnumSet`),
      ...getMemberValidator("fooEnumMap").validate(obj.fooEnumMap, `${path}/fooEnumMap`),
    ];
  };
}

/**
 * @public
 */
export interface JsonIntEnumsInputOutput {
  integerEnum1?: IntegerEnum | number;
  integerEnum2?: IntegerEnum | number;
  integerEnum3?: IntegerEnum | number;
  integerEnumList?: (IntegerEnum | number)[];
  integerEnumSet?: (IntegerEnum | number)[];
  integerEnumMap?: Record<string, IntegerEnum | number>;
}

export namespace JsonIntEnumsInputOutput {
  const memberValidators: {
    integerEnum1?: __MultiConstraintValidator<number>;
    integerEnum2?: __MultiConstraintValidator<number>;
    integerEnum3?: __MultiConstraintValidator<number>;
    integerEnumList?: __MultiConstraintValidator<Iterable<number>>;
    integerEnumSet?: __MultiConstraintValidator<Iterable<number>>;
    integerEnumMap?: __MultiConstraintValidator<Record<string, IntegerEnum | number>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: JsonIntEnumsInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "integerEnum1": {
            memberValidators["integerEnum1"] = new __CompositeValidator<number>([
              new __IntegerEnumValidator([1, 2, 3]),
            ]);
            break;
          }
          case "integerEnum2": {
            memberValidators["integerEnum2"] = new __CompositeValidator<number>([
              new __IntegerEnumValidator([1, 2, 3]),
            ]);
            break;
          }
          case "integerEnum3": {
            memberValidators["integerEnum3"] = new __CompositeValidator<number>([
              new __IntegerEnumValidator([1, 2, 3]),
            ]);
            break;
          }
          case "integerEnumList": {
            memberValidators["integerEnumList"] = new __CompositeCollectionValidator<number>(
              new __NoOpValidator(),
              new __CompositeValidator<number>([new __IntegerEnumValidator([1, 2, 3])])
            );
            break;
          }
          case "integerEnumSet": {
            memberValidators["integerEnumSet"] = new __CompositeCollectionValidator<number>(
              new __CompositeValidator<(IntegerEnum | number)[]>([new __UniqueItemsValidator()]),
              new __CompositeValidator<number>([new __IntegerEnumValidator([1, 2, 3])])
            );
            break;
          }
          case "integerEnumMap": {
            memberValidators["integerEnumMap"] = new __CompositeMapValidator<IntegerEnum | number>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __CompositeValidator<number>([new __IntegerEnumValidator([1, 2, 3])])
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("integerEnum1").validate(obj.integerEnum1, `${path}/integerEnum1`),
      ...getMemberValidator("integerEnum2").validate(obj.integerEnum2, `${path}/integerEnum2`),
      ...getMemberValidator("integerEnum3").validate(obj.integerEnum3, `${path}/integerEnum3`),
      ...getMemberValidator("integerEnumList").validate(obj.integerEnumList, `${path}/integerEnumList`),
      ...getMemberValidator("integerEnumSet").validate(obj.integerEnumSet, `${path}/integerEnumSet`),
      ...getMemberValidator("integerEnumMap").validate(obj.integerEnumMap, `${path}/integerEnumMap`),
    ];
  };
}

/**
 * @public
 */
export interface StructureListMember {
  a?: string;
  b?: string;
}

export namespace StructureListMember {
  const memberValidators: {
    a?: __MultiConstraintValidator<string>;
    b?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: StructureListMember, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "a": {
            memberValidators["a"] = new __NoOpValidator();
            break;
          }
          case "b": {
            memberValidators["b"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("a").validate(obj.a, `${path}/a`),
      ...getMemberValidator("b").validate(obj.b, `${path}/b`),
    ];
  };
}

/**
 * @public
 */
export interface JsonListsInputOutput {
  stringList?: string[];
  sparseStringList?: string[];
  stringSet?: string[];
  integerList?: number[];
  booleanList?: boolean[];
  timestampList?: Date[];
  enumList?: (FooEnum | string)[];
  intEnumList?: (IntegerEnum | number)[];
  /**
   * @public
   * A list of lists of strings.
   */
  nestedStringList?: string[][];

  structureList?: StructureListMember[];
}

export namespace JsonListsInputOutput {
  const memberValidators: {
    stringList?: __MultiConstraintValidator<Iterable<string>>;
    sparseStringList?: __MultiConstraintValidator<Iterable<string>>;
    stringSet?: __MultiConstraintValidator<Iterable<string>>;
    integerList?: __MultiConstraintValidator<Iterable<number>>;
    booleanList?: __MultiConstraintValidator<Iterable<boolean>>;
    timestampList?: __MultiConstraintValidator<Iterable<Date>>;
    enumList?: __MultiConstraintValidator<Iterable<string>>;
    intEnumList?: __MultiConstraintValidator<Iterable<number>>;
    nestedStringList?: __MultiConstraintValidator<Iterable<string[]>>;
    structureList?: __MultiConstraintValidator<Iterable<StructureListMember>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: JsonListsInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "stringList": {
            memberValidators["stringList"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "sparseStringList": {
            memberValidators["sparseStringList"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "stringSet": {
            memberValidators["stringSet"] = new __CompositeCollectionValidator<string>(
              new __CompositeValidator<string[]>([new __UniqueItemsValidator()]),
              new __NoOpValidator()
            );
            break;
          }
          case "integerList": {
            memberValidators["integerList"] = new __CompositeCollectionValidator<number>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "booleanList": {
            memberValidators["booleanList"] = new __CompositeCollectionValidator<boolean>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "timestampList": {
            memberValidators["timestampList"] = new __CompositeCollectionValidator<Date>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "enumList": {
            memberValidators["enumList"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __CompositeValidator<string>([
                new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
              ])
            );
            break;
          }
          case "intEnumList": {
            memberValidators["intEnumList"] = new __CompositeCollectionValidator<number>(
              new __NoOpValidator(),
              new __CompositeValidator<number>([new __IntegerEnumValidator([1, 2, 3])])
            );
            break;
          }
          case "nestedStringList": {
            memberValidators["nestedStringList"] = new __CompositeCollectionValidator<string[]>(
              new __NoOpValidator(),
              new __CompositeCollectionValidator<string>(new __NoOpValidator(), new __NoOpValidator())
            );
            break;
          }
          case "structureList": {
            memberValidators["structureList"] = new __CompositeCollectionValidator<StructureListMember>(
              new __NoOpValidator(),
              new __CompositeStructureValidator<StructureListMember>(
                new __NoOpValidator(),
                StructureListMember.validate
              )
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("stringList").validate(obj.stringList, `${path}/stringList`),
      ...getMemberValidator("sparseStringList").validate(obj.sparseStringList, `${path}/sparseStringList`),
      ...getMemberValidator("stringSet").validate(obj.stringSet, `${path}/stringSet`),
      ...getMemberValidator("integerList").validate(obj.integerList, `${path}/integerList`),
      ...getMemberValidator("booleanList").validate(obj.booleanList, `${path}/booleanList`),
      ...getMemberValidator("timestampList").validate(obj.timestampList, `${path}/timestampList`),
      ...getMemberValidator("enumList").validate(obj.enumList, `${path}/enumList`),
      ...getMemberValidator("intEnumList").validate(obj.intEnumList, `${path}/intEnumList`),
      ...getMemberValidator("nestedStringList").validate(obj.nestedStringList, `${path}/nestedStringList`),
      ...getMemberValidator("structureList").validate(obj.structureList, `${path}/structureList`),
    ];
  };
}

/**
 * @public
 */
export interface JsonMapsInputOutput {
  denseStructMap?: Record<string, GreetingStruct>;
  sparseStructMap?: Record<string, GreetingStruct>;
  denseNumberMap?: Record<string, number>;
  denseBooleanMap?: Record<string, boolean>;
  denseStringMap?: Record<string, string>;
  sparseNumberMap?: Record<string, number>;
  sparseBooleanMap?: Record<string, boolean>;
  sparseStringMap?: Record<string, string>;
  denseSetMap?: Record<string, string[]>;
  sparseSetMap?: Record<string, string[]>;
}

export namespace JsonMapsInputOutput {
  const memberValidators: {
    denseStructMap?: __MultiConstraintValidator<Record<string, GreetingStruct>>;
    sparseStructMap?: __MultiConstraintValidator<Record<string, GreetingStruct>>;
    denseNumberMap?: __MultiConstraintValidator<Record<string, number>>;
    denseBooleanMap?: __MultiConstraintValidator<Record<string, boolean>>;
    denseStringMap?: __MultiConstraintValidator<Record<string, string>>;
    sparseNumberMap?: __MultiConstraintValidator<Record<string, number>>;
    sparseBooleanMap?: __MultiConstraintValidator<Record<string, boolean>>;
    sparseStringMap?: __MultiConstraintValidator<Record<string, string>>;
    denseSetMap?: __MultiConstraintValidator<Record<string, string[]>>;
    sparseSetMap?: __MultiConstraintValidator<Record<string, string[]>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: JsonMapsInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "denseStructMap": {
            memberValidators["denseStructMap"] = new __CompositeMapValidator<GreetingStruct>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __CompositeStructureValidator<GreetingStruct>(new __NoOpValidator(), GreetingStruct.validate)
            );
            break;
          }
          case "sparseStructMap": {
            memberValidators["sparseStructMap"] = new __CompositeMapValidator<GreetingStruct>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __CompositeStructureValidator<GreetingStruct>(new __NoOpValidator(), GreetingStruct.validate)
            );
            break;
          }
          case "denseNumberMap": {
            memberValidators["denseNumberMap"] = new __CompositeMapValidator<number>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "denseBooleanMap": {
            memberValidators["denseBooleanMap"] = new __CompositeMapValidator<boolean>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "denseStringMap": {
            memberValidators["denseStringMap"] = new __CompositeMapValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "sparseNumberMap": {
            memberValidators["sparseNumberMap"] = new __CompositeMapValidator<number>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "sparseBooleanMap": {
            memberValidators["sparseBooleanMap"] = new __CompositeMapValidator<boolean>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "sparseStringMap": {
            memberValidators["sparseStringMap"] = new __CompositeMapValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "denseSetMap": {
            memberValidators["denseSetMap"] = new __CompositeMapValidator<string[]>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __CompositeCollectionValidator<string>(
                new __CompositeValidator<string[]>([new __UniqueItemsValidator()]),
                new __NoOpValidator()
              )
            );
            break;
          }
          case "sparseSetMap": {
            memberValidators["sparseSetMap"] = new __CompositeMapValidator<string[]>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __CompositeCollectionValidator<string>(
                new __CompositeValidator<string[]>([new __UniqueItemsValidator()]),
                new __NoOpValidator()
              )
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("denseStructMap").validate(obj.denseStructMap, `${path}/denseStructMap`),
      ...getMemberValidator("sparseStructMap").validate(obj.sparseStructMap, `${path}/sparseStructMap`),
      ...getMemberValidator("denseNumberMap").validate(obj.denseNumberMap, `${path}/denseNumberMap`),
      ...getMemberValidator("denseBooleanMap").validate(obj.denseBooleanMap, `${path}/denseBooleanMap`),
      ...getMemberValidator("denseStringMap").validate(obj.denseStringMap, `${path}/denseStringMap`),
      ...getMemberValidator("sparseNumberMap").validate(obj.sparseNumberMap, `${path}/sparseNumberMap`),
      ...getMemberValidator("sparseBooleanMap").validate(obj.sparseBooleanMap, `${path}/sparseBooleanMap`),
      ...getMemberValidator("sparseStringMap").validate(obj.sparseStringMap, `${path}/sparseStringMap`),
      ...getMemberValidator("denseSetMap").validate(obj.denseSetMap, `${path}/denseSetMap`),
      ...getMemberValidator("sparseSetMap").validate(obj.sparseSetMap, `${path}/sparseSetMap`),
    ];
  };
}

/**
 * @public
 */
export interface JsonTimestampsInputOutput {
  normal?: Date;
  dateTime?: Date;
  dateTimeOnTarget?: Date;
  epochSeconds?: Date;
  epochSecondsOnTarget?: Date;
  httpDate?: Date;
  httpDateOnTarget?: Date;
}

export namespace JsonTimestampsInputOutput {
  const memberValidators: {
    normal?: __MultiConstraintValidator<Date>;
    dateTime?: __MultiConstraintValidator<Date>;
    dateTimeOnTarget?: __MultiConstraintValidator<Date>;
    epochSeconds?: __MultiConstraintValidator<Date>;
    epochSecondsOnTarget?: __MultiConstraintValidator<Date>;
    httpDate?: __MultiConstraintValidator<Date>;
    httpDateOnTarget?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: JsonTimestampsInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "normal": {
            memberValidators["normal"] = new __NoOpValidator();
            break;
          }
          case "dateTime": {
            memberValidators["dateTime"] = new __NoOpValidator();
            break;
          }
          case "dateTimeOnTarget": {
            memberValidators["dateTimeOnTarget"] = new __NoOpValidator();
            break;
          }
          case "epochSeconds": {
            memberValidators["epochSeconds"] = new __NoOpValidator();
            break;
          }
          case "epochSecondsOnTarget": {
            memberValidators["epochSecondsOnTarget"] = new __NoOpValidator();
            break;
          }
          case "httpDate": {
            memberValidators["httpDate"] = new __NoOpValidator();
            break;
          }
          case "httpDateOnTarget": {
            memberValidators["httpDateOnTarget"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("normal").validate(obj.normal, `${path}/normal`),
      ...getMemberValidator("dateTime").validate(obj.dateTime, `${path}/dateTime`),
      ...getMemberValidator("dateTimeOnTarget").validate(obj.dateTimeOnTarget, `${path}/dateTimeOnTarget`),
      ...getMemberValidator("epochSeconds").validate(obj.epochSeconds, `${path}/epochSeconds`),
      ...getMemberValidator("epochSecondsOnTarget").validate(obj.epochSecondsOnTarget, `${path}/epochSecondsOnTarget`),
      ...getMemberValidator("httpDate").validate(obj.httpDate, `${path}/httpDate`),
      ...getMemberValidator("httpDateOnTarget").validate(obj.httpDateOnTarget, `${path}/httpDateOnTarget`),
    ];
  };
}

/**
 * @public
 */
export interface RenamedGreeting {
  salutation?: string;
}

export namespace RenamedGreeting {
  const memberValidators: {
    salutation?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: RenamedGreeting, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "salutation": {
            memberValidators["salutation"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("salutation").validate(obj.salutation, `${path}/salutation`)];
  };
}

/**
 * @public
 * A union with a representative set of types for members.
 */
export type MyUnion =
  | MyUnion.BlobValueMember
  | MyUnion.BooleanValueMember
  | MyUnion.EnumValueMember
  | MyUnion.ListValueMember
  | MyUnion.MapValueMember
  | MyUnion.NumberValueMember
  | MyUnion.RenamedStructureValueMember
  | MyUnion.StringValueMember
  | MyUnion.StructureValueMember
  | MyUnion.TimestampValueMember
  | MyUnion.$UnknownMember;

/**
 * @public
 */
export namespace MyUnion {
  export interface StringValueMember {
    stringValue: string;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface BooleanValueMember {
    stringValue?: never;
    booleanValue: boolean;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface NumberValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue: number;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface BlobValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue: Uint8Array;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface TimestampValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue: Date;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface EnumValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue: FooEnum | string;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface ListValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue: string[];
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface MapValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue: Record<string, string>;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface StructureValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue: GreetingStruct;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface RenamedStructureValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue: RenamedGreeting;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    booleanValue: (value: boolean) => T;
    numberValue: (value: number) => T;
    blobValue: (value: Uint8Array) => T;
    timestampValue: (value: Date) => T;
    enumValue: (value: FooEnum | string) => T;
    listValue: (value: string[]) => T;
    mapValue: (value: Record<string, string>) => T;
    structureValue: (value: GreetingStruct) => T;
    renamedStructureValue: (value: RenamedGreeting) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MyUnion, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.numberValue !== undefined) return visitor.numberValue(value.numberValue);
    if (value.blobValue !== undefined) return visitor.blobValue(value.blobValue);
    if (value.timestampValue !== undefined) return visitor.timestampValue(value.timestampValue);
    if (value.enumValue !== undefined) return visitor.enumValue(value.enumValue);
    if (value.listValue !== undefined) return visitor.listValue(value.listValue);
    if (value.mapValue !== undefined) return visitor.mapValue(value.mapValue);
    if (value.structureValue !== undefined) return visitor.structureValue(value.structureValue);
    if (value.renamedStructureValue !== undefined) return visitor.renamedStructureValue(value.renamedStructureValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  const memberValidators: {
    stringValue?: __MultiConstraintValidator<string>;
    booleanValue?: __MultiConstraintValidator<boolean>;
    numberValue?: __MultiConstraintValidator<number>;
    blobValue?: __MultiConstraintValidator<Uint8Array>;
    timestampValue?: __MultiConstraintValidator<Date>;
    enumValue?: __MultiConstraintValidator<string>;
    listValue?: __MultiConstraintValidator<Iterable<string>>;
    mapValue?: __MultiConstraintValidator<Record<string, string>>;
    structureValue?: __MultiConstraintValidator<GreetingStruct>;
    renamedStructureValue?: __MultiConstraintValidator<RenamedGreeting>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MyUnion, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "stringValue": {
            memberValidators["stringValue"] = new __NoOpValidator();
            break;
          }
          case "booleanValue": {
            memberValidators["booleanValue"] = new __NoOpValidator();
            break;
          }
          case "numberValue": {
            memberValidators["numberValue"] = new __NoOpValidator();
            break;
          }
          case "blobValue": {
            memberValidators["blobValue"] = new __NoOpValidator();
            break;
          }
          case "timestampValue": {
            memberValidators["timestampValue"] = new __NoOpValidator();
            break;
          }
          case "enumValue": {
            memberValidators["enumValue"] = new __CompositeValidator<string>([
              new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
            ]);
            break;
          }
          case "listValue": {
            memberValidators["listValue"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "mapValue": {
            memberValidators["mapValue"] = new __CompositeMapValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "structureValue": {
            memberValidators["structureValue"] = new __CompositeStructureValidator<GreetingStruct>(
              new __NoOpValidator(),
              GreetingStruct.validate
            );
            break;
          }
          case "renamedStructureValue": {
            memberValidators["renamedStructureValue"] = new __CompositeStructureValidator<RenamedGreeting>(
              new __NoOpValidator(),
              RenamedGreeting.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("stringValue").validate(obj.stringValue, `${path}/stringValue`),
      ...getMemberValidator("booleanValue").validate(obj.booleanValue, `${path}/booleanValue`),
      ...getMemberValidator("numberValue").validate(obj.numberValue, `${path}/numberValue`),
      ...getMemberValidator("blobValue").validate(obj.blobValue, `${path}/blobValue`),
      ...getMemberValidator("timestampValue").validate(obj.timestampValue, `${path}/timestampValue`),
      ...getMemberValidator("enumValue").validate(obj.enumValue, `${path}/enumValue`),
      ...getMemberValidator("listValue").validate(obj.listValue, `${path}/listValue`),
      ...getMemberValidator("mapValue").validate(obj.mapValue, `${path}/mapValue`),
      ...getMemberValidator("structureValue").validate(obj.structureValue, `${path}/structureValue`),
      ...getMemberValidator("renamedStructureValue").validate(
        obj.renamedStructureValue,
        `${path}/renamedStructureValue`
      ),
    ];
  };
}

/**
 * @public
 * A shared structure that contains a single union member.
 */
export interface UnionInputOutput {
  /**
   * @public
   * A union with a representative set of types for members.
   */
  contents?: MyUnion;
}

export namespace UnionInputOutput {
  const memberValidators: {
    contents?: __MultiConstraintValidator<MyUnion>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UnionInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "contents": {
            memberValidators["contents"] = new __CompositeStructureValidator<MyUnion>(
              new __NoOpValidator(),
              MyUnion.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("contents").validate(obj.contents, `${path}/contents`)];
  };
}

/**
 * @public
 */
export interface MalformedAcceptWithGenericStringOutput {
  payload?: string;
}

export namespace MalformedAcceptWithGenericStringOutput {
  const memberValidators: {
    payload?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedAcceptWithGenericStringOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "payload": {
            memberValidators["payload"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("payload").validate(obj.payload, `${path}/payload`)];
  };
}

/**
 * @public
 */
export interface MalformedAcceptWithPayloadOutput {
  payload?: Uint8Array;
}

export namespace MalformedAcceptWithPayloadOutput {
  const memberValidators: {
    payload?: __MultiConstraintValidator<Uint8Array>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedAcceptWithPayloadOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "payload": {
            memberValidators["payload"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("payload").validate(obj.payload, `${path}/payload`)];
  };
}

/**
 * @public
 */
export interface MalformedBlobInput {
  blob?: Uint8Array;
}

export namespace MalformedBlobInput {
  const memberValidators: {
    blob?: __MultiConstraintValidator<Uint8Array>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedBlobInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "blob": {
            memberValidators["blob"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("blob").validate(obj.blob, `${path}/blob`)];
  };
}

/**
 * @public
 */
export interface MalformedBooleanInput {
  booleanInBody?: boolean;
  booleanInPath: boolean | undefined;
  booleanInQuery?: boolean;
  booleanInHeader?: boolean;
}

export namespace MalformedBooleanInput {
  const memberValidators: {
    booleanInBody?: __MultiConstraintValidator<boolean>;
    booleanInPath?: __MultiConstraintValidator<boolean>;
    booleanInQuery?: __MultiConstraintValidator<boolean>;
    booleanInHeader?: __MultiConstraintValidator<boolean>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedBooleanInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "booleanInBody": {
            memberValidators["booleanInBody"] = new __NoOpValidator();
            break;
          }
          case "booleanInPath": {
            memberValidators["booleanInPath"] = new __CompositeValidator<boolean>([new __RequiredValidator()]);
            break;
          }
          case "booleanInQuery": {
            memberValidators["booleanInQuery"] = new __NoOpValidator();
            break;
          }
          case "booleanInHeader": {
            memberValidators["booleanInHeader"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("booleanInBody").validate(obj.booleanInBody, `${path}/booleanInBody`),
      ...getMemberValidator("booleanInPath").validate(obj.booleanInPath, `${path}/booleanInPath`),
      ...getMemberValidator("booleanInQuery").validate(obj.booleanInQuery, `${path}/booleanInQuery`),
      ...getMemberValidator("booleanInHeader").validate(obj.booleanInHeader, `${path}/booleanInHeader`),
    ];
  };
}

/**
 * @public
 */
export interface MalformedByteInput {
  byteInBody?: number;
  byteInPath: number | undefined;
  byteInQuery?: number;
  byteInHeader?: number;
}

export namespace MalformedByteInput {
  const memberValidators: {
    byteInBody?: __MultiConstraintValidator<number>;
    byteInPath?: __MultiConstraintValidator<number>;
    byteInQuery?: __MultiConstraintValidator<number>;
    byteInHeader?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedByteInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "byteInBody": {
            memberValidators["byteInBody"] = new __NoOpValidator();
            break;
          }
          case "byteInPath": {
            memberValidators["byteInPath"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
          case "byteInQuery": {
            memberValidators["byteInQuery"] = new __NoOpValidator();
            break;
          }
          case "byteInHeader": {
            memberValidators["byteInHeader"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("byteInBody").validate(obj.byteInBody, `${path}/byteInBody`),
      ...getMemberValidator("byteInPath").validate(obj.byteInPath, `${path}/byteInPath`),
      ...getMemberValidator("byteInQuery").validate(obj.byteInQuery, `${path}/byteInQuery`),
      ...getMemberValidator("byteInHeader").validate(obj.byteInHeader, `${path}/byteInHeader`),
    ];
  };
}

/**
 * @public
 */
export interface MalformedContentTypeWithGenericStringInput {
  payload?: string;
}

export namespace MalformedContentTypeWithGenericStringInput {
  const memberValidators: {
    payload?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedContentTypeWithGenericStringInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "payload": {
            memberValidators["payload"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("payload").validate(obj.payload, `${path}/payload`)];
  };
}

/**
 * @public
 */
export interface MalformedContentTypeWithPayloadInput {
  payload?: Uint8Array;
}

export namespace MalformedContentTypeWithPayloadInput {
  const memberValidators: {
    payload?: __MultiConstraintValidator<Uint8Array>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedContentTypeWithPayloadInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "payload": {
            memberValidators["payload"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("payload").validate(obj.payload, `${path}/payload`)];
  };
}

/**
 * @public
 */
export interface MalformedDoubleInput {
  doubleInBody?: number;
  doubleInPath: number | undefined;
  doubleInQuery?: number;
  doubleInHeader?: number;
}

export namespace MalformedDoubleInput {
  const memberValidators: {
    doubleInBody?: __MultiConstraintValidator<number>;
    doubleInPath?: __MultiConstraintValidator<number>;
    doubleInQuery?: __MultiConstraintValidator<number>;
    doubleInHeader?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedDoubleInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "doubleInBody": {
            memberValidators["doubleInBody"] = new __NoOpValidator();
            break;
          }
          case "doubleInPath": {
            memberValidators["doubleInPath"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
          case "doubleInQuery": {
            memberValidators["doubleInQuery"] = new __NoOpValidator();
            break;
          }
          case "doubleInHeader": {
            memberValidators["doubleInHeader"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("doubleInBody").validate(obj.doubleInBody, `${path}/doubleInBody`),
      ...getMemberValidator("doubleInPath").validate(obj.doubleInPath, `${path}/doubleInPath`),
      ...getMemberValidator("doubleInQuery").validate(obj.doubleInQuery, `${path}/doubleInQuery`),
      ...getMemberValidator("doubleInHeader").validate(obj.doubleInHeader, `${path}/doubleInHeader`),
    ];
  };
}

/**
 * @public
 */
export interface MalformedFloatInput {
  floatInBody?: number;
  floatInPath: number | undefined;
  floatInQuery?: number;
  floatInHeader?: number;
}

export namespace MalformedFloatInput {
  const memberValidators: {
    floatInBody?: __MultiConstraintValidator<number>;
    floatInPath?: __MultiConstraintValidator<number>;
    floatInQuery?: __MultiConstraintValidator<number>;
    floatInHeader?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedFloatInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "floatInBody": {
            memberValidators["floatInBody"] = new __NoOpValidator();
            break;
          }
          case "floatInPath": {
            memberValidators["floatInPath"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
          case "floatInQuery": {
            memberValidators["floatInQuery"] = new __NoOpValidator();
            break;
          }
          case "floatInHeader": {
            memberValidators["floatInHeader"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("floatInBody").validate(obj.floatInBody, `${path}/floatInBody`),
      ...getMemberValidator("floatInPath").validate(obj.floatInPath, `${path}/floatInPath`),
      ...getMemberValidator("floatInQuery").validate(obj.floatInQuery, `${path}/floatInQuery`),
      ...getMemberValidator("floatInHeader").validate(obj.floatInHeader, `${path}/floatInHeader`),
    ];
  };
}

/**
 * @public
 */
export interface MalformedIntegerInput {
  integerInBody?: number;
  integerInPath: number | undefined;
  integerInQuery?: number;
  integerInHeader?: number;
}

export namespace MalformedIntegerInput {
  const memberValidators: {
    integerInBody?: __MultiConstraintValidator<number>;
    integerInPath?: __MultiConstraintValidator<number>;
    integerInQuery?: __MultiConstraintValidator<number>;
    integerInHeader?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedIntegerInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "integerInBody": {
            memberValidators["integerInBody"] = new __NoOpValidator();
            break;
          }
          case "integerInPath": {
            memberValidators["integerInPath"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
          case "integerInQuery": {
            memberValidators["integerInQuery"] = new __NoOpValidator();
            break;
          }
          case "integerInHeader": {
            memberValidators["integerInHeader"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("integerInBody").validate(obj.integerInBody, `${path}/integerInBody`),
      ...getMemberValidator("integerInPath").validate(obj.integerInPath, `${path}/integerInPath`),
      ...getMemberValidator("integerInQuery").validate(obj.integerInQuery, `${path}/integerInQuery`),
      ...getMemberValidator("integerInHeader").validate(obj.integerInHeader, `${path}/integerInHeader`),
    ];
  };
}

/**
 * @public
 */
export interface MalformedListInput {
  bodyList?: string[];
}

export namespace MalformedListInput {
  const memberValidators: {
    bodyList?: __MultiConstraintValidator<Iterable<string>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedListInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "bodyList": {
            memberValidators["bodyList"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("bodyList").validate(obj.bodyList, `${path}/bodyList`)];
  };
}

/**
 * @public
 */
export interface MalformedLongInput {
  longInBody?: number;
  longInPath: number | undefined;
  longInQuery?: number;
  longInHeader?: number;
}

export namespace MalformedLongInput {
  const memberValidators: {
    longInBody?: __MultiConstraintValidator<number>;
    longInPath?: __MultiConstraintValidator<number>;
    longInQuery?: __MultiConstraintValidator<number>;
    longInHeader?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedLongInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "longInBody": {
            memberValidators["longInBody"] = new __NoOpValidator();
            break;
          }
          case "longInPath": {
            memberValidators["longInPath"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
          case "longInQuery": {
            memberValidators["longInQuery"] = new __NoOpValidator();
            break;
          }
          case "longInHeader": {
            memberValidators["longInHeader"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("longInBody").validate(obj.longInBody, `${path}/longInBody`),
      ...getMemberValidator("longInPath").validate(obj.longInPath, `${path}/longInPath`),
      ...getMemberValidator("longInQuery").validate(obj.longInQuery, `${path}/longInQuery`),
      ...getMemberValidator("longInHeader").validate(obj.longInHeader, `${path}/longInHeader`),
    ];
  };
}

/**
 * @public
 */
export interface MalformedMapInput {
  bodyMap?: Record<string, string>;
}

export namespace MalformedMapInput {
  const memberValidators: {
    bodyMap?: __MultiConstraintValidator<Record<string, string>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedMapInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "bodyMap": {
            memberValidators["bodyMap"] = new __CompositeMapValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("bodyMap").validate(obj.bodyMap, `${path}/bodyMap`)];
  };
}

/**
 * @public
 */
export interface MalformedRequestBodyInput {
  int?: number;
  float?: number;
}

export namespace MalformedRequestBodyInput {
  const memberValidators: {
    int?: __MultiConstraintValidator<number>;
    float?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedRequestBodyInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "int": {
            memberValidators["int"] = new __NoOpValidator();
            break;
          }
          case "float": {
            memberValidators["float"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("int").validate(obj.int, `${path}/int`),
      ...getMemberValidator("float").validate(obj.float, `${path}/float`),
    ];
  };
}

/**
 * @public
 */
export interface MalformedShortInput {
  shortInBody?: number;
  shortInPath: number | undefined;
  shortInQuery?: number;
  shortInHeader?: number;
}

export namespace MalformedShortInput {
  const memberValidators: {
    shortInBody?: __MultiConstraintValidator<number>;
    shortInPath?: __MultiConstraintValidator<number>;
    shortInQuery?: __MultiConstraintValidator<number>;
    shortInHeader?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedShortInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "shortInBody": {
            memberValidators["shortInBody"] = new __NoOpValidator();
            break;
          }
          case "shortInPath": {
            memberValidators["shortInPath"] = new __CompositeValidator<number>([new __RequiredValidator()]);
            break;
          }
          case "shortInQuery": {
            memberValidators["shortInQuery"] = new __NoOpValidator();
            break;
          }
          case "shortInHeader": {
            memberValidators["shortInHeader"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("shortInBody").validate(obj.shortInBody, `${path}/shortInBody`),
      ...getMemberValidator("shortInPath").validate(obj.shortInPath, `${path}/shortInPath`),
      ...getMemberValidator("shortInQuery").validate(obj.shortInQuery, `${path}/shortInQuery`),
      ...getMemberValidator("shortInHeader").validate(obj.shortInHeader, `${path}/shortInHeader`),
    ];
  };
}

/**
 * @public
 */
export interface MalformedStringInput {
  blob?: __LazyJsonString | string;
}

export namespace MalformedStringInput {
  const memberValidators: {
    blob?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedStringInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "blob": {
            memberValidators["blob"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("blob").validate(obj.blob?.toString(), `${path}/blob`)];
  };
}

/**
 * @public
 */
export interface MalformedTimestampBodyDateTimeInput {
  timestamp: Date | undefined;
}

export namespace MalformedTimestampBodyDateTimeInput {
  const memberValidators: {
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedTimestampBodyDateTimeInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`)];
  };
}

/**
 * @public
 */
export interface MalformedTimestampBodyDefaultInput {
  timestamp: Date | undefined;
}

export namespace MalformedTimestampBodyDefaultInput {
  const memberValidators: {
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedTimestampBodyDefaultInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`)];
  };
}

/**
 * @public
 */
export interface MalformedTimestampBodyHttpDateInput {
  timestamp: Date | undefined;
}

export namespace MalformedTimestampBodyHttpDateInput {
  const memberValidators: {
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedTimestampBodyHttpDateInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`)];
  };
}

/**
 * @public
 */
export interface MalformedTimestampHeaderDateTimeInput {
  timestamp: Date | undefined;
}

export namespace MalformedTimestampHeaderDateTimeInput {
  const memberValidators: {
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedTimestampHeaderDateTimeInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`)];
  };
}

/**
 * @public
 */
export interface MalformedTimestampHeaderDefaultInput {
  timestamp: Date | undefined;
}

export namespace MalformedTimestampHeaderDefaultInput {
  const memberValidators: {
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedTimestampHeaderDefaultInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`)];
  };
}

/**
 * @public
 */
export interface MalformedTimestampHeaderEpochInput {
  timestamp: Date | undefined;
}

export namespace MalformedTimestampHeaderEpochInput {
  const memberValidators: {
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedTimestampHeaderEpochInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`)];
  };
}

/**
 * @public
 */
export interface MalformedTimestampPathDefaultInput {
  timestamp: Date | undefined;
}

export namespace MalformedTimestampPathDefaultInput {
  const memberValidators: {
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedTimestampPathDefaultInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`)];
  };
}

/**
 * @public
 */
export interface MalformedTimestampPathEpochInput {
  timestamp: Date | undefined;
}

export namespace MalformedTimestampPathEpochInput {
  const memberValidators: {
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedTimestampPathEpochInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`)];
  };
}

/**
 * @public
 */
export interface MalformedTimestampPathHttpDateInput {
  timestamp: Date | undefined;
}

export namespace MalformedTimestampPathHttpDateInput {
  const memberValidators: {
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedTimestampPathHttpDateInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`)];
  };
}

/**
 * @public
 */
export interface MalformedTimestampQueryDefaultInput {
  timestamp: Date | undefined;
}

export namespace MalformedTimestampQueryDefaultInput {
  const memberValidators: {
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedTimestampQueryDefaultInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`)];
  };
}

/**
 * @public
 */
export interface MalformedTimestampQueryEpochInput {
  timestamp: Date | undefined;
}

export namespace MalformedTimestampQueryEpochInput {
  const memberValidators: {
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedTimestampQueryEpochInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`)];
  };
}

/**
 * @public
 */
export interface MalformedTimestampQueryHttpDateInput {
  timestamp: Date | undefined;
}

export namespace MalformedTimestampQueryHttpDateInput {
  const memberValidators: {
    timestamp?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedTimestampQueryHttpDateInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timestamp": {
            memberValidators["timestamp"] = new __CompositeValidator<Date>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timestamp").validate(obj.timestamp, `${path}/timestamp`)];
  };
}

/**
 * @public
 */
export type SimpleUnion = SimpleUnion.IntMember | SimpleUnion.StringMember | SimpleUnion.$UnknownMember;

/**
 * @public
 */
export namespace SimpleUnion {
  export interface IntMember {
    int: number;
    string?: never;
    $unknown?: never;
  }

  export interface StringMember {
    int?: never;
    string: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    int?: never;
    string?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    int: (value: number) => T;
    string: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SimpleUnion, visitor: Visitor<T>): T => {
    if (value.int !== undefined) return visitor.int(value.int);
    if (value.string !== undefined) return visitor.string(value.string);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  const memberValidators: {
    int?: __MultiConstraintValidator<number>;
    string?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: SimpleUnion, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "int": {
            memberValidators["int"] = new __NoOpValidator();
            break;
          }
          case "string": {
            memberValidators["string"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("int").validate(obj.int, `${path}/int`),
      ...getMemberValidator("string").validate(obj.string, `${path}/string`),
    ];
  };
}

/**
 * @public
 */
export interface MalformedUnionInput {
  union?: SimpleUnion;
}

export namespace MalformedUnionInput {
  const memberValidators: {
    union?: __MultiConstraintValidator<SimpleUnion>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedUnionInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "union": {
            memberValidators["union"] = new __CompositeStructureValidator<SimpleUnion>(
              new __NoOpValidator(),
              SimpleUnion.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("union").validate(obj.union, `${path}/union`)];
  };
}

/**
 * @public
 */
export interface MediaTypeHeaderInput {
  json?: __LazyJsonString | string;
}

export namespace MediaTypeHeaderInput {
  const memberValidators: {
    json?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MediaTypeHeaderInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "json": {
            memberValidators["json"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("json").validate(obj.json?.toString(), `${path}/json`)];
  };
}

/**
 * @public
 */
export interface MediaTypeHeaderOutput {
  json?: __LazyJsonString | string;
}

export namespace MediaTypeHeaderOutput {
  const memberValidators: {
    json?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MediaTypeHeaderOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "json": {
            memberValidators["json"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("json").validate(obj.json?.toString(), `${path}/json`)];
  };
}

/**
 * @public
 */
export interface NoInputAndOutputOutput {}

export namespace NoInputAndOutputOutput {
  const memberValidators: {} = {};
  /**
   * @internal
   */
  export const validate = (obj: NoInputAndOutputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
        }
      }
      return memberValidators[member]!;
    }
    return [];
  };
}

/**
 * @public
 */
export interface NullAndEmptyHeadersIO {
  a?: string;
  b?: string;
  c?: string[];
}

export namespace NullAndEmptyHeadersIO {
  const memberValidators: {
    a?: __MultiConstraintValidator<string>;
    b?: __MultiConstraintValidator<string>;
    c?: __MultiConstraintValidator<Iterable<string>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: NullAndEmptyHeadersIO, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "a": {
            memberValidators["a"] = new __NoOpValidator();
            break;
          }
          case "b": {
            memberValidators["b"] = new __NoOpValidator();
            break;
          }
          case "c": {
            memberValidators["c"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("a").validate(obj.a, `${path}/a`),
      ...getMemberValidator("b").validate(obj.b, `${path}/b`),
      ...getMemberValidator("c").validate(obj.c, `${path}/c`),
    ];
  };
}

/**
 * @public
 */
export interface OmitsNullSerializesEmptyStringInput {
  nullValue?: string;
  emptyString?: string;
}

export namespace OmitsNullSerializesEmptyStringInput {
  const memberValidators: {
    nullValue?: __MultiConstraintValidator<string>;
    emptyString?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: OmitsNullSerializesEmptyStringInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "nullValue": {
            memberValidators["nullValue"] = new __NoOpValidator();
            break;
          }
          case "emptyString": {
            memberValidators["emptyString"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("nullValue").validate(obj.nullValue, `${path}/nullValue`),
      ...getMemberValidator("emptyString").validate(obj.emptyString, `${path}/emptyString`),
    ];
  };
}

/**
 * @public
 */
export interface OmitsSerializingEmptyListsInput {
  queryStringList?: string[];
  queryIntegerList?: number[];
  queryDoubleList?: number[];
  queryBooleanList?: boolean[];
  queryTimestampList?: Date[];
  queryEnumList?: (FooEnum | string)[];
  queryIntegerEnumList?: (IntegerEnum | number)[];
}

export namespace OmitsSerializingEmptyListsInput {
  const memberValidators: {
    queryStringList?: __MultiConstraintValidator<Iterable<string>>;
    queryIntegerList?: __MultiConstraintValidator<Iterable<number>>;
    queryDoubleList?: __MultiConstraintValidator<Iterable<number>>;
    queryBooleanList?: __MultiConstraintValidator<Iterable<boolean>>;
    queryTimestampList?: __MultiConstraintValidator<Iterable<Date>>;
    queryEnumList?: __MultiConstraintValidator<Iterable<string>>;
    queryIntegerEnumList?: __MultiConstraintValidator<Iterable<number>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: OmitsSerializingEmptyListsInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "queryStringList": {
            memberValidators["queryStringList"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "queryIntegerList": {
            memberValidators["queryIntegerList"] = new __CompositeCollectionValidator<number>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "queryDoubleList": {
            memberValidators["queryDoubleList"] = new __CompositeCollectionValidator<number>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "queryBooleanList": {
            memberValidators["queryBooleanList"] = new __CompositeCollectionValidator<boolean>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "queryTimestampList": {
            memberValidators["queryTimestampList"] = new __CompositeCollectionValidator<Date>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "queryEnumList": {
            memberValidators["queryEnumList"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __CompositeValidator<string>([
                new __EnumValidator(["Foo", "Baz", "Bar", "1", "0"], ["Foo", "Baz", "Bar", "1", "0"]),
              ])
            );
            break;
          }
          case "queryIntegerEnumList": {
            memberValidators["queryIntegerEnumList"] = new __CompositeCollectionValidator<number>(
              new __NoOpValidator(),
              new __CompositeValidator<number>([new __IntegerEnumValidator([1, 2, 3])])
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("queryStringList").validate(obj.queryStringList, `${path}/queryStringList`),
      ...getMemberValidator("queryIntegerList").validate(obj.queryIntegerList, `${path}/queryIntegerList`),
      ...getMemberValidator("queryDoubleList").validate(obj.queryDoubleList, `${path}/queryDoubleList`),
      ...getMemberValidator("queryBooleanList").validate(obj.queryBooleanList, `${path}/queryBooleanList`),
      ...getMemberValidator("queryTimestampList").validate(obj.queryTimestampList, `${path}/queryTimestampList`),
      ...getMemberValidator("queryEnumList").validate(obj.queryEnumList, `${path}/queryEnumList`),
      ...getMemberValidator("queryIntegerEnumList").validate(obj.queryIntegerEnumList, `${path}/queryIntegerEnumList`),
    ];
  };
}

/**
 * @public
 */
export interface PayloadConfig {
  data?: number;
}

export namespace PayloadConfig {
  const memberValidators: {
    data?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PayloadConfig, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "data": {
            memberValidators["data"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("data").validate(obj.data, `${path}/data`)];
  };
}

/**
 * @public
 */
export interface Unit {}

export namespace Unit {
  const memberValidators: {} = {};
  /**
   * @internal
   */
  export const validate = (obj: Unit, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
        }
      }
      return memberValidators[member]!;
    }
    return [];
  };
}

/**
 * @public
 */
export type PlayerAction = PlayerAction.QuitMember | PlayerAction.$UnknownMember;

/**
 * @public
 */
export namespace PlayerAction {
  /**
   * @public
   * Quit the game.
   */
  export interface QuitMember {
    quit: Unit;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    quit?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    quit: (value: Unit) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PlayerAction, visitor: Visitor<T>): T => {
    if (value.quit !== undefined) return visitor.quit(value.quit);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  const memberValidators: {
    quit?: __MultiConstraintValidator<Unit>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PlayerAction, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "quit": {
            memberValidators["quit"] = new __CompositeStructureValidator<Unit>(new __NoOpValidator(), Unit.validate);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("quit").validate(obj.quit, `${path}/quit`)];
  };
}

/**
 * @public
 */
export interface PostPlayerActionInput {
  action?: PlayerAction;
}

export namespace PostPlayerActionInput {
  const memberValidators: {
    action?: __MultiConstraintValidator<PlayerAction>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PostPlayerActionInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "action": {
            memberValidators["action"] = new __CompositeStructureValidator<PlayerAction>(
              new __NoOpValidator(),
              PlayerAction.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("action").validate(obj.action, `${path}/action`)];
  };
}

/**
 * @public
 */
export interface PostPlayerActionOutput {
  action: PlayerAction | undefined;
}

export namespace PostPlayerActionOutput {
  const memberValidators: {
    action?: __MultiConstraintValidator<PlayerAction>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PostPlayerActionOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "action": {
            memberValidators["action"] = new __CompositeStructureValidator<PlayerAction>(
              new __CompositeValidator<PlayerAction>([new __RequiredValidator()]),
              PlayerAction.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("action").validate(obj.action, `${path}/action`)];
  };
}

/**
 * @public
 */
export type UnionWithJsonName =
  | UnionWithJsonName.BarMember
  | UnionWithJsonName.BazMember
  | UnionWithJsonName.FooMember
  | UnionWithJsonName.$UnknownMember;

/**
 * @public
 */
export namespace UnionWithJsonName {
  export interface FooMember {
    foo: string;
    bar?: never;
    baz?: never;
    $unknown?: never;
  }

  export interface BarMember {
    foo?: never;
    bar: string;
    baz?: never;
    $unknown?: never;
  }

  export interface BazMember {
    foo?: never;
    bar?: never;
    baz: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    foo?: never;
    bar?: never;
    baz?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    foo: (value: string) => T;
    bar: (value: string) => T;
    baz: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UnionWithJsonName, visitor: Visitor<T>): T => {
    if (value.foo !== undefined) return visitor.foo(value.foo);
    if (value.bar !== undefined) return visitor.bar(value.bar);
    if (value.baz !== undefined) return visitor.baz(value.baz);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
    bar?: __MultiConstraintValidator<string>;
    baz?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UnionWithJsonName, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __NoOpValidator();
            break;
          }
          case "bar": {
            memberValidators["bar"] = new __NoOpValidator();
            break;
          }
          case "baz": {
            memberValidators["baz"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
      ...getMemberValidator("bar").validate(obj.bar, `${path}/bar`),
      ...getMemberValidator("baz").validate(obj.baz, `${path}/baz`),
    ];
  };
}

/**
 * @public
 */
export interface PostUnionWithJsonNameInput {
  value?: UnionWithJsonName;
}

export namespace PostUnionWithJsonNameInput {
  const memberValidators: {
    value?: __MultiConstraintValidator<UnionWithJsonName>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PostUnionWithJsonNameInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "value": {
            memberValidators["value"] = new __CompositeStructureValidator<UnionWithJsonName>(
              new __NoOpValidator(),
              UnionWithJsonName.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("value").validate(obj.value, `${path}/value`)];
  };
}

/**
 * @public
 */
export interface PostUnionWithJsonNameOutput {
  value: UnionWithJsonName | undefined;
}

export namespace PostUnionWithJsonNameOutput {
  const memberValidators: {
    value?: __MultiConstraintValidator<UnionWithJsonName>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PostUnionWithJsonNameOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "value": {
            memberValidators["value"] = new __CompositeStructureValidator<UnionWithJsonName>(
              new __CompositeValidator<UnionWithJsonName>([new __RequiredValidator()]),
              UnionWithJsonName.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("value").validate(obj.value, `${path}/value`)];
  };
}

/**
 * @public
 */
export interface PutWithContentEncodingInput {
  encoding?: string;
  data?: string;
}

export namespace PutWithContentEncodingInput {
  const memberValidators: {
    encoding?: __MultiConstraintValidator<string>;
    data?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PutWithContentEncodingInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "encoding": {
            memberValidators["encoding"] = new __NoOpValidator();
            break;
          }
          case "data": {
            memberValidators["data"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("encoding").validate(obj.encoding, `${path}/encoding`),
      ...getMemberValidator("data").validate(obj.data, `${path}/data`),
    ];
  };
}

/**
 * @public
 */
export interface QueryIdempotencyTokenAutoFillInput {
  token?: string;
}

export namespace QueryIdempotencyTokenAutoFillInput {
  const memberValidators: {
    token?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: QueryIdempotencyTokenAutoFillInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "token": {
            memberValidators["token"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("token").validate(obj.token, `${path}/token`)];
  };
}

/**
 * @public
 */
export interface QueryParamsAsStringListMapInput {
  qux?: string;
  foo?: Record<string, string[]>;
}

export namespace QueryParamsAsStringListMapInput {
  const memberValidators: {
    qux?: __MultiConstraintValidator<string>;
    foo?: __MultiConstraintValidator<Record<string, string[]>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: QueryParamsAsStringListMapInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "qux": {
            memberValidators["qux"] = new __NoOpValidator();
            break;
          }
          case "foo": {
            memberValidators["foo"] = new __CompositeMapValidator<string[]>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __CompositeCollectionValidator<string>(new __NoOpValidator(), new __NoOpValidator())
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("qux").validate(obj.qux, `${path}/qux`),
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
    ];
  };
}

/**
 * @public
 */
export interface QueryPrecedenceInput {
  foo?: string;
  baz?: Record<string, string>;
}

export namespace QueryPrecedenceInput {
  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
    baz?: __MultiConstraintValidator<Record<string, string>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: QueryPrecedenceInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __NoOpValidator();
            break;
          }
          case "baz": {
            memberValidators["baz"] = new __CompositeMapValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
      ...getMemberValidator("baz").validate(obj.baz, `${path}/baz`),
    ];
  };
}

/**
 * @public
 */
export interface SimpleScalarPropertiesInputOutput {
  foo?: string;
  stringValue?: string;
  trueBooleanValue?: boolean;
  falseBooleanValue?: boolean;
  byteValue?: number;
  shortValue?: number;
  integerValue?: number;
  longValue?: number;
  floatValue?: number;
  doubleValue?: number;
}

export namespace SimpleScalarPropertiesInputOutput {
  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
    stringValue?: __MultiConstraintValidator<string>;
    trueBooleanValue?: __MultiConstraintValidator<boolean>;
    falseBooleanValue?: __MultiConstraintValidator<boolean>;
    byteValue?: __MultiConstraintValidator<number>;
    shortValue?: __MultiConstraintValidator<number>;
    integerValue?: __MultiConstraintValidator<number>;
    longValue?: __MultiConstraintValidator<number>;
    floatValue?: __MultiConstraintValidator<number>;
    doubleValue?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: SimpleScalarPropertiesInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __NoOpValidator();
            break;
          }
          case "stringValue": {
            memberValidators["stringValue"] = new __NoOpValidator();
            break;
          }
          case "trueBooleanValue": {
            memberValidators["trueBooleanValue"] = new __NoOpValidator();
            break;
          }
          case "falseBooleanValue": {
            memberValidators["falseBooleanValue"] = new __NoOpValidator();
            break;
          }
          case "byteValue": {
            memberValidators["byteValue"] = new __NoOpValidator();
            break;
          }
          case "shortValue": {
            memberValidators["shortValue"] = new __NoOpValidator();
            break;
          }
          case "integerValue": {
            memberValidators["integerValue"] = new __NoOpValidator();
            break;
          }
          case "longValue": {
            memberValidators["longValue"] = new __NoOpValidator();
            break;
          }
          case "floatValue": {
            memberValidators["floatValue"] = new __NoOpValidator();
            break;
          }
          case "doubleValue": {
            memberValidators["doubleValue"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
      ...getMemberValidator("stringValue").validate(obj.stringValue, `${path}/stringValue`),
      ...getMemberValidator("trueBooleanValue").validate(obj.trueBooleanValue, `${path}/trueBooleanValue`),
      ...getMemberValidator("falseBooleanValue").validate(obj.falseBooleanValue, `${path}/falseBooleanValue`),
      ...getMemberValidator("byteValue").validate(obj.byteValue, `${path}/byteValue`),
      ...getMemberValidator("shortValue").validate(obj.shortValue, `${path}/shortValue`),
      ...getMemberValidator("integerValue").validate(obj.integerValue, `${path}/integerValue`),
      ...getMemberValidator("longValue").validate(obj.longValue, `${path}/longValue`),
      ...getMemberValidator("floatValue").validate(obj.floatValue, `${path}/floatValue`),
      ...getMemberValidator("doubleValue").validate(obj.doubleValue, `${path}/doubleValue`),
    ];
  };
}

/**
 * @public
 */
export interface StreamingTraitsInputOutput {
  foo?: string;
  blob?: StreamingBlobTypes;
}

/**
 * @internal
 */
export const StreamingTraitsInputOutputFilterSensitiveLog = (obj: StreamingTraitsInputOutput): any => ({
  ...obj,
});
export namespace StreamingTraitsInputOutput {
  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
    blob?: __MultiConstraintValidator<Readable | ReadableStream | Blob | string | Uint8Array | Buffer>;
  } = {};
  /**
   * @internal
   */
  export const validate = (
    obj: Omit<StreamingTraitsInputOutput, "blob"> & {
      blob?: StreamingTraitsInputOutput["blob"] | string | Uint8Array | Buffer;
    },
    path = ""
  ): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __NoOpValidator();
            break;
          }
          case "blob": {
            memberValidators["blob"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
      ...getMemberValidator("blob").validate(obj.blob, `${path}/blob`),
    ];
  };
}

/**
 * @public
 */
export interface StreamingTraitsRequireLengthInput {
  foo?: string;
  blob?: StreamingBlobTypes;
}

/**
 * @internal
 */
export const StreamingTraitsRequireLengthInputFilterSensitiveLog = (obj: StreamingTraitsRequireLengthInput): any => ({
  ...obj,
});
export namespace StreamingTraitsRequireLengthInput {
  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
    blob?: __MultiConstraintValidator<Readable | ReadableStream | Blob | string | Uint8Array | Buffer>;
  } = {};
  /**
   * @internal
   */
  export const validate = (
    obj: Omit<StreamingTraitsRequireLengthInput, "blob"> & {
      blob?: StreamingTraitsRequireLengthInput["blob"] | string | Uint8Array | Buffer;
    },
    path = ""
  ): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __NoOpValidator();
            break;
          }
          case "blob": {
            memberValidators["blob"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
      ...getMemberValidator("blob").validate(obj.blob, `${path}/blob`),
    ];
  };
}

/**
 * @public
 */
export interface StreamingTraitsWithMediaTypeInputOutput {
  foo?: string;
  blob?: StreamingBlobTypes;
}

/**
 * @internal
 */
export const StreamingTraitsWithMediaTypeInputOutputFilterSensitiveLog = (
  obj: StreamingTraitsWithMediaTypeInputOutput
): any => ({
  ...obj,
});
export namespace StreamingTraitsWithMediaTypeInputOutput {
  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
    blob?: __MultiConstraintValidator<Readable | ReadableStream | Blob | string | Uint8Array | Buffer>;
  } = {};
  /**
   * @internal
   */
  export const validate = (
    obj: Omit<StreamingTraitsWithMediaTypeInputOutput, "blob"> & {
      blob?: StreamingTraitsWithMediaTypeInputOutput["blob"] | string | Uint8Array | Buffer;
    },
    path = ""
  ): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __NoOpValidator();
            break;
          }
          case "blob": {
            memberValidators["blob"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
      ...getMemberValidator("blob").validate(obj.blob, `${path}/blob`),
    ];
  };
}

/**
 * @public
 */
export interface TestConfig {
  timeout?: number;
}

export namespace TestConfig {
  const memberValidators: {
    timeout?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: TestConfig, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "timeout": {
            memberValidators["timeout"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("timeout").validate(obj.timeout, `${path}/timeout`)];
  };
}

/**
 * @public
 */
export interface TestBodyStructureInputOutput {
  testId?: string;
  testConfig?: TestConfig;
}

export namespace TestBodyStructureInputOutput {
  const memberValidators: {
    testId?: __MultiConstraintValidator<string>;
    testConfig?: __MultiConstraintValidator<TestConfig>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: TestBodyStructureInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "testId": {
            memberValidators["testId"] = new __NoOpValidator();
            break;
          }
          case "testConfig": {
            memberValidators["testConfig"] = new __CompositeStructureValidator<TestConfig>(
              new __NoOpValidator(),
              TestConfig.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("testId").validate(obj.testId, `${path}/testId`),
      ...getMemberValidator("testConfig").validate(obj.testConfig, `${path}/testConfig`),
    ];
  };
}

/**
 * @public
 */
export interface TestNoPayloadInputOutput {
  testId?: string;
}

export namespace TestNoPayloadInputOutput {
  const memberValidators: {
    testId?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: TestNoPayloadInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "testId": {
            memberValidators["testId"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("testId").validate(obj.testId, `${path}/testId`)];
  };
}

/**
 * @public
 */
export interface TestPayloadBlobInputOutput {
  contentType?: string;
  data?: Uint8Array;
}

export namespace TestPayloadBlobInputOutput {
  const memberValidators: {
    contentType?: __MultiConstraintValidator<string>;
    data?: __MultiConstraintValidator<Uint8Array>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: TestPayloadBlobInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "contentType": {
            memberValidators["contentType"] = new __NoOpValidator();
            break;
          }
          case "data": {
            memberValidators["data"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("contentType").validate(obj.contentType, `${path}/contentType`),
      ...getMemberValidator("data").validate(obj.data, `${path}/data`),
    ];
  };
}

/**
 * @public
 */
export interface TestPayloadStructureInputOutput {
  testId?: string;
  payloadConfig?: PayloadConfig;
}

export namespace TestPayloadStructureInputOutput {
  const memberValidators: {
    testId?: __MultiConstraintValidator<string>;
    payloadConfig?: __MultiConstraintValidator<PayloadConfig>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: TestPayloadStructureInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "testId": {
            memberValidators["testId"] = new __NoOpValidator();
            break;
          }
          case "payloadConfig": {
            memberValidators["payloadConfig"] = new __CompositeStructureValidator<PayloadConfig>(
              new __NoOpValidator(),
              PayloadConfig.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("testId").validate(obj.testId, `${path}/testId`),
      ...getMemberValidator("payloadConfig").validate(obj.payloadConfig, `${path}/payloadConfig`),
    ];
  };
}

/**
 * @public
 */
export interface TimestampFormatHeadersIO {
  memberEpochSeconds?: Date;
  memberHttpDate?: Date;
  memberDateTime?: Date;
  defaultFormat?: Date;
  targetEpochSeconds?: Date;
  targetHttpDate?: Date;
  targetDateTime?: Date;
}

export namespace TimestampFormatHeadersIO {
  const memberValidators: {
    memberEpochSeconds?: __MultiConstraintValidator<Date>;
    memberHttpDate?: __MultiConstraintValidator<Date>;
    memberDateTime?: __MultiConstraintValidator<Date>;
    defaultFormat?: __MultiConstraintValidator<Date>;
    targetEpochSeconds?: __MultiConstraintValidator<Date>;
    targetHttpDate?: __MultiConstraintValidator<Date>;
    targetDateTime?: __MultiConstraintValidator<Date>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: TimestampFormatHeadersIO, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "memberEpochSeconds": {
            memberValidators["memberEpochSeconds"] = new __NoOpValidator();
            break;
          }
          case "memberHttpDate": {
            memberValidators["memberHttpDate"] = new __NoOpValidator();
            break;
          }
          case "memberDateTime": {
            memberValidators["memberDateTime"] = new __NoOpValidator();
            break;
          }
          case "defaultFormat": {
            memberValidators["defaultFormat"] = new __NoOpValidator();
            break;
          }
          case "targetEpochSeconds": {
            memberValidators["targetEpochSeconds"] = new __NoOpValidator();
            break;
          }
          case "targetHttpDate": {
            memberValidators["targetHttpDate"] = new __NoOpValidator();
            break;
          }
          case "targetDateTime": {
            memberValidators["targetDateTime"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("memberEpochSeconds").validate(obj.memberEpochSeconds, `${path}/memberEpochSeconds`),
      ...getMemberValidator("memberHttpDate").validate(obj.memberHttpDate, `${path}/memberHttpDate`),
      ...getMemberValidator("memberDateTime").validate(obj.memberDateTime, `${path}/memberDateTime`),
      ...getMemberValidator("defaultFormat").validate(obj.defaultFormat, `${path}/defaultFormat`),
      ...getMemberValidator("targetEpochSeconds").validate(obj.targetEpochSeconds, `${path}/targetEpochSeconds`),
      ...getMemberValidator("targetHttpDate").validate(obj.targetHttpDate, `${path}/targetHttpDate`),
      ...getMemberValidator("targetDateTime").validate(obj.targetDateTime, `${path}/targetDateTime`),
    ];
  };
}

/**
 * @public
 */
export interface RecursiveShapesInputOutputNested1 {
  foo?: string;
  nested?: RecursiveShapesInputOutputNested2;
}

export namespace RecursiveShapesInputOutputNested1 {
  const memberValidators: {
    foo?: __MultiConstraintValidator<string>;
    nested?: __MultiConstraintValidator<RecursiveShapesInputOutputNested2>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: RecursiveShapesInputOutputNested1, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "foo": {
            memberValidators["foo"] = new __NoOpValidator();
            break;
          }
          case "nested": {
            memberValidators["nested"] = new __CompositeStructureValidator<RecursiveShapesInputOutputNested2>(
              new __NoOpValidator(),
              RecursiveShapesInputOutputNested2.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("foo").validate(obj.foo, `${path}/foo`),
      ...getMemberValidator("nested").validate(obj.nested, `${path}/nested`),
    ];
  };
}

/**
 * @public
 */
export interface RecursiveShapesInputOutputNested2 {
  bar?: string;
  recursiveMember?: RecursiveShapesInputOutputNested1;
}

export namespace RecursiveShapesInputOutputNested2 {
  const memberValidators: {
    bar?: __MultiConstraintValidator<string>;
    recursiveMember?: __MultiConstraintValidator<RecursiveShapesInputOutputNested1>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: RecursiveShapesInputOutputNested2, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "bar": {
            memberValidators["bar"] = new __NoOpValidator();
            break;
          }
          case "recursiveMember": {
            memberValidators["recursiveMember"] = new __CompositeStructureValidator<RecursiveShapesInputOutputNested1>(
              new __NoOpValidator(),
              RecursiveShapesInputOutputNested1.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("bar").validate(obj.bar, `${path}/bar`),
      ...getMemberValidator("recursiveMember").validate(obj.recursiveMember, `${path}/recursiveMember`),
    ];
  };
}

/**
 * @public
 */
export interface RecursiveShapesInputOutput {
  nested?: RecursiveShapesInputOutputNested1;
}

export namespace RecursiveShapesInputOutput {
  const memberValidators: {
    nested?: __MultiConstraintValidator<RecursiveShapesInputOutputNested1>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: RecursiveShapesInputOutput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<(typeof memberValidators)[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "nested": {
            memberValidators["nested"] = new __CompositeStructureValidator<RecursiveShapesInputOutputNested1>(
              new __NoOpValidator(),
              RecursiveShapesInputOutputNested1.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("nested").validate(obj.nested, `${path}/nested`)];
  };
}
