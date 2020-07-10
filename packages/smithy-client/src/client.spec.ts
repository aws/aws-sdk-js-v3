import { Client } from "./client";

describe("SmithyClient", () => {
  const mockHandler = jest.fn((args: any) => Promise.resolve({ output: "foo" }));
  const mockResolveMiddleware = jest.fn((args) => mockHandler);
  const getCommandWithOutput = (output: string) => ({
    resolveMiddleware: mockResolveMiddleware,
  });
  const client = new Client({} as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return response promise when only command is supplied", async () => {
    expect.assertions(1);
    await expect(client.send(getCommandWithOutput("foo") as any)).resolves.toEqual("foo");
  });

  it("should return response promise when command and options is supplied", async () => {
    expect.assertions(3);
    const options = {
      AbortSignal: "bar",
    };
    await expect(client.send(getCommandWithOutput("foo") as any, options)).resolves.toEqual("foo");
    expect(mockResolveMiddleware.mock.calls.length).toEqual(1);
    expect(mockResolveMiddleware.mock.calls[0][2 as any]).toEqual(options);
  });

  it("should apply callback when command and callback is supplied", (done) => {
    const callback = jest.fn((err, response) => {
      expect(response).toEqual("foo");
      done();
    });
    client.send(getCommandWithOutput("foo") as any, callback);
  });

  it("should apply callback when command, options and callback is supplied", (done) => {
    const callback = jest.fn((err, response) => {
      expect(response).toEqual("foo");
      expect(mockResolveMiddleware.mock.calls.length).toEqual(1);
      expect(mockResolveMiddleware.mock.calls[0][2 as any]).toEqual(options);
      done();
    });
    const options = {
      AbortSignal: "bar",
    };
    client.send(getCommandWithOutput("foo") as any, options, callback);
  });
});
