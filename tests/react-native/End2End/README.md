# End2End

> end-to-end test run on React-Native testing a subset of AWS SDK clients

## Prerequisite

- See [Detox requirement](https://github.com/wix/Detox#environment)
- Launch Xcode.app, if it asks you to install the update or extra components, please follow the instructions to install
  them.

## Steps to Setup

1. Build the project:

   - change directory to project root: `cd ../../..`
   - `yarn`
   - `yarn build:all`
   - If the command above takes too long on local machine, you can build the only packages that used by the RN test. As
     of now\*, the RN test only touches `client-cognito-identity`, `client-s3`, `client-cloudformation`,
     `credential-provider-cognito-identity`. You can build them by:

     ```console
     yarn build:crypto-dependencies && lerna run pretest --scope '{@aws-sdk/client-cognito-identity,@aws-sdk/client-s3,@aws-sdk/client-cloudformation,@aws-sdk/credential-provider-cognito-identity}' --include-dependencies
     ```

   - `git fetch [remove] --tags`

1. Launch the ReactNative test:

   - change directory to RN test root: `cd tests/react-native/End2End`
   - make sure you have configured the SDK with the the credentials from the testing account that contains
     `SdkReleaseV3IntegTestResourcesStack`
   - `node launch-app.js --local-publish`
