// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type OnlyCustomAuthCommandInput,
  type OnlyCustomAuthCommandOutput,
  OnlyCustomAuthCommand,
} from "./commands/OnlyCustomAuthCommand";
import {
  type OnlyCustomAuthOptionalCommandInput,
  type OnlyCustomAuthOptionalCommandOutput,
  OnlyCustomAuthOptionalCommand,
} from "./commands/OnlyCustomAuthOptionalCommand";
import {
  type OnlyHttpApiKeyAndBearerAuthCommandInput,
  type OnlyHttpApiKeyAndBearerAuthCommandOutput,
  OnlyHttpApiKeyAndBearerAuthCommand,
} from "./commands/OnlyHttpApiKeyAndBearerAuthCommand";
import {
  type OnlyHttpApiKeyAndBearerAuthReversedCommandInput,
  type OnlyHttpApiKeyAndBearerAuthReversedCommandOutput,
  OnlyHttpApiKeyAndBearerAuthReversedCommand,
} from "./commands/OnlyHttpApiKeyAndBearerAuthReversedCommand";
import {
  type OnlyHttpApiKeyAuthCommandInput,
  type OnlyHttpApiKeyAuthCommandOutput,
  OnlyHttpApiKeyAuthCommand,
} from "./commands/OnlyHttpApiKeyAuthCommand";
import {
  type OnlyHttpApiKeyAuthOptionalCommandInput,
  type OnlyHttpApiKeyAuthOptionalCommandOutput,
  OnlyHttpApiKeyAuthOptionalCommand,
} from "./commands/OnlyHttpApiKeyAuthOptionalCommand";
import {
  type OnlyHttpBearerAuthCommandInput,
  type OnlyHttpBearerAuthCommandOutput,
  OnlyHttpBearerAuthCommand,
} from "./commands/OnlyHttpBearerAuthCommand";
import {
  type OnlyHttpBearerAuthOptionalCommandInput,
  type OnlyHttpBearerAuthOptionalCommandOutput,
  OnlyHttpBearerAuthOptionalCommand,
} from "./commands/OnlyHttpBearerAuthOptionalCommand";
import {
  type OnlySigv4AuthCommandInput,
  type OnlySigv4AuthCommandOutput,
  OnlySigv4AuthCommand,
} from "./commands/OnlySigv4AuthCommand";
import {
  type OnlySigv4AuthOptionalCommandInput,
  type OnlySigv4AuthOptionalCommandOutput,
  OnlySigv4AuthOptionalCommand,
} from "./commands/OnlySigv4AuthOptionalCommand";
import {
  type SameAsServiceCommandInput,
  type SameAsServiceCommandOutput,
  SameAsServiceCommand,
} from "./commands/SameAsServiceCommand";
import { WeatherClient } from "./WeatherClient";

const commands = {
  OnlyCustomAuthCommand,
  OnlyCustomAuthOptionalCommand,
  OnlyHttpApiKeyAndBearerAuthCommand,
  OnlyHttpApiKeyAndBearerAuthReversedCommand,
  OnlyHttpApiKeyAuthCommand,
  OnlyHttpApiKeyAuthOptionalCommand,
  OnlyHttpBearerAuthCommand,
  OnlyHttpBearerAuthOptionalCommand,
  OnlySigv4AuthCommand,
  OnlySigv4AuthOptionalCommand,
  SameAsServiceCommand,
};

export interface Weather {
  /**
   * @see {@link OnlyCustomAuthCommand}
   */
  onlyCustomAuth(): Promise<OnlyCustomAuthCommandOutput>;
  onlyCustomAuth(
    args: OnlyCustomAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OnlyCustomAuthCommandOutput>;
  onlyCustomAuth(
    args: OnlyCustomAuthCommandInput,
    cb: (err: any, data?: OnlyCustomAuthCommandOutput) => void
  ): void;
  onlyCustomAuth(
    args: OnlyCustomAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OnlyCustomAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link OnlyCustomAuthOptionalCommand}
   */
  onlyCustomAuthOptional(): Promise<OnlyCustomAuthOptionalCommandOutput>;
  onlyCustomAuthOptional(
    args: OnlyCustomAuthOptionalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OnlyCustomAuthOptionalCommandOutput>;
  onlyCustomAuthOptional(
    args: OnlyCustomAuthOptionalCommandInput,
    cb: (err: any, data?: OnlyCustomAuthOptionalCommandOutput) => void
  ): void;
  onlyCustomAuthOptional(
    args: OnlyCustomAuthOptionalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OnlyCustomAuthOptionalCommandOutput) => void
  ): void;

  /**
   * @see {@link OnlyHttpApiKeyAndBearerAuthCommand}
   */
  onlyHttpApiKeyAndBearerAuth(): Promise<OnlyHttpApiKeyAndBearerAuthCommandOutput>;
  onlyHttpApiKeyAndBearerAuth(
    args: OnlyHttpApiKeyAndBearerAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OnlyHttpApiKeyAndBearerAuthCommandOutput>;
  onlyHttpApiKeyAndBearerAuth(
    args: OnlyHttpApiKeyAndBearerAuthCommandInput,
    cb: (err: any, data?: OnlyHttpApiKeyAndBearerAuthCommandOutput) => void
  ): void;
  onlyHttpApiKeyAndBearerAuth(
    args: OnlyHttpApiKeyAndBearerAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OnlyHttpApiKeyAndBearerAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link OnlyHttpApiKeyAndBearerAuthReversedCommand}
   */
  onlyHttpApiKeyAndBearerAuthReversed(): Promise<OnlyHttpApiKeyAndBearerAuthReversedCommandOutput>;
  onlyHttpApiKeyAndBearerAuthReversed(
    args: OnlyHttpApiKeyAndBearerAuthReversedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OnlyHttpApiKeyAndBearerAuthReversedCommandOutput>;
  onlyHttpApiKeyAndBearerAuthReversed(
    args: OnlyHttpApiKeyAndBearerAuthReversedCommandInput,
    cb: (err: any, data?: OnlyHttpApiKeyAndBearerAuthReversedCommandOutput) => void
  ): void;
  onlyHttpApiKeyAndBearerAuthReversed(
    args: OnlyHttpApiKeyAndBearerAuthReversedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OnlyHttpApiKeyAndBearerAuthReversedCommandOutput) => void
  ): void;

  /**
   * @see {@link OnlyHttpApiKeyAuthCommand}
   */
  onlyHttpApiKeyAuth(): Promise<OnlyHttpApiKeyAuthCommandOutput>;
  onlyHttpApiKeyAuth(
    args: OnlyHttpApiKeyAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OnlyHttpApiKeyAuthCommandOutput>;
  onlyHttpApiKeyAuth(
    args: OnlyHttpApiKeyAuthCommandInput,
    cb: (err: any, data?: OnlyHttpApiKeyAuthCommandOutput) => void
  ): void;
  onlyHttpApiKeyAuth(
    args: OnlyHttpApiKeyAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OnlyHttpApiKeyAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link OnlyHttpApiKeyAuthOptionalCommand}
   */
  onlyHttpApiKeyAuthOptional(): Promise<OnlyHttpApiKeyAuthOptionalCommandOutput>;
  onlyHttpApiKeyAuthOptional(
    args: OnlyHttpApiKeyAuthOptionalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OnlyHttpApiKeyAuthOptionalCommandOutput>;
  onlyHttpApiKeyAuthOptional(
    args: OnlyHttpApiKeyAuthOptionalCommandInput,
    cb: (err: any, data?: OnlyHttpApiKeyAuthOptionalCommandOutput) => void
  ): void;
  onlyHttpApiKeyAuthOptional(
    args: OnlyHttpApiKeyAuthOptionalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OnlyHttpApiKeyAuthOptionalCommandOutput) => void
  ): void;

  /**
   * @see {@link OnlyHttpBearerAuthCommand}
   */
  onlyHttpBearerAuth(): Promise<OnlyHttpBearerAuthCommandOutput>;
  onlyHttpBearerAuth(
    args: OnlyHttpBearerAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OnlyHttpBearerAuthCommandOutput>;
  onlyHttpBearerAuth(
    args: OnlyHttpBearerAuthCommandInput,
    cb: (err: any, data?: OnlyHttpBearerAuthCommandOutput) => void
  ): void;
  onlyHttpBearerAuth(
    args: OnlyHttpBearerAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OnlyHttpBearerAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link OnlyHttpBearerAuthOptionalCommand}
   */
  onlyHttpBearerAuthOptional(): Promise<OnlyHttpBearerAuthOptionalCommandOutput>;
  onlyHttpBearerAuthOptional(
    args: OnlyHttpBearerAuthOptionalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OnlyHttpBearerAuthOptionalCommandOutput>;
  onlyHttpBearerAuthOptional(
    args: OnlyHttpBearerAuthOptionalCommandInput,
    cb: (err: any, data?: OnlyHttpBearerAuthOptionalCommandOutput) => void
  ): void;
  onlyHttpBearerAuthOptional(
    args: OnlyHttpBearerAuthOptionalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OnlyHttpBearerAuthOptionalCommandOutput) => void
  ): void;

  /**
   * @see {@link OnlySigv4AuthCommand}
   */
  onlySigv4Auth(): Promise<OnlySigv4AuthCommandOutput>;
  onlySigv4Auth(
    args: OnlySigv4AuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OnlySigv4AuthCommandOutput>;
  onlySigv4Auth(
    args: OnlySigv4AuthCommandInput,
    cb: (err: any, data?: OnlySigv4AuthCommandOutput) => void
  ): void;
  onlySigv4Auth(
    args: OnlySigv4AuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OnlySigv4AuthCommandOutput) => void
  ): void;

  /**
   * @see {@link OnlySigv4AuthOptionalCommand}
   */
  onlySigv4AuthOptional(): Promise<OnlySigv4AuthOptionalCommandOutput>;
  onlySigv4AuthOptional(
    args: OnlySigv4AuthOptionalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OnlySigv4AuthOptionalCommandOutput>;
  onlySigv4AuthOptional(
    args: OnlySigv4AuthOptionalCommandInput,
    cb: (err: any, data?: OnlySigv4AuthOptionalCommandOutput) => void
  ): void;
  onlySigv4AuthOptional(
    args: OnlySigv4AuthOptionalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OnlySigv4AuthOptionalCommandOutput) => void
  ): void;

  /**
   * @see {@link SameAsServiceCommand}
   */
  sameAsService(): Promise<SameAsServiceCommandOutput>;
  sameAsService(
    args: SameAsServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SameAsServiceCommandOutput>;
  sameAsService(
    args: SameAsServiceCommandInput,
    cb: (err: any, data?: SameAsServiceCommandOutput) => void
  ): void;
  sameAsService(
    args: SameAsServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SameAsServiceCommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class Weather extends WeatherClient implements Weather {}
createAggregatedClient(commands, Weather);
