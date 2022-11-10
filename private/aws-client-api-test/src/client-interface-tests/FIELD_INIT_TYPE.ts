/**
 * The status of a config field after passing through constructor
 * resolvers.
 */
export type FIELD_INIT_TYPE = "resolvedByConfigResolver" | "resolvedOnlyIfProvided" | "neverResolved";
