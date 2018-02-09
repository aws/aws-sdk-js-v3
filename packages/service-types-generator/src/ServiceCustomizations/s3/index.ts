import { bucketEndpointCustomizations } from './bucketEndpoint';
import { locationConstraintCustomization } from './locationConstraint';
import { defaultContentTypeCustomization } from './contentType';
import { ssecCustomizations } from './ssec';
import { ServiceCustomizationDefinition, TreeModel } from '@aws/build-types';
import { model } from '../../shapes.fixture';

export function s3Customizations(model: TreeModel): ServiceCustomizationDefinition {
    const s3Customizations: ServiceCustomizationDefinition = {
        commands: {},
        client: [],
    };

    for (const {client, commands} of [
        bucketEndpointCustomizations(model),
        locationConstraintCustomization,
        defaultContentTypeCustomization(model),
        ssecCustomizations(model),
    ]) {
        s3Customizations.client.push(...client);
        for (const commandName of Object.keys(commands)) {
            if (commandName in s3Customizations.commands) {
                s3Customizations.commands[commandName]
                    .push(...commands[commandName]);
            } else {
                s3Customizations.commands[commandName] = commands[commandName];
            }
        }
    }

    return s3Customizations;
}
