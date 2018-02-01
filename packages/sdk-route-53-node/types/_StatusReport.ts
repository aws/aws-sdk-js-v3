/**
 * <p>A complex type that contains the status that one Amazon Route 53 health checker reports and the time of the health check.</p>
 */
export interface _StatusReport {
    /**
     * <p>A description of the status of the health check endpoint as reported by one of the Amazon Route 53 health checkers.</p>
     */
    Status?: string;

    /**
     * <p>The date and time that the health checker performed the health check in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a> and Coordinated Universal Time (UTC). For example, the value <code>2017-03-27T17:48:16.751Z</code> represents March 27, 2017 at 17:48:16.751 UTC.</p>
     */
    CheckedTime?: Date|string|number;
}

export interface _UnmarshalledStatusReport extends _StatusReport {
    /**
     * <p>The date and time that the health checker performed the health check in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a> and Coordinated Universal Time (UTC). For example, the value <code>2017-03-27T17:48:16.751Z</code> represents March 27, 2017 at 17:48:16.751 UTC.</p>
     */
    CheckedTime?: Date;
}