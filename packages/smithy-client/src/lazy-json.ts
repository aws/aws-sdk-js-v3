/**
 * Lazy String holder for JSON typed contents.
 */
export class LazyJsonString extends String {
  deserializeJSON(): any {
    return JSON.parse(super.toString());
  }

  toJSON(): string {
    return super.toString();
  }

  static fromObject(object: any): LazyJsonString {
    if (object instanceof LazyJsonString) {
      return object;
    } else if (object instanceof String || typeof object === 'string') {
      return new LazyJsonString(object);
    }
    return new LazyJsonString(JSON.stringify(object));
  }
}
