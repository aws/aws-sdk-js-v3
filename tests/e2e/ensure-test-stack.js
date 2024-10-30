const {
  CreateChangeSetCommand,
  DescribeStacksCommand,
  waitUntilChangeSetCreateComplete,
  Capability,
  ExecuteChangeSetCommand,
  waitUntilStackUpdateComplete,
  waitUntilStackCreateComplete,
  DescribeChangeSetCommand,
  DeleteChangeSetCommand,
} = require("@aws-sdk/client-cloudformation");

/**
 * Deploy the integration test stack if it does not exist. Update the
 * stack if there's a changeset. There should be a high level library for it
 * really.
 *
 * This is a boil-down version of aws cli cloudformation deploy:
 * https://github.com/aws/aws-cli/blob/c3eec161713ffd7e01c239bd0761fcf02db183aa/awscli/customizations/cloudformation/deploy.py#L321
 */
exports.ensureTestStack = async (client, stackName, templateBody) => {
  let hasExistingStack = false;
  try {
    const { Stacks } = await client.send(new DescribeStacksCommand({ StackName: stackName }));
    hasExistingStack = Stacks[0]?.StackStatus !== "REVIEW_IN_PROGRESS";
  } catch (e) {
    if ((e.message || "").endsWith("does not exist")) {
      hasExistingStack = false;
    } else {
      throw e;
    }
  }

  const { Id } = await client.send(
    new CreateChangeSetCommand({
      StackName: stackName,
      ChangeSetType: hasExistingStack ? "UPDATE" : "CREATE",
      ChangeSetName: `${stackName}ChangeSet${Date.now()}`,
      TemplateBody: templateBody,
      Capabilities: [Capability.CAPABILITY_IAM],
    })
  );

  try {
    // TODO: Feature Request: return the last describe response from the waiter result, so we can inspect failure reasons.
    await waitUntilChangeSetCreateComplete({ client }, { ChangeSetName: Id });
  } catch (e) {
    const { Status, StatusReason } = await client.send(
      new DescribeChangeSetCommand({
        StackName: stackName,
        ChangeSetName: Id,
      })
    );
    if (Status === "FAILED" && StatusReason.includes("The submitted information didn't contain changes")) {
      await client
        .send(
          new DeleteChangeSetCommand({
            StackName: stackName,
            ChangeSetName: Id,
          })
        )
        .catch(() => {}); // ignored
      return;
    }
    throw e;
  }

  await client.send(
    new ExecuteChangeSetCommand({
      ChangeSetName: Id,
      StackName: stackName,
    })
  );
  if (hasExistingStack) {
    await waitUntilStackUpdateComplete({ client }, { StackName: stackName });
  } else {
    await waitUntilStackCreateComplete({ client }, { StackName: stackName });
  }
};
