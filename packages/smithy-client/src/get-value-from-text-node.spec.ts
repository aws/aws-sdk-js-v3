import { getValueFromTextNode } from "./get-value-from-text-node";

describe("getValueFromTextNode", () => {
  const valueInsideTextNode = "valueInsideTextNode";

  it("doesn't modify object if #text is absent", () => {
    const input = {
      key: "value",
      keyObj: {
        keyInsideObj: "valueInsideObj",
      },
    };
    const output = getValueFromTextNode(input);
    expect(output).toBe(input);
  });

  it("populates key with value in #text at first level", () => {
    const input = {
      key: "value",
      keyWithoutTextNode: {
        key: "value",
      },
      keyWithTextNode: {
        "#text": valueInsideTextNode,
      },
    };
    const output = getValueFromTextNode(input);
    expect(output.key).toBe(input.key);
    expect(output.keyWithoutTextNode).toBe(input.keyWithoutTextNode);
    expect(output.keyWithTextNode).toBe(valueInsideTextNode);
  });

  it("populates key with value in #text at second level", () => {
    const input = {
      key: "value",
      keyWithoutTextNodeAtAnyLevel: {
        keyObj: {
          key: "value",
        },
      },
      keyWithTextNodeAtLevel2: {
        keyWithTextNode: {
          "#text": valueInsideTextNode,
        },
      },
    };
    const output = getValueFromTextNode(input);
    expect(output.key).toBe(input.key);
    expect(output.keyWithoutTextNodeAtAnyLevel).toBe(input.keyWithoutTextNodeAtAnyLevel);
    expect(output.keyWithTextNodeAtLevel2.keyWithTextNode).toBe(valueInsideTextNode);
  });
});
