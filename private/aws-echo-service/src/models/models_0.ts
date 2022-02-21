import { EchoServiceServiceException as __BaseException } from "./EchoServiceServiceException";
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface EchoInput {
  string?: string;
}

export namespace EchoInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EchoInput): any => ({
    ...obj,
  });
}

export interface EchoOutput {
  string?: string;
}

export namespace EchoOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EchoOutput): any => ({
    ...obj,
  });
}

/**
 * For some reason, this service does not like palindromes!
 */
export class PalindromeException extends __BaseException {
  readonly name: "PalindromeException" = "PalindromeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PalindromeException, __BaseException>) {
    super({
      name: "PalindromeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PalindromeException.prototype);
  }
}

export interface LengthInput {
  string: string | undefined;
}

export namespace LengthInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LengthInput): any => ({
    ...obj,
  });
}

export interface LengthOutput {
  length?: number;
}

export namespace LengthOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LengthOutput): any => ({
    ...obj,
  });
}
