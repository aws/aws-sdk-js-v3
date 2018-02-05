export class MockReadableStream {
    private buffersRead: number = 0;
    constructor(
        private buffers: Uint8Array[] = []
    ) {}

    getReader = () => {
        return {
            read: async () => {
                if (this.buffersRead >= this.buffers.length) {
                    return {
                        done: true
                    };
                }
                return {
                    done: false,   
                    value: this.buffers[this.buffersRead++]
                };
            }
        } as ReadableStreamReader;
    }

}