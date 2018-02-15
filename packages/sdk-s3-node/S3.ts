import {S3Client} from './S3Client';
import {AbortMultipartUploadInput} from './types/AbortMultipartUploadInput';
import {AbortMultipartUploadOutput} from './types/AbortMultipartUploadOutput';
import {BucketAlreadyExists} from './types/BucketAlreadyExists';
import {BucketAlreadyOwnedByYou} from './types/BucketAlreadyOwnedByYou';
import {CompleteMultipartUploadInput} from './types/CompleteMultipartUploadInput';
import {CompleteMultipartUploadOutput} from './types/CompleteMultipartUploadOutput';
import {CopyObjectInput} from './types/CopyObjectInput';
import {CopyObjectOutput} from './types/CopyObjectOutput';
import {CreateBucketInput} from './types/CreateBucketInput';
import {CreateBucketOutput} from './types/CreateBucketOutput';
import {CreateMultipartUploadInput} from './types/CreateMultipartUploadInput';
import {CreateMultipartUploadOutput} from './types/CreateMultipartUploadOutput';
import {DeleteBucketAnalyticsConfigurationInput} from './types/DeleteBucketAnalyticsConfigurationInput';
import {DeleteBucketAnalyticsConfigurationOutput} from './types/DeleteBucketAnalyticsConfigurationOutput';
import {DeleteBucketCorsInput} from './types/DeleteBucketCorsInput';
import {DeleteBucketCorsOutput} from './types/DeleteBucketCorsOutput';
import {DeleteBucketEncryptionInput} from './types/DeleteBucketEncryptionInput';
import {DeleteBucketEncryptionOutput} from './types/DeleteBucketEncryptionOutput';
import {DeleteBucketInput} from './types/DeleteBucketInput';
import {DeleteBucketInventoryConfigurationInput} from './types/DeleteBucketInventoryConfigurationInput';
import {DeleteBucketInventoryConfigurationOutput} from './types/DeleteBucketInventoryConfigurationOutput';
import {DeleteBucketLifecycleInput} from './types/DeleteBucketLifecycleInput';
import {DeleteBucketLifecycleOutput} from './types/DeleteBucketLifecycleOutput';
import {DeleteBucketMetricsConfigurationInput} from './types/DeleteBucketMetricsConfigurationInput';
import {DeleteBucketMetricsConfigurationOutput} from './types/DeleteBucketMetricsConfigurationOutput';
import {DeleteBucketOutput} from './types/DeleteBucketOutput';
import {DeleteBucketPolicyInput} from './types/DeleteBucketPolicyInput';
import {DeleteBucketPolicyOutput} from './types/DeleteBucketPolicyOutput';
import {DeleteBucketReplicationInput} from './types/DeleteBucketReplicationInput';
import {DeleteBucketReplicationOutput} from './types/DeleteBucketReplicationOutput';
import {DeleteBucketTaggingInput} from './types/DeleteBucketTaggingInput';
import {DeleteBucketTaggingOutput} from './types/DeleteBucketTaggingOutput';
import {DeleteBucketWebsiteInput} from './types/DeleteBucketWebsiteInput';
import {DeleteBucketWebsiteOutput} from './types/DeleteBucketWebsiteOutput';
import {DeleteObjectInput} from './types/DeleteObjectInput';
import {DeleteObjectOutput} from './types/DeleteObjectOutput';
import {DeleteObjectTaggingInput} from './types/DeleteObjectTaggingInput';
import {DeleteObjectTaggingOutput} from './types/DeleteObjectTaggingOutput';
import {DeleteObjectsInput} from './types/DeleteObjectsInput';
import {DeleteObjectsOutput} from './types/DeleteObjectsOutput';
import {GetBucketAccelerateConfigurationInput} from './types/GetBucketAccelerateConfigurationInput';
import {GetBucketAccelerateConfigurationOutput} from './types/GetBucketAccelerateConfigurationOutput';
import {GetBucketAclInput} from './types/GetBucketAclInput';
import {GetBucketAclOutput} from './types/GetBucketAclOutput';
import {GetBucketAnalyticsConfigurationInput} from './types/GetBucketAnalyticsConfigurationInput';
import {GetBucketAnalyticsConfigurationOutput} from './types/GetBucketAnalyticsConfigurationOutput';
import {GetBucketCorsInput} from './types/GetBucketCorsInput';
import {GetBucketCorsOutput} from './types/GetBucketCorsOutput';
import {GetBucketEncryptionInput} from './types/GetBucketEncryptionInput';
import {GetBucketEncryptionOutput} from './types/GetBucketEncryptionOutput';
import {GetBucketInventoryConfigurationInput} from './types/GetBucketInventoryConfigurationInput';
import {GetBucketInventoryConfigurationOutput} from './types/GetBucketInventoryConfigurationOutput';
import {GetBucketLifecycleConfigurationInput} from './types/GetBucketLifecycleConfigurationInput';
import {GetBucketLifecycleConfigurationOutput} from './types/GetBucketLifecycleConfigurationOutput';
import {GetBucketLifecycleInput} from './types/GetBucketLifecycleInput';
import {GetBucketLifecycleOutput} from './types/GetBucketLifecycleOutput';
import {GetBucketLocationInput} from './types/GetBucketLocationInput';
import {GetBucketLocationOutput} from './types/GetBucketLocationOutput';
import {GetBucketLoggingInput} from './types/GetBucketLoggingInput';
import {GetBucketLoggingOutput} from './types/GetBucketLoggingOutput';
import {GetBucketMetricsConfigurationInput} from './types/GetBucketMetricsConfigurationInput';
import {GetBucketMetricsConfigurationOutput} from './types/GetBucketMetricsConfigurationOutput';
import {GetBucketNotificationConfigurationInput} from './types/GetBucketNotificationConfigurationInput';
import {GetBucketNotificationConfigurationOutput} from './types/GetBucketNotificationConfigurationOutput';
import {GetBucketNotificationInput} from './types/GetBucketNotificationInput';
import {GetBucketNotificationOutput} from './types/GetBucketNotificationOutput';
import {GetBucketPolicyInput} from './types/GetBucketPolicyInput';
import {GetBucketPolicyOutput} from './types/GetBucketPolicyOutput';
import {GetBucketReplicationInput} from './types/GetBucketReplicationInput';
import {GetBucketReplicationOutput} from './types/GetBucketReplicationOutput';
import {GetBucketRequestPaymentInput} from './types/GetBucketRequestPaymentInput';
import {GetBucketRequestPaymentOutput} from './types/GetBucketRequestPaymentOutput';
import {GetBucketTaggingInput} from './types/GetBucketTaggingInput';
import {GetBucketTaggingOutput} from './types/GetBucketTaggingOutput';
import {GetBucketVersioningInput} from './types/GetBucketVersioningInput';
import {GetBucketVersioningOutput} from './types/GetBucketVersioningOutput';
import {GetBucketWebsiteInput} from './types/GetBucketWebsiteInput';
import {GetBucketWebsiteOutput} from './types/GetBucketWebsiteOutput';
import {GetObjectAclInput} from './types/GetObjectAclInput';
import {GetObjectAclOutput} from './types/GetObjectAclOutput';
import {GetObjectInput} from './types/GetObjectInput';
import {GetObjectOutput} from './types/GetObjectOutput';
import {GetObjectTaggingInput} from './types/GetObjectTaggingInput';
import {GetObjectTaggingOutput} from './types/GetObjectTaggingOutput';
import {GetObjectTorrentInput} from './types/GetObjectTorrentInput';
import {GetObjectTorrentOutput} from './types/GetObjectTorrentOutput';
import {HeadBucketInput} from './types/HeadBucketInput';
import {HeadBucketOutput} from './types/HeadBucketOutput';
import {HeadObjectInput} from './types/HeadObjectInput';
import {HeadObjectOutput} from './types/HeadObjectOutput';
import {ListBucketAnalyticsConfigurationsInput} from './types/ListBucketAnalyticsConfigurationsInput';
import {ListBucketAnalyticsConfigurationsOutput} from './types/ListBucketAnalyticsConfigurationsOutput';
import {ListBucketInventoryConfigurationsInput} from './types/ListBucketInventoryConfigurationsInput';
import {ListBucketInventoryConfigurationsOutput} from './types/ListBucketInventoryConfigurationsOutput';
import {ListBucketMetricsConfigurationsInput} from './types/ListBucketMetricsConfigurationsInput';
import {ListBucketMetricsConfigurationsOutput} from './types/ListBucketMetricsConfigurationsOutput';
import {ListBucketsInput} from './types/ListBucketsInput';
import {ListBucketsOutput} from './types/ListBucketsOutput';
import {ListMultipartUploadsInput} from './types/ListMultipartUploadsInput';
import {ListMultipartUploadsOutput} from './types/ListMultipartUploadsOutput';
import {ListObjectVersionsInput} from './types/ListObjectVersionsInput';
import {ListObjectVersionsOutput} from './types/ListObjectVersionsOutput';
import {ListObjectsInput} from './types/ListObjectsInput';
import {ListObjectsOutput} from './types/ListObjectsOutput';
import {ListObjectsV2Input} from './types/ListObjectsV2Input';
import {ListObjectsV2Output} from './types/ListObjectsV2Output';
import {ListPartsInput} from './types/ListPartsInput';
import {ListPartsOutput} from './types/ListPartsOutput';
import {NoSuchBucket} from './types/NoSuchBucket';
import {NoSuchKey} from './types/NoSuchKey';
import {NoSuchUpload} from './types/NoSuchUpload';
import {ObjectAlreadyInActiveTierError} from './types/ObjectAlreadyInActiveTierError';
import {ObjectNotInActiveTierError} from './types/ObjectNotInActiveTierError';
import {PutBucketAccelerateConfigurationInput} from './types/PutBucketAccelerateConfigurationInput';
import {PutBucketAccelerateConfigurationOutput} from './types/PutBucketAccelerateConfigurationOutput';
import {PutBucketAclInput} from './types/PutBucketAclInput';
import {PutBucketAclOutput} from './types/PutBucketAclOutput';
import {PutBucketAnalyticsConfigurationInput} from './types/PutBucketAnalyticsConfigurationInput';
import {PutBucketAnalyticsConfigurationOutput} from './types/PutBucketAnalyticsConfigurationOutput';
import {PutBucketCorsInput} from './types/PutBucketCorsInput';
import {PutBucketCorsOutput} from './types/PutBucketCorsOutput';
import {PutBucketEncryptionInput} from './types/PutBucketEncryptionInput';
import {PutBucketEncryptionOutput} from './types/PutBucketEncryptionOutput';
import {PutBucketInventoryConfigurationInput} from './types/PutBucketInventoryConfigurationInput';
import {PutBucketInventoryConfigurationOutput} from './types/PutBucketInventoryConfigurationOutput';
import {PutBucketLifecycleConfigurationInput} from './types/PutBucketLifecycleConfigurationInput';
import {PutBucketLifecycleConfigurationOutput} from './types/PutBucketLifecycleConfigurationOutput';
import {PutBucketLifecycleInput} from './types/PutBucketLifecycleInput';
import {PutBucketLifecycleOutput} from './types/PutBucketLifecycleOutput';
import {PutBucketLoggingInput} from './types/PutBucketLoggingInput';
import {PutBucketLoggingOutput} from './types/PutBucketLoggingOutput';
import {PutBucketMetricsConfigurationInput} from './types/PutBucketMetricsConfigurationInput';
import {PutBucketMetricsConfigurationOutput} from './types/PutBucketMetricsConfigurationOutput';
import {PutBucketNotificationConfigurationInput} from './types/PutBucketNotificationConfigurationInput';
import {PutBucketNotificationConfigurationOutput} from './types/PutBucketNotificationConfigurationOutput';
import {PutBucketNotificationInput} from './types/PutBucketNotificationInput';
import {PutBucketNotificationOutput} from './types/PutBucketNotificationOutput';
import {PutBucketPolicyInput} from './types/PutBucketPolicyInput';
import {PutBucketPolicyOutput} from './types/PutBucketPolicyOutput';
import {PutBucketReplicationInput} from './types/PutBucketReplicationInput';
import {PutBucketReplicationOutput} from './types/PutBucketReplicationOutput';
import {PutBucketRequestPaymentInput} from './types/PutBucketRequestPaymentInput';
import {PutBucketRequestPaymentOutput} from './types/PutBucketRequestPaymentOutput';
import {PutBucketTaggingInput} from './types/PutBucketTaggingInput';
import {PutBucketTaggingOutput} from './types/PutBucketTaggingOutput';
import {PutBucketVersioningInput} from './types/PutBucketVersioningInput';
import {PutBucketVersioningOutput} from './types/PutBucketVersioningOutput';
import {PutBucketWebsiteInput} from './types/PutBucketWebsiteInput';
import {PutBucketWebsiteOutput} from './types/PutBucketWebsiteOutput';
import {PutObjectAclInput} from './types/PutObjectAclInput';
import {PutObjectAclOutput} from './types/PutObjectAclOutput';
import {PutObjectInput} from './types/PutObjectInput';
import {PutObjectOutput} from './types/PutObjectOutput';
import {PutObjectTaggingInput} from './types/PutObjectTaggingInput';
import {PutObjectTaggingOutput} from './types/PutObjectTaggingOutput';
import {RestoreObjectInput} from './types/RestoreObjectInput';
import {RestoreObjectOutput} from './types/RestoreObjectOutput';
import {UploadPartCopyInput} from './types/UploadPartCopyInput';
import {UploadPartCopyOutput} from './types/UploadPartCopyOutput';
import {UploadPartInput} from './types/UploadPartInput';
import {UploadPartOutput} from './types/UploadPartOutput';
import {AbortMultipartUploadCommand} from './commands/AbortMultipartUploadCommand';
import {CompleteMultipartUploadCommand} from './commands/CompleteMultipartUploadCommand';
import {CopyObjectCommand} from './commands/CopyObjectCommand';
import {CreateBucketCommand} from './commands/CreateBucketCommand';
import {CreateMultipartUploadCommand} from './commands/CreateMultipartUploadCommand';
import {DeleteBucketAnalyticsConfigurationCommand} from './commands/DeleteBucketAnalyticsConfigurationCommand';
import {DeleteBucketCommand} from './commands/DeleteBucketCommand';
import {DeleteBucketCorsCommand} from './commands/DeleteBucketCorsCommand';
import {DeleteBucketEncryptionCommand} from './commands/DeleteBucketEncryptionCommand';
import {DeleteBucketInventoryConfigurationCommand} from './commands/DeleteBucketInventoryConfigurationCommand';
import {DeleteBucketLifecycleCommand} from './commands/DeleteBucketLifecycleCommand';
import {DeleteBucketMetricsConfigurationCommand} from './commands/DeleteBucketMetricsConfigurationCommand';
import {DeleteBucketPolicyCommand} from './commands/DeleteBucketPolicyCommand';
import {DeleteBucketReplicationCommand} from './commands/DeleteBucketReplicationCommand';
import {DeleteBucketTaggingCommand} from './commands/DeleteBucketTaggingCommand';
import {DeleteBucketWebsiteCommand} from './commands/DeleteBucketWebsiteCommand';
import {DeleteObjectCommand} from './commands/DeleteObjectCommand';
import {DeleteObjectTaggingCommand} from './commands/DeleteObjectTaggingCommand';
import {DeleteObjectsCommand} from './commands/DeleteObjectsCommand';
import {GetBucketAccelerateConfigurationCommand} from './commands/GetBucketAccelerateConfigurationCommand';
import {GetBucketAclCommand} from './commands/GetBucketAclCommand';
import {GetBucketAnalyticsConfigurationCommand} from './commands/GetBucketAnalyticsConfigurationCommand';
import {GetBucketCorsCommand} from './commands/GetBucketCorsCommand';
import {GetBucketEncryptionCommand} from './commands/GetBucketEncryptionCommand';
import {GetBucketInventoryConfigurationCommand} from './commands/GetBucketInventoryConfigurationCommand';
import {GetBucketLifecycleCommand} from './commands/GetBucketLifecycleCommand';
import {GetBucketLifecycleConfigurationCommand} from './commands/GetBucketLifecycleConfigurationCommand';
import {GetBucketLocationCommand} from './commands/GetBucketLocationCommand';
import {GetBucketLoggingCommand} from './commands/GetBucketLoggingCommand';
import {GetBucketMetricsConfigurationCommand} from './commands/GetBucketMetricsConfigurationCommand';
import {GetBucketNotificationCommand} from './commands/GetBucketNotificationCommand';
import {GetBucketNotificationConfigurationCommand} from './commands/GetBucketNotificationConfigurationCommand';
import {GetBucketPolicyCommand} from './commands/GetBucketPolicyCommand';
import {GetBucketReplicationCommand} from './commands/GetBucketReplicationCommand';
import {GetBucketRequestPaymentCommand} from './commands/GetBucketRequestPaymentCommand';
import {GetBucketTaggingCommand} from './commands/GetBucketTaggingCommand';
import {GetBucketVersioningCommand} from './commands/GetBucketVersioningCommand';
import {GetBucketWebsiteCommand} from './commands/GetBucketWebsiteCommand';
import {GetObjectAclCommand} from './commands/GetObjectAclCommand';
import {GetObjectCommand} from './commands/GetObjectCommand';
import {GetObjectTaggingCommand} from './commands/GetObjectTaggingCommand';
import {GetObjectTorrentCommand} from './commands/GetObjectTorrentCommand';
import {HeadBucketCommand} from './commands/HeadBucketCommand';
import {HeadObjectCommand} from './commands/HeadObjectCommand';
import {ListBucketAnalyticsConfigurationsCommand} from './commands/ListBucketAnalyticsConfigurationsCommand';
import {ListBucketInventoryConfigurationsCommand} from './commands/ListBucketInventoryConfigurationsCommand';
import {ListBucketMetricsConfigurationsCommand} from './commands/ListBucketMetricsConfigurationsCommand';
import {ListBucketsCommand} from './commands/ListBucketsCommand';
import {ListMultipartUploadsCommand} from './commands/ListMultipartUploadsCommand';
import {ListObjectVersionsCommand} from './commands/ListObjectVersionsCommand';
import {ListObjectsCommand} from './commands/ListObjectsCommand';
import {ListObjectsV2Command} from './commands/ListObjectsV2Command';
import {ListPartsCommand} from './commands/ListPartsCommand';
import {PutBucketAccelerateConfigurationCommand} from './commands/PutBucketAccelerateConfigurationCommand';
import {PutBucketAclCommand} from './commands/PutBucketAclCommand';
import {PutBucketAnalyticsConfigurationCommand} from './commands/PutBucketAnalyticsConfigurationCommand';
import {PutBucketCorsCommand} from './commands/PutBucketCorsCommand';
import {PutBucketEncryptionCommand} from './commands/PutBucketEncryptionCommand';
import {PutBucketInventoryConfigurationCommand} from './commands/PutBucketInventoryConfigurationCommand';
import {PutBucketLifecycleCommand} from './commands/PutBucketLifecycleCommand';
import {PutBucketLifecycleConfigurationCommand} from './commands/PutBucketLifecycleConfigurationCommand';
import {PutBucketLoggingCommand} from './commands/PutBucketLoggingCommand';
import {PutBucketMetricsConfigurationCommand} from './commands/PutBucketMetricsConfigurationCommand';
import {PutBucketNotificationCommand} from './commands/PutBucketNotificationCommand';
import {PutBucketNotificationConfigurationCommand} from './commands/PutBucketNotificationConfigurationCommand';
import {PutBucketPolicyCommand} from './commands/PutBucketPolicyCommand';
import {PutBucketReplicationCommand} from './commands/PutBucketReplicationCommand';
import {PutBucketRequestPaymentCommand} from './commands/PutBucketRequestPaymentCommand';
import {PutBucketTaggingCommand} from './commands/PutBucketTaggingCommand';
import {PutBucketVersioningCommand} from './commands/PutBucketVersioningCommand';
import {PutBucketWebsiteCommand} from './commands/PutBucketWebsiteCommand';
import {PutObjectAclCommand} from './commands/PutObjectAclCommand';
import {PutObjectCommand} from './commands/PutObjectCommand';
import {PutObjectTaggingCommand} from './commands/PutObjectTaggingCommand';
import {RestoreObjectCommand} from './commands/RestoreObjectCommand';
import {UploadPartCommand} from './commands/UploadPartCommand';
import {UploadPartCopyCommand} from './commands/UploadPartCopyCommand';

export class S3 extends S3Client {
    /**
     * AbortMultipartUpload operation
     *
     * This operation may fail with one of the following errors:
     *   - {NoSuchUpload} NoSuchUpload shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public abortMultipartUpload(args: AbortMultipartUploadInput): Promise<AbortMultipartUploadOutput>;
    public abortMultipartUpload(
        args: AbortMultipartUploadInput,
        cb: (err: any, data?: AbortMultipartUploadOutput) => void
    ): void;
    public abortMultipartUpload(
        args: AbortMultipartUploadInput,
        cb?: (err: any, data?: AbortMultipartUploadOutput) => void
    ): Promise<AbortMultipartUploadOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new AbortMultipartUploadCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * CompleteMultipartUpload operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public completeMultipartUpload(args: CompleteMultipartUploadInput): Promise<CompleteMultipartUploadOutput>;
    public completeMultipartUpload(
        args: CompleteMultipartUploadInput,
        cb: (err: any, data?: CompleteMultipartUploadOutput) => void
    ): void;
    public completeMultipartUpload(
        args: CompleteMultipartUploadInput,
        cb?: (err: any, data?: CompleteMultipartUploadOutput) => void
    ): Promise<CompleteMultipartUploadOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CompleteMultipartUploadCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * CopyObject operation
     *
     * This operation may fail with one of the following errors:
     *   - {ObjectNotInActiveTierError} ObjectNotInActiveTierError shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public copyObject(args: CopyObjectInput): Promise<CopyObjectOutput>;
    public copyObject(
        args: CopyObjectInput,
        cb: (err: any, data?: CopyObjectOutput) => void
    ): void;
    public copyObject(
        args: CopyObjectInput,
        cb?: (err: any, data?: CopyObjectOutput) => void
    ): Promise<CopyObjectOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CopyObjectCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * CreateBucket operation
     *
     * This operation may fail with one of the following errors:
     *   - {BucketAlreadyExists} BucketAlreadyExists shape
     *   - {BucketAlreadyOwnedByYou} BucketAlreadyOwnedByYou shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createBucket(args: CreateBucketInput): Promise<CreateBucketOutput>;
    public createBucket(
        args: CreateBucketInput,
        cb: (err: any, data?: CreateBucketOutput) => void
    ): void;
    public createBucket(
        args: CreateBucketInput,
        cb?: (err: any, data?: CreateBucketOutput) => void
    ): Promise<CreateBucketOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateBucketCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * CreateMultipartUpload operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createMultipartUpload(args: CreateMultipartUploadInput): Promise<CreateMultipartUploadOutput>;
    public createMultipartUpload(
        args: CreateMultipartUploadInput,
        cb: (err: any, data?: CreateMultipartUploadOutput) => void
    ): void;
    public createMultipartUpload(
        args: CreateMultipartUploadInput,
        cb?: (err: any, data?: CreateMultipartUploadOutput) => void
    ): Promise<CreateMultipartUploadOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateMultipartUploadCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteBucket operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBucket(args: DeleteBucketInput): Promise<DeleteBucketOutput>;
    public deleteBucket(
        args: DeleteBucketInput,
        cb: (err: any, data?: DeleteBucketOutput) => void
    ): void;
    public deleteBucket(
        args: DeleteBucketInput,
        cb?: (err: any, data?: DeleteBucketOutput) => void
    ): Promise<DeleteBucketOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBucketCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteBucketAnalyticsConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBucketAnalyticsConfiguration(args: DeleteBucketAnalyticsConfigurationInput): Promise<DeleteBucketAnalyticsConfigurationOutput>;
    public deleteBucketAnalyticsConfiguration(
        args: DeleteBucketAnalyticsConfigurationInput,
        cb: (err: any, data?: DeleteBucketAnalyticsConfigurationOutput) => void
    ): void;
    public deleteBucketAnalyticsConfiguration(
        args: DeleteBucketAnalyticsConfigurationInput,
        cb?: (err: any, data?: DeleteBucketAnalyticsConfigurationOutput) => void
    ): Promise<DeleteBucketAnalyticsConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBucketAnalyticsConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteBucketCors operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBucketCors(args: DeleteBucketCorsInput): Promise<DeleteBucketCorsOutput>;
    public deleteBucketCors(
        args: DeleteBucketCorsInput,
        cb: (err: any, data?: DeleteBucketCorsOutput) => void
    ): void;
    public deleteBucketCors(
        args: DeleteBucketCorsInput,
        cb?: (err: any, data?: DeleteBucketCorsOutput) => void
    ): Promise<DeleteBucketCorsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBucketCorsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteBucketEncryption operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBucketEncryption(args: DeleteBucketEncryptionInput): Promise<DeleteBucketEncryptionOutput>;
    public deleteBucketEncryption(
        args: DeleteBucketEncryptionInput,
        cb: (err: any, data?: DeleteBucketEncryptionOutput) => void
    ): void;
    public deleteBucketEncryption(
        args: DeleteBucketEncryptionInput,
        cb?: (err: any, data?: DeleteBucketEncryptionOutput) => void
    ): Promise<DeleteBucketEncryptionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBucketEncryptionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteBucketInventoryConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBucketInventoryConfiguration(args: DeleteBucketInventoryConfigurationInput): Promise<DeleteBucketInventoryConfigurationOutput>;
    public deleteBucketInventoryConfiguration(
        args: DeleteBucketInventoryConfigurationInput,
        cb: (err: any, data?: DeleteBucketInventoryConfigurationOutput) => void
    ): void;
    public deleteBucketInventoryConfiguration(
        args: DeleteBucketInventoryConfigurationInput,
        cb?: (err: any, data?: DeleteBucketInventoryConfigurationOutput) => void
    ): Promise<DeleteBucketInventoryConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBucketInventoryConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteBucketLifecycle operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBucketLifecycle(args: DeleteBucketLifecycleInput): Promise<DeleteBucketLifecycleOutput>;
    public deleteBucketLifecycle(
        args: DeleteBucketLifecycleInput,
        cb: (err: any, data?: DeleteBucketLifecycleOutput) => void
    ): void;
    public deleteBucketLifecycle(
        args: DeleteBucketLifecycleInput,
        cb?: (err: any, data?: DeleteBucketLifecycleOutput) => void
    ): Promise<DeleteBucketLifecycleOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBucketLifecycleCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteBucketMetricsConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBucketMetricsConfiguration(args: DeleteBucketMetricsConfigurationInput): Promise<DeleteBucketMetricsConfigurationOutput>;
    public deleteBucketMetricsConfiguration(
        args: DeleteBucketMetricsConfigurationInput,
        cb: (err: any, data?: DeleteBucketMetricsConfigurationOutput) => void
    ): void;
    public deleteBucketMetricsConfiguration(
        args: DeleteBucketMetricsConfigurationInput,
        cb?: (err: any, data?: DeleteBucketMetricsConfigurationOutput) => void
    ): Promise<DeleteBucketMetricsConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBucketMetricsConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteBucketPolicy operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBucketPolicy(args: DeleteBucketPolicyInput): Promise<DeleteBucketPolicyOutput>;
    public deleteBucketPolicy(
        args: DeleteBucketPolicyInput,
        cb: (err: any, data?: DeleteBucketPolicyOutput) => void
    ): void;
    public deleteBucketPolicy(
        args: DeleteBucketPolicyInput,
        cb?: (err: any, data?: DeleteBucketPolicyOutput) => void
    ): Promise<DeleteBucketPolicyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBucketPolicyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteBucketReplication operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBucketReplication(args: DeleteBucketReplicationInput): Promise<DeleteBucketReplicationOutput>;
    public deleteBucketReplication(
        args: DeleteBucketReplicationInput,
        cb: (err: any, data?: DeleteBucketReplicationOutput) => void
    ): void;
    public deleteBucketReplication(
        args: DeleteBucketReplicationInput,
        cb?: (err: any, data?: DeleteBucketReplicationOutput) => void
    ): Promise<DeleteBucketReplicationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBucketReplicationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteBucketTagging operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBucketTagging(args: DeleteBucketTaggingInput): Promise<DeleteBucketTaggingOutput>;
    public deleteBucketTagging(
        args: DeleteBucketTaggingInput,
        cb: (err: any, data?: DeleteBucketTaggingOutput) => void
    ): void;
    public deleteBucketTagging(
        args: DeleteBucketTaggingInput,
        cb?: (err: any, data?: DeleteBucketTaggingOutput) => void
    ): Promise<DeleteBucketTaggingOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBucketTaggingCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteBucketWebsite operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBucketWebsite(args: DeleteBucketWebsiteInput): Promise<DeleteBucketWebsiteOutput>;
    public deleteBucketWebsite(
        args: DeleteBucketWebsiteInput,
        cb: (err: any, data?: DeleteBucketWebsiteOutput) => void
    ): void;
    public deleteBucketWebsite(
        args: DeleteBucketWebsiteInput,
        cb?: (err: any, data?: DeleteBucketWebsiteOutput) => void
    ): Promise<DeleteBucketWebsiteOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBucketWebsiteCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteObject operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteObject(args: DeleteObjectInput): Promise<DeleteObjectOutput>;
    public deleteObject(
        args: DeleteObjectInput,
        cb: (err: any, data?: DeleteObjectOutput) => void
    ): void;
    public deleteObject(
        args: DeleteObjectInput,
        cb?: (err: any, data?: DeleteObjectOutput) => void
    ): Promise<DeleteObjectOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteObjectCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteObjectTagging operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteObjectTagging(args: DeleteObjectTaggingInput): Promise<DeleteObjectTaggingOutput>;
    public deleteObjectTagging(
        args: DeleteObjectTaggingInput,
        cb: (err: any, data?: DeleteObjectTaggingOutput) => void
    ): void;
    public deleteObjectTagging(
        args: DeleteObjectTaggingInput,
        cb?: (err: any, data?: DeleteObjectTaggingOutput) => void
    ): Promise<DeleteObjectTaggingOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteObjectTaggingCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteObjects operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteObjects(args: DeleteObjectsInput): Promise<DeleteObjectsOutput>;
    public deleteObjects(
        args: DeleteObjectsInput,
        cb: (err: any, data?: DeleteObjectsOutput) => void
    ): void;
    public deleteObjects(
        args: DeleteObjectsInput,
        cb?: (err: any, data?: DeleteObjectsOutput) => void
    ): Promise<DeleteObjectsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteObjectsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketAccelerateConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketAccelerateConfiguration(args: GetBucketAccelerateConfigurationInput): Promise<GetBucketAccelerateConfigurationOutput>;
    public getBucketAccelerateConfiguration(
        args: GetBucketAccelerateConfigurationInput,
        cb: (err: any, data?: GetBucketAccelerateConfigurationOutput) => void
    ): void;
    public getBucketAccelerateConfiguration(
        args: GetBucketAccelerateConfigurationInput,
        cb?: (err: any, data?: GetBucketAccelerateConfigurationOutput) => void
    ): Promise<GetBucketAccelerateConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketAccelerateConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketAcl operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketAcl(args: GetBucketAclInput): Promise<GetBucketAclOutput>;
    public getBucketAcl(
        args: GetBucketAclInput,
        cb: (err: any, data?: GetBucketAclOutput) => void
    ): void;
    public getBucketAcl(
        args: GetBucketAclInput,
        cb?: (err: any, data?: GetBucketAclOutput) => void
    ): Promise<GetBucketAclOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketAclCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketAnalyticsConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketAnalyticsConfiguration(args: GetBucketAnalyticsConfigurationInput): Promise<GetBucketAnalyticsConfigurationOutput>;
    public getBucketAnalyticsConfiguration(
        args: GetBucketAnalyticsConfigurationInput,
        cb: (err: any, data?: GetBucketAnalyticsConfigurationOutput) => void
    ): void;
    public getBucketAnalyticsConfiguration(
        args: GetBucketAnalyticsConfigurationInput,
        cb?: (err: any, data?: GetBucketAnalyticsConfigurationOutput) => void
    ): Promise<GetBucketAnalyticsConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketAnalyticsConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketCors operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketCors(args: GetBucketCorsInput): Promise<GetBucketCorsOutput>;
    public getBucketCors(
        args: GetBucketCorsInput,
        cb: (err: any, data?: GetBucketCorsOutput) => void
    ): void;
    public getBucketCors(
        args: GetBucketCorsInput,
        cb?: (err: any, data?: GetBucketCorsOutput) => void
    ): Promise<GetBucketCorsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketCorsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketEncryption operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketEncryption(args: GetBucketEncryptionInput): Promise<GetBucketEncryptionOutput>;
    public getBucketEncryption(
        args: GetBucketEncryptionInput,
        cb: (err: any, data?: GetBucketEncryptionOutput) => void
    ): void;
    public getBucketEncryption(
        args: GetBucketEncryptionInput,
        cb?: (err: any, data?: GetBucketEncryptionOutput) => void
    ): Promise<GetBucketEncryptionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketEncryptionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketInventoryConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketInventoryConfiguration(args: GetBucketInventoryConfigurationInput): Promise<GetBucketInventoryConfigurationOutput>;
    public getBucketInventoryConfiguration(
        args: GetBucketInventoryConfigurationInput,
        cb: (err: any, data?: GetBucketInventoryConfigurationOutput) => void
    ): void;
    public getBucketInventoryConfiguration(
        args: GetBucketInventoryConfigurationInput,
        cb?: (err: any, data?: GetBucketInventoryConfigurationOutput) => void
    ): Promise<GetBucketInventoryConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketInventoryConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketLifecycle operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketLifecycle(args: GetBucketLifecycleInput): Promise<GetBucketLifecycleOutput>;
    public getBucketLifecycle(
        args: GetBucketLifecycleInput,
        cb: (err: any, data?: GetBucketLifecycleOutput) => void
    ): void;
    public getBucketLifecycle(
        args: GetBucketLifecycleInput,
        cb?: (err: any, data?: GetBucketLifecycleOutput) => void
    ): Promise<GetBucketLifecycleOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketLifecycleCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketLifecycleConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketLifecycleConfiguration(args: GetBucketLifecycleConfigurationInput): Promise<GetBucketLifecycleConfigurationOutput>;
    public getBucketLifecycleConfiguration(
        args: GetBucketLifecycleConfigurationInput,
        cb: (err: any, data?: GetBucketLifecycleConfigurationOutput) => void
    ): void;
    public getBucketLifecycleConfiguration(
        args: GetBucketLifecycleConfigurationInput,
        cb?: (err: any, data?: GetBucketLifecycleConfigurationOutput) => void
    ): Promise<GetBucketLifecycleConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketLifecycleConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketLocation operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketLocation(args: GetBucketLocationInput): Promise<GetBucketLocationOutput>;
    public getBucketLocation(
        args: GetBucketLocationInput,
        cb: (err: any, data?: GetBucketLocationOutput) => void
    ): void;
    public getBucketLocation(
        args: GetBucketLocationInput,
        cb?: (err: any, data?: GetBucketLocationOutput) => void
    ): Promise<GetBucketLocationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketLocationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketLogging operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketLogging(args: GetBucketLoggingInput): Promise<GetBucketLoggingOutput>;
    public getBucketLogging(
        args: GetBucketLoggingInput,
        cb: (err: any, data?: GetBucketLoggingOutput) => void
    ): void;
    public getBucketLogging(
        args: GetBucketLoggingInput,
        cb?: (err: any, data?: GetBucketLoggingOutput) => void
    ): Promise<GetBucketLoggingOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketLoggingCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketMetricsConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketMetricsConfiguration(args: GetBucketMetricsConfigurationInput): Promise<GetBucketMetricsConfigurationOutput>;
    public getBucketMetricsConfiguration(
        args: GetBucketMetricsConfigurationInput,
        cb: (err: any, data?: GetBucketMetricsConfigurationOutput) => void
    ): void;
    public getBucketMetricsConfiguration(
        args: GetBucketMetricsConfigurationInput,
        cb?: (err: any, data?: GetBucketMetricsConfigurationOutput) => void
    ): Promise<GetBucketMetricsConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketMetricsConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketNotification operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketNotification(args: GetBucketNotificationInput): Promise<GetBucketNotificationOutput>;
    public getBucketNotification(
        args: GetBucketNotificationInput,
        cb: (err: any, data?: GetBucketNotificationOutput) => void
    ): void;
    public getBucketNotification(
        args: GetBucketNotificationInput,
        cb?: (err: any, data?: GetBucketNotificationOutput) => void
    ): Promise<GetBucketNotificationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketNotificationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketNotificationConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketNotificationConfiguration(args: GetBucketNotificationConfigurationInput): Promise<GetBucketNotificationConfigurationOutput>;
    public getBucketNotificationConfiguration(
        args: GetBucketNotificationConfigurationInput,
        cb: (err: any, data?: GetBucketNotificationConfigurationOutput) => void
    ): void;
    public getBucketNotificationConfiguration(
        args: GetBucketNotificationConfigurationInput,
        cb?: (err: any, data?: GetBucketNotificationConfigurationOutput) => void
    ): Promise<GetBucketNotificationConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketNotificationConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketPolicy operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketPolicy(args: GetBucketPolicyInput): Promise<GetBucketPolicyOutput>;
    public getBucketPolicy(
        args: GetBucketPolicyInput,
        cb: (err: any, data?: GetBucketPolicyOutput) => void
    ): void;
    public getBucketPolicy(
        args: GetBucketPolicyInput,
        cb?: (err: any, data?: GetBucketPolicyOutput) => void
    ): Promise<GetBucketPolicyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketPolicyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketReplication operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketReplication(args: GetBucketReplicationInput): Promise<GetBucketReplicationOutput>;
    public getBucketReplication(
        args: GetBucketReplicationInput,
        cb: (err: any, data?: GetBucketReplicationOutput) => void
    ): void;
    public getBucketReplication(
        args: GetBucketReplicationInput,
        cb?: (err: any, data?: GetBucketReplicationOutput) => void
    ): Promise<GetBucketReplicationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketReplicationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketRequestPayment operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketRequestPayment(args: GetBucketRequestPaymentInput): Promise<GetBucketRequestPaymentOutput>;
    public getBucketRequestPayment(
        args: GetBucketRequestPaymentInput,
        cb: (err: any, data?: GetBucketRequestPaymentOutput) => void
    ): void;
    public getBucketRequestPayment(
        args: GetBucketRequestPaymentInput,
        cb?: (err: any, data?: GetBucketRequestPaymentOutput) => void
    ): Promise<GetBucketRequestPaymentOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketRequestPaymentCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketTagging operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketTagging(args: GetBucketTaggingInput): Promise<GetBucketTaggingOutput>;
    public getBucketTagging(
        args: GetBucketTaggingInput,
        cb: (err: any, data?: GetBucketTaggingOutput) => void
    ): void;
    public getBucketTagging(
        args: GetBucketTaggingInput,
        cb?: (err: any, data?: GetBucketTaggingOutput) => void
    ): Promise<GetBucketTaggingOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketTaggingCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketVersioning operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketVersioning(args: GetBucketVersioningInput): Promise<GetBucketVersioningOutput>;
    public getBucketVersioning(
        args: GetBucketVersioningInput,
        cb: (err: any, data?: GetBucketVersioningOutput) => void
    ): void;
    public getBucketVersioning(
        args: GetBucketVersioningInput,
        cb?: (err: any, data?: GetBucketVersioningOutput) => void
    ): Promise<GetBucketVersioningOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketVersioningCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetBucketWebsite operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBucketWebsite(args: GetBucketWebsiteInput): Promise<GetBucketWebsiteOutput>;
    public getBucketWebsite(
        args: GetBucketWebsiteInput,
        cb: (err: any, data?: GetBucketWebsiteOutput) => void
    ): void;
    public getBucketWebsite(
        args: GetBucketWebsiteInput,
        cb?: (err: any, data?: GetBucketWebsiteOutput) => void
    ): Promise<GetBucketWebsiteOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBucketWebsiteCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetObject operation
     *
     * This operation may fail with one of the following errors:
     *   - {NoSuchKey} NoSuchKey shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getObject(args: GetObjectInput): Promise<GetObjectOutput>;
    public getObject(
        args: GetObjectInput,
        cb: (err: any, data?: GetObjectOutput) => void
    ): void;
    public getObject(
        args: GetObjectInput,
        cb?: (err: any, data?: GetObjectOutput) => void
    ): Promise<GetObjectOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetObjectCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetObjectAcl operation
     *
     * This operation may fail with one of the following errors:
     *   - {NoSuchKey} NoSuchKey shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getObjectAcl(args: GetObjectAclInput): Promise<GetObjectAclOutput>;
    public getObjectAcl(
        args: GetObjectAclInput,
        cb: (err: any, data?: GetObjectAclOutput) => void
    ): void;
    public getObjectAcl(
        args: GetObjectAclInput,
        cb?: (err: any, data?: GetObjectAclOutput) => void
    ): Promise<GetObjectAclOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetObjectAclCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetObjectTagging operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getObjectTagging(args: GetObjectTaggingInput): Promise<GetObjectTaggingOutput>;
    public getObjectTagging(
        args: GetObjectTaggingInput,
        cb: (err: any, data?: GetObjectTaggingOutput) => void
    ): void;
    public getObjectTagging(
        args: GetObjectTaggingInput,
        cb?: (err: any, data?: GetObjectTaggingOutput) => void
    ): Promise<GetObjectTaggingOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetObjectTaggingCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetObjectTorrent operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getObjectTorrent(args: GetObjectTorrentInput): Promise<GetObjectTorrentOutput>;
    public getObjectTorrent(
        args: GetObjectTorrentInput,
        cb: (err: any, data?: GetObjectTorrentOutput) => void
    ): void;
    public getObjectTorrent(
        args: GetObjectTorrentInput,
        cb?: (err: any, data?: GetObjectTorrentOutput) => void
    ): Promise<GetObjectTorrentOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetObjectTorrentCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * HeadBucket operation
     *
     * This operation may fail with one of the following errors:
     *   - {NoSuchBucket} NoSuchBucket shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public headBucket(args: HeadBucketInput): Promise<HeadBucketOutput>;
    public headBucket(
        args: HeadBucketInput,
        cb: (err: any, data?: HeadBucketOutput) => void
    ): void;
    public headBucket(
        args: HeadBucketInput,
        cb?: (err: any, data?: HeadBucketOutput) => void
    ): Promise<HeadBucketOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new HeadBucketCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * HeadObject operation
     *
     * This operation may fail with one of the following errors:
     *   - {NoSuchKey} NoSuchKey shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public headObject(args: HeadObjectInput): Promise<HeadObjectOutput>;
    public headObject(
        args: HeadObjectInput,
        cb: (err: any, data?: HeadObjectOutput) => void
    ): void;
    public headObject(
        args: HeadObjectInput,
        cb?: (err: any, data?: HeadObjectOutput) => void
    ): Promise<HeadObjectOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new HeadObjectCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * ListBucketAnalyticsConfigurations operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listBucketAnalyticsConfigurations(args: ListBucketAnalyticsConfigurationsInput): Promise<ListBucketAnalyticsConfigurationsOutput>;
    public listBucketAnalyticsConfigurations(
        args: ListBucketAnalyticsConfigurationsInput,
        cb: (err: any, data?: ListBucketAnalyticsConfigurationsOutput) => void
    ): void;
    public listBucketAnalyticsConfigurations(
        args: ListBucketAnalyticsConfigurationsInput,
        cb?: (err: any, data?: ListBucketAnalyticsConfigurationsOutput) => void
    ): Promise<ListBucketAnalyticsConfigurationsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListBucketAnalyticsConfigurationsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * ListBucketInventoryConfigurations operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listBucketInventoryConfigurations(args: ListBucketInventoryConfigurationsInput): Promise<ListBucketInventoryConfigurationsOutput>;
    public listBucketInventoryConfigurations(
        args: ListBucketInventoryConfigurationsInput,
        cb: (err: any, data?: ListBucketInventoryConfigurationsOutput) => void
    ): void;
    public listBucketInventoryConfigurations(
        args: ListBucketInventoryConfigurationsInput,
        cb?: (err: any, data?: ListBucketInventoryConfigurationsOutput) => void
    ): Promise<ListBucketInventoryConfigurationsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListBucketInventoryConfigurationsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * ListBucketMetricsConfigurations operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listBucketMetricsConfigurations(args: ListBucketMetricsConfigurationsInput): Promise<ListBucketMetricsConfigurationsOutput>;
    public listBucketMetricsConfigurations(
        args: ListBucketMetricsConfigurationsInput,
        cb: (err: any, data?: ListBucketMetricsConfigurationsOutput) => void
    ): void;
    public listBucketMetricsConfigurations(
        args: ListBucketMetricsConfigurationsInput,
        cb?: (err: any, data?: ListBucketMetricsConfigurationsOutput) => void
    ): Promise<ListBucketMetricsConfigurationsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListBucketMetricsConfigurationsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * ListBuckets operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listBuckets(args: ListBucketsInput): Promise<ListBucketsOutput>;
    public listBuckets(
        args: ListBucketsInput,
        cb: (err: any, data?: ListBucketsOutput) => void
    ): void;
    public listBuckets(
        args: ListBucketsInput,
        cb?: (err: any, data?: ListBucketsOutput) => void
    ): Promise<ListBucketsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListBucketsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * ListMultipartUploads operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listMultipartUploads(args: ListMultipartUploadsInput): Promise<ListMultipartUploadsOutput>;
    public listMultipartUploads(
        args: ListMultipartUploadsInput,
        cb: (err: any, data?: ListMultipartUploadsOutput) => void
    ): void;
    public listMultipartUploads(
        args: ListMultipartUploadsInput,
        cb?: (err: any, data?: ListMultipartUploadsOutput) => void
    ): Promise<ListMultipartUploadsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListMultipartUploadsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * ListObjectVersions operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listObjectVersions(args: ListObjectVersionsInput): Promise<ListObjectVersionsOutput>;
    public listObjectVersions(
        args: ListObjectVersionsInput,
        cb: (err: any, data?: ListObjectVersionsOutput) => void
    ): void;
    public listObjectVersions(
        args: ListObjectVersionsInput,
        cb?: (err: any, data?: ListObjectVersionsOutput) => void
    ): Promise<ListObjectVersionsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListObjectVersionsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * ListObjects operation
     *
     * This operation may fail with one of the following errors:
     *   - {NoSuchBucket} NoSuchBucket shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listObjects(args: ListObjectsInput): Promise<ListObjectsOutput>;
    public listObjects(
        args: ListObjectsInput,
        cb: (err: any, data?: ListObjectsOutput) => void
    ): void;
    public listObjects(
        args: ListObjectsInput,
        cb?: (err: any, data?: ListObjectsOutput) => void
    ): Promise<ListObjectsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListObjectsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * ListObjectsV2 operation
     *
     * This operation may fail with one of the following errors:
     *   - {NoSuchBucket} NoSuchBucket shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listObjectsV2(args: ListObjectsV2Input): Promise<ListObjectsV2Output>;
    public listObjectsV2(
        args: ListObjectsV2Input,
        cb: (err: any, data?: ListObjectsV2Output) => void
    ): void;
    public listObjectsV2(
        args: ListObjectsV2Input,
        cb?: (err: any, data?: ListObjectsV2Output) => void
    ): Promise<ListObjectsV2Output>|void {
        // create the appropriate command and pass it to .send
        const command = new ListObjectsV2Command(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * ListParts operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listParts(args: ListPartsInput): Promise<ListPartsOutput>;
    public listParts(
        args: ListPartsInput,
        cb: (err: any, data?: ListPartsOutput) => void
    ): void;
    public listParts(
        args: ListPartsInput,
        cb?: (err: any, data?: ListPartsOutput) => void
    ): Promise<ListPartsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListPartsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketAccelerateConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketAccelerateConfiguration(args: PutBucketAccelerateConfigurationInput): Promise<PutBucketAccelerateConfigurationOutput>;
    public putBucketAccelerateConfiguration(
        args: PutBucketAccelerateConfigurationInput,
        cb: (err: any, data?: PutBucketAccelerateConfigurationOutput) => void
    ): void;
    public putBucketAccelerateConfiguration(
        args: PutBucketAccelerateConfigurationInput,
        cb?: (err: any, data?: PutBucketAccelerateConfigurationOutput) => void
    ): Promise<PutBucketAccelerateConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketAccelerateConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketAcl operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketAcl(args: PutBucketAclInput): Promise<PutBucketAclOutput>;
    public putBucketAcl(
        args: PutBucketAclInput,
        cb: (err: any, data?: PutBucketAclOutput) => void
    ): void;
    public putBucketAcl(
        args: PutBucketAclInput,
        cb?: (err: any, data?: PutBucketAclOutput) => void
    ): Promise<PutBucketAclOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketAclCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketAnalyticsConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketAnalyticsConfiguration(args: PutBucketAnalyticsConfigurationInput): Promise<PutBucketAnalyticsConfigurationOutput>;
    public putBucketAnalyticsConfiguration(
        args: PutBucketAnalyticsConfigurationInput,
        cb: (err: any, data?: PutBucketAnalyticsConfigurationOutput) => void
    ): void;
    public putBucketAnalyticsConfiguration(
        args: PutBucketAnalyticsConfigurationInput,
        cb?: (err: any, data?: PutBucketAnalyticsConfigurationOutput) => void
    ): Promise<PutBucketAnalyticsConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketAnalyticsConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketCors operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketCors(args: PutBucketCorsInput): Promise<PutBucketCorsOutput>;
    public putBucketCors(
        args: PutBucketCorsInput,
        cb: (err: any, data?: PutBucketCorsOutput) => void
    ): void;
    public putBucketCors(
        args: PutBucketCorsInput,
        cb?: (err: any, data?: PutBucketCorsOutput) => void
    ): Promise<PutBucketCorsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketCorsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketEncryption operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketEncryption(args: PutBucketEncryptionInput): Promise<PutBucketEncryptionOutput>;
    public putBucketEncryption(
        args: PutBucketEncryptionInput,
        cb: (err: any, data?: PutBucketEncryptionOutput) => void
    ): void;
    public putBucketEncryption(
        args: PutBucketEncryptionInput,
        cb?: (err: any, data?: PutBucketEncryptionOutput) => void
    ): Promise<PutBucketEncryptionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketEncryptionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketInventoryConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketInventoryConfiguration(args: PutBucketInventoryConfigurationInput): Promise<PutBucketInventoryConfigurationOutput>;
    public putBucketInventoryConfiguration(
        args: PutBucketInventoryConfigurationInput,
        cb: (err: any, data?: PutBucketInventoryConfigurationOutput) => void
    ): void;
    public putBucketInventoryConfiguration(
        args: PutBucketInventoryConfigurationInput,
        cb?: (err: any, data?: PutBucketInventoryConfigurationOutput) => void
    ): Promise<PutBucketInventoryConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketInventoryConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketLifecycle operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketLifecycle(args: PutBucketLifecycleInput): Promise<PutBucketLifecycleOutput>;
    public putBucketLifecycle(
        args: PutBucketLifecycleInput,
        cb: (err: any, data?: PutBucketLifecycleOutput) => void
    ): void;
    public putBucketLifecycle(
        args: PutBucketLifecycleInput,
        cb?: (err: any, data?: PutBucketLifecycleOutput) => void
    ): Promise<PutBucketLifecycleOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketLifecycleCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketLifecycleConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketLifecycleConfiguration(args: PutBucketLifecycleConfigurationInput): Promise<PutBucketLifecycleConfigurationOutput>;
    public putBucketLifecycleConfiguration(
        args: PutBucketLifecycleConfigurationInput,
        cb: (err: any, data?: PutBucketLifecycleConfigurationOutput) => void
    ): void;
    public putBucketLifecycleConfiguration(
        args: PutBucketLifecycleConfigurationInput,
        cb?: (err: any, data?: PutBucketLifecycleConfigurationOutput) => void
    ): Promise<PutBucketLifecycleConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketLifecycleConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketLogging operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketLogging(args: PutBucketLoggingInput): Promise<PutBucketLoggingOutput>;
    public putBucketLogging(
        args: PutBucketLoggingInput,
        cb: (err: any, data?: PutBucketLoggingOutput) => void
    ): void;
    public putBucketLogging(
        args: PutBucketLoggingInput,
        cb?: (err: any, data?: PutBucketLoggingOutput) => void
    ): Promise<PutBucketLoggingOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketLoggingCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketMetricsConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketMetricsConfiguration(args: PutBucketMetricsConfigurationInput): Promise<PutBucketMetricsConfigurationOutput>;
    public putBucketMetricsConfiguration(
        args: PutBucketMetricsConfigurationInput,
        cb: (err: any, data?: PutBucketMetricsConfigurationOutput) => void
    ): void;
    public putBucketMetricsConfiguration(
        args: PutBucketMetricsConfigurationInput,
        cb?: (err: any, data?: PutBucketMetricsConfigurationOutput) => void
    ): Promise<PutBucketMetricsConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketMetricsConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketNotification operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketNotification(args: PutBucketNotificationInput): Promise<PutBucketNotificationOutput>;
    public putBucketNotification(
        args: PutBucketNotificationInput,
        cb: (err: any, data?: PutBucketNotificationOutput) => void
    ): void;
    public putBucketNotification(
        args: PutBucketNotificationInput,
        cb?: (err: any, data?: PutBucketNotificationOutput) => void
    ): Promise<PutBucketNotificationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketNotificationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketNotificationConfiguration operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketNotificationConfiguration(args: PutBucketNotificationConfigurationInput): Promise<PutBucketNotificationConfigurationOutput>;
    public putBucketNotificationConfiguration(
        args: PutBucketNotificationConfigurationInput,
        cb: (err: any, data?: PutBucketNotificationConfigurationOutput) => void
    ): void;
    public putBucketNotificationConfiguration(
        args: PutBucketNotificationConfigurationInput,
        cb?: (err: any, data?: PutBucketNotificationConfigurationOutput) => void
    ): Promise<PutBucketNotificationConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketNotificationConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketPolicy operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketPolicy(args: PutBucketPolicyInput): Promise<PutBucketPolicyOutput>;
    public putBucketPolicy(
        args: PutBucketPolicyInput,
        cb: (err: any, data?: PutBucketPolicyOutput) => void
    ): void;
    public putBucketPolicy(
        args: PutBucketPolicyInput,
        cb?: (err: any, data?: PutBucketPolicyOutput) => void
    ): Promise<PutBucketPolicyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketPolicyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketReplication operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketReplication(args: PutBucketReplicationInput): Promise<PutBucketReplicationOutput>;
    public putBucketReplication(
        args: PutBucketReplicationInput,
        cb: (err: any, data?: PutBucketReplicationOutput) => void
    ): void;
    public putBucketReplication(
        args: PutBucketReplicationInput,
        cb?: (err: any, data?: PutBucketReplicationOutput) => void
    ): Promise<PutBucketReplicationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketReplicationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketRequestPayment operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketRequestPayment(args: PutBucketRequestPaymentInput): Promise<PutBucketRequestPaymentOutput>;
    public putBucketRequestPayment(
        args: PutBucketRequestPaymentInput,
        cb: (err: any, data?: PutBucketRequestPaymentOutput) => void
    ): void;
    public putBucketRequestPayment(
        args: PutBucketRequestPaymentInput,
        cb?: (err: any, data?: PutBucketRequestPaymentOutput) => void
    ): Promise<PutBucketRequestPaymentOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketRequestPaymentCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketTagging operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketTagging(args: PutBucketTaggingInput): Promise<PutBucketTaggingOutput>;
    public putBucketTagging(
        args: PutBucketTaggingInput,
        cb: (err: any, data?: PutBucketTaggingOutput) => void
    ): void;
    public putBucketTagging(
        args: PutBucketTaggingInput,
        cb?: (err: any, data?: PutBucketTaggingOutput) => void
    ): Promise<PutBucketTaggingOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketTaggingCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketVersioning operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketVersioning(args: PutBucketVersioningInput): Promise<PutBucketVersioningOutput>;
    public putBucketVersioning(
        args: PutBucketVersioningInput,
        cb: (err: any, data?: PutBucketVersioningOutput) => void
    ): void;
    public putBucketVersioning(
        args: PutBucketVersioningInput,
        cb?: (err: any, data?: PutBucketVersioningOutput) => void
    ): Promise<PutBucketVersioningOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketVersioningCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutBucketWebsite operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putBucketWebsite(args: PutBucketWebsiteInput): Promise<PutBucketWebsiteOutput>;
    public putBucketWebsite(
        args: PutBucketWebsiteInput,
        cb: (err: any, data?: PutBucketWebsiteOutput) => void
    ): void;
    public putBucketWebsite(
        args: PutBucketWebsiteInput,
        cb?: (err: any, data?: PutBucketWebsiteOutput) => void
    ): Promise<PutBucketWebsiteOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutBucketWebsiteCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutObject operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putObject(args: PutObjectInput): Promise<PutObjectOutput>;
    public putObject(
        args: PutObjectInput,
        cb: (err: any, data?: PutObjectOutput) => void
    ): void;
    public putObject(
        args: PutObjectInput,
        cb?: (err: any, data?: PutObjectOutput) => void
    ): Promise<PutObjectOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutObjectCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutObjectAcl operation
     *
     * This operation may fail with one of the following errors:
     *   - {NoSuchKey} NoSuchKey shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putObjectAcl(args: PutObjectAclInput): Promise<PutObjectAclOutput>;
    public putObjectAcl(
        args: PutObjectAclInput,
        cb: (err: any, data?: PutObjectAclOutput) => void
    ): void;
    public putObjectAcl(
        args: PutObjectAclInput,
        cb?: (err: any, data?: PutObjectAclOutput) => void
    ): Promise<PutObjectAclOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutObjectAclCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutObjectTagging operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putObjectTagging(args: PutObjectTaggingInput): Promise<PutObjectTaggingOutput>;
    public putObjectTagging(
        args: PutObjectTaggingInput,
        cb: (err: any, data?: PutObjectTaggingOutput) => void
    ): void;
    public putObjectTagging(
        args: PutObjectTaggingInput,
        cb?: (err: any, data?: PutObjectTaggingOutput) => void
    ): Promise<PutObjectTaggingOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutObjectTaggingCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * RestoreObject operation
     *
     * This operation may fail with one of the following errors:
     *   - {ObjectAlreadyInActiveTierError} ObjectAlreadyInActiveTierError shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public restoreObject(args: RestoreObjectInput): Promise<RestoreObjectOutput>;
    public restoreObject(
        args: RestoreObjectInput,
        cb: (err: any, data?: RestoreObjectOutput) => void
    ): void;
    public restoreObject(
        args: RestoreObjectInput,
        cb?: (err: any, data?: RestoreObjectOutput) => void
    ): Promise<RestoreObjectOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new RestoreObjectCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * UploadPart operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public uploadPart(args: UploadPartInput): Promise<UploadPartOutput>;
    public uploadPart(
        args: UploadPartInput,
        cb: (err: any, data?: UploadPartOutput) => void
    ): void;
    public uploadPart(
        args: UploadPartInput,
        cb?: (err: any, data?: UploadPartOutput) => void
    ): Promise<UploadPartOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UploadPartCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * UploadPartCopy operation
     *
     * This operation may fail with one of the following errors:
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public uploadPartCopy(args: UploadPartCopyInput): Promise<UploadPartCopyOutput>;
    public uploadPartCopy(
        args: UploadPartCopyInput,
        cb: (err: any, data?: UploadPartCopyOutput) => void
    ): void;
    public uploadPartCopy(
        args: UploadPartCopyInput,
        cb?: (err: any, data?: UploadPartCopyOutput) => void
    ): Promise<UploadPartCopyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UploadPartCopyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }
}
