import { parseEventStream, ParseEventStreamValidTargetTypes, toEventMessage } from "./deserialize-eventstream";

describe("event stream deserialization", () => {
  let input;
  beforeEach(() => {
    input = {
      someEvent: {
        headers: {
          headerA: { value: "A" },
        },
        body: Buffer.from(JSON.stringify({ myObject: "hey" })),
      },
    };
  });

  afterEach(() => {});

  describe("#toEventMessage(event)", () => {
    it("should convert events to the expected format", () => {
      const output: any = toEventMessage(input);
      expect(output.someEvent).toBeDefined;
      expect(output.someEvent.headers).toBeDefined;
      expect(output.someEvent.headers.headerA).toEqual("A");
      expect(output.someEvent.body).toBeDefined;
      expect(JSON.parse(Buffer.from(output.someEvent.body).toString())).toEqual({
        myObject: "hey",
      });
    });
  });

  describe("#parseEventStream(input, targetTypes)", () => {
    describe("should use a targetTypes map to parse event bodies", () => {
      it("should parse structure", () => {
        const targetTypes: Record<string, ParseEventStreamValidTargetTypes> = {
          someEvent: "structure",
        };
        const output = toEventMessage(input);
        expect(output.someEvent).toBeDefined;
        parseEventStream(output, targetTypes);
        expect(output.someEvent).toBeDefined;
        expect(output.someEvent).toEqual({
          myObject: "hey",
        });
      });
      it("should parse blob", () => {
        const targetTypes: Record<string, ParseEventStreamValidTargetTypes> = {
          someEvent: "blob",
        };
        const output = toEventMessage(input);
        expect(output.someEvent).toBeDefined;
        parseEventStream(output, targetTypes);
        expect(output.someEvent).toBeDefined;
        expect(output.someEvent).toBeInstanceOf(Buffer);
      });
      it("should parse string", () => {
        const targetTypes: Record<string, ParseEventStreamValidTargetTypes> = {
          someEvent: "string",
        };
        const output = toEventMessage(input);
        expect(output.someEvent).toBeDefined;
        parseEventStream(output, targetTypes);
        expect(output.someEvent).toBeDefined;
        expect(output.someEvent).toEqual(
          JSON.stringify({
            myObject: "hey",
          })
        );
      });
    });
  });
});
