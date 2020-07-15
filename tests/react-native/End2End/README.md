# End2End

> end-to-end test run on React-Native testing a subset of AWS SDK clients

## Prerequisite

See [Detox requirement](https://github.com/wix/Detox#environment)

## Steps to Setup

1. Build the project:

   - change directory to project root: `cd ../../..`
   - `yarn`
   - `yarn build:all`

1. Launch the ReactNative test:

   - change directory to RN test root: `cd tests/react-native/End2End`
   - make sure you have configured the SDK with the the credentials from the testing account that contains
     `SdkReleaseV3IntegTestResourcesStack`
   - `node launch-app.js --local-publish`
