/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment, useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView, StatusBar, Button, Text } from "react-native";
import { S3 } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import {
  //@ts-ignore imported ENVs are injected by Babel at compile time
  AWS_SMOKE_TEST_IDENTITY_POOL_ID,
  //@ts-ignore
  AWS_SMOKE_TEST_REGION,
  //@ts-ignore
  AWS_SMOKE_TEST_BUCKET,
} from "react-native-dotenv";

const App = () => {
  const [responseContent, setResponseContent] = useState("");
  const [uploadId, setUploadId] = useState("");
  const [uploadParts, setUploadParts] = useState<Array<{ ETag: string; PartNumber: number }>>([]);
  const s3 = new S3({
    credentials: fromCognitoIdentityPool({
      identityPoolId: AWS_SMOKE_TEST_IDENTITY_POOL_ID,
      client: new CognitoIdentityClient({
        region: AWS_SMOKE_TEST_REGION,
      }),
    }),
    region: AWS_SMOKE_TEST_REGION,
  });
  const Key = `smoke-test-rn`;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollViewContainer}>
          <Fragment>
            <Button
              title="S3.PutObject"
              testID="s3PutObject"
              onPress={async () => {
                const res = await s3.putObject({
                  Bucket: AWS_SMOKE_TEST_BUCKET,
                  Key,
                  Body: "this is a test payload from RN end-to-end test.",
                });
                setResponseContent(JSON.stringify(res));
              }}
            />
            <Button
              title="S3.getObject"
              testID="s3GetObject"
              onPress={async () => {
                const res = await s3.getObject({
                  Bucket: AWS_SMOKE_TEST_BUCKET,
                  Key,
                });
                if (!(res.Body instanceof Blob))
                  throw new Error(`Expected Blob payload but got ${res.Body.constructor}`);
                const reader = new FileReader();
                reader.addEventListener("loadend", (data) => {
                  setResponseContent(reader.result as string);
                });
                reader.readAsText(res.Body);
              }}
            />
            <Button
              title="S3.listObjects"
              testID="s3ListObjects"
              onPress={async () => {
                const res = await s3.listObjects({
                  Bucket: AWS_SMOKE_TEST_BUCKET,
                });
                setResponseContent(JSON.stringify(res));
              }}
            />
            <Button
              title="S3.createMultipartUpload"
              testID="s3CreateMultipartUpload"
              onPress={async () => {
                const res = await s3.createMultipartUpload({
                  Bucket: AWS_SMOKE_TEST_BUCKET,
                  Key: `${Key}-multipart`,
                });
                setUploadId(res.UploadId);
                setResponseContent(JSON.stringify(res));
              }}
            />
            <Button
              title="S3.uploadPart"
              testID="s3UploadPart"
              onPress={async () => {
                console.log("uploadId ", uploadId);
                const res = await s3.uploadPart({
                  Bucket: AWS_SMOKE_TEST_BUCKET,
                  Key: `${Key}-multipart`,
                  PartNumber: 1,
                  UploadId: uploadId,
                  Body: new Blob(new Array(1024).fill("x")),
                });
                uploadParts.push({ PartNumber: 1, ETag: res.ETag });
                setUploadParts(uploadParts);
                setResponseContent(JSON.stringify(res));
              }}
            />
            <Button
              title="S3.listParts"
              testID="s3ListParts"
              onPress={async () => {
                const res = await s3.listParts({
                  Bucket: AWS_SMOKE_TEST_BUCKET,
                  Key: `${Key}-multipart`,
                  UploadId: uploadId,
                });
                setResponseContent(JSON.stringify(res));
              }}
            />
            <Button
              title="S3.completeMultipartUpload"
              testID="s3CompleteMultipartUpload"
              onPress={async () => {
                const res = await s3.completeMultipartUpload({
                  Bucket: AWS_SMOKE_TEST_BUCKET,
                  Key: `${Key}-multipart`,
                  UploadId: uploadId,
                  MultipartUpload: { Parts: uploadParts },
                });
                setResponseContent(JSON.stringify(res));
              }}
            />
            <Button
              title="S3.headObject"
              testID="s3HeadObject"
              onPress={async () => {
                const res = await s3.headObject({
                  Bucket: AWS_SMOKE_TEST_BUCKET,
                  Key: `${Key}-multipart`,
                });
                setResponseContent(JSON.stringify(res));
              }}
            />
            <Button
              title="S3.deleteObject"
              testID="s3DeleteObject"
              onPress={async () => {
                const res0 = await s3.deleteObject({
                  Bucket: AWS_SMOKE_TEST_BUCKET,
                  Key,
                });
                const res1 = await s3.deleteObject({
                  Bucket: AWS_SMOKE_TEST_BUCKET,
                  Key: `${Key}-multipart`,
                });
                setResponseContent(`${JSON.stringify(res0)}\n${JSON.stringify(res1)}`);
              }}
            />
            <Text testID="responseContent">{responseContent}</Text>
          </Fragment>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
