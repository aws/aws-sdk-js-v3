// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  ContentTypeParameters$,
  ContentTypeParametersCommand,
  DatetimeOffsets$,
  DatetimeOffsetsCommand,
  EmptyOperation$,
  EmptyOperationCommand,
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
  JsonEnums$,
  JsonEnumsCommand,
  JsonIntEnums$,
  JsonIntEnumsCommand,
  JsonProtocolClient,
  JsonUnions$,
  JsonUnionsCommand,
  KitchenSinkOperation$,
  KitchenSinkOperationCommand,
  NullOperation$,
  NullOperationCommand,
  OperationWithOptionalInputOutput$,
  OperationWithOptionalInputOutputCommand,
  PutAndGetInlineDocuments$,
  PutAndGetInlineDocumentsCommand,
  PutWithContentEncoding$,
  PutWithContentEncodingCommand,
  SimpleScalarProperties$,
  SimpleScalarPropertiesCommand,
  SparseNullsOperation$,
  SparseNullsOperationCommand,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = JsonProtocolClient;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe("JsonProtocolClient" + ` (${mode})`, () => {
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
        [ContentTypeParameters$, ContentTypeParametersCommand],
        [DatetimeOffsets$, DatetimeOffsetsCommand],
        [EmptyOperation$, EmptyOperationCommand],
        [EndpointOperation$, EndpointOperationCommand],
        [EndpointWithHostLabelOperation$, EndpointWithHostLabelOperationCommand],
        [FractionalSeconds$, FractionalSecondsCommand],
        [GreetingWithErrors$, GreetingWithErrorsCommand],
        [HostWithPathOperation$, HostWithPathOperationCommand],
        [JsonEnums$, JsonEnumsCommand],
        [JsonIntEnums$, JsonIntEnumsCommand],
        [JsonUnions$, JsonUnionsCommand],
        [KitchenSinkOperation$, KitchenSinkOperationCommand],
        [NullOperation$, NullOperationCommand],
        [OperationWithOptionalInputOutput$, OperationWithOptionalInputOutputCommand],
        [PutAndGetInlineDocuments$, PutAndGetInlineDocumentsCommand],
        [PutWithContentEncoding$, PutWithContentEncodingCommand],
        [SimpleScalarProperties$, SimpleScalarPropertiesCommand],
        [SparseNullsOperation$, SparseNullsOperationCommand],
      ]),

  });

  runner.run();
}, 30_000);
