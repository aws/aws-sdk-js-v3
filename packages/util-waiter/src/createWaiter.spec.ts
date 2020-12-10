import { AbortController } from "@aws-sdk/abort-controller";

import { WaiterState } from "./waiter";

const mockValidate = jest.fn();
jest.mock("./utils/validate", () => ({
  validateWaiterOptions: mockValidate,
}));

jest.useFakeTimers();

import { createWaiter } from "./createWaiter";

describe("createWaiter", () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  const minimalWaiterConfig = {
    minDelay: 2,
    maxDelay: 120,
    maxWaitTime: 9999,
  };
  const client = "client";
  const input = "input";

  const abortedState = {
    state: WaiterState.ABORTED,
  };
  const failureState = {
    state: WaiterState.FAILURE,
  };
  const retryState = {
    state: WaiterState.RETRY,
  };
  const successState = {
    state: WaiterState.SUCCESS,
  };
  const timeoutState = {
    state: WaiterState.TIMEOUT,
  };

  it("should timeout when maxTimeout is reached", async () => {
    const mockAcceptorChecks = jest.fn().mockResolvedValue(retryState);
    const statusPromise = createWaiter(
      {
        ...minimalWaiterConfig,
        maxWaitTime: 20,
      },
      client,
      input,
      mockAcceptorChecks
    );
    jest.advanceTimersByTime(20 * 1000);
    expect(await statusPromise).toEqual(timeoutState);
  });

  it("should abort when abortController is signalled", async () => {
    const abortController = new AbortController();
    const mockAcceptorChecks = jest.fn().mockResolvedValue(retryState);
    const statusPromise = createWaiter(
      {
        ...minimalWaiterConfig,
        maxWaitTime: 20,
        abortController,
      },
      client,
      input,
      mockAcceptorChecks
    );
    jest.advanceTimersByTime(10 * 1000);
    abortController.abort(); // Abort before maxWaitTime(20s);
    expect(await statusPromise).toEqual(abortedState);
  });

  it("should success when acceptor checker returns seccess", async () => {
    const mockAcceptorChecks = jest.fn().mockResolvedValue(successState);
    const statusPromise = createWaiter(
      {
        ...minimalWaiterConfig,
        maxWaitTime: 20,
      },
      client,
      input,
      mockAcceptorChecks
    );
    jest.advanceTimersByTime(minimalWaiterConfig.minDelay * 1000);
    expect(await statusPromise).toEqual(successState);
  });

  it("should fail when acceptor checker returns failure", async () => {
    const mockAcceptorChecks = jest.fn().mockResolvedValue(failureState);
    const statusPromise = createWaiter(
      {
        ...minimalWaiterConfig,
        maxWaitTime: 20,
      },
      client,
      input,
      mockAcceptorChecks
    );
    jest.advanceTimersByTime(minimalWaiterConfig.minDelay * 1000);
    expect(await statusPromise).toEqual(failureState);
  });
});
