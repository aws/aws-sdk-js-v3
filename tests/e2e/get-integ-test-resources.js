const { readFileSync } = require("fs");
const { join } = require("path");
const { CloudFormationClient, DescribeStackResourcesCommand } = require("../../clients/client-cloudformation");
const { ensureTestStack } = require("./ensure-test-stack");

exports.getIntegTestResources = async () => {
  const client = new CloudFormationClient({ logger: console });
  const region = await client.config.region();
  const stackName = "SdkReleaseV3IntegTestResourcesStack";

  await ensureTestStack(
    client,
    stackName,
    readFileSync(join(__dirname, "IntegTestResourcesStack.template.json"), { encoding: "utf-8" })
  );
  const { StackResources: stackResources } = await client.send(
    new DescribeStackResourcesCommand({ StackName: stackName })
  );

  console.log(`${stackName} Stack Resources: `, stackResources);

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
