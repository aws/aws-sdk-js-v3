const { ListChangeSetsCommand, DeleteChangeSetCommand } = require("@aws-sdk/client-cloudformation");

exports.deleteStaleChangesets = async (client, stackName) => {
  const changesets = await client.send(
    new ListChangeSetsCommand({
      StackName: stackName,
    })
  );

  try {
    for (const changeset of changesets.Summaries) {
      if (
        changeset.Status === "FAILED" &&
        changeset.StatusReason ===
          `The submitted information didn't contain changes. Submit different information to create a change set.` &&
        changeset.creationDate < new Date(Date.now() - 5 * 60 * 1000)
      ) {
        console.log("Deleting stale changeset", changeset.ChangeSetId);
        await new Promise((r) => setTimeout(r, 200));
        await client.send(
          new DeleteChangeSetCommand({
            StackName: stackName,
            ChangeSetName: changeset.ChangeSetId,
          })
        );
      }
    }
  } catch (e) {
    // non-blocking throttling error, potentially.
    console.error(e);
  }
};
