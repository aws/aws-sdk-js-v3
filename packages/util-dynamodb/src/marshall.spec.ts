import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { describe, expect, test as it } from "vitest";

import { marshall } from "./marshall";
import { NumberValue } from "./NumberValue";

describe("marshall", () => {
  it("with object as an input", () => {
    const input = { a: "A", b: "B" };
    expect(marshall(input)).toEqual({
      a: { S: "A" },
      b: { S: "B" },
    });
  });

  ["convertEmptyValues", "removeUndefinedValues"].forEach((option) => {
    describe(`options.${option}`, () => {
      [false, true].forEach((value) => {
        it(`passes ${value} to convertToAttr`, () => {
          const input = { a: "A", b: "B" };
          expect(marshall(input, { [option]: value })).toEqual({
            a: { S: "A" },
            b: { S: "B" },
          });
        });
      });
    });
  });

  it("with type as an input", () => {
    type TestInputType = { a: string; b: string };
    const input: TestInputType = { a: "A", b: "B" };

    expect(marshall(input)).toEqual({
      a: { S: "A" },
      b: { S: "B" },
    });
  });

  it("with Interface as an input", () => {
    interface TestInputInterface {
      a: string;
      b: string;
    }
    const input: TestInputInterface = { a: "A", b: "B" };

    expect(marshall(input)).toEqual({
      a: { S: "A" },
      b: { S: "B" },
    });
  });

  it("should resolve signatures correctly", () => {
    const ss: AttributeValue.SSMember = marshall(new Set(["a"]));
    expect(ss).toEqual({
      SS: ["a"],
    } as AttributeValue.SSMember);
    const ns: AttributeValue.NSMember = marshall(new Set([0]));
    expect(ns).toEqual({
      NS: ["0"],
    } as AttributeValue.NSMember);
    const bs: AttributeValue.BSMember = marshall(new Set([new Uint8Array(4)]));
    expect(bs).toEqual({
      BS: [new Uint8Array(4)],
    } as AttributeValue.BSMember);
    const s: AttributeValue.SMember = marshall("a");
    expect(s).toEqual({
      S: "a",
    } as AttributeValue.SMember);
    const n1: AttributeValue.NMember = marshall(0);
    expect(n1).toEqual({ N: "0" } as AttributeValue.NMember);
    const n2: AttributeValue.NMember = marshall(BigInt(0));
    expect(n2).toEqual({ N: "0" } as AttributeValue.NMember);
    const n3: AttributeValue.NMember = marshall(NumberValue.from(0));
    expect(n3).toEqual({ N: "0" } as AttributeValue.NMember);
    const binary: AttributeValue.BMember = marshall(new Uint8Array(4));
    expect(binary).toEqual({
      B: new Uint8Array(4),
    } as AttributeValue.BMember);
    const nil: AttributeValue.NULLMember = marshall(null);
    expect(nil).toEqual({
      NULL: true,
    } as AttributeValue.NULLMember);
    const bool: AttributeValue.BOOLMember = marshall(false as boolean);
    expect(bool).toEqual({
      BOOL: false,
    } as AttributeValue.BOOLMember);
    const array: AttributeValue[] = marshall([1, 2, 3]);
    expect(array).toEqual([{ N: "1" }, { N: "2" }, { N: "3" }] as AttributeValue.NMember[]);
    const arrayLDefault: AttributeValue[] = marshall([1, 2, 3], {});
    expect(arrayLDefault).toEqual([{ N: "1" }, { N: "2" }, { N: "3" }] as AttributeValue.NMember[]);
    const arrayLFalse: AttributeValue[] = marshall([1, 2, 3], {
      convertTopLevelContainer: false,
    });
    expect(arrayLFalse).toEqual([{ N: "1" }, { N: "2" }, { N: "3" }] as AttributeValue.NMember[]);
    const arrayLTrue: AttributeValue.LMember = marshall([1, 2, 3], {
      convertTopLevelContainer: true,
    });
    expect(arrayLTrue).toEqual({
      L: [{ N: "1" }, { N: "2" }, { N: "3" }],
    } as AttributeValue.LMember);
    const arrayLBoolean: AttributeValue.LMember | AttributeValue[] = marshall([1, 2, 3], {
      convertTopLevelContainer: true as boolean,
    });
    expect(arrayLBoolean).toEqual({
      L: [{ N: "1" }, { N: "2" }, { N: "3" }],
    } as AttributeValue.LMember);
    const object1: Record<string, AttributeValue> = marshall({
      pk: "abc",
      sk: "xyz",
    });
    expect(object1).toEqual({
      pk: { S: "abc" },
      sk: { S: "xyz" },
    } as Record<string, AttributeValue.SMember>);
    const object2: Record<string, AttributeValue> = marshall(
      {
        pk: "abc",
        sk: "xyz",
      },
      {}
    );
    expect(object2).toEqual({
      pk: { S: "abc" },
      sk: { S: "xyz" },
    } as Record<string, AttributeValue.SMember>);
    const object3: AttributeValue.MMember = marshall(
      {
        pk: "abc",
        sk: "xyz",
      },
      { convertTopLevelContainer: true }
    );
    expect(object3).toEqual({
      M: {
        pk: { S: "abc" },
        sk: { S: "xyz" },
      },
    } as AttributeValue.MMember);
    const object4: Record<string, AttributeValue> | AttributeValue.MMember = marshall(
      {
        pk: "abc",
        sk: "xyz",
      },
      { convertTopLevelContainer: true as boolean }
    );
    expect(object4).toEqual({
      M: {
        pk: { S: "abc" },
        sk: { S: "xyz" },
      },
    } as AttributeValue.MMember);
    const map: Record<string, AttributeValue> = marshall(new Map([["a", "a"]]));
    expect(map).toEqual({
      a: { S: "a" },
    } as Record<string, AttributeValue.SMember>);
    const unrecognizedClassInstance: Record<string, AttributeValue> = marshall(new Date(), {
      convertClassInstanceToMap: true,
    });
    expect(unrecognizedClassInstance).toEqual({} as Record<string, AttributeValue>);
    const unrecognizedClassInstance2: Record<string, AttributeValue> = marshall(
      new (class {
        public a = "a";
        public b = "b";
      })(),
      {
        convertClassInstanceToMap: true,
      }
    );
    expect(unrecognizedClassInstance2).toEqual({
      a: { S: "a" },
      b: { S: "b" },
    } as Record<string, AttributeValue>);

    // this strange cast asserts that untyped fallback results in the `any` type.
    const untyped: Symbol = marshall(null as any) as Symbol;
    expect(untyped).toEqual({
      NULL: true,
    });

    const empty: Record<string, AttributeValue> = marshall({} as {});
    expect(empty).toEqual({} as Record<string, AttributeValue>);

    const empty2: AttributeValue.MMember = marshall({} as {}, { convertTopLevelContainer: true });
    expect(empty2).toEqual({ M: {} } as AttributeValue.MMember);
  });

  it("with class instance as an input", () => {
    class TestInputClass {
      constructor(private readonly a: string, private readonly b: string) {}
    }
    const input = new TestInputClass("A", "B");

    expect(marshall(input, { convertClassInstanceToMap: true })).toEqual({
      a: { S: "A" },
      b: { S: "B" },
    });
  });
});
