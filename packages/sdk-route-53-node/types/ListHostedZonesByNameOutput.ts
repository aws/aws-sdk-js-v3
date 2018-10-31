import {_UnmarshalledHostedZone} from './_HostedZone';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListHostedZonesByNameOutput {
    /**
     * <p>A complex type that contains general information about the hosted zone.</p>
     */
    HostedZones: Array<_UnmarshalledHostedZone>;

    /**
     * <p>For the second and subsequent calls to <code>ListHostedZonesByName</code>, <code>DNSName</code> is the value that you specified for the <code>dnsname</code> parameter in the request that produced the current response.</p>
     */
    DNSName?: string;

    /**
     * <p>The ID that Amazon Route 53 assigned to the hosted zone when you created it.</p>
     */
    HostedZoneId?: string;

    /**
     * <p>A flag that indicates whether there are more hosted zones to be listed. If the response was truncated, you can get the next group of <code>maxitems</code> hosted zones by calling <code>ListHostedZonesByName</code> again and specifying the values of <code>NextDNSName</code> and <code>NextHostedZoneId</code> elements in the <code>dnsname</code> and <code>hostedzoneid</code> parameters.</p>
     */
    IsTruncated: boolean;

    /**
     * <p>If <code>IsTruncated</code> is true, the value of <code>NextDNSName</code> is the name of the first hosted zone in the next group of <code>maxitems</code> hosted zones. Call <code>ListHostedZonesByName</code> again and specify the value of <code>NextDNSName</code> and <code>NextHostedZoneId</code> in the <code>dnsname</code> and <code>hostedzoneid</code> parameters, respectively.</p> <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>
     */
    NextDNSName?: string;

    /**
     * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextHostedZoneId</code> identifies the first hosted zone in the next group of <code>maxitems</code> hosted zones. Call <code>ListHostedZonesByName</code> again and specify the value of <code>NextDNSName</code> and <code>NextHostedZoneId</code> in the <code>dnsname</code> and <code>hostedzoneid</code> parameters, respectively.</p> <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>
     */
    NextHostedZoneId?: string;

    /**
     * <p>The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListHostedZonesByName</code> that produced the current response.</p>
     */
    MaxItems: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
