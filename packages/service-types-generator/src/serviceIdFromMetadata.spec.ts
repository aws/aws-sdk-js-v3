import { serviceIdFromMetadata } from "./serviceIdFromMetadata";
import { metadata } from "./shapes.fixture";

describe("classNameFromMetadata", () => {
  it("should use the service ID, stripping out any whitespaces", () => {
    expect(
      serviceIdFromMetadata({
        ...metadata,
        serviceId: "Service ID",
        serviceAbbreviation: "Amazon EC2",
        serviceFullName: "Amazon Elastic Compute Cloud"
      })
    ).toBe("Service ID");
  });

  it('should use the service abbreviation, stripping away any whitespaces and any leading "AWS" or "Amazon," if no service ID is available', () => {
    expect(
      serviceIdFromMetadata({
        ...metadata,
        serviceId: undefined,
        serviceAbbreviation: "Amazon EC2",
        serviceFullName: "Amazon Elastic Compute Cloud"
      })
    ).toBe("EC2");
  });

  it('should use the service full name, stripping away any whitespaces and any leading "AWS" or "Amazon," if no service abbreviation or ID is available', () => {
    expect(
      serviceIdFromMetadata({
        ...metadata,
        serviceId: undefined,
        serviceAbbreviation: undefined,
        serviceFullName: "Amazon Elastic Compute Cloud"
      })
    ).toBe("Elastic Compute Cloud");
  });
});
