/**
 * <p>Information specific to the resource record.</p> <note> <p>If you're creating an alias resource record set, omit <code>ResourceRecord</code>.</p> </note>
 */
export interface _ResourceRecord {
    /**
     * <p>The current or new DNS record value, not to exceed 4,000 characters. In the case of a <code>DELETE</code> action, if the current value does not match the actual value, an error is returned. For descriptions about how to format <code>Value</code> for different record types, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html">Supported DNS Resource Record Types</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>You can specify more than one value for all record types except <code>CNAME</code> and <code>SOA</code>. </p> <note> <p>If you're creating an alias resource record set, omit <code>Value</code>.</p> </note>
     */
    Value: string;
}

export type _UnmarshalledResourceRecord = _ResourceRecord;