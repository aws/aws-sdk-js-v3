// smithy-typescript generated code
import { WeatherClient, WeatherClientConfig } from "./WeatherClient";
import {
  OnlyCustomAuthCommand,
  OnlyCustomAuthCommandInput,
  OnlyCustomAuthCommandOutput,
} from "./commands/OnlyCustomAuthCommand";
import {
  OnlyCustomAuthOptionalCommand,
  OnlyCustomAuthOptionalCommandInput,
  OnlyCustomAuthOptionalCommandOutput,
} from "./commands/OnlyCustomAuthOptionalCommand";
import {
  OnlyHttpApiKeyAndBearerAuthCommand,
  OnlyHttpApiKeyAndBearerAuthCommandInput,
  OnlyHttpApiKeyAndBearerAuthCommandOutput,
} from "./commands/OnlyHttpApiKeyAndBearerAuthCommand";
import {
  OnlyHttpApiKeyAndBearerAuthReversedCommand,
  OnlyHttpApiKeyAndBearerAuthReversedCommandInput,
  OnlyHttpApiKeyAndBearerAuthReversedCommandOutput,
} from "./commands/OnlyHttpApiKeyAndBearerAuthReversedCommand";
import {
  OnlyHttpApiKeyAuthCommand,
  OnlyHttpApiKeyAuthCommandInput,
  OnlyHttpApiKeyAuthCommandOutput,
} from "./commands/OnlyHttpApiKeyAuthCommand";
import {
  OnlyHttpApiKeyAuthOptionalCommand,
  OnlyHttpApiKeyAuthOptionalCommandInput,
  OnlyHttpApiKeyAuthOptionalCommandOutput,
} from "./commands/OnlyHttpApiKeyAuthOptionalCommand";
import {
  OnlyHttpBearerAuthCommand,
  OnlyHttpBearerAuthCommandInput,
  OnlyHttpBearerAuthCommandOutput,
} from "./commands/OnlyHttpBearerAuthCommand";
import {
  OnlyHttpBearerAuthOptionalCommand,
  OnlyHttpBearerAuthOptionalCommandInput,
  OnlyHttpBearerAuthOptionalCommandOutput,
} from "./commands/OnlyHttpBearerAuthOptionalCommand";
import {
  OnlySigv4AuthCommand,
  OnlySigv4AuthCommandInput,
  OnlySigv4AuthCommandOutput,
} from "./commands/OnlySigv4AuthCommand";
import {
  OnlySigv4AuthOptionalCommand,
  OnlySigv4AuthOptionalCommandInput,
  OnlySigv4AuthOptionalCommandOutput,
} from "./commands/OnlySigv4AuthOptionalCommand";
import {
  SameAsServiceCommand,
  SameAsServiceCommandInput,
  SameAsServiceCommandOutput,
} from "./commands/SameAsServiceCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  onlyCustomAuth(
    args: OnlyCustomAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OnlyCustomAuthCommandOutput>;
  onlyCustomAuth(args: OnlyCustomAuthCommandInput, cb: (err: any, data?: OnlyCustomAuthCommandOutput) => void): void;
  onlyCustomAuth(
    args: OnlyCustomAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OnlyCustomAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link OnlyCustomAuthOptionalCommand}
   */
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
  onlySigv4Auth(args: OnlySigv4AuthCommandInput, options?: __HttpHandlerOptions): Promise<OnlySigv4AuthCommandOutput>;
  onlySigv4Auth(args: OnlySigv4AuthCommandInput, cb: (err: any, data?: OnlySigv4AuthCommandOutput) => void): void;
  onlySigv4Auth(
    args: OnlySigv4AuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OnlySigv4AuthCommandOutput) => void
  ): void;

  /**
   * @see {@link OnlySigv4AuthOptionalCommand}
   */
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
  sameAsService(args: SameAsServiceCommandInput, options?: __HttpHandlerOptions): Promise<SameAsServiceCommandOutput>;
  sameAsService(args: SameAsServiceCommandInput, cb: (err: any, data?: SameAsServiceCommandOutput) => void): void;
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
