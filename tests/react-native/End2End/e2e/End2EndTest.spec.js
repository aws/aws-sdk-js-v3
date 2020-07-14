describe("S3", () => {
  const timeout = 5000;
  let responseTextField;
  beforeEach(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    responseTextField = element(by.id("responseContent"));
  });

  afterEach(async () => {
    await element(by.id("s3DeleteObject")).tap();
  });

  it("should upload an object after tapping putObject button", async () => {
    const putObjectButton = element(by.id("s3PutObject"));
    await waitFor(putObjectButton).toBeVisible();
    await putObjectButton.tap();
    await waitFor(responseTextField).toHaveText(`"httpStatusCode":200,`);
    await waitFor(responseTextField).toHaveText(`"__type":"PutObjectOutput",`);
  });

  it("after tapping getObject, App should get the same object that uploaded", async () => {
    const getObjectButton = element(by.id("s3GetObject"));
    await waitFor(getObjectButton).toBeVisible();
    // upload object first
    await element(by.id("s3PutObject")).tap();
    await waitFor(responseTextField).toHaveText(`"httpStatusCode":200,`);
    // then download them
    await getObjectButton.tap();
    await waitFor(responseTextField).toHaveText("this is a test payload from RN end-to-end test.");
  });

  it("should list Objects after tapping listObjects button", async () => {
    const listObjectsButton = element(by.id("s3ListObjects"));
    await waitFor(listObjectsButton).toBeVisible();
    await listObjectsButton.tap();
    await waitFor(responseTextField).toHaveText(`"httpStatusCode":200,`);
    await waitFor(responseTextField).toHaveText(`"__type":"ListObjectsOutput",`);
  });

  it("should conduct multipart upload after tapping createMultipartUpload, uploadPart, completeMultipartUpload buttons", async () => {
    // Create multipart upload
    const createMultipartUploadButton = element(by.id("s3CreateMultipartUpload"));
    await waitFor(createMultipartUploadButton).toBeVisible();
    await createMultipartUploadButton.tap();
    await waitFor(responseTextField).toHaveText(`"httpStatusCode":200,`);
    await waitFor(responseTextField).toHaveText(`"__type":"CreateMultipartUploadOutput",`);
    // UploadPart
    const uploadPartButton = element(by.id("s3UploadPart"));
    await waitFor(uploadPartButton).toBeVisible();
    await uploadPartButton.tap();
    await waitFor(responseTextField).toHaveText(`"httpStatusCode":200,`);
    await waitFor(responseTextField).toHaveText(`"__type":"UploadPartOutput",`);
    // ListParts
    const listPartsButton = element(by.id("s3ListParts"));
    await waitFor(listPartsButton).toBeVisible();
    await listPartsButton.tap();
    await waitFor(responseTextField).toHaveText(`"httpStatusCode":200,`);
    await waitFor(responseTextField).toHaveText(`"__type":"ListPartsOutput",`);
    await waitFor(responseTextField).toHaveText(`[{"__type":"Part",`); // contains a part in list
    // Complete MultipartUpload
    const completeMultipartButton = element(by.id("s3CompleteMultipartUpload"));
    await waitFor(completeMultipartButton).toBeVisible();
    await completeMultipartButton.tap();
    await waitFor(responseTextField).toHaveText(`"httpStatusCode":200,`);
    await waitFor(responseTextField).toHaveText(`"__type":"CompleteMultipartUploadOutput",`);
    // Head uploaded object
    const headObjectButton = element(by.id("s3HeadObject"));
    await waitFor(headObjectButton).toBeVisible();
    await headObjectButton.tap();
    await waitFor(responseTextField).toHaveText(`"httpStatusCode":200,`);
    await waitFor(responseTextField).toHaveText(`"__type":"CompleteMultipartUploadOutput",`);
  });
});
