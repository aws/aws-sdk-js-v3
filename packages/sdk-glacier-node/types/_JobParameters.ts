import {_InventoryRetrievalJobInput, _UnmarshalledInventoryRetrievalJobInput} from './_InventoryRetrievalJobInput';
import {_SelectParameters, _UnmarshalledSelectParameters} from './_SelectParameters';
import {_OutputLocation, _UnmarshalledOutputLocation} from './_OutputLocation';

/**
 * <p>Provides options for defining a job.</p>
 */
export interface _JobParameters {
    /**
     * <p>When initiating a job to retrieve a vault inventory, you can optionally add this parameter to your request to specify the output format. If you are initiating an inventory job and do not specify a Format field, JSON is the default format. Valid values are "CSV" and "JSON".</p>
     */
    Format?: string;

    /**
     * <p>The job type. You can initiate a job to perform a select query on an archive, retrieve an archive, or get an inventory of a vault. Valid values are "select", "archive-retrieval" and "inventory-retrieval".</p>
     */
    Type?: string;

    /**
     * <p>The ID of the archive that you want to retrieve. This field is required only if <code>Type</code> is set to <code>select</code> or <code>archive-retrieval</code>code&gt;. An error occurs if you specify this request parameter for an inventory retrieval job request. </p>
     */
    ArchiveId?: string;

    /**
     * <p>The optional description for the job. The description must be less than or equal to 1,024 bytes. The allowable characters are 7-bit ASCII without control codes-specifically, ASCII values 32-126 decimal or 0x20-0x7E hexadecimal.</p>
     */
    Description?: string;

    /**
     * <p>The Amazon SNS topic ARN to which Amazon Glacier sends a notification when the job is completed and the output is ready for you to download. The specified topic publishes the notification to its subscribers. The SNS topic must exist.</p>
     */
    SNSTopic?: string;

    /**
     * <p>The byte range to retrieve for an archive retrieval. in the form "<i>StartByteValue</i>-<i>EndByteValue</i>" If not specified, the whole archive is retrieved. If specified, the byte range must be megabyte (1024*1024) aligned which means that <i>StartByteValue</i> must be divisible by 1 MB and <i>EndByteValue</i> plus 1 must be divisible by 1 MB or be the end of the archive specified as the archive byte size value minus 1. If RetrievalByteRange is not megabyte aligned, this operation returns a 400 response. </p> <p>An error occurs if you specify this field for an inventory retrieval job request.</p>
     */
    RetrievalByteRange?: string;

    /**
     * <p>The tier to use for a select or an archive retrieval job. Valid values are <code>Expedited</code>, <code>Standard</code>, or <code>Bulk</code>. <code>Standard</code> is the default.</p>
     */
    Tier?: string;

    /**
     * <p>Input parameters used for range inventory retrieval.</p>
     */
    InventoryRetrievalParameters?: _InventoryRetrievalJobInput;

    /**
     * <p>Contains the parameters that define a job.</p>
     */
    SelectParameters?: _SelectParameters;

    /**
     * <p>Contains information about the location where the select job results are stored.</p>
     */
    OutputLocation?: _OutputLocation;
}

export interface _UnmarshalledJobParameters extends _JobParameters {
    /**
     * <p>Input parameters used for range inventory retrieval.</p>
     */
    InventoryRetrievalParameters?: _UnmarshalledInventoryRetrievalJobInput;

    /**
     * <p>Contains the parameters that define a job.</p>
     */
    SelectParameters?: _UnmarshalledSelectParameters;

    /**
     * <p>Contains information about the location where the select job results are stored.</p>
     */
    OutputLocation?: _UnmarshalledOutputLocation;
}