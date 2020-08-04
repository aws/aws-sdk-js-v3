# End2End

> end-to-end test run on React-Native testing a subset of AWS SDK clients

## Prerequisite

- See [Detox requirement](https://github.com/wix/Detox#environment)
- Launch XCode.app, if it asks you to install the update or extra components, please follow the instructions to install
  them.
- Confirm iPhone X simulator is installed locally, by running:
  ```console
  applesimutils --list | grep "name" | grep iPhone
  ```
  If `applesimutils` command is not found, you can install it [following the guidance](https://github.com/wix/AppleSimulatorUtils#installing).
  If iPhone X simulator is not available in the runtime, you can install it following the next step.
- Launch XCode.app, click `Open another project`, choose the directory `tests/react-native/End2End/ios`. Open XCode ->
  Open Developer Tool -> simulator. In the simulator.app, open Hardware -> Device -> Manage Devices... -> Simulators ->
  click "+" at the button of left side bar. In the pop-up, "Device Type" drop-down, choose "iPhone X", click "Create".
  Make sure iPhone X is available in the last step.

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

## Steps to Re-run the Tests

If the scripts above fail and you need to re-run the test script, you need to make sure the workspace is cleaned and
ready to run the test script again. Follow the steps bellow to clean the workspace.

1. Kill the local NPM registry process. You can get the process PID by running:

   ```console
   lsof -i -P -n | grep "TCP 127.0.0.1:4873"
   ```

   The number after `node` is the PID.

   Kill the process by running:

   ```console
   kill -9 [PID]
   ```

1. Reset the temporary changes to the workspace in git from project root:

   ```console
    git reset --hard clients/*/package.json packages/*/package.json protocol_tests/*/package.json
   ```

1. Follow the `Launch the ReactNative test:` step of [Steps to Setup](#steps-to-setup). If you don't plan to install
   the packages to `End2End` test APP again, you can omit the `--local-publish` option the test script:

   ```console
   node launch-app.js
   ```
