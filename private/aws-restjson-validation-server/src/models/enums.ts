// smithy-typescript generated code
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
 * @enum
 */
export const EnumString = {
  ABC: "abc",
  DEF: "def",
  GHI: "ghi",
  JKL: "jkl",
} as const;
/**
 * @public
 */
export type EnumString = (typeof EnumString)[keyof typeof EnumString];

/**
 * @public
 * @enum
 */
export const RecursiveEnumString = {
  ABC: "abc",
  DEF: "def",
} as const;
/**
 * @public
 */
export type RecursiveEnumString = (typeof RecursiveEnumString)[keyof typeof RecursiveEnumString];
