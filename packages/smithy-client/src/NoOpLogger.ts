import { Logger } from "@aws-sdk/types";

/**
 * @internal
 */
export class NoOpLogger implements Logger {
  public trace() {}
  public debug() {}
  public info() {}
  public warn() {}
  public error() {}
}
