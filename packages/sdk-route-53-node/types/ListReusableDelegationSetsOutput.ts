import {_UnmarshalledDelegationSet} from './_DelegationSet';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains information about the reusable delegation sets that are associated with the current AWS account.</p>
 */
export interface ListReusableDelegationSetsOutput {
    /**
     * <p>A complex type that contains one <code>DelegationSet</code> element for each reusable delegation set that was created by the current AWS account.</p>
     */
    DelegationSets: Array<_UnmarshalledDelegationSet>;

    /**
     * <p>For the second and subsequent calls to <code>ListReusableDelegationSets</code>, <code>Marker</code> is the value that you specified for the <code>marker</code> parameter in the request that produced the current response.</p>
     */
    Marker: string;

    /**
     * <p>A flag that indicates whether there are more reusable delegation sets to be listed.</p>
     */
    IsTruncated: boolean;

    /**
     * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextMarker</code> identifies the next reusable delegation set that Amazon Route 53 will return if you submit another <code>ListReusableDelegationSets</code> request and specify the value of <code>NextMarker</code> in the <code>marker</code> parameter.</p>
     */
    NextMarker?: string;

    /**
     * <p>The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListReusableDelegationSets</code> that produced the current response.</p>
     */
    MaxItems: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
