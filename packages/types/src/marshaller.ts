import {OperationModel} from "./protocol";
import {HttpRequest} from "./http";

export interface BodySerializer<SerializedType = string> {
    /**
     * Converts the provided `input` into the serialized format described in the
     * provided `shape`.
     *
     * @param operation The operation model to which the input should be
     *              converted
     * @param input The value to convert
     *
     * @throws if a node in the input cannot be converted into the type
     *          specified by the serialization model
     */
    build(operation: OperationModel, input: any): SerializedType;
}

export interface RequestSerializer<StreamType = Uint8Array> {
    /**
     * Converts the provided `input` into an HTTP request
     *
     * @param operation The operation to be executed via the returned HTTP
     *                  request.
     * @param input     The user input to serialize.
     */
    serialize(operation: OperationModel, input: any): HttpRequest<StreamType>;
}
