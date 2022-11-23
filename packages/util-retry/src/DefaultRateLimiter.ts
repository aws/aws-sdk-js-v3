import { isThrottlingError } from "@aws-sdk/service-error-classification";

import { RateLimiter } from "./types";

export interface DefaultRateLimiterOptions {
  beta?: number;
  minCapacity?: number;
  minFillRate?: number;
  scaleConstant?: number;
  smooth?: number;
}

export class DefaultRateLimiter implements RateLimiter {
  // User configurable constants
  private beta: number;
  private minCapacity: number;
  private minFillRate: number;
  private scaleConstant: number;
  private smooth: number;

  // Pre-set state variables
  private currentCapacity = 0;
  private enabled = false;
  private lastMaxRate = 0;
  private measuredTxRate = 0;
  private requestCount = 0;

  // Other state variables
  private fillRate: number;
  private lastThrottleTime: number;
  private lastTimestamp = 0;
  private lastTxRateBucket: number;
  private maxCapacity: number;
  private timeWindow = 0;

  constructor(options?: DefaultRateLimiterOptions) {
    this.beta = options?.beta ?? 0.7;
    this.minCapacity = options?.minCapacity ?? 1;
    this.minFillRate = options?.minFillRate ?? 0.5;
    this.scaleConstant = options?.scaleConstant ?? 0.4;
    this.smooth = options?.smooth ?? 0.8;

    const currentTimeInSeconds = this.getCurrentTimeInSeconds();
    this.lastThrottleTime = currentTimeInSeconds;
    this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());

    this.fillRate = this.minFillRate;
    this.maxCapacity = this.minCapacity;
  }

  private getCurrentTimeInSeconds() {
    return Date.now() / 1000;
  }

  public async getSendToken() {
    return this.acquireTokenBucket(1);
  }

  private async acquireTokenBucket(amount: number) {
    // Client side throttling is not enabled until we see a throttling error.
    if (!this.enabled) {
      return;
    }

    this.refillTokenBucket();
    if (amount > this.currentCapacity) {
      const delay = ((amount - this.currentCapacity) / this.fillRate) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    this.currentCapacity = this.currentCapacity - amount;
  }

  private refillTokenBucket() {
    const timestamp = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
      return;
    }

    const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
    this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
    this.lastTimestamp = timestamp;
  }

  public updateClientSendingRate(response: any) {
    let calculatedRate: number;
    this.updateMeasuredRate();

    if (isThrottlingError(response)) {
      const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
      this.lastMaxRate = rateToUse;
      this.calculateTimeWindow();
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      calculatedRate = this.cubicThrottle(rateToUse);
      this.enableTokenBucket();
    } else {
      this.calculateTimeWindow();
      calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
    }

    const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(newRate);
  }

  private calculateTimeWindow() {
    this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
  }

  private cubicThrottle(rateToUse: number) {
    return this.getPrecise(rateToUse * this.beta);
  }

  private cubicSuccess(timestamp: number) {
    return this.getPrecise(
      this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate
    );
  }

  private enableTokenBucket() {
    this.enabled = true;
  }

  private updateTokenBucketRate(newRate: number) {
    // Refill based on our current rate before we update to the new fill rate.
    this.refillTokenBucket();

    this.fillRate = Math.max(newRate, this.minFillRate);
    this.maxCapacity = Math.max(newRate, this.minCapacity);

    // When we scale down we can't have a current capacity that exceeds our maxCapacity.
    this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
  }

  private updateMeasuredRate() {
    const t = this.getCurrentTimeInSeconds();
    const timeBucket = Math.floor(t * 2) / 2;
    this.requestCount++;

    if (timeBucket > this.lastTxRateBucket) {
      const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
      this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
      this.requestCount = 0;
      this.lastTxRateBucket = timeBucket;
    }
  }

  private getPrecise(num: number) {
    return parseFloat(num.toFixed(8));
  }
}
