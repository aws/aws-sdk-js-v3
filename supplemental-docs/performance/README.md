# Performance

Performance is crucial for the AWS SDK for JavaScript because it directly impacts the user experience and cost efficiency of applications.

The faster response times lead to smoother interactions for end users, enhancing the overall experience of software built using the SDK. Improved performance can help reduce the cost of running applications on AWS by reducing the amount of resources required to handle the same workload. Performance optimizations enable applications to handle increased traffic and scale more efficiently, ensuring that they can meet the demands of growing user bases.

When working on new major version v3 of AWS SDK for JavaScript, we listened closely to the requirements from our customers and implemented performance improvements to better meet their needs. Please refer to the topics below for details on each improvement.

The time it takes for a Node.js application to start up or load is directly related to how many dependencies it uses that need to be resolved, as well as the number of files the runtime has to read. If you’re sensitive to initialization times, like cold start time in AWS Lambda, try reducing the number of dependencies that need resolution and the number of files in your application. One way to do this without changing your existing code is by bundling your application. When you bundle your application, the Node.js runtime doesn't need to resolve any modules and only has to read the single bundle file, which speeds up startup time. Please refer to our blog post on [reducing Lambda cold start times](https://aws.amazon.com/blogs/developer/reduce-lambda-cold-start-times-migrate-to-aws-sdk-for-javascript-v3/) which provides benchmarks on how bundled application using v3 has the fastest cold start times.

Topics:

- [Publish and Install Sizes](./publish-and-install-sizes.md)
- [Bundle Sizes](./bundle-sizes.md)
- [Dynamic Imports](./dynamic-imports.md)
- [Dependency File Count Reduction](./dependency-file-count-reduction.md)
- [Parallel workloads in Node.js](./parallel-workloads-node-js.md)
