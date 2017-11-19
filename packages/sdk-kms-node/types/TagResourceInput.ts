import {_Tag} from './_Tag';

/**
 * TagResourceInput shape
 */
export interface TagResourceInput {
    /**
     * <p>A unique identifier for the CMK you are tagging.</p> <p>Specify the key ID or the Amazon Resource Name (ARN) of the CMK.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> </ul> <p>To get the key ID and key ARN for a CMK, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
     */
    KeyId: string;

    /**
     * <p>One or more tags. Each tag consists of a tag key and a tag value.</p>
     */
    Tags: Array<_Tag>|Iterable<_Tag>;
}