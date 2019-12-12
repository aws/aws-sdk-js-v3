/**
 * Type that is implemented by all Smithy shapes marked with the
 * error trait.
 */
export interface SmithyException {
  /**
   * The shape ID name of the exception.
   */
  readonly __type: string;

  /**
   * Whether the client or server are at fault.
   */
  readonly $fault: "client" | "server";

  /**
   * The service that encountered the exception.
   */
  readonly $service?: string;
}
