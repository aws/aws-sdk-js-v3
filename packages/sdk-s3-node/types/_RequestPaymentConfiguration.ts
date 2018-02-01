/**
 * _RequestPaymentConfiguration shape
 */
export interface _RequestPaymentConfiguration {
    /**
     * Specifies who pays for the download and request fees.
     */
    Payer: 'Requester'|'BucketOwner'|string;
}

export type _UnmarshalledRequestPaymentConfiguration = _RequestPaymentConfiguration;