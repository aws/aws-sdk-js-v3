// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { StreamingBlobTypes } from "@smithy/types";

import { GlacierServiceException as __BaseException } from "./GlacierServiceException";

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
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  type?: string | undefined;
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class MissingParameterValueException extends __BaseException {
  readonly name: "MissingParameterValueException" = "MissingParameterValueException";
  readonly $fault: "client" = "client";
  type?: string | undefined;
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingParameterValueException, __BaseException>) {
    super({
      name: "MissingParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingParameterValueException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class RequestTimeoutException extends __BaseException {
  readonly name: "RequestTimeoutException" = "RequestTimeoutException";
  readonly $fault: "client" = "client";
  type?: string | undefined;
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTimeoutException, __BaseException>) {
    super({
      name: "RequestTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTimeoutException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  type?: string | undefined;
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  type?: string | undefined;
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
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
