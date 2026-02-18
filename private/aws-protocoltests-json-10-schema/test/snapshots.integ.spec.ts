// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  ContentTypeParameters$,
  ContentTypeParametersCommand,
  EmptyInputAndEmptyOutput$,
  EmptyInputAndEmptyOutputCommand,
  EndpointOperation$,
  EndpointOperationCommand,
  EndpointWithHostLabelOperation$,
  EndpointWithHostLabelOperationCommand,
  GreetingWithErrors$,
  GreetingWithErrorsCommand,
  HostWithPathOperation$,
  HostWithPathOperationCommand,
  JSONRPC10Client,
  JsonUnions$,
  JsonUnionsCommand,
  NoInputAndNoOutput$,
  NoInputAndNoOutputCommand,
  NoInputAndOutput$,
  NoInputAndOutputCommand,
  OperationWithDefaults$,
  OperationWithDefaultsCommand,
  OperationWithNestedStructure$,
  OperationWithNestedStructureCommand,
  OperationWithRequiredMembers$,
  OperationWithRequiredMembersCommand,
  OperationWithRequiredMembersWithDefaults$,
  OperationWithRequiredMembersWithDefaultsCommand,
  PutWithContentEncoding$,
  PutWithContentEncodingCommand,
  QueryIncompatibleOperation$,
  QueryIncompatibleOperationCommand,
  SimpleScalarProperties$,
  SimpleScalarPropertiesCommand,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = JSONRPC10Client;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe("JSONRPC10Client" + ` (${mode})`, () => {
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
        [EmptyInputAndEmptyOutput$, EmptyInputAndEmptyOutputCommand],
        [EndpointOperation$, EndpointOperationCommand],
        [EndpointWithHostLabelOperation$, EndpointWithHostLabelOperationCommand],
        [GreetingWithErrors$, GreetingWithErrorsCommand],
        [HostWithPathOperation$, HostWithPathOperationCommand],
        [JsonUnions$, JsonUnionsCommand],
        [NoInputAndNoOutput$, NoInputAndNoOutputCommand],
        [NoInputAndOutput$, NoInputAndOutputCommand],
        [OperationWithDefaults$, OperationWithDefaultsCommand],
        [OperationWithNestedStructure$, OperationWithNestedStructureCommand],
        [OperationWithRequiredMembers$, OperationWithRequiredMembersCommand],
        [OperationWithRequiredMembersWithDefaults$, OperationWithRequiredMembersWithDefaultsCommand],
        [PutWithContentEncoding$, PutWithContentEncodingCommand],
        [QueryIncompatibleOperation$, QueryIncompatibleOperationCommand],
        [SimpleScalarProperties$, SimpleScalarPropertiesCommand],
      ]),

  });

  runner.run();
}, 30_000);
