// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  DatetimeOffsets$,
  DatetimeOffsetsCommand,
  EmptyInputAndEmptyOutput$,
  EmptyInputAndEmptyOutputCommand,
  EndpointOperation$,
  EndpointOperationCommand,
  EndpointWithHostLabelOperation$,
  EndpointWithHostLabelOperationCommand,
  FlattenedXmlMap$,
  FlattenedXmlMapCommand,
  FlattenedXmlMapWithXmlName$,
  FlattenedXmlMapWithXmlNameCommand,
  FlattenedXmlMapWithXmlNamespace$,
  FlattenedXmlMapWithXmlNamespaceCommand,
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
  NoInputAndNoOutput$,
  NoInputAndNoOutputCommand,
  NoInputAndOutput$,
  NoInputAndOutputCommand,
  PutWithContentEncoding$,
  PutWithContentEncodingCommand,
  QueryIdempotencyTokenAutoFill$,
  QueryIdempotencyTokenAutoFillCommand,
  QueryLists$,
  QueryListsCommand,
  QueryMaps$,
  QueryMapsCommand,
  QueryProtocolClient,
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
  XmlEmptyMaps$,
  XmlEmptyMapsCommand,
  XmlEnums$,
  XmlEnumsCommand,
  XmlIntEnums$,
  XmlIntEnumsCommand,
  XmlLists$,
  XmlListsCommand,
  XmlMaps$,
  XmlMapsCommand,
  XmlMapsXmlName$,
  XmlMapsXmlNameCommand,
  XmlNamespaces$,
  XmlNamespacesCommand,
  XmlTimestamps$,
  XmlTimestampsCommand,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = QueryProtocolClient;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe("QueryProtocolClient" + ` (${mode})`, () => {
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
        [FlattenedXmlMap$, FlattenedXmlMapCommand],
        [FlattenedXmlMapWithXmlName$, FlattenedXmlMapWithXmlNameCommand],
        [FlattenedXmlMapWithXmlNamespace$, FlattenedXmlMapWithXmlNamespaceCommand],
        [FractionalSeconds$, FractionalSecondsCommand],
        [GreetingWithErrors$, GreetingWithErrorsCommand],
        [HostWithPathOperation$, HostWithPathOperationCommand],
        [IgnoresWrappingXmlName$, IgnoresWrappingXmlNameCommand],
        [NestedStructures$, NestedStructuresCommand],
        [NoInputAndNoOutput$, NoInputAndNoOutputCommand],
        [NoInputAndOutput$, NoInputAndOutputCommand],
        [PutWithContentEncoding$, PutWithContentEncodingCommand],
        [QueryIdempotencyTokenAutoFill$, QueryIdempotencyTokenAutoFillCommand],
        [QueryLists$, QueryListsCommand],
        [QueryMaps$, QueryMapsCommand],
        [QueryTimestamps$, QueryTimestampsCommand],
        [RecursiveXmlShapes$, RecursiveXmlShapesCommand],
        [SimpleInputParams$, SimpleInputParamsCommand],
        [SimpleScalarXmlProperties$, SimpleScalarXmlPropertiesCommand],
        [XmlBlobs$, XmlBlobsCommand],
        [XmlEmptyBlobs$, XmlEmptyBlobsCommand],
        [XmlEmptyLists$, XmlEmptyListsCommand],
        [XmlEmptyMaps$, XmlEmptyMapsCommand],
        [XmlEnums$, XmlEnumsCommand],
        [XmlIntEnums$, XmlIntEnumsCommand],
        [XmlLists$, XmlListsCommand],
        [XmlMaps$, XmlMapsCommand],
        [XmlMapsXmlName$, XmlMapsXmlNameCommand],
        [XmlNamespaces$, XmlNamespacesCommand],
        [XmlTimestamps$, XmlTimestampsCommand],
      ]),

  });

  runner.run();
}, 30_000);
