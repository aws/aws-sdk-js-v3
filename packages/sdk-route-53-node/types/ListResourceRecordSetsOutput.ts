import {_UnmarshalledResourceRecordSet} from './_ResourceRecordSet';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains list information for the resource record set.</p>
 */
export interface ListResourceRecordSetsOutput {
    /**
     * <p>Information about multiple resource record sets.</p>
     */
    ResourceRecordSets: Array<_UnmarshalledResourceRecordSet>;

    /**
     * <p>A flag that indicates whether more resource record sets remain to be listed. If your results were truncated, you can make a follow-up pagination request by using the <code>NextRecordName</code> element.</p>
     */
    IsTruncated: boolean;

    /**
     * <p>If the results were truncated, the name of the next record in the list.</p> <p>This element is present only if <code>IsTruncated</code> is true. </p>
     */
    NextRecordName?: string;

    /**
     * <p>If the results were truncated, the type of the next record in the list.</p> <p>This element is present only if <code>IsTruncated</code> is true. </p>
     */
    NextRecordType?: 'SOA'|'A'|'TXT'|'NS'|'CNAME'|'MX'|'NAPTR'|'PTR'|'SRV'|'SPF'|'AAAA'|'CAA'|string;

    /**
     * <p> <i>Weighted, latency, geolocation, and failover resource record sets only</i>: If results were truncated for a given DNS name and type, the value of <code>SetIdentifier</code> for the next resource record set that has the current DNS name and type.</p>
     */
    NextRecordIdentifier?: string;

    /**
     * <p>The maximum number of records you requested.</p>
     */
    MaxItems: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
