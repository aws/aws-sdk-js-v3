import { customizationsFromModel } from './customizationsFromModel';
import { apiGatewayCustomizations } from './api-gateway/customizations';
import { glacierCustomizations } from './glacier/customizations';
import { machineLearningCustomizations } from './machine-learning';
import { route53Customizations } from './route53';
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
} from '@aws-sdk/build-types';
import { mergeCustomizationDefinitions } from './mergeCustomizationDefinitions';

const serviceCustomizations: {[serviceId: string]: CustomizationProvider} = {
    'api-gateway': apiGatewayCustomizations,
    ec2: ec2Customizations,
    glacier: glacierCustomizations,
    'machine-learning': machineLearningCustomizations,
    rds: rdsCustomizations,
    'route-53': route53Customizations,
    s3: s3Customizations,
};

export const getServiceCustomizations: CustomizationProvider = (
    model: TreeModel,
    target: RuntimeTarget
): ServiceCustomizationDefinition => {
    const modeled = customizationsFromModel(model, target);
    const serviceCustomizationsFactory = serviceCustomizations[
        serviceIdFromMetadata(model.metadata)
            .split(/\s/g)
            .join('-')
            .toLowerCase()
    ];

    return serviceCustomizationsFactory === undefined
        ? modeled
        : mergeCustomizationDefinitions(
            modeled,
            serviceCustomizationsFactory(model, target)
        );
}
