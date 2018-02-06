import {_UnmarshalledInventoryRetrievalJobDescription} from './_InventoryRetrievalJobDescription';
import {_UnmarshalledSelectParameters} from './_SelectParameters';
import {_UnmarshalledOutputLocation} from './_OutputLocation';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Contains the description of an Amazon Glacier job.</p>
 */
export interface DescribeJobOutput {
    /**
     * <p>An opaque string that identifies an Amazon Glacier job.</p>
     */
    JobId?: string;

    /**
     * <p>The job description provided when initiating the job.</p>
     */
    JobDescription?: string;

    /**
     * <p>The job type. This value is either <code>ArchiveRetrieval</code>, <code>InventoryRetrieval</code>, or <code>Select</code>. </p>
     */
    Action?: 'ArchiveRetrieval'|'InventoryRetrieval'|'Select'|string;

    /**
     * <p>The archive ID requested for a select job or archive retrieval. Otherwise, this field is null.</p>
     */
    ArchiveId?: string;

    /**
     * <p>The Amazon Resource Name (ARN) of the vault from which an archive retrieval was requested.</p>
     */
    VaultARN?: string;

    /**
     * <p>The UTC date when the job was created. This value is a string representation of ISO 8601 date format, for example <code>"2012-03-20T17:03:43.221Z"</code>.</p>
     */
    CreationDate?: string;

    /**
     * <p>The job status. When a job is completed, you get the job's output using Get Job Output (GET output).</p>
     */
    Completed?: boolean;

    /**
     * <p>The status code can be <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code>, and indicates the status of the job.</p>
     */
    StatusCode?: 'InProgress'|'Succeeded'|'Failed'|string;

    /**
     * <p>A friendly message that describes the job status.</p>
     */
    StatusMessage?: string;

    /**
     * <p>For an archive retrieval job, this value is the size in bytes of the archive being requested for download. For an inventory retrieval or select job, this value is null.</p>
     */
    ArchiveSizeInBytes?: number;

    /**
     * <p>For an inventory retrieval job, this value is the size in bytes of the inventory requested for download. For an archive retrieval or select job, this value is null.</p>
     */
    InventorySizeInBytes?: number;

    /**
     * <p>An Amazon SNS topic that receives notification.</p>
     */
    SNSTopic?: string;

    /**
     * <p>The UTC time that the job request completed. While the job is in progress, the value is null.</p>
     */
    CompletionDate?: string;

    /**
     * <p>For an archive retrieval job, this value is the checksum of the archive. Otherwise, this value is null.</p> <p>The SHA256 tree hash value for the requested range of an archive. If the <b>InitiateJob</b> request for an archive specified a tree-hash aligned range, then this field returns a value.</p> <p>If the whole archive is retrieved, this value is the same as the ArchiveSHA256TreeHash value.</p> <p>This field is null for the following:</p> <ul> <li> <p>Archive retrieval jobs that specify a range that is not tree-hash aligned</p> </li> </ul> <ul> <li> <p>Archival jobs that specify a range that is equal to the whole archive, when the job status is <code>InProgress</code> </p> </li> </ul> <ul> <li> <p>Inventory jobs</p> </li> <li> <p>Select jobs</p> </li> </ul>
     */
    SHA256TreeHash?: string;

    /**
     * <p>The SHA256 tree hash of the entire archive for an archive retrieval. For inventory retrieval or select jobs, this field is null.</p>
     */
    ArchiveSHA256TreeHash?: string;

    /**
     * <p>The retrieved byte range for archive retrieval jobs in the form <i>StartByteValue</i>-<i>EndByteValue</i>. If no range was specified in the archive retrieval, then the whole archive is retrieved. In this case, <i>StartByteValue</i> equals 0 and <i>EndByteValue</i> equals the size of the archive minus 1. For inventory retrieval or select jobs, this field is null. </p>
     */
    RetrievalByteRange?: string;

    /**
     * <p>The retrieval option to use for the archive retrieval. Valid values are <code>Expedited</code>, <code>Standard</code>, or <code>Bulk</code>. <code>Standard</code> is the default.</p>
     */
    Tier?: string;

    /**
     * <p>Parameters used for range inventory retrieval.</p>
     */
    InventoryRetrievalParameters?: _UnmarshalledInventoryRetrievalJobDescription;

    /**
     * <p>Contains the job output location.</p>
     */
    JobOutputPath?: string;

    /**
     * <p>Contains the parameters that define a select job.</p>
     */
    SelectParameters?: _UnmarshalledSelectParameters;

    /**
     * <p>Contains the location where the data from the select job is stored.</p>
     */
    OutputLocation?: _UnmarshalledOutputLocation;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}