// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const TestEnum = {
  BAR: "BAR",
  BAZ: "BAZ",
  FOO: "FOO",
} as const;
/**
 * @public
 */
export type TestEnum = (typeof TestEnum)[keyof typeof TestEnum];

export enum TestIntEnum {
  ONE = 1,
  TWO = 2,
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
