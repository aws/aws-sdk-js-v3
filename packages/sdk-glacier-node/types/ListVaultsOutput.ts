import {_UnmarshalledDescribeVaultOutput} from './_DescribeVaultOutput';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 */
export interface ListVaultsOutput {
    /**
     * <p>List of vaults.</p>
     */
    VaultList?: Array<_UnmarshalledDescribeVaultOutput>;

    /**
     * <p>The vault ARN at which to continue pagination of the results. You use the marker in another List Vaults request to obtain more vaults in the list.</p>
     */
    Marker?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
