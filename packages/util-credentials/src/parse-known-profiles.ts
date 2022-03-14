import {
  parseKnownFiles as __parseKnownFiles,
  SourceProfileInit as __SourceProfileInit,
} from "@aws-sdk/shared-ini-file-loader";

/**
 * @deprecated Use SourceProfileInit from "@aws-sdk/shared-ini-file-loader" instead.
 */
export interface SourceProfileInit extends __SourceProfileInit {}

/**
 * @deprecated Use parseKnownFiles from "@aws-sdk/shared-ini-file-loader" instead.
 */
export const parseKnownFiles = __parseKnownFiles;
