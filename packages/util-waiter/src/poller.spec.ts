import { runPolling } from "./poller";
import { sleep } from "./utils/sleep";
import { WaiterState } from "./waiter";

jest.mock("./utils/sleep");

describe("poller", () => {
  beforeEach(() => {
    (sleep as jest.Mock).mockResolvedValueOnce("");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns state in case of failure", async () => {
    const config = {
      minDelay: 2,
      maxDelay: 30,
      maxWaitTime: 99999,
    };
    const stateToReturn = {
      state: WaiterState.FAILURE,
    };
    const mockAcceptorChecks = jest.fn().mockResolvedValueOnce(stateToReturn);
    const client = "mockClient";
    const input = "mockInput";

    await expect(runPolling<string, string>(config, client, input, mockAcceptorChecks)).resolves.toStrictEqual(
      stateToReturn
    );

    expect(mockAcceptorChecks).toHaveBeenCalled();
    expect(mockAcceptorChecks).toHaveBeenCalledTimes(1);
    expect(mockAcceptorChecks).toHaveBeenCalledWith(client, input);

    expect(sleep).toHaveBeenCalled();
    expect(sleep).toHaveBeenCalledTimes(1);
    expect(sleep).toHaveBeenCalledWith(config.minDelay);
  });

  it("returns state in case of success", async () => {
    const config = {
      minDelay: 2,
      maxDelay: 30,
      maxWaitTime: 99999,
    };
    const stateToReturn = {
      state: WaiterState.SUCCESS,
    };

    await expect(runPolling<any, any>(config, {}, {}, async (a: any, b: any) => stateToReturn)).resolves.toStrictEqual(
      stateToReturn
    );
    expect(sleep).toHaveBeenCalled();
    expect(sleep).toHaveBeenCalledTimes(1);
    expect(sleep).toHaveBeenCalledWith(config.minDelay);
  });

  it("sleeps as per exponentialBackoff in case of retry", async () => {
    const config = {
      minDelay: 2,
      maxDelay: 30,
      maxWaitTime: 99999,
    };
    const mockAcceptorChecks = jest
      .fn()
      .mockResolvedValueOnce({
        state: WaiterState.RETRY,
      })
      .mockResolvedValueOnce({
        state: WaiterState.RETRY,
      })
      .mockResolvedValueOnce({
        state: WaiterState.SUCCESS,
      });

    await expect(runPolling<any, any>(config, {}, {}, mockAcceptorChecks)).resolves.toStrictEqual({
      state: WaiterState.SUCCESS,
    });
    expect(sleep).toHaveBeenCalled();
    expect(sleep).toHaveBeenCalledTimes(3);
    expect(sleep).toHaveBeenNthCalledWith(1, 2);
    expect(sleep).toHaveBeenNthCalledWith(2, 4);
    expect(sleep).toHaveBeenNthCalledWith(3, 8);
  });
});
