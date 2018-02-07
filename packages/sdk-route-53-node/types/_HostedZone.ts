import {_HostedZoneConfig, _UnmarshalledHostedZoneConfig} from './_HostedZoneConfig';
import {_LinkedService, _UnmarshalledLinkedService} from './_LinkedService';

/**
 * <p>A complex type that contains general information about the hosted zone.</p>
 */
export interface _HostedZone {
    /**
     * <p>The ID that Amazon Route 53 assigned to the hosted zone when you created it.</p>
     */
    Id: string;

    /**
     * <p>The name of the domain. For public hosted zones, this is the name that you have registered with your DNS registrar.</p> <p>For information about how to specify characters other than <code>a-z</code>, <code>0-9</code>, and <code>-</code> (hyphen) and how to specify internationalized domain names, see <a>CreateHostedZone</a>.</p>
     */
    Name: string;

    /**
     * <p>The value that you specified for <code>CallerReference</code> when you created the hosted zone.</p>
     */
    CallerReference: string;

    /**
     * <p>A complex type that includes the <code>Comment</code> and <code>PrivateZone</code> elements. If you omitted the <code>HostedZoneConfig</code> and <code>Comment</code> elements from the request, the <code>Config</code> and <code>Comment</code> elements don't appear in the response.</p>
     */
    Config?: _HostedZoneConfig;

    /**
     * <p>The number of resource record sets in the hosted zone.</p>
     */
    ResourceRecordSetCount?: number;

    /**
     * <p>If the hosted zone was created by another service, the service that created the hosted zone. When a hosted zone is created by another service, you can't edit or delete it using Amazon Route 53. </p>
     */
    LinkedService?: _LinkedService;
}

export interface _UnmarshalledHostedZone extends _HostedZone {
    /**
     * <p>A complex type that includes the <code>Comment</code> and <code>PrivateZone</code> elements. If you omitted the <code>HostedZoneConfig</code> and <code>Comment</code> elements from the request, the <code>Config</code> and <code>Comment</code> elements don't appear in the response.</p>
     */
    Config?: _UnmarshalledHostedZoneConfig;

    /**
     * <p>If the hosted zone was created by another service, the service that created the hosted zone. When a hosted zone is created by another service, you can't edit or delete it using Amazon Route 53. </p>
     */
    LinkedService?: _UnmarshalledLinkedService;
}