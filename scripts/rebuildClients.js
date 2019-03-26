const yargs = require('yargs');
const path = require('path');
const fs = require('fs');
const execSync = require('child_process').execSync;
const ServiceModelFinder = require('./utils/ModelFinder').ServiceModelFinder;
const clientNameRegex = require('./utils/constants').clientNameRegex;

/**
 * This script will scan packages directory, recognize service client packages and re-generate them from models
 * If this command fails with cannot find model \'clientModuleIdentifier\', please run npm bootstrap && npm test first. 
 */
const models = yargs
    .alias('m', 'models')
    .string('m')
    .default('m', path.join('..', '..', 'models'))
    .describe('m', 'the directory of models')
    .help()
    .coerce('m', (directory) => {
        return path.normalize(path.join(__filename, path.normalize(directory)));
    })
    .argv
    .models;

console.info('models directory: ', models);

const existingServiceClients = grabExistingClients();
console.info('existing service clients: ', existingServiceClients.map(item => path.parse(item).base));
console.info('generating service clients...');
const serviceModelFinder = new ServiceModelFinder(models);
for (const serviceClient of existingServiceClients) {
    const clientName = path.parse(serviceClient).base;
    const models = serviceModelFinder.findModelsForService(clientName);
    const [_, serviceId, runtime] = clientNameRegex.exec(clientName);
    console.info(`generating ${runtime} client from model at ${models.service}`)
    generateClient(models, runtime);
}
console.log('done!');

function grabExistingClients() {
    const packagesDir = path.join(path.dirname(__dirname), 'packages');
    const clientPackagesPaths = [];
    for (const package of fs.readdirSync(packagesDir)) {
        const packageDir = path.join(packagesDir, package);
        if (fs.statSync(packageDir).isDirectory() && isClientPackage(packageDir)) {
            clientPackagesPaths.push(packageDir);
        }
    }
    return clientPackagesPaths;
}

function isClientPackage(directory) {
    const baseName = path.parse(directory).base;
    if (!clientNameRegex.test(baseName)) return false;
    const clientFiles = [
        {base: 'commands', isFile: false},
        {base: 'model', isFile: false},
        {base: 'types', isFile: false},
        {base: `(\\w+)Client\\.ts`, isFile: true},
        {base: `(\\w+)Configuration\\.ts`, isFile: true},
        {base: `index\\.ts`, isFile: true},
    ]
    try {
        const files = fs.readdirSync(directory);
        for (const clientFilePattern of clientFiles) {
            const matchedFile = arrayFindPattern(files, clientFilePattern.base);
            if (
                !matchedFile &&
                fs.statSync(path.join(directory, matchedFile)).isFile() !== clientFilePattern.isFile
            ) {
                return false;
            }

        }
    } catch(e) {
        return false;
    }
    return true;
}

function arrayFindPattern(array, pattern) {
    return array.find((item) => {
        const matched = new RegExp(pattern).exec(item);
        //RegExp.exec() returns null if no matched
        return Boolean(matched)
    })
}

function generateClient(models, runtime) {
    const command = `node packages/package-generator/build/cli.js client --m ${models.service} ${models.smoke ? `--s ${models.smoke}` : ''} --r ${runtime}`;
    const packageRoot = path.dirname(__dirname);
    const log = execSync(command, {cwd: packageRoot});
    console.info(log.toString());
}

module.exports.clientNameRegex = clientNameRegex;
