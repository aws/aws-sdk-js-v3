// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  DatetimeOffsets$,
  DatetimeOffsetsCommand,
  EC2ProtocolClient,
  EmptyInputAndEmptyOutput$,
  EmptyInputAndEmptyOutputCommand,
  EndpointOperation$,
  EndpointOperationCommand,
  EndpointWithHostLabelOperation$,
  EndpointWithHostLabelOperationCommand,
  FractionalSeconds$,
  FractionalSecondsCommand,
  GreetingWithErrors$,
  GreetingWithErrorsCommand,
  HostWithPathOperation$,
  HostWithPathOperationCommand,
  IgnoresWrappingXmlName$,
  IgnoresWrappingXmlNameCommand,
  NestedStructures$,
  NestedStructuresCommand,
  NoInputAndOutput$,
  NoInputAndOutputCommand,
  PutWithContentEncoding$,
  PutWithContentEncodingCommand,
  QueryIdempotencyTokenAutoFill$,
  QueryIdempotencyTokenAutoFillCommand,
  QueryLists$,
  QueryListsCommand,
  QueryTimestamps$,
  QueryTimestampsCommand,
  RecursiveXmlShapes$,
  RecursiveXmlShapesCommand,
  SimpleInputParams$,
  SimpleInputParamsCommand,
  SimpleScalarXmlProperties$,
  SimpleScalarXmlPropertiesCommand,
  XmlBlobs$,
  XmlBlobsCommand,
  XmlEmptyBlobs$,
  XmlEmptyBlobsCommand,
  XmlEmptyLists$,
  XmlEmptyListsCommand,
  XmlEnums$,
  XmlEnumsCommand,
  XmlIntEnums$,
  XmlIntEnumsCommand,
  XmlLists$,
  XmlListsCommand,
  XmlNamespaces$,
  XmlNamespacesCommand,
  XmlTimestamps$,
  XmlTimestampsCommand,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = EC2ProtocolClient;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe("EC2ProtocolClient" + ` (${mode})`, () => {
  const runner = new SnapshotRunner({
    snapshotDirPath: join(__dirname, "snapshots"),
    Client,
    mode,
    testCase(caseName: string, run: () => Promise<void>) {
      it(caseName, run);
    },
    assertions(caseName: string, expected: string, actual: string): Promise<void> {
      expect(actual).toEqual(expected);
      return Promise.resolve();
    },
    schemas:
      new Map<any, any>([
        [DatetimeOffsets$, DatetimeOffsetsCommand],
        [EmptyInputAndEmptyOutput$, EmptyInputAndEmptyOutputCommand],
        [EndpointOperation$, EndpointOperationCommand],
        [EndpointWithHostLabelOperation$, EndpointWithHostLabelOperationCommand],
        [FractionalSeconds$, FractionalSecondsCommand],
        [GreetingWithErrors$, GreetingWithErrorsCommand],
        [HostWithPathOperation$, HostWithPathOperationCommand],
        [IgnoresWrappingXmlName$, IgnoresWrappingXmlNameCommand],
        [NestedStructures$, NestedStructuresCommand],
        [NoInputAndOutput$, NoInputAndOutputCommand],
        [PutWithContentEncoding$, PutWithContentEncodingCommand],
        [QueryIdempotencyTokenAutoFill$, QueryIdempotencyTokenAutoFillCommand],
        [QueryLists$, QueryListsCommand],
        [QueryTimestamps$, QueryTimestampsCommand],
        [RecursiveXmlShapes$, RecursiveXmlShapesCommand],
        [SimpleInputParams$, SimpleInputParamsCommand],
        [SimpleScalarXmlProperties$, SimpleScalarXmlPropertiesCommand],
        [XmlBlobs$, XmlBlobsCommand],
        [XmlEmptyBlobs$, XmlEmptyBlobsCommand],
        [XmlEmptyLists$, XmlEmptyListsCommand],
        [XmlEnums$, XmlEnumsCommand],
        [XmlIntEnums$, XmlIntEnumsCommand],
        [XmlLists$, XmlListsCommand],
        [XmlNamespaces$, XmlNamespacesCommand],
        [XmlTimestamps$, XmlTimestampsCommand],
      ]),

  });

  runner.run();
}, 30_000);
