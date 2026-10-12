import { destroyStreams, joinStreams } from "./join-streams.browser";
import { bindS3TransferManager } from "./S3TransferManager";
import { createEmptyReadable, defaultWorkerCount, WorkerHttpHandler } from "./worker-http-handler.browser";

/**
 * Browser version of the TransferManager that uses fetch and ReadableStream.
 * Worker-based multi-threading is currently not available for the browser implementation.
 *
 * @alpha
 */
export class S3TransferManager extends bindS3TransferManager({
  joinStreams,
  destroyStreams,
  WorkerHttpHandler,
  createEmptyReadable,
  defaultWorkerCount,
}) {}

export type { DownloadToFileRequest, DownloadToFileResponse, IS3TransferManager } from "./types";
