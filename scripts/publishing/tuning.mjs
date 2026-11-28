// @ts-check
// Time-related tuning for publishing.

// Delay before each retry of a failed NPM call. The last value repeats indefinitely, so entries
// must be >= 1. A Retry-After header from NPM overrides the entry for that attempt.
export const BACKOFF_SECONDS = [5, 15, 30, 60, 60, 60];

// Soft wait for a tier to become available before submitting the next tier. Does not fail the run.
// Elapsed waits count against PUBLISH_DEADLINE_MINUTES, so (tier count x this value) plus the build
// and static analysis must fit inside it. The tier count is at most 10 for the full workspace.
export const TIER_CONFIRMATION_WAIT_MINUTES = 15;

// Hard limit, measured from script start, for submitting the packages (npm publish succeeding or
// being held). Exceeding it fails the run. Must be less than AVAILABILITY_DEADLINE_MINUTES.
export const PUBLISH_DEADLINE_MINUTES = 210;

// Hard limit, measured from script start, for the packages to be available. Exceeding it fails the run.
// Must be less than the workflow's timeout-minutes in .github/workflows/publish.yml (300), with
// headroom so the script fails itself with a package list instead of being killed.
export const AVAILABILITY_DEADLINE_MINUTES = 255;

// Interval of the "N packages not yet available" log line. Must be > 0.
export const PROGRESS_LOG_MINUTES = 5;

// Limit on one npm publish process, which is the upload and not the wait for availability. A process killed at the
// limit counts as a failed attempt and is retried. Must be well below PUBLISH_DEADLINE_MINUTES, and above the
// slowest legitimate publish. npm's own request timeout defaults to 5 minutes, so this limit cuts a stalled request first.
export const NPM_PUBLISH_TIMEOUT_MINUTES = 3;

// Limit on each registry request other than publish. A timed-out request counts as a transient failure and is retried.
// Must be > 0.
export const REGISTRY_REQUEST_TIMEOUT_SECONDS = 60;

if (PUBLISH_DEADLINE_MINUTES >= AVAILABILITY_DEADLINE_MINUTES) {
  throw new Error("PUBLISH_DEADLINE_MINUTES must be less than AVAILABILITY_DEADLINE_MINUTES");
}
