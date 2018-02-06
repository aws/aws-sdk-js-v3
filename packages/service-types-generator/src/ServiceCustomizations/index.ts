import { customizationsFromModel } from './customizationsFromModel';
import { apiGatewayCustomizations } from './api-gateway/customizations';
import { glacierCustomizations } from './glacier/customizations';
import { machineLearningCustomizations } from './machine-learning';
import { s3Customizations } from './s3';
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
    glacier: glacierCustomizations,
    'machine-learning': machineLearningCustomizations,
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
