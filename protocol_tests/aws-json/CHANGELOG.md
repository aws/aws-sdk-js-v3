# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.10.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.9.0...v3.10.0) (2021-03-26)


### Features

* use ts-jest for running jest tests ([#2088](https://github.com/aws/aws-sdk-js-v3/issues/2088)) ([456002c](https://github.com/aws/aws-sdk-js-v3/commit/456002cf7fa16864b72c3c279b094886a42abddb))





# [3.9.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.8.1...v3.9.0) (2021-03-18)

**Note:** Version bump only for package @aws-sdk/aws-json





## [3.8.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.8.0...v3.8.1) (2021-03-11)

**Note:** Version bump only for package @aws-sdk/aws-json





# [3.8.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.7.0...v3.8.0) (2021-03-05)

**Note:** Version bump only for package @aws-sdk/aws-json





# [3.7.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.6.1...v3.7.0) (2021-02-25)

**Note:** Version bump only for package @aws-sdk/aws-json





## [3.6.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.6.0...v3.6.1) (2021-02-22)


### Bug Fixes

* update references of default branch from master to main ([#2057](https://github.com/aws/aws-sdk-js-v3/issues/2057)) ([59b8b58](https://github.com/aws/aws-sdk-js-v3/commit/59b8b58c3a8c057b36abfaa59bae3a6ffb068cf1))





# [3.6.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.5.0...v3.6.0) (2021-02-20)


### Bug Fixes

* revert publish v3.5.1-0 ([#2058](https://github.com/aws/aws-sdk-js-v3/issues/2058)) ([af25697](https://github.com/aws/aws-sdk-js-v3/commit/af25697aee9363a66c0d69b83f7df2e445c4b721))





# [3.5.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.4.1...v3.5.0) (2021-02-12)

**Note:** Version bump only for package @aws-sdk/aws-json





## [3.4.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.4.0...v3.4.1) (2021-01-29)


### Bug Fixes

* **clients:** use TS 3.4 compatible types for TS 3.9 ([#1978](https://github.com/aws/aws-sdk-js-v3/issues/1978)) ([8bced5c](https://github.com/aws/aws-sdk-js-v3/commit/8bced5c32b9dbc68f1065054d796cb0b8b87bcc4))





# [3.4.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.3.0...v3.4.0) (2021-01-28)


### Features

* **middleware-stack:** allow adding middleware to override an existing one ([#1964](https://github.com/aws/aws-sdk-js-v3/issues/1964)) ([9c21f14](https://github.com/aws/aws-sdk-js-v3/commit/9c21f14412f2b1f591422f3c67dedbe886db723b)), closes [#1883](https://github.com/aws/aws-sdk-js-v3/issues/1883)
* use downlevel-dts to generate TS 3.4 compatible types ([#1943](https://github.com/aws/aws-sdk-js-v3/issues/1943)) ([63ad215](https://github.com/aws/aws-sdk-js-v3/commit/63ad2151c8bb7be32ea8838a9b0974806ed3906b))





# [3.3.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.2.0...v3.3.0) (2021-01-14)


### Bug Fixes

* **clients:** export explicit dependencies on @aws-sdk/types ([#1902](https://github.com/aws/aws-sdk-js-v3/issues/1902)) ([96f1087](https://github.com/aws/aws-sdk-js-v3/commit/96f1087333ba916593d557051297983912b27caa))
* **clients:** lowercase all header names in serializer ([#1892](https://github.com/aws/aws-sdk-js-v3/issues/1892)) ([1308721](https://github.com/aws/aws-sdk-js-v3/commit/130872194bc94590f599051ee067d862210252f8))
* **url-parser:** merge browser and node url parser, add rn url parser ([#1903](https://github.com/aws/aws-sdk-js-v3/issues/1903)) ([99be092](https://github.com/aws/aws-sdk-js-v3/commit/99be092fded13bb00802549e17dbdb6d760a8679))


### Features

* **clients:** update README with documentation, usage and more ([#1907](https://github.com/aws/aws-sdk-js-v3/issues/1907)) ([03be111](https://github.com/aws/aws-sdk-js-v3/commit/03be111a086360687f20b2ac1d490584fb4fbefe))





# [3.2.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1.0...v3.2.0) (2021-01-09)


### Bug Fixes

* stop adding command mw repeatedly in resolveMiddleware() ([#1883](https://github.com/aws/aws-sdk-js-v3/issues/1883)) ([d4c302b](https://github.com/aws/aws-sdk-js-v3/commit/d4c302b816e1781f8d04bd479cc4e26e0fe4debc))





# [3.1.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.0.0...v3.1.0) (2020-12-23)


### Bug Fixes

* **clients:** default region and credential provider ([#1834](https://github.com/aws/aws-sdk-js-v3/issues/1834)) ([bc79ab5](https://github.com/aws/aws-sdk-js-v3/commit/bc79ab5f17e00bc069b51f2f426dc73c16483eaa))
* **clients:** use signing name from auth sigv4 trait ([#1835](https://github.com/aws/aws-sdk-js-v3/issues/1835)) ([e539302](https://github.com/aws/aws-sdk-js-v3/commit/e539302f69e55eb46ffd751125fe06d49c21d1c5))
* log requestId, extendedRequestId, cfId in $metadata ([#1819](https://github.com/aws/aws-sdk-js-v3/issues/1819)) ([f2a47e8](https://github.com/aws/aws-sdk-js-v3/commit/f2a47e80965f96b86fa42038bf2711b922eee302))
* **clients:** populate sdkId in serviceId and default to use arnNamespace as signingName ([#1786](https://github.com/aws/aws-sdk-js-v3/issues/1786)) ([0011af2](https://github.com/aws/aws-sdk-js-v3/commit/0011af27a62d0d201296225e2a70276645b3231a))
* **clients:** update endpoint provider ([#1824](https://github.com/aws/aws-sdk-js-v3/issues/1824)) ([64d2210](https://github.com/aws/aws-sdk-js-v3/commit/64d22105691f286ad9accf1a137d7c1928378ad4))


### Features

* standardize user agent value ([#1775](https://github.com/aws/aws-sdk-js-v3/issues/1775)) ([388b180](https://github.com/aws/aws-sdk-js-v3/commit/388b18071146171b42d283a93f9590cb23956e1a))





# [3.0.0](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.10...v3.0.0) (2020-12-15)


### Features

* bump version to 3.0.0 ([#1793](https://github.com/aws/aws-sdk-js-v3/issues/1793)) ([d8475f8](https://github.com/aws/aws-sdk-js-v3/commit/d8475f8d972d28fbc15cd7e23abfe18f9eab0644))





# [1.0.0-rc.10](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.9...v1.0.0-rc.10) (2020-12-15)

**Note:** Version bump only for package @aws-sdk/aws-json





# [1.0.0-rc.9](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.8...v1.0.0-rc.9) (2020-12-11)


### Bug Fixes

* **codegen:** import SENSITIVE_STRING only when used ([#1761](https://github.com/aws/aws-sdk-js-v3/issues/1761)) ([9296283](https://github.com/aws/aws-sdk-js-v3/commit/9296283623edecf95441e310200a17b61efe80e3))


### Features

* add service id config ([#1765](https://github.com/aws/aws-sdk-js-v3/issues/1765)) ([1ba5672](https://github.com/aws/aws-sdk-js-v3/commit/1ba5672ff75bf5401f02f65d20af61c7bee339ff))





# [1.0.0-rc.8](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.7...v1.0.0-rc.8) (2020-12-05)


### Features

* **invalid-dependency:** add invalidAsyncFunction which rejects with an Error ([#1719](https://github.com/aws/aws-sdk-js-v3/issues/1719)) ([c4c046e](https://github.com/aws/aws-sdk-js-v3/commit/c4c046edf0e752560fded20255642e6aed559d2c))





# [1.0.0-rc.7](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.6...v1.0.0-rc.7) (2020-11-20)

**Note:** Version bump only for package @aws-sdk/aws-json





# [1.0.0-rc.6](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.5...v1.0.0-rc.6) (2020-11-13)

**Note:** Version bump only for package @aws-sdk/aws-json





# [1.0.0-rc.5](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.4...v1.0.0-rc.5) (2020-11-09)


### Bug Fixes

* **package.json:** migrate @aws-sdk/types into devDependencies codegen ([#1658](https://github.com/aws/aws-sdk-js-v3/issues/1658)) ([eb50962](https://github.com/aws/aws-sdk-js-v3/commit/eb509629cd6eeb293bf762c201710acabe049a58))





# [1.0.0-rc.4](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2020-10-31)


### Features

* log clientName and commandName ([#1637](https://github.com/aws/aws-sdk-js-v3/issues/1637)) ([79f25ca](https://github.com/aws/aws-sdk-js-v3/commit/79f25cacc076483e0134f3626d9971ada5f1206d))





# [1.0.0-rc.3](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2020-10-27)

**Note:** Version bump only for package @aws-sdk/aws-json





# [1.0.0-rc.2](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2020-10-22)


### Bug Fixes

* throw 3XX redirection as errors explicitly ([#1591](https://github.com/aws/aws-sdk-js-v3/issues/1591)) ([76f83f1](https://github.com/aws/aws-sdk-js-v3/commit/76f83f19c96dc6c8705c8367cae5d87bbcfd7b23))





# [1.0.0-rc.1](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-gamma.11...v1.0.0-rc.1) (2020-10-19)


### Features

* ready for release candidate ([#1578](https://github.com/aws/aws-sdk-js-v3/issues/1578)) ([519f66c](https://github.com/aws/aws-sdk-js-v3/commit/519f66c6388b91d0bd750a511e6d1af56196835e))





# [1.0.0-gamma.10](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/aws-json@1.0.0-gamma.9...@aws-sdk/aws-json@1.0.0-gamma.10) (2020-10-07)

**Note:** Version bump only for package @aws-sdk/aws-json





# [1.0.0-gamma.9](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/aws-json@1.0.0-gamma.8...@aws-sdk/aws-json@1.0.0-gamma.9) (2020-09-29)

**Note:** Version bump only for package @aws-sdk/aws-json





# [1.0.0-gamma.8](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/aws-json@1.0.0-gamma.7...@aws-sdk/aws-json@1.0.0-gamma.8) (2020-09-15)


### Bug Fixes

* default import package.json for spec compatibility ([#1505](https://github.com/aws/aws-sdk-js-v3/issues/1505)) ([797ba7d](https://github.com/aws/aws-sdk-js-v3/commit/797ba7dc7743eb65e8f81536bcf70e5c225ef861))
* toposort and chunk shape models ([#1510](https://github.com/aws/aws-sdk-js-v3/issues/1510)) ([bee87d8](https://github.com/aws/aws-sdk-js-v3/commit/bee87d8fcc5ea82a361386309ebf9330fe39c816))





# [1.0.0-gamma.7](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/aws-json@1.0.0-gamma.6...@aws-sdk/aws-json@1.0.0-gamma.7) (2020-09-01)


### Features

* add LoggerConfig to all clients ([#1472](https://github.com/aws/aws-sdk-js-v3/issues/1472)) ([d55a812](https://github.com/aws/aws-sdk-js-v3/commit/d55a81278fee13281b20bfa60d89d2b111245dd4))





# [1.0.0-gamma.6](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/aws-json@1.0.0-gamma.5...@aws-sdk/aws-json@1.0.0-gamma.6) (2020-08-25)


### Features

* get partition of given region ([#1435](https://github.com/aws/aws-sdk-js-v3/issues/1435)) ([c18bfe4](https://github.com/aws/aws-sdk-js-v3/commit/c18bfe489db77d945d0bcc4ae7194ff46cd461a9))
* refactor nodejs region loader  ([#1437](https://github.com/aws/aws-sdk-js-v3/issues/1437)) ([5d79645](https://github.com/aws/aws-sdk-js-v3/commit/5d79645eb622b111c94a7de1918c8357c83a7bf8))
* refactor nodejs retry config loader ([#1438](https://github.com/aws/aws-sdk-js-v3/issues/1438)) ([5478012](https://github.com/aws/aws-sdk-js-v3/commit/5478012147b475bdce07a2cbe393a972e502c93f))





# [1.0.0-gamma.5](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/aws-json@1.0.0-gamma.4...@aws-sdk/aws-json@1.0.0-gamma.5) (2020-08-04)

**Note:** Version bump only for package @aws-sdk/aws-json





# [1.0.0-gamma.4](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/aws-json@1.0.0-gamma.3...@aws-sdk/aws-json@1.0.0-gamma.4) (2020-07-21)

**Note:** Version bump only for package @aws-sdk/aws-json





# [1.0.0-gamma.3](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/aws-json@1.0.0-gamma.2...@aws-sdk/aws-json@1.0.0-gamma.3) (2020-07-13)

**Note:** Version bump only for package @aws-sdk/aws-json





# 1.0.0-gamma.2 (2020-07-08)


### Features

* add filterSensitiveLog method to Structure namespaces ([#1130](https://github.com/aws/aws-sdk-js-v3/issues/1130)) ([8eff087](https://github.com/aws/aws-sdk-js-v3/commit/8eff0875580e30e12f2e0abd5fa402973790e697))



# 1.0.0-gamma.2 (2020-05-26)



# 1.0.0-gamma.1 (2020-05-21)


### Features

* refactor http request handlers ([#1186](https://github.com/aws/aws-sdk-js-v3/issues/1186)) ([605ebc5](https://github.com/aws/aws-sdk-js-v3/commit/605ebc57d2ec140ae5dd1c152168ec786e6663d9))



# 1.0.0-beta.4 (2020-04-25)


### Bug Fixes

* XML Namespace Serde issues ([#1077](https://github.com/aws/aws-sdk-js-v3/issues/1077)) ([77386f6](https://github.com/aws/aws-sdk-js-v3/commit/77386f6fac5fe2644f1b60a77050975c0327b6e0))


### Features

* protocol test codegen project + service clients ([#1058](https://github.com/aws/aws-sdk-js-v3/issues/1058)) ([16f81f6](https://github.com/aws/aws-sdk-js-v3/commit/16f81f6c59a060d30e76f61bb6d68a6e85db110a))





# 1.0.0-gamma.1 (2020-05-26)



# 1.0.0-gamma.1 (2020-05-21)


### Features

* refactor http request handlers ([#1186](https://github.com/aws/aws-sdk-js-v3/issues/1186)) ([605ebc5](https://github.com/aws/aws-sdk-js-v3/commit/605ebc57d2ec140ae5dd1c152168ec786e6663d9))



# 1.0.0-beta.4 (2020-04-25)


### Bug Fixes

* XML Namespace Serde issues ([#1077](https://github.com/aws/aws-sdk-js-v3/issues/1077)) ([77386f6](https://github.com/aws/aws-sdk-js-v3/commit/77386f6fac5fe2644f1b60a77050975c0327b6e0))


### Features

* protocol test codegen project + service clients ([#1058](https://github.com/aws/aws-sdk-js-v3/issues/1058)) ([16f81f6](https://github.com/aws/aws-sdk-js-v3/commit/16f81f6c59a060d30e76f61bb6d68a6e85db110a))





# 1.0.0-gamma.0 (2020-05-21)


### Features

* refactor http request handlers ([#1186](https://github.com/aws/aws-sdk-js-v3/issues/1186)) ([605ebc5](https://github.com/aws/aws-sdk-js-v3/commit/605ebc57d2ec140ae5dd1c152168ec786e6663d9))



# 1.0.0-beta.4 (2020-04-25)


### Bug Fixes

* XML Namespace Serde issues ([#1077](https://github.com/aws/aws-sdk-js-v3/issues/1077)) ([77386f6](https://github.com/aws/aws-sdk-js-v3/commit/77386f6fac5fe2644f1b60a77050975c0327b6e0))


### Features

* protocol test codegen project + service clients ([#1058](https://github.com/aws/aws-sdk-js-v3/issues/1058)) ([16f81f6](https://github.com/aws/aws-sdk-js-v3/commit/16f81f6c59a060d30e76f61bb6d68a6e85db110a))





# 1.0.0-beta.0 (2020-04-25)


### Bug Fixes

* XML Namespace Serde issues ([#1077](https://github.com/aws/aws-sdk-js-v3/issues/1077)) ([77386f6](https://github.com/aws/aws-sdk-js-v3/commit/77386f6fac5fe2644f1b60a77050975c0327b6e0))


### Features

* protocol test codegen project + service clients ([#1058](https://github.com/aws/aws-sdk-js-v3/issues/1058)) ([16f81f6](https://github.com/aws/aws-sdk-js-v3/commit/16f81f6c59a060d30e76f61bb6d68a6e85db110a))
