import {ServiceCustomizationDefinition} from '@aws/build-types';
import {customizations as ApiGatewayCustomizations} from './api-gateway/customizations';
import {customizations as EC2Customizations} from './ec2/customizations';

export interface serviceCustomizationsMap {
    [serviceId: string]: ServiceCustomizationDefinition;
}

export const serviceCustomizations: serviceCustomizationsMap = {
    'api-gateway': ApiGatewayCustomizations,
    'ec2': EC2Customizations,
};
