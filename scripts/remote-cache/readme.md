# Remote Cache

A local implementation of an S3 remote cache compatible with Turborepo.

No server authentication is used in this remote cache implementation.
S3 credentials come from the default chain used by the AWS SDK.

The server runs in localhost for the duration of the `turbo run build` or similar command, and
is then cleaned up with `kill-port`.

Example usage:

```
	rm -rf ./node_modules/.cache/turbo
	node scripts/remote-cache/ start&
	npx turbo run build --api="http://localhost:3000" --team="aws-sdk-js" --token="xyz"
	npx kill-port 3000
```
