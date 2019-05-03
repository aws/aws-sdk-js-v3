import { ServiceMetadata } from "./ServiceMetadata";
import { ServiceMetadata as ServiceMetadataDefinition } from "@aws-sdk/types";

describe("ServiceMetadata", () => {
  const metadata: ServiceMetadataDefinition = {
    apiVersion: "string",
    endpointPrefix: "string",
    protocol: "json",
    serviceFullName: "string",
    signatureVersion: "v4",
    uid: "string"
  };

  it("should export metadata", () => {
    const serviceMetadata = new ServiceMetadata(metadata);
    expect(serviceMetadata.toString()).toEqual(
      `import {ServiceMetadata as _ServiceMetadata_} from '@aws-sdk/types';

export const ServiceMetadata: _ServiceMetadata_ = {
  apiVersion: 'string',
  endpointPrefix: 'string',
  protocol: 'json',
  serviceFullName: 'string',
  signatureVersion: 'v4',
  uid: 'string'
};`
    );
  });
});
