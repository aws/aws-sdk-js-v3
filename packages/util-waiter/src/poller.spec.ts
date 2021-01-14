import { AbortController } from "@aws-sdk/abort-controller";

import { runPolling } from "./poller";
import { sleep } from "./utils/sleep";
import { WaiterOptions, WaiterState } from "./waiter";

jest.mock("./utils/sleep");

describe(runPolling.name, () => {
  const config = {
    minDelay: 2,
    maxDelay: 30,
    maxWaitTime: 99999,
    client: "mockClient",
  } as WaiterOptions<any>;
  const input = "mockInput";
  const abortedState = {
    state: WaiterState.ABORTED,
  };
  const failureState = {
    state: WaiterState.FAILURE,
  };
  const successState = {
    state: WaiterState.SUCCESS,
  };
  const retryState = {
    state: WaiterState.RETRY,
  };
  const timeoutState = {
    state: WaiterState.TIMEOUT,
  };

  let mockAcceptorChecks;

  beforeEach(() => {
    (sleep as jest.Mock).mockResolvedValueOnce("");
    jest.spyOn(global.Math, "random").mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.spyOn(global.Math, "random").mockRestore();
  });

  it("should returns state in case of failure", async () => {
    mockAcceptorChecks = jest.fn().mockResolvedValueOnce(failureState);
    await expect(runPolling(config, input, mockAcceptorChecks)).resolves.toStrictEqual(failureState);

    expect(mockAcceptorChecks).toHaveBeenCalled();
    expect(mockAcceptorChecks).toHaveBeenCalledTimes(1);
    expect(mockAcceptorChecks).toHaveBeenCalledWith(config.client, input);
    expect(sleep).toHaveBeenCalledTimes(0);
  });

  it("returns state in case of success", async () => {
    mockAcceptorChecks = jest.fn().mockResolvedValueOnce(successState);
    await expect(runPolling(config, input, mockAcceptorChecks)).resolves.toStrictEqual(successState);
    expect(mockAcceptorChecks).toHaveBeenCalled();
    expect(mockAcceptorChecks).toHaveBeenCalledTimes(1);
    expect(mockAcceptorChecks).toHaveBeenCalledWith(config.client, input);
    expect(sleep).toHaveBeenCalledTimes(0);
  });

  it("sleeps as per exponentialBackoff in case of retry", async () => {
    mockAcceptorChecks = jest
      .fn()
      .mockResolvedValueOnce(retryState)
      .mockResolvedValueOnce(retryState)
      .mockResolvedValueOnce(retryState)
      .mockResolvedValueOnce(retryState)
      .mockResolvedValueOnce(retryState)
      .mockResolvedValueOnce(retryState)
      .mockResolvedValueOnce(retryState)
      .mockResolvedValueOnce(successState);

    await expect(runPolling(config, input, mockAcceptorChecks)).resolves.toStrictEqual(successState);

    expect(sleep).toHaveBeenCalled();
    expect(mockAcceptorChecks).toHaveBeenCalledTimes(8);
    expect(sleep).toHaveBeenCalledTimes(7);
    expect(sleep).toHaveBeenNthCalledWith(1, 2); // min delay. random(2, 2)
    expect(sleep).toHaveBeenNthCalledWith(2, 3); // random(2, 4)
    expect(sleep).toHaveBeenNthCalledWith(3, 5); // +random(2, 8)
    expect(sleep).toHaveBeenNthCalledWith(4, 9); // +random(2, 16)
    expect(sleep).toHaveBeenNthCalledWith(5, 30); // max delay
    expect(sleep).toHaveBeenNthCalledWith(6, 30); // max delay
    expect(sleep).toHaveBeenNthCalledWith(7, 30); // max delay
  });

  it("resolves after the last attempt before reaching maxWaitTime ", async () => {
    let now = Date.now();
    const delay = 2;
    const nowMock = jest
      .spyOn(Date, "now")
      .mockReturnValueOnce(now) // 1st invoke for getting the time stamp to wait until
      .mockImplementation(() => {
        const rtn = now;
        now += delay * 1000;
        return rtn;
      });
    const localConfig = {
      ...config,
      minDelay: delay,
      maxDelay: delay,
      maxWaitTime: 5,
    };

    mockAcceptorChecks = jest.fn().mockResolvedValue(retryState);
    await expect(runPolling(localConfig, input, mockAcceptorChecks)).resolves.toStrictEqual(timeoutState);
    expect(sleep).toHaveBeenCalled();
    expect(sleep).toHaveBeenCalledTimes(2);
    nowMock.mockReset();
  });

  it("resolves when abortController is signalled", async () => {
    const abortController = new AbortController();
    const localConfig = {
      ...config,
      abortController,
    };

    mockAcceptorChecks = jest.fn().mockResolvedValue(retryState);
    abortController.abort();
    await expect(runPolling(localConfig, input, mockAcceptorChecks)).resolves.toStrictEqual(abortedState);
    expect(sleep).not.toHaveBeenCalled();
  });
});
