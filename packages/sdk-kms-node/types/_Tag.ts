/**
 * <p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <p>For information about the rules that apply to tag keys and tag values, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
 */
export interface _Tag {
    /**
     * <p>The key of the tag.</p>
     */
    TagKey: string;

    /**
     * <p>The value of the tag.</p>
     */
    TagValue: string;
}

export type _UnmarshalledTag = _Tag;