// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { PutEc2AliasCommand, PutEc2AliasCommandInput, PutEc2AliasCommandOutput } from "./commands/PutEc2AliasCommand";
import { Ec2MockClient } from "./Ec2MockClient";

const commands = {
  PutEc2AliasCommand,
};

export interface Ec2Mock {
  /**
   * @see {@link PutEc2AliasCommand}
   */
  putEc2Alias(): Promise<PutEc2AliasCommandOutput>;
  putEc2Alias(
    args: PutEc2AliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEc2AliasCommandOutput>;
  putEc2Alias(
    args: PutEc2AliasCommandInput,
    cb: (err: any, data?: PutEc2AliasCommandOutput) => void
  ): void;
  putEc2Alias(
    args: PutEc2AliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEc2AliasCommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class Ec2Mock extends Ec2MockClient implements Ec2Mock {}
createAggregatedClient(commands, Ec2Mock);
