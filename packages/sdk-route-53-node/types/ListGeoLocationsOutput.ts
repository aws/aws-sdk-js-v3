import {_UnmarshalledGeoLocationDetails} from './_GeoLocationDetails';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>A complex type containing the response information for the request.</p>
 */
export interface ListGeoLocationsOutput {
    /**
     * <p>A complex type that contains one <code>GeoLocationDetails</code> element for each location that Amazon Route 53 supports for geolocation.</p>
     */
    GeoLocationDetailsList: Array<_UnmarshalledGeoLocationDetails>;

    /**
     * <p>A value that indicates whether more locations remain to be listed after the last location in this response. If so, the value of <code>IsTruncated</code> is <code>true</code>. To get more values, submit another request and include the values of <code>NextContinentCode</code>, <code>NextCountryCode</code>, and <code>NextSubdivisionCode</code> in the <code>StartContinentCode</code>, <code>StartCountryCode</code>, and <code>StartSubdivisionCode</code>, as applicable.</p>
     */
    IsTruncated: boolean;

    /**
     * <p>If <code>IsTruncated</code> is <code>true</code>, you can make a follow-up request to display more locations. Enter the value of <code>NextContinentCode</code> in the <code>StartContinentCode</code> parameter in another <code>ListGeoLocations</code> request.</p>
     */
    NextContinentCode?: string;

    /**
     * <p>If <code>IsTruncated</code> is <code>true</code>, you can make a follow-up request to display more locations. Enter the value of <code>NextCountryCode</code> in the <code>StartCountryCode</code> parameter in another <code>ListGeoLocations</code> request.</p>
     */
    NextCountryCode?: string;

    /**
     * <p>If <code>IsTruncated</code> is <code>true</code>, you can make a follow-up request to display more locations. Enter the value of <code>NextSubdivisionCode</code> in the <code>StartSubdivisionCode</code> parameter in another <code>ListGeoLocations</code> request.</p>
     */
    NextSubdivisionCode?: string;

    /**
     * <p>The value that you specified for <code>MaxItems</code> in the request.</p>
     */
    MaxItems: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
