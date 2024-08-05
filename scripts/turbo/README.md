# Turbo Build Script

This script is designed to handle the execution of Turborepo builds, using the remote cache when env variables are present.

## Prerequisites

Before running this script, ensure that you have installed dependencies with `yarn`.

## Environment Variables

To access the remote cache for Turborepo builds, you need to set the following environment variables:

- `AWS_JSV3_TURBO_CACHE_API_SECRET`: The API secret for authenticating with the remote cache.
- `AWS_JSV3_TURBO_CACHE_API_ENDPOINT`: The API endpoint for the remote cache.

## Usage

To run the Turborepo build, execute the following command:

```
node ./scripts/turbo build <Optional Turborepo Args>
```
