import { isEventStream } from "./symbols";

export type Bufferable =
  | ArrayBuffer
  | SharedArrayBuffer
  | ReadonlyArray<number>
  | Uint8Array
  | { valueOf(): string | object }
  | string;

export type EventInput = {
  [eventName: string]: {
    headers: Record<string, { value: unknown }>;
    body: Bufferable | unknown;
  };
};

export type EventOutput<K extends string | number> = {
  [key in K]: ParsedEventBody;
};

export type ParsedEventBody = {
  headers: Record<string, unknown>;
  body: unknown;
  [isEventStream]: true;
};

export type ParseEventStreamValidTargetTypes = "blob" | "structure" | "string";

/**
 * Converts a streaming event into an intermediate format.
 * @see https://awslabs.github.io/smithy/1.0/spec/core/stream-traits.html#event-streams
 */
export function toEventMessage(event: EventInput): EventOutput<keyof typeof event> {
  const eventName = Object.keys(event)[0];
  const { headers, body } = event[eventName];

  const eventHeaders = Object.entries(headers).reduce((accummulator, curr) => {
    accummulator[curr[0]] = curr[1].value;
    return accummulator;
  }, {} as Record<string, any>);
  const eventMessage = {
    headers: eventHeaders,
    body,
    [isEventStream]: true,
  };
  const parsedEvent = {
    [eventName]: eventMessage,
  };

  return parsedEvent as EventOutput<keyof typeof event>;
}

/**
 * This function parses the streaming response using
 * the union's member type information.
 *
 * @param input - a streaming union response.
 * @param targetTypes - a description of the union's members target types.
 */
export function parseEventStream(
  input?: Record<string, any>,
  targetTypes: Record<string, ParseEventStreamValidTargetTypes> = {}
): void {
  if (!input) {
    return;
  }
  for (const kv of Object.entries(input)) {
    const [key, value]: [string, any] = kv;
    const memberTargetType = targetTypes[key];

    if (value != null && typeof value === "object" && value[isEventStream]) {
      switch (memberTargetType) {
        case "blob":
          input[key] = value.body;
          break;
        case "string": {
          const _value = value as ParsedEventBody;
          input[key] = Buffer.from(_value.body as Bufferable).toString();
          break;
        }
        case "structure": {
          const _value = value as ParsedEventBody;
          try {
            input[key] = JSON.parse(Buffer.from(_value.body as Bufferable).toString());
          } catch (error) {
            console.error("Error parsing event stream.", error);
          }
          break;
        }
      }
    }
  }
}
