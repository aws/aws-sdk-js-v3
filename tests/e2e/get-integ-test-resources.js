const { readFileSync } = require("fs");
const { join } = require("path");
const { STSClient, GetCallerIdentityCommand } = require("../../clients/client-sts");
const { CloudFormationClient, DescribeStackResourcesCommand } = require("../../clients/client-cloudformation");
const { S3ControlClient, ListMultiRegionAccessPointsCommand } = require("../../clients/client-s3-control");
const { ensureTestStack } = require("./ensure-test-stack");
const { deleteStaleChangesets } = require("./delete-stale-changesets");

const logger = { ...console, debug() {} };

exports.getIntegTestResources = async () => {
  const cloudformation = new CloudFormationClient({ logger });
  const region = await cloudformation.config.region();
  const stackName = "SdkReleaseV3IntegTestResourcesStack";

  await deleteStaleChangesets(cloudformation, stackName);
  await ensureTestStack(
    cloudformation,
    stackName,
    readFileSync(join(__dirname, "IntegTestResourcesStack.template.json"), { encoding: "utf-8" })
  );
  const { StackResources: stackResources } = await cloudformation.send(
    new DescribeStackResourcesCommand({ StackName: stackName })
  );

  console.log(`${stackName} Stack Resources: `, stackResources);

  const identityPoolId = stackResources.filter((resource) => resource.ResourceType === "AWS::Cognito::IdentityPool")[0]
    .PhysicalResourceId;

  const bucketName = stackResources.filter(
    (resource) => resource.ResourceType === "AWS::S3::Bucket" && resource.LogicalResourceId.indexOf("IntegTest") === 0
  )[0].PhysicalResourceId;

  const multiRegionAccessPointName = stackResources.filter(
    (resource) => resource.ResourceType === "AWS::S3::MultiRegionAccessPoint"
  )[0].PhysicalResourceId;

  const sts = new STSClient({ logger });
  const { Account: AccountId } = await sts.send(new GetCallerIdentityCommand({}));
  const s3Control = new S3ControlClient({ logger, region: "us-west-2" });
  const { AccessPoints } = await s3Control.send(new ListMultiRegionAccessPointsCommand({ AccountId }));
  const { Alias } = AccessPoints.find((accesspoint) => accesspoint.Name === multiRegionAccessPointName);
  const mrapArn = `arn:aws:s3::${AccountId}:accesspoint/${Alias}`;

  return {
    AWS_SMOKE_TEST_REGION: region,
    AWS_SMOKE_TEST_IDENTITY_POOL_ID: identityPoolId,
    AWS_SMOKE_TEST_BUCKET: bucketName,
    AWS_SMOKE_TEST_MRAP_ARN: mrapArn,
  };
};
