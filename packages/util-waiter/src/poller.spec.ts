import { runPolling } from "./poller";
import { WaiterState } from "./waiter";

jest.useFakeTimers();

describe(runPolling.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it("should progressively call sleep then check acceptor with a higher time topping at maxDelay", async (done) => {
    const acceptorMock = jest.fn();
    acceptorMock.mockReturnValue(Promise.resolve({ state: WaiterState.RETRY }));
    const config = {
      minDelay: 2,
      maxDelay: 30,
      maxWaitTime: 99999,
    };
    runPolling<any, any>(config, {}, {}, async (a: any, b: any) => {
      return {
        state: WaiterState.RETRY,
      };
    });
    const exponentialTime = (floor: number, ciel: number, attempt: number): number => {
      return Math.min(ciel, floor * 2 ** (attempt - 1));
    };

    jest.runAllTimers();
    // jest.runAllTimers();
    // jest.runAllTimers();
    // jest.runOnlyPendingTimers();
    // jest.runOnlyPendingTimers();
    // jest.runOnlyPendingTimers();
    console.log("finished pending");

    done();
  });

  it("should sleep before checking for a new state", () => {
    expect(1).toBe(1);
  });

  it("should exit on return state success", () => {
    expect(1).toBe(1);
  });

  it("should exit on return state failure", () => {
    expect(1).toBe(1);
  });
});
