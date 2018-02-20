const fs = require('fs');
const glob = require('glob');
const path = require('path');

const modelsDir = require('yargs')
    .alias('models', 'm')
    .string('m')
    .demandOption('m', 'A models directory must be specified')
    .coerce('m', path.resolve)
    .argv
    .models;

const targetDir = path.join(path.dirname(__dirname), 'serviceModels');
ensureDirectoryExists(targetDir);

glob(path.join(modelsDir, '*', '*', '*.json'), (err, matches) => {
    for (const match of matches) {
        const relativePath = path.relative(modelsDir, match);

        let targetSubdir = targetDir;
        for (const dir of path.dirname(relativePath).split(path.sep)) {
            ensureDirectoryExists(
                targetSubdir = path.join(targetSubdir, dir)
            );
        }

        fs.copyFileSync(match, path.join(targetDir, relativePath));
    }
})

function ensureDirectoryExists(target) {
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
    }
}
