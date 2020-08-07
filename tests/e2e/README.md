## Prerequisites

1.  You have a CloudFormation stack called `SdkReleaseV3IntegTestResourcesStack` in the AWS account you used to run the
    integration test. If not you can deploy the stack with:

    ```console
    aws cloudformation deploy --stack-name SdkReleaseV3IntegTestResourcesStack --template-file ./IntegTestResourcesStack.template.json --capabilities CAPABILITY_IAM
    ```

1.  You have `ubuntu/standard/4.0` docker image built. If not, please follow [the guide to build the image](https://github.com/aws/aws-codebuild-docker-images#how-to-build-docker-images).

## Steps

1. Launch the image:

   ```console
   docker run -it --entrypoint sh aws/codebuild/standard:4.0 -c bash
   ```

   Get 12-digit container ID by:

   ```console
   docker container ls
   ```

   Note that you should run this command outside the launched container.

1. Copy the working SDK repository into the container by:

   ```console
   docker cp -a path/to/sdk [12-digit-container-id]:/path/to/working/dir
   ```

1. Inside the container, configure the credentials to be the one that has permission to the `SdkReleaseV3IntegTestResourcesStack`
   stack. Region also needs to be configured. You can configure the credentials and region following
   [this guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).

1. Change directory to the SDK directory, make sure the clients that contains end-to-end test suites has been built to
   JS files.

1. Run the end-to-end test suite from the SDK root:

   ```console
   yarn test:e2e
   ```
