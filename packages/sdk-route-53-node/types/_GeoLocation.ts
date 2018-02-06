/**
 * <p>A complex type that contains information about a geo location.</p>
 */
export interface _GeoLocation {
    /**
     * <p>The two-letter code for the continent.</p> <p>Valid values: <code>AF</code> | <code>AN</code> | <code>AS</code> | <code>EU</code> | <code>OC</code> | <code>NA</code> | <code>SA</code> </p> <p>Constraint: Specifying <code>ContinentCode</code> with either <code>CountryCode</code> or <code>SubdivisionCode</code> returns an <code>InvalidInput</code> error.</p>
     */
    ContinentCode?: string;

    /**
     * <p>The two-letter code for the country.</p>
     */
    CountryCode?: string;

    /**
     * <p>The code for the subdivision, for example, a state in the United States or a province in Canada.</p>
     */
    SubdivisionCode?: string;
}

export type _UnmarshalledGeoLocation = _GeoLocation;