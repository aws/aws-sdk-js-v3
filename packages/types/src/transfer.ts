import { RequestSerializer } from "./marshaller";
import { ResponseParser } from "./unmarshaller";

export type TransferHandlerOutput<ResponseType> = { response: ResponseType };

export interface TransferHandler<
  RequestType,
  ResponseType,
  HandlerOptions = {}
> {
  destroy?: () => void;
  handle: (
    request: RequestType,
    handlerOptions: HandlerOptions
  ) => Promise<TransferHandlerOutput<ResponseType>>;
}

export abstract class Protocol<RequestType, ResponseType, HandlerOptions = {}> {
  constructor(
    readonly handler: TransferHandler<RequestType, ResponseType, HandlerOptions>
  ) {}
  abstract serialize(
    serializer: RequestSerializer<RequestType>,
    input: any
  ): RequestType;
  abstract parse<T extends ResponseParser<ResponseType>>(
    parser: T,
    input: ResponseType
  ): ReturnType<T>;
}
