import { RuntimeBlobTypes } from "./runtime-blob-types.node";

/**
 * @public
 *
 * A set of types that can be used as inputs for the blob type.
 */
export type BlobTypes = string | ArrayBuffer | ArrayBufferView | Uint8Array | RuntimeBlobTypes;
