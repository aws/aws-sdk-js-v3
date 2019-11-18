import { getMapIndexDeclaration } from "./getMapIndexDeclaration";
import { NodeList, PrimaryLocationMap, ResourceId } from "../../shapes.fixture";

describe("getMapIndexDeclaration", () => {
  it("should return a vanilla string index for non-enumeration string keys", () => {
    expect(getMapIndexDeclaration(PrimaryLocationMap)).toBe("[key: string]");
  });

  it("should return mapped type index for enumeration string keys", () => {
    const enumKey = {
      ...ResourceId,
      enum: ["foo", "bar", "baz"]
    };

    expect(
      getMapIndexDeclaration({
        ...PrimaryLocationMap,
        key: {
          ...PrimaryLocationMap.key,
          shape: enumKey
        }
      })
    ).toBe(`[key in 'foo'|'bar'|'baz'|string]`);
  });

  it("should through a helpful error for non-string keys", () => {
    expect(() =>
      getMapIndexDeclaration({
        ...PrimaryLocationMap,
        key: {
          ...PrimaryLocationMap.key,
          shape: NodeList
        }
      })
    ).toThrowError(
      `Invalid type: map keys must be strings, but ${PrimaryLocationMap.name} is indexed with a ${NodeList.type}`
    );
  });
});
