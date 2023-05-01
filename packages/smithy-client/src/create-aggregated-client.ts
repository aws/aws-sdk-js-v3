import { Client } from "./client";

/**
 * @internal
 *
 * @param commands - command lookup container.
 * @param client - client instance on which to add aggregated methods.
 * @returns an aggregated client with dynamically created methods.
 */
export const createAggregatedClient = (
  commands: Record<string, any>,
  Client: { new (...args: any): Client<any, any, any, any> }
): void => {
  for (const command of Object.keys(commands)) {
    const CommandCtor = commands[command];
    const methodImpl = async function (this: InstanceType<typeof Client>, args: any, optionsOrCb: any, cb: any) {
      const command: any = new CommandCtor(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object") throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    };
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
    Client.prototype[methodName] = methodImpl;
  }
};
