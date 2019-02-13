const fs = require('fs');
const path = require('path');
const clientNameRegex = require('./constants').clientNameRegex;
const clientModuleIdentifier = require('../../packages/package-generator/build/clientModuleIdentifier').clientModuleIdentifier;

class ServiceModelFinder {
    constructor(models) {
        this.latestModels = this.fetchLatestModels(models);
        this.loadedModelCache = new Map();
    }

    fetchLatestModels(modelsDir) {
        const serviceModelDirs = [];
        for (const modelName of fs.readdirSync(modelsDir)) {
            const modelDir = path.join(modelsDir, modelName);
            if (!fs.statSync(modelDir).isDirectory()) continue;
            const versions = fs.readdirSync(modelDir).filter(
                version => fs.statSync(path.join(modelDir, version)).isDirectory()
            );
            if (!versions || versions.length === 0) {
                throw new Error(`No api version found in ${modelDir}`);
            }
            const latestVersion = versions.sort().reverse()[0];
            const versionDir = path.join(modelDir, latestVersion);
            const serviceModels = fs.readdirSync(versionDir);
            if (serviceModels.find(modelName => modelName === 'service-2.json')) {
                serviceModelDirs.push(versionDir);
            }
        }
        return serviceModelDirs;
    }

    /**
     * Fetch the directory of model and smoke test for given service name.
     * @param {string} service service client package name. like: client-sqs-node
     * @returns {object} looks like {service: string, smoke: string};
     */
    findModelsForService(packageName) {
        const [_, service, runtime] = clientNameRegex.exec(packageName);
        if (this.loadedModelCache.has(`client-${service}`)) {
            return this.loadedModelCache.get(`client-${service}`);
        }
        for (const latestModel of this.latestModels.slice(this.loadedModelCache.size)) {
            const modelDir = path.join(latestModel, 'service-2.json');
            const smokeDir = path.join(latestModel, 'smoke.json');
            const {metadata} = JSON.parse(fs.readFileSync(modelDir).toString());
            const universalClientName = clientModuleIdentifier(metadata);
            const loadedModel = {service: modelDir};
            if (fs.existsSync(smokeDir)) {
                loadedModel.smoke = smokeDir;
            }
            this.loadedModelCache.set(universalClientName, loadedModel);
            if (universalClientName === `client-${service}`) {
                return loadedModel;
            }
        }
        throw new Error(`No model found for ${packageName}`);
    }
}

module.exports.ServiceModelFinder = ServiceModelFinder;