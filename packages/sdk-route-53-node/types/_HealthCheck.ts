import {_LinkedService, _UnmarshalledLinkedService} from './_LinkedService';
import {_HealthCheckConfig, _UnmarshalledHealthCheckConfig} from './_HealthCheckConfig';
import {_CloudWatchAlarmConfiguration, _UnmarshalledCloudWatchAlarmConfiguration} from './_CloudWatchAlarmConfiguration';

/**
 * <p>A complex type that contains information about one health check that is associated with the current AWS account.</p>
 */
export interface _HealthCheck {
    /**
     * <p>The identifier that Amazon Route 53assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long. </p>
     */
    Id: string;

    /**
     * <p>A unique string that you specified when you created the health check.</p>
     */
    CallerReference: string;

    /**
     * <p>If the health check was created by another service, the service that created the health check. When a health check is created by another service, you can't edit or delete it using Amazon Route 53. </p>
     */
    LinkedService?: _LinkedService;

    /**
     * <p>A complex type that contains detailed information about one health check.</p>
     */
    HealthCheckConfig: _HealthCheckConfig;

    /**
     * <p>The version of the health check. You can optionally pass this value in a call to <code>UpdateHealthCheck</code> to prevent overwriting another change to the health check.</p>
     */
    HealthCheckVersion: number;

    /**
     * <p>A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.</p>
     */
    CloudWatchAlarmConfiguration?: _CloudWatchAlarmConfiguration;
}

export interface _UnmarshalledHealthCheck extends _HealthCheck {
    /**
     * <p>If the health check was created by another service, the service that created the health check. When a health check is created by another service, you can't edit or delete it using Amazon Route 53. </p>
     */
    LinkedService?: _UnmarshalledLinkedService;

    /**
     * <p>A complex type that contains detailed information about one health check.</p>
     */
    HealthCheckConfig: _UnmarshalledHealthCheckConfig;

    /**
     * <p>A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.</p>
     */
    CloudWatchAlarmConfiguration?: _UnmarshalledCloudWatchAlarmConfiguration;
}