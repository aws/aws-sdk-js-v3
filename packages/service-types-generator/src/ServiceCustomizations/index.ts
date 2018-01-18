import {ServiceCustomizationDefinition} from '@aws/build-types';
import {customizations as ApiGatewayCustomizations} from './api-gateway/customizations';
import {customizations as GlacierCustomizations} from './glacier/customizations';

export interface serviceCustomizationsMap {
    [serviceId: string]: ServiceCustomizationDefinition;
}

export const serviceCustomizations: serviceCustomizationsMap = {
    'api-gateway': ApiGatewayCustomizations,
    'glacier': GlacierCustomizations
};