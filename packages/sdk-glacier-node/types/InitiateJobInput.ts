import {_JobParameters} from './_JobParameters';

/**
 * <p>Provides options for initiating an Amazon Glacier job.</p>
 */
export interface InitiateJobInput {
    /**
     * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.</p>
     */
    accountId: string;

    /**
     * <p>The name of the vault.</p>
     */
    vaultName: string;

    /**
     * <p>Provides options for specifying job information.</p>
     */
    jobParameters?: _JobParameters;
}