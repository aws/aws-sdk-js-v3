/**
 * _GlacierJobParameters shape
 */
export interface _GlacierJobParameters {
    /**
     * _Tier shape
     */
    Tier: 'Standard'|'Bulk'|'Expedited'|string;
}

export type _UnmarshalledGlacierJobParameters = _GlacierJobParameters;