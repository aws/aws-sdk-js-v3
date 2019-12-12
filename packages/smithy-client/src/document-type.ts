/**
 * Smithy document type values.
 */
export namespace DocumentType {
  export type Value = Scalar | Structure | List;
  export type Scalar = string | number | boolean | null;
  export type Structure = { [member: string]: Value };
  export interface List extends Array<Value> {}
}
