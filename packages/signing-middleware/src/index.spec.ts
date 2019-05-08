import { signingMiddleware } from "./";
import { Handler, RequestSigner, HttpRequest } from "@aws-sdk/types";

describe("SigningHandler", () => {
  const noOpSigner: RequestSigner = {
    sign: (request: HttpRequest) =>
      Promise.resolve({
        ...request,
        headers: {
          ...request.headers,
          signed: "true"
        }
      })
  } as any;
  const noOpNext = jest.fn();

  beforeEach(() => {
    (noOpNext as any).mockClear();
  });

  it("should sign the request and pass it to the next handler", async () => {
    const signingHandler = signingMiddleware(noOpSigner)(noOpNext, {} as any);
    await signingHandler({
      input: {},
      request: {
        headers: {}
      } as any
    });

    const { calls } = (noOpNext as any).mock;
    expect(calls.length).toBe(1);
    expect(calls[0][0].request.headers.signed).toBe("true");
  });
});
