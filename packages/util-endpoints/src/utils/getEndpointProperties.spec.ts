import { getEndpointProperties } from "./getEndpointProperties";
import { getEndpointProperty } from "./getEndpointProperty";

jest.mock("./getEndpointProperty");

describe(getEndpointProperties.name, () => {
  const mockOptions = {
    endpointParams: {},
    referenceRecord: {},
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return an empty object if empty properties are provided", () => {
    expect(getEndpointProperties({}, mockOptions)).toEqual({});
  });

  it("return processed endpoint properties", () => {
    const inputPropertyValue = "inputPropertyValue";
    const outputPropertyValue = "outputPropertyValue";
    const mockProperties = { key: inputPropertyValue };

    (getEndpointProperty as jest.Mock).mockReturnValue(outputPropertyValue);
    expect(getEndpointProperties(mockProperties, mockOptions)).toEqual({ key: outputPropertyValue });
    expect(getEndpointProperty).toHaveBeenCalledWith(inputPropertyValue, mockOptions);
  });
});
