import {ServiceCustomizationDefinition} from '@aws/build-types';
import {customizations as ApiGatewayCustomizations} from './api-gateway/customizations';

export interface serviceCustomizationsMap {
    [serviceId: string]: ServiceCustomizationDefinition;
}

export const serviceCustomizations: serviceCustomizationsMap = {
    'api-gateway': ApiGatewayCustomizations
};