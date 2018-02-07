import { customizationsFromModel } from './customizationsFromModel';
import { apiGatewayCustomizations } from './api-gateway/customizations';
import { s3Customizations } from './s3';
import { ec2Customizations } from './ec2';
import { rdsCustomizations} from './rds';
import { serviceIdFromMetadata } from '../serviceIdFromMetadata';
import {
    CustomizationDefinition,
    CustomizationProvider,
    RuntimeTarget,
    ServiceCustomizationDefinition,
    TreeModel,
} from '@aws/build-types';

const serviceCustomizations: {[serviceId: string]: CustomizationProvider} = {
    'api-gateway': apiGatewayCustomizations,
    ec2: ec2Customizations,
    rds: rdsCustomizations,
    s3: s3Customizations,
};

export function getServiceCustomizations(
    model: TreeModel,
    target: RuntimeTarget
): ServiceCustomizationDefinition {
    const client = customizationsFromModel(model, target);
    const commands: {[operationName: string]: CustomizationDefinition[]} = {};
    const normalizedServiceId = serviceIdFromMetadata(model.metadata)
        .split(/\s/g)
        .join('-')
        .toLowerCase();

    if (serviceCustomizations[normalizedServiceId]) {
        const c = serviceCustomizations[normalizedServiceId](model, target);
        client.push(...c.client);
        Object.assign(commands, c.commands);
    }

    return {commands, client};
}
