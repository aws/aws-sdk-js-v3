# @aws-sdk/signature-v4a

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/signature-v4a/latest.svg)](https://www.npmjs.com/package/@aws-sdk/signature-v4a)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/signature-v4a.svg)](https://www.npmjs.com/package/@aws-sdk/signature-v4a)

See: https://github.com/aws/aws-sdk-js-v3/tree/main#functionality-requiring-aws-common-runtime-crt.

## Description

Alias package for `@smithy/signature-v4a`. This package provides a SigV4a-compatible request signer ([`@smithy/signature-v4a`](https://www.npmjs.com/package/@smithy/signature-v4a)) if the request is multi-region.

A multi-region request is identified by the `signingRegion` parameter. A request is multi-region if the `signingRegion`
parameter is set to `*`.
