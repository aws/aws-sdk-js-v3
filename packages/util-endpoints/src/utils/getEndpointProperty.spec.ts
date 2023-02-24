import { EndpointError } from "../types";
import { evaluateTemplate } from "./evaluateTemplate";
import { getEndpointProperties } from "./getEndpointProperties";
import { getEndpointProperty } from "./getEndpointProperty";

jest.mock("./evaluateTemplate");
jest.mock("./getEndpointProperties");

describe(getEndpointProperty.name, () => {
  const mockOptions = {
    endpointParams: {},
    referenceRecord: {},
  };

  const mockInputString = "mockInputString";
  const mockOutputString = "mockOutputString";
  const mockInputObject = { key: mockInputString };
  const mockOutputObject = { key: mockOutputString };
  const mockBoolean = false;

  beforeEach(() => {
    (evaluateTemplate as jest.Mock).mockReturnValue(mockOutputString);
    (getEndpointProperties as jest.Mock).mockReturnValue(mockOutputObject);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("processes each property in an array", () => {
    const arrayLength = 3;

    it.each([
      ["string array", [Array(arrayLength).fill(mockInputString)], [Array(arrayLength).fill(mockOutputString)]],
      ["object array", [Array(arrayLength).fill(mockInputObject)], [Array(arrayLength).fill(mockOutputObject)]],
      ["boolean array", [Array(arrayLength).fill(mockBoolean)], [Array(arrayLength).fill(mockBoolean)]],
    ])("%s", (desc, inputArray, outputArray) => {
      expect(getEndpointProperty(inputArray, mockOptions)).toEqual(outputArray);
    });
  });

  it("returns the evaluated template", () => {
    expect(getEndpointProperty(mockInputString, mockOptions)).toEqual(mockOutputString);
    expect(evaluateTemplate).toHaveBeenCalledWith(mockInputString, mockOptions);
    expect(getEndpointProperties).not.toHaveBeenCalled();
  });

  it("returns the processed object", () => {
    expect(getEndpointProperty(mockInputObject, mockOptions)).toEqual(mockOutputObject);
    expect(evaluateTemplate).not.toHaveBeenCalled();
    expect(getEndpointProperties).toHaveBeenCalledWith(mockInputObject, mockOptions);
  });

  it("returns the boolean without processing", () => {
    expect(getEndpointProperty(mockBoolean, mockOptions)).toEqual(mockBoolean);
    expect(evaluateTemplate).not.toHaveBeenCalled();
    expect(getEndpointProperties).not.toHaveBeenCalled();
  });

  describe("throws error for unexpected property", () => {
    it.each([undefined, 0])("%s", (input) => {
      // @ts-ignore Argument is not assignable
      expect(() => getEndpointProperty(input, mockOptions)).toThrow(
        new EndpointError(`Unexpected endpoint property type: ${typeof input}`)
      );
    });

    it("null", () => {
      // @ts-ignore Argument is not assignable
      expect(() => getEndpointProperty(null, mockOptions)).toThrow(
        new EndpointError(`Unexpected endpoint property: null`)
      );
    });
  });
});
