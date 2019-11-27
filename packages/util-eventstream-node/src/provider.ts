import {
  Encoder,
  Decoder,
  EventSigner,
  EventStreamSerdeProvider
} from "@aws-sdk/types";
import { EventStreamRequestSigner } from "./EventStreamSigner";
import { EventStreamMarshaller } from "./EventStreamMarshaller";

/** NodeJS event stream utils provider */
export const eventStreamSerdeProvider: EventStreamSerdeProvider = (options: {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  eventSigner: EventSigner;
}) => [
  new EventStreamMarshaller(options),
  new EventStreamRequestSigner(options)
];
