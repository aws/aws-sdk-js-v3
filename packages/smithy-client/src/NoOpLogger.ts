import { Logger } from "@aws-sdk/types";

export class NoOpLogger implements Logger {
  public trace() {}
  public debug() {}
  public info() {}
  public warn() {}
  public error() {}
}
