const {
  CreateChangeSetCommand,
  DescribeStacksCommand,
  waitUntilChangeSetCreateComplete,
  Capability,
  ExecuteChangeSetCommand,
  waitUntilStackUpdateComplete,
  waitUntilStackCreateComplete,
  DescribeChangeSetCommand,
} = require("../../clients/client-cloudformation");

/**
 * Deploy the integration test stack if it does not exist. Update the
 * stack if there's a changeset. There should be a high level library for it
 * really.
 */
exports.ensureTestStack = async (client, stackName, templateBody) => {
  let hasExistingStack = false;
  try {
    await client.send(new DescribeStacksCommand({ StackName: stackName }));
    hasExistingStack = true;
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
      ChangeSetName: `${stackName}ChangeSet`,
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
