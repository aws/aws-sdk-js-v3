# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.198.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.197.0...v3.198.0) (2022-10-27)


### Features

* **endpoint:** log endpoint decisions at debug level ([#4106](https://github.com/aws/aws-sdk-js-v3/issues/4106)) ([d600213](https://github.com/aws/aws-sdk-js-v3/commit/d600213292eb1bea870c43420367f78406db1c82))





# [3.197.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.196.0...v3.197.0) (2022-10-26)

**Note:** Version bump only for package @aws-sdk/util-endpoints





# [3.196.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.195.0...v3.196.0) (2022-10-25)


### Features

* **endpoint:** add remaining restJson1 services endpoint models ([#4090](https://github.com/aws/aws-sdk-js-v3/issues/4090)) ([998113b](https://github.com/aws/aws-sdk-js-v3/commit/998113bd0a70a7de4bf5d975cb5f7524098866a0))





# [3.194.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.193.0...v3.194.0) (2022-10-21)


### Bug Fixes

* **util-endpoints:** use default import for partitions.json ([#4072](https://github.com/aws/aws-sdk-js-v3/issues/4072)) ([f9bc7af](https://github.com/aws/aws-sdk-js-v3/commit/f9bc7afd7af7535c0de8123d0820faa8ebec7e16))





# [3.193.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.192.0...v3.193.0) (2022-10-20)

**Note:** Version bump only for package @aws-sdk/util-endpoints





# [3.192.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.191.0...v3.192.0) (2022-10-19)


### Bug Fixes

* **endpoint:** dedupe clientContext/builtIn params, fix s3 unit test ([#4051](https://github.com/aws/aws-sdk-js-v3/issues/4051)) ([947c8bc](https://github.com/aws/aws-sdk-js-v3/commit/947c8bce2798ae5ddc022d34f62aeeb60b4e6fde))





# [3.190.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.189.0...v3.190.0) (2022-10-17)


### Bug Fixes

* **endpoint:** endpoints 2.0 all-service TS compilation fixes ([#4043](https://github.com/aws/aws-sdk-js-v3/issues/4043)) ([f2da618](https://github.com/aws/aws-sdk-js-v3/commit/f2da6182298d4d6b02e84fb723492c07c27469a8))





# [3.188.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.187.0...v3.188.0) (2022-10-13)


### Bug Fixes

* **endpoint:** misc endpoints 2.0 fixes for s3 ([#4031](https://github.com/aws/aws-sdk-js-v3/issues/4031)) ([f8926a5](https://github.com/aws/aws-sdk-js-v3/commit/f8926a56cf9a25c2e6a5c91089543094e32d5c4b))





# [3.186.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.185.0...v3.186.0) (2022-10-06)

**Note:** Version bump only for package @aws-sdk/util-endpoints





# [3.183.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.182.0...v3.183.0) (2022-10-03)

**Note:** Version bump only for package @aws-sdk/util-endpoints





# [3.182.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.181.0...v3.182.0) (2022-09-30)


### Bug Fixes

* **endpoint:** misc fixes for endpoints 2.0 based on service unit tests ([#4002](https://github.com/aws/aws-sdk-js-v3/issues/4002)) ([77788f9](https://github.com/aws/aws-sdk-js-v3/commit/77788f9a9c7274d0cdec7832b6ed72325c9262e6))





# [3.178.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.177.0...v3.178.0) (2022-09-23)


### Features

* **endpoint:** endpoints 2.0 existing package changes ([#3947](https://github.com/aws/aws-sdk-js-v3/issues/3947)) ([df99fc3](https://github.com/aws/aws-sdk-js-v3/commit/df99fc33a43982e1c59000721a535f6fe77a3c23))





# [3.174.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.173.0...v3.174.0) (2022-09-19)


### Features

* **util-endpoints:** add aws.isVirtualHostableS3Bucket ([#3967](https://github.com/aws/aws-sdk-js-v3/issues/3967)) ([2fbe419](https://github.com/aws/aws-sdk-js-v3/commit/2fbe4199b971b0da966369c36a28521ba389a466))





# [3.171.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.170.0...v3.171.0) (2022-09-14)


### Features

* **endpoint:** util-endpoints and middleware-endpoint for endpoints 2.0 ([#3932](https://github.com/aws/aws-sdk-js-v3/issues/3932)) ([e81b7d0](https://github.com/aws/aws-sdk-js-v3/commit/e81b7d0920a74843a2a34857f41b0d6d93abc465))





# [3.170.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.169.0...v3.170.0) (2022-09-13)


### Bug Fixes

* **util-endpoints:** call multi-level functions from callFunction ([#3929](https://github.com/aws/aws-sdk-js-v3/issues/3929)) ([1209cb1](https://github.com/aws/aws-sdk-js-v3/commit/1209cb1613891496b3e03e6a61ff87fc721d1ccf))
* **util-endpoints:** escape tilde when evaluating template ([#3934](https://github.com/aws/aws-sdk-js-v3/issues/3934)) ([5d7ef10](https://github.com/aws/aws-sdk-js-v3/commit/5d7ef10160456b7b872a1e7818dde7d73b4fb714))
* **util-endpoints:** export parseArn from lib/aws ([#3931](https://github.com/aws/aws-sdk-js-v3/issues/3931)) ([1cee1f4](https://github.com/aws/aws-sdk-js-v3/commit/1cee1f4e41d1a660b4fbb7e06eecc22f2a9a82db))
* **util-endpoints:** populate default params before checking for required values ([#3928](https://github.com/aws/aws-sdk-js-v3/issues/3928)) ([2561f60](https://github.com/aws/aws-sdk-js-v3/commit/2561f609f76b006bb39794a6cecfb6c0d68f9ef1))
* **util-endpoints:** return null in parseArn for some empty elements ([#3935](https://github.com/aws/aws-sdk-js-v3/issues/3935)) ([f8bc8b3](https://github.com/aws/aws-sdk-js-v3/commit/f8bc8b3da798cb0c4c4d6fb21e8e88c9109e649b))
* **util-endpoints:** skip evaluation for arg of type number ([#3936](https://github.com/aws/aws-sdk-js-v3/issues/3936)) ([aecd894](https://github.com/aws/aws-sdk-js-v3/commit/aecd89441ec92fc2be8cb4a3914ca7559e136d7d))





# [3.168.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.167.0...v3.168.0) (2022-09-09)

**Note:** Version bump only for package @aws-sdk/util-endpoints





# [3.167.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.166.0...v3.167.0) (2022-09-08)

**Note:** Version bump only for package @aws-sdk/util-endpoints





# [3.162.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.161.0...v3.162.0) (2022-08-31)

**Note:** Version bump only for package @aws-sdk/util-endpoints





# [3.160.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.159.0...v3.160.0) (2022-08-29)

**Note:** Version bump only for package @aws-sdk/util-endpoints





# [3.159.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.158.0...v3.159.0) (2022-08-26)


### Features

* **util-endpoints:** add ruleSet standard library ([#3880](https://github.com/aws/aws-sdk-js-v3/issues/3880)) ([4ffc67b](https://github.com/aws/aws-sdk-js-v3/commit/4ffc67b6f9c8349f93ccf91b9b3aa17d6a22b06e))
