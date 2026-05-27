# How to stage a Maven release (2 packages)

This instruction set is for staging a bump to the maven version of `smithy-typescript-codegen` and
`smithy-aws-typescript-codegen`.

A separate process, after staging, publishes to:

- https://central.sonatype.com/artifact/software.amazon.smithy.typescript/smithy-typescript-codegen
- https://central.sonatype.com/artifact/software.amazon.smithy.typescript/smithy-aws-typescript-codegen

This spans two repositories and two PRs. The smithy-typescript PR merges first,
then its merge commit hash is filled into the aws-sdk-js-v3 PR.

Let `$VERSION` be the new version (e.g. `0.49.1`), `$DATE` be the release date
(e.g. `2026-04-30`), and `$PREV_COMMIT` be the current value of `SMITHY_TS_COMMIT`
in `scripts/generate-clients/config.js`.

The maven version of smithy-typescript-codegen and smithy-aws-typescript-codegen must be in lockstep.

If the current version is 0.49.1, then the next version should be 0.50.0. In cases where the only commits for the
changelog are fixes, the version bump may be in the patch range, e.g. 0.49.2.

---

## Part 1: smithy-typescript

### Files to update

1. **`build.gradle.kts`** — set `version` in `allprojects`:

   ```kts
   version = "$VERSION"
   ```

2. **`README.md`** — update both `smithy-typescript-codegen:` version references.

3. **`CHANGELOG.md`** — add entry at the top:

```md
## $VERSION ($DATE)

### Features

- Description ([#PR](https://github.com/smithy-lang/smithy-typescript/pull/PR))

### Bug Fixes

- Description ([#PR](https://github.com/smithy-lang/smithy-typescript/pull/PR))

### Chores

- Description ([#PR](https://github.com/smithy-lang/smithy-typescript/pull/PR))
```

The filter for relevant PRs to include is the commit log between the prior bump in version and
the latest `main` branch of smithy-ts, but scoped to the following
folder: https://github.com/smithy-lang/smithy-typescript/commits/main/smithy-typescript-codegen/src/main/java/software/amazon/smithy/typescript/codegen

The descriptions should be subjectless past-tense, like "Updated widgets to return sprockets.",
and don't always match with the PR commit message. Only Java codegen commits are relevant.

Follow the existing file structure and conventions in CHANGELOG.md in smithy-typescript.
Omit section header for features, bug fixes, and/or chores sections if no commit qualifies as one.

If `main` in smithy-typescript contains unpublished items in the `.changeset` folder, then
it is not in a good state for staging. Halt this process and restart after the changeset queue has been cleared
via NPM publishing.

### Commit & PR

Message:

```
chore(codegen): smithy-typescript-codegen $VERSION
```

Set this PR aside for review. The resulting merge commit hash (`$COMMIT`) will be used later, but proceed
for now directly to opening the aws-sdk-js-v3 draft PR accompaniment.

---

## Part 2: aws-sdk-js-v3

Open this PR as a **draft** initially, using `"TBD"` for the
commit hash. This ensures CI fails until the real hash is filled in (the config.js validation
throws if the hash is not 40 characters).

### Files to update

1. **`codegen/build.gradle.kts`** — set `version` in `allprojects`:

   ```kts
   version = "$VERSION"
   ```

2. **`codegen/smithy-aws-typescript-codegen/build.gradle.kts`** — update dependency:

   ```kts
   api("software.amazon.smithy.typescript:smithy-typescript-codegen:$VERSION")
   ```

3. **`scripts/generate-clients/config.js`** — update commit hash and comparison link:

   ```js
   // https://github.com/smithy-lang/smithy-typescript/compare/$PREV_COMMIT...$COMMIT
   SMITHY_TS_COMMIT: "$COMMIT",
   ```

   Use `"TBD"` until the smithy-typescript PR merges.

4. **`codegen/CHANGELOG.md`** — add entry at the top:

   ```md
   ## $VERSION ($DATE)

   ### Chores

   - Upgraded to smithy-typescript $VERSION ([Release Notes](https://github.com/smithy-lang/smithy-typescript/blob/main/CHANGELOG.md#$ANCHOR))
   ```

   Where `$ANCHOR` is the version with dots removed, e.g. `0491-2026-04-30`.

Use the same changelog format as the changelog in smithy-ts. But, always include a mention that the upstream
is being updated to `$VERSION`. The commits worth mentioning will appear
in https://github.com/aws/aws-sdk-js-v3/commits/main/codegen/smithy-aws-typescript-codegen/src/main/java/software/amazon/smithy/aws/typescript/codegen.

As with smithy-ts, commits made that are no interest to applications consuming the code generation library may be
omitted from the changelogs, as the full revision history is readily available.

### Commit & PR

Message:

```
chore(codegen): smithy-aws-typescript-codegen $VERSION
```

Once the smithy-typescript PR merges:

1. Replace the placeholder with the real `$COMMIT` hash.
2. Update the comparison link.
3. Using that commit, run through all of [CODEGEN_SYNC](./CODEGEN_SYNC.md), except the commit message and opening a PR,
   as those steps roll into the same tasks here.
4. Mark the PR as ready for review. CI will run on the PR at that point.
