// smithy-typescript generated code
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MalformedContentTypeWithPayloadInput } from "../models/models_0";
import { MalformedContentTypeWithPayload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 */
export type MalformedContentTypeWithPayloadCommandInputType = Omit<MalformedContentTypeWithPayloadInput, "payload"> & {
  payload?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link MalformedContentTypeWithPayloadCommand}.
 */
export interface MalformedContentTypeWithPayloadCommandInput extends MalformedContentTypeWithPayloadCommandInputType {}
/**
 * @public
 *
 * The output of {@link MalformedContentTypeWithPayloadCommand}.
 */
export interface MalformedContentTypeWithPayloadCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedContentTypeWithPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedContentTypeWithPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedContentTypeWithPayloadInput
 *   payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new MalformedContentTypeWithPayloadCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedContentTypeWithPayloadCommandInput - {@link MalformedContentTypeWithPayloadCommandInput}
 * @returns {@link MalformedContentTypeWithPayloadCommandOutput}
 * @see {@link MalformedContentTypeWithPayloadCommandInput} for command's `input` shape.
 * @see {@link MalformedContentTypeWithPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedContentTypeWithPayloadCommand extends command<MalformedContentTypeWithPayloadCommandInput, MalformedContentTypeWithPayloadCommandOutput>(
  _ep0,
  _mw0,
  "MalformedContentTypeWithPayload",
  MalformedContentTypeWithPayload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedContentTypeWithPayloadInput;
      output: {};
    };
    sdk: {
      input: MalformedContentTypeWithPayloadCommandInput;
      output: MalformedContentTypeWithPayloadCommandOutput;
    };
  };
}
