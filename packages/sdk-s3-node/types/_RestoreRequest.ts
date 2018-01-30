import {_GlacierJobParameters, _UnmarshalledGlacierJobParameters} from './_GlacierJobParameters';
import {_SelectParameters, _UnmarshalledSelectParameters} from './_SelectParameters';
import {_OutputLocation, _UnmarshalledOutputLocation} from './_OutputLocation';

/**
 * Container for restore job parameters.
 */
export interface _RestoreRequest {
    /**
     * Lifetime of the active copy in days. Do not use with restores that specify OutputLocation.
     */
    Days?: number;

    /**
     * Glacier related parameters pertaining to this job. Do not use with restores that specify OutputLocation.
     */
    GlacierJobParameters?: _GlacierJobParameters;

    /**
     * Type of restore request.
     */
    Type?: 'SELECT'|string;

    /**
     * Glacier retrieval tier at which the restore will be processed.
     */
    Tier?: 'Standard'|'Bulk'|'Expedited'|string;

    /**
     * The optional description for the job.
     */
    Description?: string;

    /**
     * Describes the parameters for Select job types.
     */
    SelectParameters?: _SelectParameters;

    /**
     * Describes the location where the restore job's output is stored.
     */
    OutputLocation?: _OutputLocation;
}

export interface _UnmarshalledRestoreRequest extends _RestoreRequest {
    /**
     * Glacier related parameters pertaining to this job. Do not use with restores that specify OutputLocation.
     */
    GlacierJobParameters?: _UnmarshalledGlacierJobParameters;

    /**
     * Describes the parameters for Select job types.
     */
    SelectParameters?: _UnmarshalledSelectParameters;

    /**
     * Describes the location where the restore job's output is stored.
     */
    OutputLocation?: _UnmarshalledOutputLocation;
}