import {_UnmarshalledRedirectAllRequestsTo} from './_RedirectAllRequestsTo';
import {_UnmarshalledIndexDocument} from './_IndexDocument';
import {_UnmarshalledErrorDocument} from './_ErrorDocument';
import {_UnmarshalledRoutingRule} from './_RoutingRule';
import * as __aws_types from '@aws/types';

/**
 * GetBucketWebsiteOutput shape
 */
export interface GetBucketWebsiteOutput {
    /**
     * _RedirectAllRequestsTo shape
     */
    RedirectAllRequestsTo?: _UnmarshalledRedirectAllRequestsTo;

    /**
     * _IndexDocument shape
     */
    IndexDocument?: _UnmarshalledIndexDocument;

    /**
     * _ErrorDocument shape
     */
    ErrorDocument?: _UnmarshalledErrorDocument;

    /**
     * _RoutingRules shape
     */
    RoutingRules?: Array<_UnmarshalledRoutingRule>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata?: __aws_types.ResponseMetadata;
}
