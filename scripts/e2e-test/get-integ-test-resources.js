const { CloudFormationClient, DescribeStackResourcesCommand } = require("@aws-sdk/client-cloudformation");
const { writeFileSync } = require("fs");
const { normalize } = require("path");

const run = async () => {
  const client = new CloudFormationClient({});
  const region = await client.config.region();

  const { StackResources: stackResources } = await client.send(
    new DescribeStackResourcesCommand({ StackName: "IntegTestResourcesStack" })
  );

  const identityPoolId = stackResources.filter((resource) => resource.ResourceType === "AWS::Cognito::IdentityPool")[0]
    .PhysicalResourceId;

  const bucketName = stackResources.filter(
    (resource) => resource.ResourceType === "AWS::S3::Bucket" && resource.LogicalResourceId.indexOf("IntegTest") === 0
  )[0].PhysicalResourceId;

  const resources = {
    AWS_SMOKE_TEST_REGION: region,
    AWS_SMOKE_TEST_IDENTITY_POOL_ID: identityPoolId,
    AWS_SMOKE_TEST_BUCKET: bucketName,
  };
  const stringified = JSON.stringify(resources, null, 2);
  console.log(`integration test resources: 
${stringified}

You will need them for beta & product release stack configuration.`);

  const configPath = normalize(process.argv[2]);
  console.log(`generated environmental variables needed in integration tests to ${configPath}`);
  writeFileSync(configPath, stringified, { flag: "w" });
};

run();
