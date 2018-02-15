import {_GlacierJobParameters, _UnmarshalledGlacierJobParameters} from './_GlacierJobParameters';
import {_SelectParameters, _UnmarshalledSelectParameters} from './_SelectParameters';
import {_OutputLocation, _UnmarshalledOutputLocation} from './_OutputLocation';

/**
 * _RestoreRequest shape
 */
export interface _RestoreRequest {
    /**
     * _Days shape
     */
    Days?: number;

    /**
     * _GlacierJobParameters shape
     */
    GlacierJobParameters?: _GlacierJobParameters;

    /**
     * _RestoreRequestType shape
     */
    Type?: 'SELECT'|string;

    /**
     * _Tier shape
     */
    Tier?: 'Standard'|'Bulk'|'Expedited'|string;

    /**
     * _Description shape
     */
    Description?: string;

    /**
     * _SelectParameters shape
     */
    SelectParameters?: _SelectParameters;

    /**
     * _OutputLocation shape
     */
    OutputLocation?: _OutputLocation;
}

export interface _UnmarshalledRestoreRequest extends _RestoreRequest {
    /**
     * _GlacierJobParameters shape
     */
    GlacierJobParameters?: _UnmarshalledGlacierJobParameters;

    /**
     * _SelectParameters shape
     */
    SelectParameters?: _UnmarshalledSelectParameters;

    /**
     * _OutputLocation shape
     */
    OutputLocation?: _UnmarshalledOutputLocation;
}