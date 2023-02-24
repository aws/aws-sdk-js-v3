import { decorateServiceException, ExceptionOptionType, ServiceException } from "./exceptions";

it("ServiceException extends from Error", () => {
  expect(
    new ServiceException({
      name: "Error",
      message: "",
      $fault: "client",
      $metadata: {},
    })
  ).toBeInstanceOf(Error);
});

it("ExceptionOptionType allows specifying message", () => {
  class SomeException extends ServiceException {
    readonly code: string;
    constructor(opts: ExceptionOptionType<SomeException, ServiceException>) {
      super({
        name: "SomeException",
        $fault: "client",
        ...opts,
      });
      this.code = opts.code;
    }
  }
  const exception = new SomeException({
    message: "message",
    code: "code",
    $metadata: {},
  });
  expect(exception.message).toBe("message");
  expect(exception.code).toBe("code");
});

describe("decorateServiceException", () => {
  const exception = new ServiceException({
    name: "Error",
    message: "Error",
    $fault: "client",
    $metadata: {},
  });

  it("should inject unmodeled members to the exception", () => {
    const decorated = decorateServiceException(exception, { foo: "foo" });
    expect((decorated as any).foo).toBe("foo");
  });

  it("should not inject unmodeled members to the undefined", () => {
    const decorated = decorateServiceException(exception, { message: undefined });
    expect(decorated.message).toBe("Error");
  });

  it("should not overwrite the parsed exceptions", () => {
    const decorated = decorateServiceException(exception, { message: "Another Error" });
    expect(decorated.message).toBe("Error");
  });

  it("should replace Message with message", () => {
    const decorated = decorateServiceException({
      name: "Error",
      Message: "message",
    } as any);
    expect(decorated.message).toBe("message");
  });
});
