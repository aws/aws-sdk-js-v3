import { Method } from "./Method";
import { model } from "../../shapes.fixture";

const {
  operations: { GetResource }
} = model;
const {
  input: {
    shape: { name: inputShape }
  },
  output: {
    shape: { name: outputShape }
  },
  documentation,
  errors
} = GetResource;
const stringified = new Method(GetResource).toString();

describe("Method", () => {
  it("should define a signature that takes no callback and returns a promise", () => {
    expect(stringified).toMatch(
      `public getResource(args: ${inputShape}): Promise<${outputShape}>;`
    );
  });

  it("should define a signature that takes a callback and returns nothing", () => {
    expect(stringified).toMatch(
      `public getResource(
    args: ${inputShape},
    cb: (err: any, data?: ${outputShape}) => void
): void;`
    );
  });

  it("should define an implementation that takes an optional callback and returns a promise or void", () => {
    expect(stringified).toMatch(
      `public getResource(
    args: ${inputShape},
    cb?: (err: any, data?: ${outputShape}) => void
): Promise<${outputShape}>|void {`
    );
  });

  it(`should document the method using the operation's documentation string and provide a list of possible errors`, () => {
    expect(stringified).toMatch(
      `/**
 * GetResource operation
 *
 * This operation may fail with one of the following errors:
 *   - {ResourceNotFoundException} Exception thrown when a resource is not found
 *   - {Error} An error originating from the SDK or customizations rather than the service
 */`
    );
  });
});
