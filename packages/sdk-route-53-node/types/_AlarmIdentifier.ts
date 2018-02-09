/**
 * <p>A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.</p>
 */
export interface _AlarmIdentifier {
    /**
     * <p>A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.</p> <p>For the current list of CloudWatch regions, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cw_region">Amazon CloudWatch</a> in the <i>AWS Regions and Endpoints</i> chapter of the <i>Amazon Web Services General Reference</i>.</p>
     */
    Region: 'us-east-1'|'us-east-2'|'us-west-1'|'us-west-2'|'ca-central-1'|'eu-central-1'|'eu-west-1'|'eu-west-2'|'eu-west-3'|'ap-south-1'|'ap-southeast-1'|'ap-southeast-2'|'ap-northeast-1'|'ap-northeast-2'|'sa-east-1'|string;

    /**
     * <p>The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.</p>
     */
    Name: string;
}

export type _UnmarshalledAlarmIdentifier = _AlarmIdentifier;