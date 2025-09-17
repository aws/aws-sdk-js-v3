import { describe, expect, test as it } from "vitest";

import { parseXML } from "./xml-parser";
import { parseXML as parseXMLBrowser } from "./xml-parser.browser";

describe("xml parsing", () => {
  for (const { name, parse } of [
    { name: "fast-xml-parser", parse: parseXML },
    { name: "DOMParser", parse: parseXMLBrowser },
  ]) {
    describe(name, () => {
      it("should parse a valid xml string without xml header", () => {
        const xml = `<AssumeRoleResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<AssumeRoleResult>
  <Credentials>
    <AccessKeyId>STS_AR_ACCESS_KEY_ID</AccessKeyId>
    <SecretAccessKey>STS_AR_SECRET_ACCESS_KEY</SecretAccessKey>
    <SessionToken>STS_AR_SESSION_TOKEN_us-west-2</SessionToken>
    <Expiration>3000-01-01T00:00:00.000Z</Expiration>
  </Credentials>
</AssumeRoleResult>
<ResponseMetadata>
  <RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ResponseMetadata>
</AssumeRoleResponse>`;
        const object = parse(xml);
        expect(object).toEqual({
          AssumeRoleResponse: {
            AssumeRoleResult: {
              Credentials: {
                AccessKeyId: "STS_AR_ACCESS_KEY_ID",
                Expiration: "3000-01-01T00:00:00.000Z",
                SecretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
                SessionToken: "STS_AR_SESSION_TOKEN_us-west-2",
              },
            },
            ResponseMetadata: {
              RequestId: "01234567-89ab-cdef-0123-456789abcdef",
            },
            xmlns: "https://sts.amazonaws.com/doc/2011-06-15/",
          },
        });
      });

      it("should parse ListBuckets response XML with xml header", () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult>
   <Buckets>
      <Bucket>
         <BucketArn>string</BucketArn>
         <BucketRegion>string</BucketRegion>
         <CreationDate>timestamp</CreationDate>
         <Name>string</Name>
      </Bucket>
   </Buckets>
   <Owner>
      <DisplayName>string</DisplayName>
      <ID>string</ID>
   </Owner>
   <ContinuationToken>string</ContinuationToken>
   <Prefix>string</Prefix>
</ListAllMyBucketsResult>`;
        const object = parse(xml);
        expect(object).toEqual({
          ListAllMyBucketsResult: {
            Buckets: {
              Bucket: {
                BucketArn: "string",
                BucketRegion: "string",
                CreationDate: "timestamp",
                Name: "string",
              },
            },
            ContinuationToken: "string",
            Owner: {
              DisplayName: "string",
              ID: "string",
            },
            Prefix: "string",
          },
        });
      });

      it("should create empty objects", () => {
        const xml = `<XmlEmptyMapsResponse xmlns="https://example.com/">
          <XmlEmptyMapsResult>
              <myMap>
              </myMap>
          </XmlEmptyMapsResult>
      </XmlEmptyMapsResponse>`;
        const object = parse(xml);
        expect(object).toEqual({
          XmlEmptyMapsResponse: {
            xmlns: "https://example.com/",
            XmlEmptyMapsResult: {
              myMap: "\n              ",
            },
          },
        });
      });

      it("should parse xml (custom)", () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<struct>
  <empty></empty>
  <text>abcdefg</text>
  <duplicate>dup1</duplicate>
  <duplicate>dup2</duplicate>
  <duplicate>dup3</duplicate>
  <spaced>\u0020s p a c e d\u0020</spaced>
  <nested>
    <empty></empty>
    <text>abcdefg</text>
    <duplicate>dup1</duplicate>
    <duplicate>dup2</duplicate>
    <duplicate>dup3</duplicate>
    <spaced>\u0020s p a c e d\u0020</spaced>
  </nested>
</struct>`;
        const object = parse(xml);
        expect(object).toEqual({
          struct: {
            empty: "",
            text: "abcdefg",
            duplicate: ["dup1", "dup2", "dup3"],
            spaced: " s p a c e d ",
            nested: {
              empty: "",
              text: "abcdefg",
              duplicate: ["dup1", "dup2", "dup3"],
              spaced: " s p a c e d ",
            },
          },
        });
      });
    });
  }

  const xmlSamples = [
    `<?xml version="1.0" encoding="UTF-8"?>
<struct>
  <duplicate>dup1</duplicate>
  <duplicate attr="2">dup2</duplicate>
  <duplicate attr="3">
      <spaced>\u0020s p a c e d\u0020</spaced>
      <symbol-chars>!@#$%^*()</symbol-chars>
      <number>1000000000000000000000000000000000000000000000000</number>
      <nested>
        <empty></empty>
        <duplicate>dup1</duplicate>
        <duplicate>dup2</duplicate>
      </nested>
  </duplicate>
</struct>
    `,
    `<?xml version="1.0" encoding="UTF-8"?>
    <x></x>`,
    `<x>   </x>`,
    `<?xml version="1.0" encoding="UTF-8"?><struct><duplicate>dup1</duplicate><duplicate attr="2">dup2</duplicate><duplicate attr="3"><spaced>\u0020s p a c e d\u0020</spaced><symbol-chars>!@#$%^*()</symbol-chars><number>1000000000000000000000000000000000000000000000000</number><nested><empty></empty><duplicate>dup1</duplicate><duplicate>dup2</duplicate></nested></duplicate></struct>`,
    `<x><y>z</y></x>`,
    `<x><y>  </y></x>`,
    `<x><y>  </y><y>  </y></x>`,
  ];
  let i = 0;

  for (const xml of xmlSamples) {
    it(`should behave identically to fast-xml-parser as far as the SDK is concerned, case ${++i}`, () => {
      expect(parseXMLBrowser(xml)).toEqual(parseXML(xml));
    });
  }

  it("throws on parsing error", () => {
    const xmlSamples = [`<unclosed`, `<unmatched></matched>`];

    for (const xml of xmlSamples) {
      expect(() => parseXMLBrowser(xml)).toThrowError();
      expect(() => parseXML(xml)).toThrowError();
    }
  });
});
