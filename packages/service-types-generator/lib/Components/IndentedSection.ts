interface Stringable {
    toString(): string;
}

const TAB = '    ';

export class IndentedSection implements Stringable {
    constructor(private indented: Stringable, private tabs: number = 1) {}

    toString(): string {
        return this.indented.toString()
            .split('\n')
            .map(line => TAB.repeat(this.tabs) + line)
            .join('\n');
    }
}
