import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * GetCheckerIpRangesOutput shape
 */
export interface GetCheckerIpRangesOutput {
    /**
     * _CheckerIpRanges shape
     */
    CheckerIpRanges: Array<string>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}