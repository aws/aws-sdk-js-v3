/**
 * _RequestPaymentConfiguration shape
 */
export interface _RequestPaymentConfiguration {
    /**
     * _Payer shape
     */
    Payer: 'Requester'|'BucketOwner'|string;
}

export type _UnmarshalledRequestPaymentConfiguration = _RequestPaymentConfiguration;