# Performance > Dependency File Count Reduction

While benchmarking cold start times on serverless environments like AWS Lambda, we noticed that the duration Node.js runtime spends reading dependency code is directly correlated with the number of files required to read from the artifacts.

The AWS SDK for JavaScript v3 chose [modularity](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/) for reducing install sizes, but it leads to increase in the number of files required to be read. There are several other benefits of modularity which are more beneficial in software development:

- **Ease of maintenance**: Each function is contained in its own file, making it easier to understand and update without affecting other parts of the codebase.
- **Readability**: Smaller files are often easier to read and navigate, especially when dealing with large codebases. It can also make it easier for new developers to understand the code.
- **Reusability**: Individual functions can be reused more easily across different parts of your application.
- **Testing**: With each function in its own file, it can be easier to write unit tests for each function, as you can test them in isolation.
- **Performance**: While the impact might be minimal, having smaller files can potentially improve performance by reducing the amount of code that needs to be loaded into memory at once.
- **Collaboration**: It can make collaboration easier, as different developers can work on different functions without stepping on each other's toes.

In order to retain the benefits of modularity while reducing the number of files the Node.js runtime need to read, we inline the dependency code of our internal packages in a single file. Our benchmarking showed cold start times reduced by **27-32%** from this change. Please bump your SDK version to >=v3.495.0 to avail these improvement.

You can verify the number of files read by comparing two versions of example dependency `@aws-sdk/util-dynamodb` as follows:

```console
$ echo 'const cachedFilesBefore = Object.keys(require.cache);

const packageName = "@aws-sdk/util-dynamodb";
require(packageName);

const cachedFilesAfter = Object.keys(require.cache);
const cachedFiles = cachedFilesAfter.filter(
  (file) => !cachedFilesBefore.includes(file)
);

const version = require(`${packageName}/package.json`).version;
console.log(
  `${cachedFiles.length} file(s) are read when importing ${packageName}@${version}`
);' > test.js

$ npm install @aws-sdk/util-dynamodb@3.494.0 --save-exact

$ node test.js
8 file(s) are read when importing @aws-sdk/util-dynamodb@3.494.0

$ npm install @aws-sdk/util-dynamodb@3.495.0 --save-exact

$ node test.js
1 file(s) are read when importing @aws-sdk/util-dynamodb@3.495.0
```

If you are sensitive to initialization times of your application, then you need to reduce file access and module resolutions required to be done by Node.js runtime, which can be easily achieved by bundling your application. Please refer to our blog post on [reducing cold start times](https://aws.amazon.com/blogs/developer/reduce-lambda-cold-start-times-migrate-to-aws-sdk-for-javascript-v3/) which provides detailed benchmarks for different use cases on AWS Lambda.
