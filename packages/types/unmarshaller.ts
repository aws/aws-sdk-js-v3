import {Member, OperationModel} from "./protocol";
import {HttpResponse} from "./http";

export interface BodyParser<SerializedType = string> {
    /**
     * Convert the provided input into the shape described in the supplied
     * serialization model.
     *
     * @param shape A serialization model describing the expected shape of the
     *              value supplied as `input`.
     * @param input The value to parse
     */
    parse<OutputType>(
        shape: Member,
        input: SerializedType
    ): OutputType;
}

export interface ResponseParser<StreamType = Uint8Array> {
    /**
     * Converts the output of an operation into JavaScript types.
     *
     * @param operation The operation model describing the structure of the HTTP
     *                  response received
     * @param input     The HTTP response received from the service
     */
    parse<OutputType>(
        operation: OperationModel,
        input: HttpResponse<StreamType>
    ): Promise<OutputType>;
}

/**
 * A function that converts a stream into an array of bytes.
 */
export interface StreamCollector<StreamType> {
    (stream: StreamType): Promise<Uint8Array>;
}
