export interface Stringable {
  toString(): string;
}

const TAB = "    ";

export class IndentedSection implements Stringable {
  constructor(private indented: Stringable, private tabs: number = 1) {}

  toString(): string {
    return this.indented
      .toString()
      .split("\n")
      .map(line => {
        if (line.trim() === "") {
          return "";
        }

        return new Array(this.tabs + 1).join(TAB) + line.replace(/\s+$/, "");
      })
      .join("\n");
  }
}
