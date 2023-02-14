// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import {
  CompositeCollectionValidator as __CompositeCollectionValidator,
  CompositeMapValidator as __CompositeMapValidator,
  CompositeStructureValidator as __CompositeStructureValidator,
  CompositeValidator as __CompositeValidator,
  EnumValidator as __EnumValidator,
  LengthValidator as __LengthValidator,
  MultiConstraintValidator as __MultiConstraintValidator,
  NoOpValidator as __NoOpValidator,
  PatternValidator as __PatternValidator,
  RangeValidator as __RangeValidator,
  RequiredValidator as __RequiredValidator,
  SensitiveConstraintValidator as __SensitiveConstraintValidator,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";

export enum EnumString {
  ABC = "abc",
  DEF = "def",
}

export type EnumUnion = EnumUnion.FirstMember | EnumUnion.SecondMember | EnumUnion.$UnknownMember;

export namespace EnumUnion {
  export interface FirstMember {
    first: EnumString | string;
    second?: never;
    $unknown?: never;
  }

  export interface SecondMember {
    first?: never;
    second: EnumString | string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    first?: never;
    second?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    first: (value: EnumString | string) => T;
    second: (value: EnumString | string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EnumUnion, visitor: Visitor<T>): T => {
    if (value.first !== undefined) return visitor.first(value.first);
    if (value.second !== undefined) return visitor.second(value.second);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  const memberValidators: {
    first?: __MultiConstraintValidator<string>;
    second?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: EnumUnion, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "first": {
            memberValidators["first"] = new __CompositeValidator<string>([new __EnumValidator(["abc", "def"])]);
            break;
          }
          case "second": {
            memberValidators["second"] = new __CompositeValidator<string>([new __EnumValidator(["abc", "def"])]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("first").validate(obj.first, `${path}/first`),
      ...getMemberValidator("second").validate(obj.second, `${path}/second`),
    ];
  };
}
/**
 * @internal
 */
export const EnumUnionFilterSensitiveLog = (obj: EnumUnion): any => {
  if (obj.first !== undefined) return { first: obj.first };
  if (obj.second !== undefined) return { second: obj.second };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

export interface MalformedEnumInput {
  string?: EnumString | string;
  list?: (EnumString | string)[];
  map?: Record<string, EnumString | string>;
  union?: EnumUnion;
}

/**
 * @internal
 */
export const MalformedEnumInputFilterSensitiveLog = (obj: MalformedEnumInput): any => ({
  ...obj,
  ...(obj.union && { union: EnumUnionFilterSensitiveLog(obj.union) }),
});
export namespace MalformedEnumInput {
  const memberValidators: {
    string?: __MultiConstraintValidator<string>;
    list?: __MultiConstraintValidator<Iterable<string>>;
    map?: __MultiConstraintValidator<Record<string, EnumString | string>>;
    union?: __MultiConstraintValidator<EnumUnion>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedEnumInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "string": {
            memberValidators["string"] = new __CompositeValidator<string>([new __EnumValidator(["abc", "def"])]);
            break;
          }
          case "list": {
            memberValidators["list"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __CompositeValidator<string>([new __EnumValidator(["abc", "def"])])
            );
            break;
          }
          case "map": {
            memberValidators["map"] = new __CompositeMapValidator<EnumString | string>(
              new __NoOpValidator(),
              new __CompositeValidator<string>([new __EnumValidator(["abc", "def"])]),
              new __CompositeValidator<string>([new __EnumValidator(["abc", "def"])])
            );
            break;
          }
          case "union": {
            memberValidators["union"] = new __CompositeStructureValidator<EnumUnion>(
              new __NoOpValidator(),
              EnumUnion.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("string").validate(obj.string, `${path}/string`),
      ...getMemberValidator("list").validate(obj.list, `${path}/list`),
      ...getMemberValidator("map").validate(obj.map, `${path}/map`),
      ...getMemberValidator("union").validate(obj.union, `${path}/union`),
    ];
  };
}

/**
 * Describes one specific validation failure for an input member.
 */
export interface ValidationExceptionField {
  /**
   * A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
   */
  path: string | undefined;

  /**
   * A detailed description of the validation failure.
   */
  message: string | undefined;
}

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});
export namespace ValidationExceptionField {
  const memberValidators: {
    path?: __MultiConstraintValidator<string>;
    message?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ValidationExceptionField, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "path": {
            memberValidators["path"] = new __CompositeValidator<string>([new __RequiredValidator()]);
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("path").validate(obj.path, `${path}/path`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  };
}

/**
 * A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * A list of specific failures encountered while validating the input.
   * A member can appear in this list more than once if it failed to satisfy multiple constraints.
   */
  fieldList?: ValidationExceptionField[];

  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.fieldList = opts.fieldList;
  }
}

export interface MalformedLengthInput {
  blob?: Uint8Array;
  string?: string;
  minString?: string;
  maxString?: string;
  list?: string[];
  map?: Record<string, string[]>;
}

/**
 * @internal
 */
export const MalformedLengthInputFilterSensitiveLog = (obj: MalformedLengthInput): any => ({
  ...obj,
});
export namespace MalformedLengthInput {
  const memberValidators: {
    blob?: __MultiConstraintValidator<Uint8Array>;
    string?: __MultiConstraintValidator<string>;
    minString?: __MultiConstraintValidator<string>;
    maxString?: __MultiConstraintValidator<string>;
    list?: __MultiConstraintValidator<Iterable<string>>;
    map?: __MultiConstraintValidator<Record<string, string[]>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedLengthInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "blob": {
            memberValidators["blob"] = new __CompositeValidator<Uint8Array>([new __LengthValidator(2, 8)]);
            break;
          }
          case "string": {
            memberValidators["string"] = new __CompositeValidator<string>([new __LengthValidator(2, 8)]);
            break;
          }
          case "minString": {
            memberValidators["minString"] = new __CompositeValidator<string>([new __LengthValidator(2, undefined)]);
            break;
          }
          case "maxString": {
            memberValidators["maxString"] = new __CompositeValidator<string>([new __LengthValidator(undefined, 8)]);
            break;
          }
          case "list": {
            memberValidators["list"] = new __CompositeCollectionValidator<string>(
              new __CompositeValidator<string[]>([new __LengthValidator(2, 8)]),
              new __CompositeValidator<string>([new __LengthValidator(2, 8)])
            );
            break;
          }
          case "map": {
            memberValidators["map"] = new __CompositeMapValidator<string[]>(
              new __CompositeValidator<Record<string, string[]>>([new __LengthValidator(2, 8)]),
              new __CompositeValidator<string>([new __LengthValidator(2, 8)]),
              new __CompositeCollectionValidator<string>(
                new __CompositeValidator<string[]>([new __LengthValidator(2, 8)]),
                new __CompositeValidator<string>([new __LengthValidator(2, 8)])
              )
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("blob").validate(obj.blob, `${path}/blob`),
      ...getMemberValidator("string").validate(obj.string, `${path}/string`),
      ...getMemberValidator("minString").validate(obj.minString, `${path}/minString`),
      ...getMemberValidator("maxString").validate(obj.maxString, `${path}/maxString`),
      ...getMemberValidator("list").validate(obj.list, `${path}/list`),
      ...getMemberValidator("map").validate(obj.map, `${path}/map`),
    ];
  };
}

export interface MalformedLengthOverrideInput {
  blob?: Uint8Array;
  string?: string;
  minString?: string;
  maxString?: string;
  list?: string[];
  map?: Record<string, string[]>;
}

/**
 * @internal
 */
export const MalformedLengthOverrideInputFilterSensitiveLog = (obj: MalformedLengthOverrideInput): any => ({
  ...obj,
});
export namespace MalformedLengthOverrideInput {
  const memberValidators: {
    blob?: __MultiConstraintValidator<Uint8Array>;
    string?: __MultiConstraintValidator<string>;
    minString?: __MultiConstraintValidator<string>;
    maxString?: __MultiConstraintValidator<string>;
    list?: __MultiConstraintValidator<Iterable<string>>;
    map?: __MultiConstraintValidator<Record<string, string[]>>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedLengthOverrideInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "blob": {
            memberValidators["blob"] = new __CompositeValidator<Uint8Array>([new __LengthValidator(4, 6)]);
            break;
          }
          case "string": {
            memberValidators["string"] = new __CompositeValidator<string>([new __LengthValidator(4, 6)]);
            break;
          }
          case "minString": {
            memberValidators["minString"] = new __CompositeValidator<string>([new __LengthValidator(4, undefined)]);
            break;
          }
          case "maxString": {
            memberValidators["maxString"] = new __CompositeValidator<string>([new __LengthValidator(undefined, 6)]);
            break;
          }
          case "list": {
            memberValidators["list"] = new __CompositeCollectionValidator<string>(
              new __CompositeValidator<string[]>([new __LengthValidator(4, 6)]),
              new __CompositeValidator<string>([new __LengthValidator(2, 8)])
            );
            break;
          }
          case "map": {
            memberValidators["map"] = new __CompositeMapValidator<string[]>(
              new __CompositeValidator<Record<string, string[]>>([new __LengthValidator(4, 6)]),
              new __CompositeValidator<string>([new __LengthValidator(2, 8)]),
              new __CompositeCollectionValidator<string>(
                new __CompositeValidator<string[]>([new __LengthValidator(2, 8)]),
                new __CompositeValidator<string>([new __LengthValidator(2, 8)])
              )
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("blob").validate(obj.blob, `${path}/blob`),
      ...getMemberValidator("string").validate(obj.string, `${path}/string`),
      ...getMemberValidator("minString").validate(obj.minString, `${path}/minString`),
      ...getMemberValidator("maxString").validate(obj.maxString, `${path}/maxString`),
      ...getMemberValidator("list").validate(obj.list, `${path}/list`),
      ...getMemberValidator("map").validate(obj.map, `${path}/map`),
    ];
  };
}

export interface MalformedLengthQueryStringInput {
  string?: string;
}

/**
 * @internal
 */
export const MalformedLengthQueryStringInputFilterSensitiveLog = (obj: MalformedLengthQueryStringInput): any => ({
  ...obj,
});
export namespace MalformedLengthQueryStringInput {
  const memberValidators: {
    string?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedLengthQueryStringInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "string": {
            memberValidators["string"] = new __CompositeValidator<string>([new __LengthValidator(2, 8)]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("string").validate(obj.string, `${path}/string`)];
  };
}

export type PatternUnion = PatternUnion.FirstMember | PatternUnion.SecondMember | PatternUnion.$UnknownMember;

export namespace PatternUnion {
  export interface FirstMember {
    first: string;
    second?: never;
    $unknown?: never;
  }

  export interface SecondMember {
    first?: never;
    second: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    first?: never;
    second?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    first: (value: string) => T;
    second: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PatternUnion, visitor: Visitor<T>): T => {
    if (value.first !== undefined) return visitor.first(value.first);
    if (value.second !== undefined) return visitor.second(value.second);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  const memberValidators: {
    first?: __MultiConstraintValidator<string>;
    second?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PatternUnion, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "first": {
            memberValidators["first"] = new __CompositeValidator<string>([new __PatternValidator("^[a-m]+$")]);
            break;
          }
          case "second": {
            memberValidators["second"] = new __CompositeValidator<string>([new __PatternValidator("^[a-m]+$")]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("first").validate(obj.first, `${path}/first`),
      ...getMemberValidator("second").validate(obj.second, `${path}/second`),
    ];
  };
}
/**
 * @internal
 */
export const PatternUnionFilterSensitiveLog = (obj: PatternUnion): any => {
  if (obj.first !== undefined) return { first: obj.first };
  if (obj.second !== undefined) return { second: obj.second };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

export interface MalformedPatternInput {
  string?: string;
  evilString?: string;
  list?: string[];
  map?: Record<string, string>;
  union?: PatternUnion;
}

/**
 * @internal
 */
export const MalformedPatternInputFilterSensitiveLog = (obj: MalformedPatternInput): any => ({
  ...obj,
  ...(obj.union && { union: PatternUnionFilterSensitiveLog(obj.union) }),
});
export namespace MalformedPatternInput {
  const memberValidators: {
    string?: __MultiConstraintValidator<string>;
    evilString?: __MultiConstraintValidator<string>;
    list?: __MultiConstraintValidator<Iterable<string>>;
    map?: __MultiConstraintValidator<Record<string, string>>;
    union?: __MultiConstraintValidator<PatternUnion>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedPatternInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "string": {
            memberValidators["string"] = new __CompositeValidator<string>([new __PatternValidator("^[a-m]+$")]);
            break;
          }
          case "evilString": {
            memberValidators["evilString"] = new __CompositeValidator<string>([new __PatternValidator("^([0-9]+)+$")]);
            break;
          }
          case "list": {
            memberValidators["list"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __CompositeValidator<string>([new __PatternValidator("^[a-m]+$")])
            );
            break;
          }
          case "map": {
            memberValidators["map"] = new __CompositeMapValidator<string>(
              new __NoOpValidator(),
              new __CompositeValidator<string>([new __PatternValidator("^[a-m]+$")]),
              new __CompositeValidator<string>([new __PatternValidator("^[a-m]+$")])
            );
            break;
          }
          case "union": {
            memberValidators["union"] = new __CompositeStructureValidator<PatternUnion>(
              new __NoOpValidator(),
              PatternUnion.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("string").validate(obj.string, `${path}/string`),
      ...getMemberValidator("evilString").validate(obj.evilString, `${path}/evilString`),
      ...getMemberValidator("list").validate(obj.list, `${path}/list`),
      ...getMemberValidator("map").validate(obj.map, `${path}/map`),
      ...getMemberValidator("union").validate(obj.union, `${path}/union`),
    ];
  };
}

export type PatternUnionOverride =
  | PatternUnionOverride.FirstMember
  | PatternUnionOverride.SecondMember
  | PatternUnionOverride.$UnknownMember;

export namespace PatternUnionOverride {
  export interface FirstMember {
    first: string;
    second?: never;
    $unknown?: never;
  }

  export interface SecondMember {
    first?: never;
    second: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    first?: never;
    second?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    first: (value: string) => T;
    second: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PatternUnionOverride, visitor: Visitor<T>): T => {
    if (value.first !== undefined) return visitor.first(value.first);
    if (value.second !== undefined) return visitor.second(value.second);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  const memberValidators: {
    first?: __MultiConstraintValidator<string>;
    second?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PatternUnionOverride, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "first": {
            memberValidators["first"] = new __CompositeValidator<string>([new __PatternValidator("^[g-m]+$")]);
            break;
          }
          case "second": {
            memberValidators["second"] = new __CompositeValidator<string>([new __PatternValidator("^[g-m]+$")]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("first").validate(obj.first, `${path}/first`),
      ...getMemberValidator("second").validate(obj.second, `${path}/second`),
    ];
  };
}
/**
 * @internal
 */
export const PatternUnionOverrideFilterSensitiveLog = (obj: PatternUnionOverride): any => {
  if (obj.first !== undefined) return { first: obj.first };
  if (obj.second !== undefined) return { second: obj.second };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

export interface MalformedPatternOverrideInput {
  string?: string;
  list?: string[];
  map?: Record<string, string>;
  union?: PatternUnionOverride;
}

/**
 * @internal
 */
export const MalformedPatternOverrideInputFilterSensitiveLog = (obj: MalformedPatternOverrideInput): any => ({
  ...obj,
  ...(obj.union && { union: PatternUnionOverrideFilterSensitiveLog(obj.union) }),
});
export namespace MalformedPatternOverrideInput {
  const memberValidators: {
    string?: __MultiConstraintValidator<string>;
    list?: __MultiConstraintValidator<Iterable<string>>;
    map?: __MultiConstraintValidator<Record<string, string>>;
    union?: __MultiConstraintValidator<PatternUnionOverride>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedPatternOverrideInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "string": {
            memberValidators["string"] = new __CompositeValidator<string>([new __PatternValidator("^[g-m]+$")]);
            break;
          }
          case "list": {
            memberValidators["list"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __CompositeValidator<string>([new __PatternValidator("^[g-m]+$")])
            );
            break;
          }
          case "map": {
            memberValidators["map"] = new __CompositeMapValidator<string>(
              new __NoOpValidator(),
              new __CompositeValidator<string>([new __PatternValidator("^[g-m]+$")]),
              new __CompositeValidator<string>([new __PatternValidator("^[g-m]+$")])
            );
            break;
          }
          case "union": {
            memberValidators["union"] = new __CompositeStructureValidator<PatternUnionOverride>(
              new __NoOpValidator(),
              PatternUnionOverride.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("string").validate(obj.string, `${path}/string`),
      ...getMemberValidator("list").validate(obj.list, `${path}/list`),
      ...getMemberValidator("map").validate(obj.map, `${path}/map`),
      ...getMemberValidator("union").validate(obj.union, `${path}/union`),
    ];
  };
}

export interface MalformedRangeInput {
  byte?: number;
  minByte?: number;
  maxByte?: number;
  short?: number;
  minShort?: number;
  maxShort?: number;
  integer?: number;
  minInteger?: number;
  maxInteger?: number;
  long?: number;
  minLong?: number;
  maxLong?: number;
  float?: number;
  minFloat?: number;
  maxFloat?: number;
}

/**
 * @internal
 */
export const MalformedRangeInputFilterSensitiveLog = (obj: MalformedRangeInput): any => ({
  ...obj,
});
export namespace MalformedRangeInput {
  const memberValidators: {
    byte?: __MultiConstraintValidator<number>;
    minByte?: __MultiConstraintValidator<number>;
    maxByte?: __MultiConstraintValidator<number>;
    short?: __MultiConstraintValidator<number>;
    minShort?: __MultiConstraintValidator<number>;
    maxShort?: __MultiConstraintValidator<number>;
    integer?: __MultiConstraintValidator<number>;
    minInteger?: __MultiConstraintValidator<number>;
    maxInteger?: __MultiConstraintValidator<number>;
    long?: __MultiConstraintValidator<number>;
    minLong?: __MultiConstraintValidator<number>;
    maxLong?: __MultiConstraintValidator<number>;
    float?: __MultiConstraintValidator<number>;
    minFloat?: __MultiConstraintValidator<number>;
    maxFloat?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedRangeInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "byte": {
            memberValidators["byte"] = new __CompositeValidator<number>([new __RangeValidator(2, 8)]);
            break;
          }
          case "minByte": {
            memberValidators["minByte"] = new __CompositeValidator<number>([new __RangeValidator(2, undefined)]);
            break;
          }
          case "maxByte": {
            memberValidators["maxByte"] = new __CompositeValidator<number>([new __RangeValidator(undefined, 8)]);
            break;
          }
          case "short": {
            memberValidators["short"] = new __CompositeValidator<number>([new __RangeValidator(2, 8)]);
            break;
          }
          case "minShort": {
            memberValidators["minShort"] = new __CompositeValidator<number>([new __RangeValidator(2, undefined)]);
            break;
          }
          case "maxShort": {
            memberValidators["maxShort"] = new __CompositeValidator<number>([new __RangeValidator(undefined, 8)]);
            break;
          }
          case "integer": {
            memberValidators["integer"] = new __CompositeValidator<number>([new __RangeValidator(2, 8)]);
            break;
          }
          case "minInteger": {
            memberValidators["minInteger"] = new __CompositeValidator<number>([new __RangeValidator(2, undefined)]);
            break;
          }
          case "maxInteger": {
            memberValidators["maxInteger"] = new __CompositeValidator<number>([new __RangeValidator(undefined, 8)]);
            break;
          }
          case "long": {
            memberValidators["long"] = new __CompositeValidator<number>([new __RangeValidator(2, 8)]);
            break;
          }
          case "minLong": {
            memberValidators["minLong"] = new __CompositeValidator<number>([new __RangeValidator(2, undefined)]);
            break;
          }
          case "maxLong": {
            memberValidators["maxLong"] = new __CompositeValidator<number>([new __RangeValidator(undefined, 8)]);
            break;
          }
          case "float": {
            memberValidators["float"] = new __CompositeValidator<number>([new __RangeValidator(2.2, 8.8)]);
            break;
          }
          case "minFloat": {
            memberValidators["minFloat"] = new __CompositeValidator<number>([new __RangeValidator(2.2, undefined)]);
            break;
          }
          case "maxFloat": {
            memberValidators["maxFloat"] = new __CompositeValidator<number>([new __RangeValidator(undefined, 8.8)]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("byte").validate(obj.byte, `${path}/byte`),
      ...getMemberValidator("minByte").validate(obj.minByte, `${path}/minByte`),
      ...getMemberValidator("maxByte").validate(obj.maxByte, `${path}/maxByte`),
      ...getMemberValidator("short").validate(obj.short, `${path}/short`),
      ...getMemberValidator("minShort").validate(obj.minShort, `${path}/minShort`),
      ...getMemberValidator("maxShort").validate(obj.maxShort, `${path}/maxShort`),
      ...getMemberValidator("integer").validate(obj.integer, `${path}/integer`),
      ...getMemberValidator("minInteger").validate(obj.minInteger, `${path}/minInteger`),
      ...getMemberValidator("maxInteger").validate(obj.maxInteger, `${path}/maxInteger`),
      ...getMemberValidator("long").validate(obj.long, `${path}/long`),
      ...getMemberValidator("minLong").validate(obj.minLong, `${path}/minLong`),
      ...getMemberValidator("maxLong").validate(obj.maxLong, `${path}/maxLong`),
      ...getMemberValidator("float").validate(obj.float, `${path}/float`),
      ...getMemberValidator("minFloat").validate(obj.minFloat, `${path}/minFloat`),
      ...getMemberValidator("maxFloat").validate(obj.maxFloat, `${path}/maxFloat`),
    ];
  };
}

export interface MalformedRangeOverrideInput {
  byte?: number;
  minByte?: number;
  maxByte?: number;
  short?: number;
  minShort?: number;
  maxShort?: number;
  integer?: number;
  minInteger?: number;
  maxInteger?: number;
  long?: number;
  minLong?: number;
  maxLong?: number;
  float?: number;
  minFloat?: number;
  maxFloat?: number;
}

/**
 * @internal
 */
export const MalformedRangeOverrideInputFilterSensitiveLog = (obj: MalformedRangeOverrideInput): any => ({
  ...obj,
});
export namespace MalformedRangeOverrideInput {
  const memberValidators: {
    byte?: __MultiConstraintValidator<number>;
    minByte?: __MultiConstraintValidator<number>;
    maxByte?: __MultiConstraintValidator<number>;
    short?: __MultiConstraintValidator<number>;
    minShort?: __MultiConstraintValidator<number>;
    maxShort?: __MultiConstraintValidator<number>;
    integer?: __MultiConstraintValidator<number>;
    minInteger?: __MultiConstraintValidator<number>;
    maxInteger?: __MultiConstraintValidator<number>;
    long?: __MultiConstraintValidator<number>;
    minLong?: __MultiConstraintValidator<number>;
    maxLong?: __MultiConstraintValidator<number>;
    float?: __MultiConstraintValidator<number>;
    minFloat?: __MultiConstraintValidator<number>;
    maxFloat?: __MultiConstraintValidator<number>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedRangeOverrideInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "byte": {
            memberValidators["byte"] = new __CompositeValidator<number>([new __RangeValidator(4, 6)]);
            break;
          }
          case "minByte": {
            memberValidators["minByte"] = new __CompositeValidator<number>([new __RangeValidator(4, undefined)]);
            break;
          }
          case "maxByte": {
            memberValidators["maxByte"] = new __CompositeValidator<number>([new __RangeValidator(undefined, 6)]);
            break;
          }
          case "short": {
            memberValidators["short"] = new __CompositeValidator<number>([new __RangeValidator(4, 6)]);
            break;
          }
          case "minShort": {
            memberValidators["minShort"] = new __CompositeValidator<number>([new __RangeValidator(4, undefined)]);
            break;
          }
          case "maxShort": {
            memberValidators["maxShort"] = new __CompositeValidator<number>([new __RangeValidator(undefined, 6)]);
            break;
          }
          case "integer": {
            memberValidators["integer"] = new __CompositeValidator<number>([new __RangeValidator(4, 6)]);
            break;
          }
          case "minInteger": {
            memberValidators["minInteger"] = new __CompositeValidator<number>([new __RangeValidator(4, undefined)]);
            break;
          }
          case "maxInteger": {
            memberValidators["maxInteger"] = new __CompositeValidator<number>([new __RangeValidator(undefined, 6)]);
            break;
          }
          case "long": {
            memberValidators["long"] = new __CompositeValidator<number>([new __RangeValidator(4, 6)]);
            break;
          }
          case "minLong": {
            memberValidators["minLong"] = new __CompositeValidator<number>([new __RangeValidator(4, undefined)]);
            break;
          }
          case "maxLong": {
            memberValidators["maxLong"] = new __CompositeValidator<number>([new __RangeValidator(undefined, 6)]);
            break;
          }
          case "float": {
            memberValidators["float"] = new __CompositeValidator<number>([new __RangeValidator(4.4, 6.6)]);
            break;
          }
          case "minFloat": {
            memberValidators["minFloat"] = new __CompositeValidator<number>([new __RangeValidator(4.4, undefined)]);
            break;
          }
          case "maxFloat": {
            memberValidators["maxFloat"] = new __CompositeValidator<number>([new __RangeValidator(undefined, 6.6)]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("byte").validate(obj.byte, `${path}/byte`),
      ...getMemberValidator("minByte").validate(obj.minByte, `${path}/minByte`),
      ...getMemberValidator("maxByte").validate(obj.maxByte, `${path}/maxByte`),
      ...getMemberValidator("short").validate(obj.short, `${path}/short`),
      ...getMemberValidator("minShort").validate(obj.minShort, `${path}/minShort`),
      ...getMemberValidator("maxShort").validate(obj.maxShort, `${path}/maxShort`),
      ...getMemberValidator("integer").validate(obj.integer, `${path}/integer`),
      ...getMemberValidator("minInteger").validate(obj.minInteger, `${path}/minInteger`),
      ...getMemberValidator("maxInteger").validate(obj.maxInteger, `${path}/maxInteger`),
      ...getMemberValidator("long").validate(obj.long, `${path}/long`),
      ...getMemberValidator("minLong").validate(obj.minLong, `${path}/minLong`),
      ...getMemberValidator("maxLong").validate(obj.maxLong, `${path}/maxLong`),
      ...getMemberValidator("float").validate(obj.float, `${path}/float`),
      ...getMemberValidator("minFloat").validate(obj.minFloat, `${path}/minFloat`),
      ...getMemberValidator("maxFloat").validate(obj.maxFloat, `${path}/maxFloat`),
    ];
  };
}

export interface MalformedRequiredInput {
  string: string | undefined;
  stringInQuery: string | undefined;
  stringInHeader: string | undefined;
}

/**
 * @internal
 */
export const MalformedRequiredInputFilterSensitiveLog = (obj: MalformedRequiredInput): any => ({
  ...obj,
});
export namespace MalformedRequiredInput {
  const memberValidators: {
    string?: __MultiConstraintValidator<string>;
    stringInQuery?: __MultiConstraintValidator<string>;
    stringInHeader?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: MalformedRequiredInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "string": {
            memberValidators["string"] = new __CompositeValidator<string>([new __RequiredValidator()]);
            break;
          }
          case "stringInQuery": {
            memberValidators["stringInQuery"] = new __CompositeValidator<string>([new __RequiredValidator()]);
            break;
          }
          case "stringInHeader": {
            memberValidators["stringInHeader"] = new __CompositeValidator<string>([new __RequiredValidator()]);
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("string").validate(obj.string, `${path}/string`),
      ...getMemberValidator("stringInQuery").validate(obj.stringInQuery, `${path}/stringInQuery`),
      ...getMemberValidator("stringInHeader").validate(obj.stringInHeader, `${path}/stringInHeader`),
    ];
  };
}

export enum RecursiveEnumString {
  ABC = "abc",
  DEF = "def",
}

export interface SensitiveValidationInput {
  string?: string;
}

/**
 * @internal
 */
export const SensitiveValidationInputFilterSensitiveLog = (obj: SensitiveValidationInput): any => ({
  ...obj,
  ...(obj.string && { string: SENSITIVE_STRING }),
});
export namespace SensitiveValidationInput {
  const memberValidators: {
    string?: __MultiConstraintValidator<string>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: SensitiveValidationInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "string": {
            memberValidators["string"] = new __SensitiveConstraintValidator<string>(
              new __CompositeValidator<string>([new __PatternValidator("^[a-m]+$")])
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [...getMemberValidator("string").validate(obj.string, `${path}/string`)];
  };
}

export type RecursiveUnionOne =
  | RecursiveUnionOne.StringMember
  | RecursiveUnionOne.UnionMember
  | RecursiveUnionOne.$UnknownMember;

export namespace RecursiveUnionOne {
  export interface StringMember {
    string: RecursiveEnumString | string;
    union?: never;
    $unknown?: never;
  }

  export interface UnionMember {
    string?: never;
    union: RecursiveUnionTwo;
    $unknown?: never;
  }

  export interface $UnknownMember {
    string?: never;
    union?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    string: (value: RecursiveEnumString | string) => T;
    union: (value: RecursiveUnionTwo) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RecursiveUnionOne, visitor: Visitor<T>): T => {
    if (value.string !== undefined) return visitor.string(value.string);
    if (value.union !== undefined) return visitor.union(value.union);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  const memberValidators: {
    string?: __MultiConstraintValidator<string>;
    union?: __MultiConstraintValidator<RecursiveUnionTwo>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: RecursiveUnionOne, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "string": {
            memberValidators["string"] = new __CompositeValidator<string>([new __EnumValidator(["abc", "def"])]);
            break;
          }
          case "union": {
            memberValidators["union"] = new __CompositeStructureValidator<RecursiveUnionTwo>(
              new __NoOpValidator(),
              RecursiveUnionTwo.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("string").validate(obj.string, `${path}/string`),
      ...getMemberValidator("union").validate(obj.union, `${path}/union`),
    ];
  };
}
/**
 * @internal
 */
export const RecursiveUnionOneFilterSensitiveLog = (obj: RecursiveUnionOne): any => {
  if (obj.string !== undefined) return { string: obj.string };
  if (obj.union !== undefined) return { union: RecursiveUnionTwoFilterSensitiveLog(obj.union) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

export type RecursiveUnionTwo =
  | RecursiveUnionTwo.StringMember
  | RecursiveUnionTwo.UnionMember
  | RecursiveUnionTwo.$UnknownMember;

export namespace RecursiveUnionTwo {
  export interface StringMember {
    string: RecursiveEnumString | string;
    union?: never;
    $unknown?: never;
  }

  export interface UnionMember {
    string?: never;
    union: RecursiveUnionOne;
    $unknown?: never;
  }

  export interface $UnknownMember {
    string?: never;
    union?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    string: (value: RecursiveEnumString | string) => T;
    union: (value: RecursiveUnionOne) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RecursiveUnionTwo, visitor: Visitor<T>): T => {
    if (value.string !== undefined) return visitor.string(value.string);
    if (value.union !== undefined) return visitor.union(value.union);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  const memberValidators: {
    string?: __MultiConstraintValidator<string>;
    union?: __MultiConstraintValidator<RecursiveUnionOne>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: RecursiveUnionTwo, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "string": {
            memberValidators["string"] = new __CompositeValidator<string>([new __EnumValidator(["abc", "def"])]);
            break;
          }
          case "union": {
            memberValidators["union"] = new __CompositeStructureValidator<RecursiveUnionOne>(
              new __NoOpValidator(),
              RecursiveUnionOne.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!;
    }
    return [
      ...getMemberValidator("string").validate(obj.string, `${path}/string`),
      ...getMemberValidator("union").validate(obj.union, `${path}/union`),
    ];
  };
}
/**
 * @internal
 */
export const RecursiveUnionTwoFilterSensitiveLog = (obj: RecursiveUnionTwo): any => {
  if (obj.string !== undefined) return { string: obj.string };
  if (obj.union !== undefined) return { union: RecursiveUnionOneFilterSensitiveLog(obj.union) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

export interface RecursiveStructuresInput {
  union?: RecursiveUnionOne;
}

/**
 * @internal
 */
export const RecursiveStructuresInputFilterSensitiveLog = (obj: RecursiveStructuresInput): any => ({
  ...obj,
  ...(obj.union && { union: RecursiveUnionOneFilterSensitiveLog(obj.union) }),
});
export namespace RecursiveStructuresInput {
  const memberValidators: {
    union?: __MultiConstraintValidator<RecursiveUnionOne>;
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: RecursiveStructuresInput, path = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(
      member: T
    ): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "union": {
            memberValidators["union"] = new __CompositeStructureValidator<RecursiveUnionOne>(
              new __NoOpValidator(),
              RecursiveUnionOne.validate
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
