const { CloudFormationClient, DescribeStackResourcesCommand } = require("../../clients/client-cloudformation");

exports.getIntegTestResources = async () => {
  const client = new CloudFormationClient({});
  const region = await client.config.region();

  const { StackResources: stackResources } = await client.send(
    new DescribeStackResourcesCommand({ StackName: "SdkReleaseV3IntegTestResourcesStack" })
  );

  const identityPoolId = stackResources.filter((resource) => resource.ResourceType === "AWS::Cognito::IdentityPool")[0]
    .PhysicalResourceId;

  const bucketName = stackResources.filter(
    (resource) => resource.ResourceType === "AWS::S3::Bucket" && resource.LogicalResourceId.indexOf("IntegTest") === 0
  )[0].PhysicalResourceId;

  return {
    AWS_SMOKE_TEST_REGION: region,
    AWS_SMOKE_TEST_IDENTITY_POOL_ID: identityPoolId,
    AWS_SMOKE_TEST_BUCKET: bucketName,
  };
};
