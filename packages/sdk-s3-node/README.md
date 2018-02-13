# sdk-s3-node

## Description

Node SDK for Amazon Simple Storage Service. 

## Installing

To install the this package using NPM, simply type the following into a terminal window: 

```
npm install @aws/sdk-s3-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commends in ES modules. To send a request, you only need to import the client(`S3Client`) and the commands you need, for example `PutObjectCommand`:

```javascript
 const { S3Client } = require('@aws/sdk-s3-node/S3Client');
 const { PutObjectCommand } = require('@aws/sdk-s3-node/commands/PutObjectCommand')
```

### Usage

To send a request, you may 

* Initiate client with configurations.(credentials, region)
* Initiate command with input parameters.
* Call `send` operation of client with command object as input.
* If you are using customized http handler, you may call `destroy()` to close opon connections. 

```javascript
const s3 = new S3Client({region: 'region'});
//clients can be shared by different commands
const params = {Bucket: 'bucket', Key: 'key', Body: 'body'};
const putObjectCommand = new PutObjectCommand(params);
s3.send(putObjectCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```
Besides using promise style, there are 2 other ways to send a request:

```javascript
// async/await 
try {
    const data = await s3.send(putObjectCommand);
    // do something
} catch(error) {
    // error handling
}
```

```javascript
// callback
s3.send(putObjectCommand, (err, data) => {
    //do something
})
```

Besides of using `send()`, SDK can also send request in a traditional way:

```javascript
import * as AWS from '@aws/sdk-s3-node/S3';
const s3 = new AWS.S3({region: 'region'})
s3.putObject(params, (err, data) => {
    //do something
})
```

### Troubleshooting 

When the service returns an exception, inpecting the exceptions is always helpful. You can not only access the exception information but also response metadata(i.e request id).

```javascript
try {
    const data = await s3.send(putObjectCommand);
    // do something
} catch(error) {
    const metadata = error.$metadata;
    console.log(
`requestId: ${metadata.requestId}
cfId: ${metadata.cfId}
extendedRequestId: ${metadata.extendedRequestId}'
    );
}
```
Most of the exceptions thrown by services are documented, you can find them by its `name` property from [SDK doc](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/).


## Getting Help

Please use these community resources for getting help. We use the GitHub issues for tracking bugs and feature requests and have limited bandwidth to address them.

 * Ask a question on [StackOverflow](https://stackoverflow.com/) and tag it with `aws-sdk-js`
 * Come join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js?source=orgpage)
 * If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js/issues/new)

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the sdk-s3-node SDK is updated. To contribute to SDK you can checkout our [code generator repository](todo).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
