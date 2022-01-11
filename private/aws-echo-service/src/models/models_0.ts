import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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
export interface PalindromeException extends __SmithyException, $MetadataBearer {
  name: "PalindromeException";
  $fault: "client";
  message?: string;
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
