# Instructions for performing a code generation sync

## Prerequisite

- Adjacent checkout of [smithy-typescript](https://github.com/smithy-lang/smithy-typescript).
  - ./aws-sdk-js-v3 # this repo
  - ./smithy-typescript # codegen upstream

## Steps

### Determine a target commit

The current commit pointer in `scripts/generate-clients/config.js` indicates what version
of smithy-ts to use to generate the clients in this repository.

When performing a bump, we typically use the latest commit in the `main` branch of smithy-ts.
If the latest commit has a message of "Version NPM packages", this indicates that all the JS runtime changes
that had been enqueued with changesets have been published to NPM. This is always a good candidate for sync.

If the latest commit is not a changesets release, it might be a Java codegen-only change that doesn't need NPM
version bumps. But if the latest change is to JavaScript code, then it means it is unpublished, and likely not
the appropriate target for sync.

### Check `smithy-typescript` out to main

If the adjacent smithy-ts checkout is not on `main`, a PR is likely in progress. Save your work on that branch with a
commit, and then check out latest `main` branch for smithy-ts. The code generation process will use the target commit,
but return to `main` afterward.

### Check `aws-sdk-js-v3` out to `<github_username>/chore/codegen`

This branch should be deleted prior to checkout (i.e. a fresh branch from jsv3 `main`).

### Update config.js smithy-ts git pointer

Update SMITHY_TS_COMMIT to the target commit determined earlier.
Above it, update the comment that shows the diff in smithy-ts from the previous target commit.

### Run codegen

Run `yarn generate-clients -x`. Afterward, if this has succeeded, the git state will contain uncommitted
code generation updates.

This process includes updating all smithy package versions to the one from the target commit, and running
`yarn` afterward.

### Commit codegen diff

Commit the changes, allowing commit hooks to perform formatting if needed. The commit message should be:

```
chore(codegen): sync for <...>
```

In the placeholder, topically describe the changes in the smithy-ts diff from the comment in config.js.
For example, `chore(codegen): sync for adaptive retry fixes`.

### Open a PR

Open a PR to aws/aws-sdk-js-v3 using the commit as the PR title (default behavior).
For the PR body, the standard template may be ignored in favor of simply posting the link from
config.js that shows the commit diff between the previous and current smithy-ts target commit hashes.

If available, we recommend using the GitHub CLI to open the PR.
