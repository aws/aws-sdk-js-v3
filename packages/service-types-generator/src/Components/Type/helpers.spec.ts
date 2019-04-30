import { getUnmarshalledShapeName, hasStreamingBody } from "./helpers";
import { NonStreamingBlob, StreamingBlob } from "../../shapes.fixture";
import { TreeModelStructure } from "@aws-sdk/build-types";

describe("getUnmarshalledShapeName", () => {
  it('should prefix "Unmarshalled" to shape names', () => {
    expect(getUnmarshalledShapeName("String")).toEqual(`UnmarshalledString`);
  });

  it("should keep any leading underscores on words", () => {
    const name = "__Foo";
    expect(getUnmarshalledShapeName(name)).toEqual(`__UnmarshalledFoo`);
  });
});

describe("hasStreamingBody", () => {
  it("should return true if any member of a structure is a streaming blob", () => {
    const shape: TreeModelStructure = {
      type: "structure",
      name: "shape",
      documentation: "shape",
      required: [],
      topLevel: "output",
      members: {
        data: {
          shape: StreamingBlob
        }
      },
      payload: "data"
    };
    expect(hasStreamingBody(shape)).toBe(true);
  });

  it("should return false if no member of a structure is a streaming blob", () => {
    const shape: TreeModelStructure = {
      type: "structure",
      name: "shape",
      documentation: "shape",
      required: [],
      topLevel: "output",
      members: {
        data: {
          shape: NonStreamingBlob
        }
      },
      payload: "data"
    };

    expect(hasStreamingBody(shape)).toBe(false);
  });

  it("should return true if any member metadata designates a non-streaming blob as streaming", () => {
    const shape: TreeModelStructure = {
      type: "structure",
      name: "shape",
      documentation: "shape",
      required: [],
      topLevel: "output",
      members: {
        data: {
          shape: NonStreamingBlob,
          streaming: true
        }
      },
      payload: "data"
    };

    expect(hasStreamingBody(shape)).toBe(true);
  });
});
