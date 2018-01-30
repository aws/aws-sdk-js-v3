/**
 * _GlacierJobParameters shape
 */
export interface _GlacierJobParameters {
    /**
     * Glacier retrieval tier at which the restore will be processed.
     */
    Tier: 'Standard'|'Bulk'|'Expedited'|string;
}

export type _UnmarshalledGlacierJobParameters = _GlacierJobParameters;