export type RequestHandlerOutput<ResponseType> = { response: ResponseType };

export interface RequestHandler<
  RequestType,
  ResponseType,
  HandlerOptions = {}
> {
  destroy?: () => void;
  handle: (
    request: RequestType,
    handlerOptions: HandlerOptions
  ) => Promise<RequestHandlerOutput<ResponseType>>;
}
