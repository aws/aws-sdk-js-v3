# Performance > Dynamic Imports

A [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) is a function-like expression that allows loading an ECMAScript module asynchronously and dynamically. Unlike the declaration-style counterpart, dynamic imports are only evaluated when needed, and permit greater syntactic flexibility.

Dynamic imports were introduced in ECMAScript 2020, and they have the following benefits:

- **Lazy Loading**: You can load modules only when they are needed, improving the initial loading time of your application. This can be particularly useful for large applications where loading all modules at once might be inefficient.
- **Code Splitting**: Dynamic imports enable code splitting, which means you can split your code into smaller chunks and load them on demand. This can lead to a smaller initial bundle size per chunk, reducing the time it takes to load your application.
- **Improved Performance**: By loading modules asynchronously, you can prevent blocking the main thread, which can improve the performance of your application, especially in cases where modules are large or take time to load.
- **Reduced Memory Usage**: Since modules are loaded only when needed, you can reduce the amount of memory your application uses, especially if you have a large number of modules.
- **Better Resource Management**: Dynamic imports allow for better resource management, as you can control when and how modules are loaded, making it easier to manage dependencies and avoid unnecessary loading.

The dynamic imports are usually used in application code for the mentioned benefits. But they can be used in dependencies too. Since the AWS SDK for JavaScript v3 supports Node.js 14+ (ES2020), we can use Dynamic imports to only load the modules when required. This is especially helpful in reducing the Lambda cold start times.

In v3, the dynamic imports are used in credential providers. You can verify the module cache on loading the credential providers in JS SDK v2 vs v3.

```console
$ echo 'const fs = require("fs");

const cachedFilesBefore = Object.keys(require.cache);

const getCacheStats = (modulePath) => {
  require(modulePath);
  const cachedFilesAfter = Object.keys(require.cache);

  const cachedFiles = cachedFilesAfter.filter((file) => !cachedFilesBefore.includes(file));

  const noOfFilesInCache = cachedFiles.length;
  let bytesInCache = 0;
  cachedFiles.forEach((filePath) => {
    bytesInCache += fs.statSync(filePath).size;
  });

  return {
    noOfFilesInCache,
    bytesInCache,
  };
};

module.exports = { getCacheStats };' > getCacheStats.js
```

```console
$ npm install aws-sdk@2.1557.0 --save-exact

$ echo 'const { getCacheStats } = require("./getCacheStats");
console.log(getCacheStats(
  "aws-sdk/lib/credentials/credential_provider_chain"
));' > cache-v2.js

$ node cache-v2.js
{ noOfFilesInCache: 53, bytesInCache: 397715 }
```

```console
$ npm install @aws-sdk/credential-provider-node@3.515.0 --save-exact

$ echo 'const { getCacheStats } = require("./getCacheStats");
console.log(getCacheStats(
  "@aws-sdk/credential-provider-node"
));' > cache-v3.js

$ node cache-v3.js
{ noOfFilesInCache: 8, bytesInCache: 26127 }
```

In the above code samples, we compare the number of files and bytes loaded in cache when importing equivalent credential providers. In v2, there are 53 files loaded in cache with total size of 398 kB. While in v3, there are only 8 files loaded in cache, which total size of 26 kB.

If you’re bundling your application, the Dynamic imports are not supported by default in some old versions of bundlers. For example, if your setup is using `@babel/core@<7.8.0`, you need to explicitly add `@babel/plugin-syntax-dynamic-import` plugin to transform the code.
