// smithy-typescript generated code
import { StreamingBlobTypes } from "@smithy/types";

/**
 * @public
 */
export interface ArchiveCreationOutput {
  location?: string | undefined;
  checksum?: string | undefined;
  archiveId?: string | undefined;
}

/**
 * @public
 */
export interface UploadArchiveInput {
  vaultName: string | undefined;
  accountId: string | undefined;
  archiveDescription?: string | undefined;
  checksum?: string | undefined;
  body?: StreamingBlobTypes | undefined;
}

/**
 * @internal
 */
export const UploadArchiveInputFilterSensitiveLog = (obj: UploadArchiveInput): any => ({
  ...obj,
});

/**
 * @public
 */
export interface UploadMultipartPartInput {
  accountId: string | undefined;
  vaultName: string | undefined;
  uploadId: string | undefined;
  checksum?: string | undefined;
  range?: string | undefined;
  body?: StreamingBlobTypes | undefined;
}

/**
 * @internal
 */
export const UploadMultipartPartInputFilterSensitiveLog = (obj: UploadMultipartPartInput): any => ({
  ...obj,
});

/**
 * @public
 */
export interface UploadMultipartPartOutput {
  checksum?: string | undefined;
}
