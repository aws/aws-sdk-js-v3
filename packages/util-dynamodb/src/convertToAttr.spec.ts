import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { convertToAttr } from "./convertToAttr";
import { marshallOptions } from "./marshall";
import { NativeAttributeValue } from "./models";

describe("convertToAttr", () => {
  describe("null", () => {
    [true, false].forEach((convertClassInstanceToMap) => {
      it(`returns for null`, () => {
        expect(convertToAttr(null, { convertClassInstanceToMap })).toEqual({ NULL: true });
      });
    });
  });

  describe("boolean", () => {
    [true, false].forEach((convertClassInstanceToMap) => {
      [true, false].forEach((isClassInstance) => {
        [true, false].forEach((boolValue) => {
          const bool = isClassInstance ? new Boolean(boolValue) : boolValue;
          it(`returns for boolean: ${bool}`, () => {
            expect(convertToAttr(bool, { convertClassInstanceToMap })).toEqual({ BOOL: bool.valueOf() });
          });
        });
      });
    });
  });

  describe("number", () => {
    [true, false].forEach((convertClassInstanceToMap) => {
      [true, false].forEach((isClassInstance) => {
        [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER].forEach((numValue) => {
          const num = isClassInstance ? new Number(numValue) : numValue;
          it(`returns for number (integer): ${num}`, () => {
            expect(convertToAttr(num, { convertClassInstanceToMap })).toEqual({ N: num.toString() });
          });
        });

        [1.01, Math.PI, Math.E, Number.MIN_VALUE, Number.EPSILON].forEach((numValue) => {
          const num = isClassInstance ? new Number(numValue) : numValue;
          it(`returns for number (floating point): ${num}`, () => {
            expect(convertToAttr(num, { convertClassInstanceToMap })).toEqual({ N: num.toString() });
          });
        });

        [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].forEach((numValue) => {
          const num = isClassInstance ? new Number(numValue) : numValue;
          it(`throws for number (special numeric value): ${num}`, () => {
            expect(() => {
              convertToAttr(num, { convertClassInstanceToMap });
            }).toThrowError(`Special numeric value ${num.toString()} is not allowed`);
          });
        });

        [Number.MAX_SAFE_INTEGER + 1, Number.MAX_VALUE].forEach((numValue) => {
          const num = isClassInstance ? new Number(numValue) : numValue;
          it(`throws for number greater than Number.MAX_SAFE_INTEGER: ${num}`, () => {
            const errorPrefix = `Number ${num.toString()} is greater than Number.MAX_SAFE_INTEGER.`;

            expect(() => {
              convertToAttr(num, { convertClassInstanceToMap });
            }).toThrowError(`${errorPrefix} Use BigInt.`);

            const BigIntConstructor = BigInt;
            (BigInt as any) = undefined;
            expect(() => {
              convertToAttr(num, { convertClassInstanceToMap });
            }).toThrowError(`${errorPrefix} Pass string value instead.`);
            BigInt = BigIntConstructor;
          });
        });

        [Number.MIN_SAFE_INTEGER - 1].forEach((numValue) => {
          const num = isClassInstance ? new Number(numValue) : numValue;
          it(`throws for number lesser than Number.MIN_SAFE_INTEGER: ${num}`, () => {
            const errorPrefix = `Number ${num.toString()} is lesser than Number.MIN_SAFE_INTEGER.`;

            expect(() => {
              convertToAttr(num, { convertClassInstanceToMap });
            }).toThrowError(`${errorPrefix} Use BigInt.`);

            const BigIntConstructor = BigInt;
            (BigInt as any) = undefined;
            expect(() => {
              convertToAttr(num, { convertClassInstanceToMap });
            }).toThrowError(`${errorPrefix} Pass string value instead.`);
            BigInt = BigIntConstructor;
          });
        });
      });
    });
  });

  describe("bigint", () => {
    [true, false].forEach((convertClassInstanceToMap) => {
      const maxSafe = BigInt(Number.MAX_SAFE_INTEGER);
      [
        // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
        1n,
        // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
        maxSafe * 2n,
        // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
        maxSafe * -2n,
        BigInt(Number.MAX_VALUE),
        BigInt("0x1fffffffffffff"),
        BigInt("0b11111111111111111111111111111111111111111111111111111"),
      ].forEach((num) => {
        it(`returns for bigint: ${num}`, () => {
          expect(convertToAttr(num, { convertClassInstanceToMap })).toEqual({ N: num.toString() });
        });
      });
    });
  });

  describe("binary", () => {
    [true, false].forEach((convertClassInstanceToMap) => {
      const buffer = new ArrayBuffer(64);
      const arr = [...Array(64).keys()];
      const addPointOne = (num: number) => num + 0.1;

      [
        buffer,
        new Blob([new Uint8Array(buffer)]),
        Buffer.from(buffer),
        new DataView(buffer),
        new Int8Array(arr),
        new Uint8Array(arr),
        new Uint8ClampedArray(arr),
        new Int16Array(arr),
        new Uint16Array(arr),
        new Int32Array(arr),
        new Uint32Array(arr),
        new Float32Array(arr.map(addPointOne)),
        new Float64Array(arr.map(addPointOne)),
        new BigInt64Array(arr.map(BigInt)),
        new BigUint64Array(arr.map(BigInt)),
      ].forEach((data) => {
        it(`returns for binary: ${data.constructor.name}`, () => {
          expect(convertToAttr(data, { convertClassInstanceToMap })).toEqual({ B: data });
        });
      });

      it("returns null for Binary when options.convertEmptyValues=true", () => {
        expect(convertToAttr(new Uint8Array(), { convertClassInstanceToMap, convertEmptyValues: true })).toEqual({
          NULL: true,
        });
      });
    });
  });

  describe("list", () => {
    const arr = [...Array(4).keys()];
    const uint8Arr = new Uint32Array(arr);
    const biguintArr = new BigUint64Array(arr.map(BigInt));

    ([
      {
        input: [null, false],
        output: [{ NULL: true }, { BOOL: false }],
      },
      {
        input: [1.01, BigInt(9007199254740996), "one"],
        output: [{ N: "1.01" }, { N: "9007199254740996" }, { S: "one" }],
      },
      {
        input: [uint8Arr, biguintArr],
        output: [{ B: uint8Arr }, { B: biguintArr }],
      },
      {
        input: [
          { nullKey: null, boolKey: false },
          { stringKey: "one", numberKey: 1.01, bigintKey: BigInt(9007199254740996) },
        ],
        output: [
          { M: { nullKey: { NULL: true }, boolKey: { BOOL: false } } },
          { M: { stringKey: { S: "one" }, numberKey: { N: "1.01" }, bigintKey: { N: "9007199254740996" } } },
        ],
      },
      {
        input: [
          new Set([1, 2, 3]),
          new Set([BigInt(9007199254740996), BigInt(-9007199254740996)]),
          new Set([uint8Arr, biguintArr]),
          new Set(["one", "two", "three"]),
        ],
        output: [
          { NS: ["1", "2", "3"] },
          { NS: ["9007199254740996", "-9007199254740996"] },
          { BS: [uint8Arr, biguintArr] },
          { SS: ["one", "two", "three"] },
        ],
      },
    ] as { input: NativeAttributeValue[]; output: AttributeValue[] }[]).forEach(({ input, output }) => {
      it(`testing list: ${input}`, () => {
        expect(convertToAttr(input)).toEqual({ L: output });
      });
    });

    it(`testing list with options.convertEmptyValues=true`, () => {
      const input = ["", new Uint8Array(), new Set([])];
      expect(convertToAttr(input, { convertEmptyValues: true })).toEqual({
        L: [{ NULL: true }, { NULL: true }, { NULL: true }],
      });
    });

    describe(`testing list with options.removeUndefinedValues`, () => {
      describe("throws error", () => {
        const testErrorListWithUndefinedValues = (options?: marshallOptions) => {
          expect(() => {
            convertToAttr(["defined", undefined], options);
          }).toThrowError(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
        };

        [undefined, {}, { convertEmptyValues: false }].forEach((options) => {
          it(`when options=${options}`, () => {
            testErrorListWithUndefinedValues(options);
          });
        });
      });

      it(`returns when options.removeUndefinedValues=true`, () => {
        expect(convertToAttr(["defined", undefined], { removeUndefinedValues: true })).toEqual({
          L: [{ S: "defined" }],
        });
        expect(convertToAttr([undefined, "defined", undefined], { removeUndefinedValues: true })).toEqual({
          L: [{ S: "defined" }],
        });
      });
    });
  });

  describe("set", () => {
    it("number set", () => {
      const set = new Set([1, 2, 3]);
      expect(convertToAttr(set)).toEqual({ NS: Array.from(set).map((num) => num.toString()) });
    });

    it("bigint set", () => {
      // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
      const bigNum = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
      const set = new Set([bigNum, -bigNum]);
      expect(convertToAttr(set)).toEqual({ NS: Array.from(set).map((num) => num.toString()) });
    });

    it("binary set", () => {
      const set = new Set([new ArrayBuffer(4), new ArrayBuffer(8), new ArrayBuffer(16)]);
      expect(convertToAttr(set)).toEqual({ BS: Array.from(set) });
    });

    it("string set", () => {
      const set = new Set(["one", "two", "three"]);
      expect(convertToAttr(set)).toEqual({ SS: Array.from(set) });
    });

    describe("set with undefined", () => {
      describe("throws error", () => {
        const testErrorSetWithUndefined = (options?: marshallOptions) => {
          expect(() => {
            convertToAttr(new Set([1, undefined, 3]), options);
          }).toThrowError(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
        };

        [undefined, {}, { convertEmptyValues: false }].forEach((options) => {
          it(`when options=${options}`, () => {
            testErrorSetWithUndefined(options);
          });
        });
      });

      it("returns when options.removeUndefinedValues=true", () => {
        expect(convertToAttr(new Set([1, undefined, 3]), { removeUndefinedValues: true })).toEqual({ NS: ["1", "3"] });
      });
    });

    describe("empty set", () => {
      describe("throws error", () => {
        const testErrorEmptySet = (options?: marshallOptions) => {
          expect(() => {
            convertToAttr(new Set([]), options);
          }).toThrowError(`Pass a non-empty set, or options.convertEmptyValues=true.`);
        };

        [undefined, {}, { convertEmptyValues: false }].forEach((options) => {
          it(`when options=${options}`, () => {
            testErrorEmptySet(options);
          });
        });
      });

      it("returns null when options.convertEmptyValues=true", () => {
        expect(convertToAttr(new Set([]), { convertEmptyValues: true })).toEqual({ NULL: true });
      });
    });

    describe("unallowed set", () => {
      it("throws error", () => {
        expect(() => {
          convertToAttr(new Set([true, false]));
        }).toThrowError(`Only Number Set (NS), Binary Set (BS) or String Set (SS) are allowed.`);
      });
    });
  });

  describe("map", () => {
    const arr = [...Array(4).keys()];
    const uint8Arr = new Uint32Array(arr);
    const biguintArr = new BigUint64Array(arr.map(BigInt));

    ([
      {
        input: { nullKey: null, boolKey: false },
        output: { nullKey: { NULL: true }, boolKey: { BOOL: false } },
      },
      {
        input: { stringKey: "one", numberKey: 1.01, bigintKey: BigInt(9007199254740996) },
        output: { stringKey: { S: "one" }, numberKey: { N: "1.01" }, bigintKey: { N: "9007199254740996" } },
      },
      {
        input: { uint8ArrKey: uint8Arr, biguintArrKey: biguintArr },
        output: { uint8ArrKey: { B: uint8Arr }, biguintArrKey: { B: biguintArr } },
      },
      {
        input: {
          list1: [null, false],
          list2: ["one", 1.01, BigInt(9007199254740996)],
        },
        output: {
          list1: { L: [{ NULL: true }, { BOOL: false }] },
          list2: { L: [{ S: "one" }, { N: "1.01" }, { N: "9007199254740996" }] },
        },
      },
      {
        input: {
          numberSet: new Set([1, 2, 3]),
          bigintSet: new Set([BigInt(9007199254740996), BigInt(-9007199254740996)]),
          binarySet: new Set([uint8Arr, biguintArr]),
          stringSet: new Set(["one", "two", "three"]),
        },
        output: {
          numberSet: { NS: ["1", "2", "3"] },
          bigintSet: { NS: ["9007199254740996", "-9007199254740996"] },
          binarySet: { BS: [uint8Arr, biguintArr] },
          stringSet: { SS: ["one", "two", "three"] },
        },
      },
    ] as { input: { [key: string]: NativeAttributeValue }; output: { [key: string]: AttributeValue } }[]).forEach(
      ({ input, output }) => {
        [true, false].forEach((useObjectCreate) => {
          const inputObject = useObjectCreate ? Object.create(input) : input;
          it(`testing object: ${inputObject}${useObjectCreate && " with Object.create()"}`, () => {
            expect(convertToAttr(inputObject)).toEqual({ M: output });
          });
        });

        const inputMap = new Map(Object.entries(input));
        it(`testing map: ${inputMap}`, () => {
          expect(convertToAttr(inputMap)).toEqual({ M: output });
        });
      }
    );

    describe(`with options.convertEmptyValues=true`, () => {
      const input = { stringKey: "", binaryKey: new Uint8Array(), setKey: new Set([]) };
      const output = { stringKey: { NULL: true }, binaryKey: { NULL: true }, setKey: { NULL: true } };

      [true, false].forEach((useObjectCreate) => {
        const inputObject = useObjectCreate ? Object.create(input) : input;
        it(`testing object${useObjectCreate && " with Object.create()"}`, () => {
          expect(convertToAttr(inputObject, { convertEmptyValues: true })).toEqual({ M: output });
        });
      });

      const inputMap = new Map(Object.entries(input));
      it(`testing map`, () => {
        expect(convertToAttr(inputMap, { convertEmptyValues: true })).toEqual({ M: output });
      });
    });

    describe(`with options.removeUndefinedValues=true`, () => {
      describe("throws error", () => {
        const testErrorMapWithUndefinedValues = (input: any, options?: marshallOptions) => {
          expect(() => {
            convertToAttr(input, options);
          }).toThrowError(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
        };

        [undefined, {}, { convertEmptyValues: false }].forEach((options) => {
          const input = { definedKey: "definedKey", undefinedKey: undefined };
          [true, false].forEach((useObjectCreate) => {
            const inputObject = useObjectCreate ? Object.create(input) : input;
            it(`testing object${useObjectCreate && " with Object.create()"} when options=${options}`, () => {
              testErrorMapWithUndefinedValues(inputObject, options);
            });
          });

          const inputMap = new Map(Object.entries(input));
          it(`testing map when options=${options}`, () => {
            testErrorMapWithUndefinedValues(inputMap, options);
          });
        });
      });

      describe(`returns when options.removeUndefinedValues=true`, () => {
        const input = { definedKey: "definedKey", undefinedKey: undefined };
        const output = { definedKey: { S: "definedKey" } };
        [true, false].forEach((useObjectCreate) => {
          const inputObject = useObjectCreate ? Object.create(input) : input;
          it(`testing object${useObjectCreate && " with Object.create()"}`, () => {
            expect(convertToAttr(inputObject, { removeUndefinedValues: true })).toEqual({ M: output });
          });
        });

        const inputMap = new Map(Object.entries(input));
        it(`testing map`, () => {
          expect(convertToAttr(inputMap, { removeUndefinedValues: true })).toEqual({ M: output });
        });
      });
    });

    describe(`testing with function`, () => {
      const input = {
        bool: true,
        func: function () {
          console.log(`bool: ${this.bool}`);
        },
      };
      const output = { bool: { BOOL: true } };

      [true, false].forEach((useObjectCreate) => {
        const inputObject = useObjectCreate ? Object.create(input) : input;
        it(`testing object${useObjectCreate && " with Object.create()"}`, () => {
          expect(convertToAttr(inputObject)).toEqual({ M: output });
        });
      });

      const inputMap = new Map(Object.entries(input));
      it(`testing map`, () => {
        expect(convertToAttr(inputMap)).toEqual({ M: output });
      });
    });

    it(`testing Object.create(null)`, () => {
      expect(convertToAttr(Object.create(null))).toEqual({ M: {} });
    });

    it(`testing empty Map`, () => {
      expect(convertToAttr(new Map())).toEqual({ M: {} });
    });
  });

  describe("string", () => {
    [true, false].forEach((convertClassInstanceToMap) => {
      [true, false].forEach((isClassInstance) => {
        ["", "string", "'single-quote'", '"double-quote"'].forEach((strValue) => {
          const str = isClassInstance ? new String(strValue) : strValue;
          it(`returns for string: ${str}`, () => {
            expect(convertToAttr(str, { convertClassInstanceToMap })).toEqual({ S: str.toString() });
          });
        });

        it("returns null for string when options.convertEmptyValues=true", () => {
          const str = isClassInstance ? new String("") : "";
          expect(convertToAttr(str, { convertClassInstanceToMap, convertEmptyValues: true })).toEqual({ NULL: true });
        });
      });
    });
  });

  describe(`unsupported type`, () => {
    class FooClass {
      constructor(private readonly foo: string) {}
    }

    it(`throws for: undefined`, () => {
      expect(() => {
        convertToAttr(undefined);
      }).toThrowError(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
    });

    [new Date(), new FooClass("foo")].forEach((data) => {
      it(`throws for: ${String(data)}`, () => {
        expect(() => {
          convertToAttr(data);
        }).toThrowError(
          `Unsupported type passed: ${String(
            data
          )}. Pass options.convertClassInstanceToMap=true to marshall typeof object as map attribute.`
        );
      });
    });
  });

  describe("typeof object with options.convertClassInstanceToMap=true", () => {
    it("returns map for class", () => {
      class FooClass {
        constructor(
          private readonly nullAttr: null,
          private readonly boolAttr: boolean,
          private readonly strAttr: string,
          private readonly numAttr: number,
          private readonly bigintAttr: bigint,
          private readonly binaryAttr: Uint8Array,
          private readonly listAttr: any[],
          private readonly mapAttr: { [key: string]: any }
        ) {}
        public exampleMethod() {
          return "This method won't be marshalled";
        }
      }
      expect(
        convertToAttr(
          new FooClass(
            null,
            true,
            "string",
            1,
            BigInt(Number.MAX_VALUE),
            new Uint8Array([...Array(64).keys()]),
            [null, 1, "two", true],
            {
              nullKey: null,
              numKey: 1,
              strKey: "string",
              boolKey: true,
            }
          ),
          {
            convertClassInstanceToMap: true,
          }
        )
      ).toEqual({
        M: {
          nullAttr: { NULL: true },
          boolAttr: { BOOL: true },
          strAttr: { S: "string" },
          numAttr: { N: "1" },
          bigintAttr: { N: BigInt(Number.MAX_VALUE).toString() },
          binaryAttr: { B: new Uint8Array([...Array(64).keys()]) },
          listAttr: { L: [{ NULL: true }, { N: "1" }, { S: "two" }, { BOOL: true }] },
          mapAttr: {
            M: { nullKey: { NULL: true }, numKey: { N: "1" }, strKey: { S: "string" }, boolKey: { BOOL: true } },
          },
        },
      });
    });

    it("returns inherited values from parent class in map", () => {
      class Person {
        protected name: string;
        constructor(name: string) {
          this.name = name;
        }
      }

      class Employee extends Person {
        private department: string;

        constructor(name: string, department: string) {
          super(name);
          this.department = department;
        }

        public getElevatorPitch() {
          return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
      }

      expect(convertToAttr(new Employee("John", "Sales"), { convertClassInstanceToMap: true })).toEqual({
        M: {
          name: { S: "John" },
          department: { S: "Sales" },
        },
      });
    });

    it("returns empty for Date object", () => {
      expect(convertToAttr(new Date(), { convertClassInstanceToMap: true })).toEqual({ M: {} });
    });
  });
});
