// smithy-typescript generated code
/**
 * This structure tests serialization of the ec2QueryName trait.
 * See https://smithy.io/2.0/aws/protocols/aws-ec2-query-protocol.html#aws-protocols-ec2queryname-trait
 * for behavior.
 *
 * @public
 */
export interface Ec2Alias {
  ec2MemberNameWithAliases?: string | undefined;
  ec2MemberNameWithOnlyXmlAlias?: string | undefined;
  ec2MemberNameWithOnlyEc2Alias?: string | undefined;
  ec2MemberNameWithNoAlias?: string | undefined;
}

/**
 * @public
 */
export interface PutEc2AliasRequest {
  /**
   * This structure tests serialization of the ec2QueryName trait.
   * See https://smithy.io/2.0/aws/protocols/aws-ec2-query-protocol.html#aws-protocols-ec2queryname-trait
   * for behavior.
   *
   * @public
   */
  alias?: Ec2Alias | undefined;
}
