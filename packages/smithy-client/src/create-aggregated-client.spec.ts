import { createAggregatedClient } from "./create-aggregated-client";

class BaseClient {
  send = jest.fn() as any;
}
class AggregatedClient extends BaseClient {
  constructor(commands) {
    super();
    createAggregatedClient(commands, AggregatedClient as any);
  }
}
class UserClient extends AggregatedClient {}

describe(createAggregatedClient.name, () => {
  it("extends its base client", async () => {
    const commands = {
      ActionCommand: jest.fn(),
    };

    const aggregatedClient: any = new AggregatedClient(commands);

    expect(aggregatedClient).toBeInstanceOf(BaseClient);
    expect(aggregatedClient).toBeInstanceOf(AggregatedClient);
  });

  it("is extensible", async () => {
    const commands = {
      ActionCommand: jest.fn(),
    };

    const aggregatedClient: any = new UserClient(commands);

    expect(aggregatedClient).toBeInstanceOf(UserClient);
    expect(aggregatedClient).toBeInstanceOf(AggregatedClient);
    expect(aggregatedClient).toBeInstanceOf(BaseClient);
  });

  it("should dispatch using the command lookup", async () => {
    const commands = {
      ActionCommand: jest.fn(),
    };
    const aggregatedClient: any = new AggregatedClient(commands);

    expect(() => aggregatedClient.nonExistentMethod()).toThrow();
    expect(() => aggregatedClient.action()).not.toThrow();

    expect(typeof aggregatedClient.action).toBe("function");
  });

  it("should call send with the matching command", async () => {
    const commands = {
      ActionCommand: jest.fn(),
    };
    const aggregatedClient: any = new AggregatedClient(commands);

    await aggregatedClient.action({ a: "a" });

    expect(commands.ActionCommand).toHaveBeenCalledWith({ a: "a" });
    expect(aggregatedClient.send).toHaveBeenCalled();
  });
});
