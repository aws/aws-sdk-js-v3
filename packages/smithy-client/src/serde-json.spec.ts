import { _json } from "./serde-json";

describe(_json.name, () => {
  it("removes nullish entries", () => {
    expect(
      _json({
        g: void 0,
        a: {
          e: void 0,
          b: {
            c: {
              f: void 0,
            },
            d: void 0,
          },
        },
      })
    ).toEqual({
      a: {
        b: {
          c: {},
        },
      },
    });
  });

  it("filters sparse lists", () => {
    expect(
      _json({
        a: {
          b: 5,
          c: [, , , 6],
        },
      })
    ).toEqual({
      a: { b: 5, c: [6] },
    });
  });
});
