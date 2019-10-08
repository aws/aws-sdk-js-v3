import { RequestSerializer } from "./serializer";
import { ResponseDeserializer } from "./deserializer";

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
    input: any,
    utils?: { [key: string]: any }
  ): RequestType;
  abstract deserialize<T extends ResponseDeserializer<ResponseType>>(
    parser: T,
    input: ResponseType,
    utils?: { [key: string]: any }
  ): ReturnType<T>;
}
