const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const generalComponents = [
    'Signer',
    'HttpHandler',
    'PackageGenerator',
    'Credentials',
    'MiddlewareStack',
    'Configuration',
    'Customization',
    'Parser',
    'Builder',
    'Waiter',
    'Paginator'
]
const allServices = fs.readdirSync(path.join(__dirname, '..', 'models'));
const prefixMatching = (prefix, wordsPool) => {
    return wordsPool.reduce((accumulator, curr) => {
        const lowerPrefix = prefix ? prefix.toLowerCase() : undefined;
        if (curr.toLowerCase().indexOf(lowerPrefix) === 0) accumulator.push(curr);
        return accumulator;
    }, []);
}

const populateChangelog = (stagingAnswers) => {
    const {
        category,
        type,
        description
    } = stagingAnswers;
    return {
        type,
        category,
        description
    };
}

const changeLogDirectory = path.join(__dirname, '..', '.next-release');
const createChangelogEntry = (directory, content) => {
    const nextReleaseLogName = `${content.type}-${content.category.toLowerCase()}-${crypto.randomBytes(4).toString('hex')}`;
    const nextReleaseLogDirectory = path.join(directory, nextReleaseLogName); 
    const pathObj = path.parse(path.normalize(nextReleaseLogDirectory));
    const sep = path.sep;
    const directoryStructure = pathObj.dir.split(sep) || [];
    for (let i = 0; i < directoryStructure.length; i++) {
        const pathToCheck = directoryStructure.slice(0, i + 1).join(sep);
        if (!pathToCheck) {
            continue;
        }
        try {
            fs.statSync(pathToCheck);
        } catch (err) {
            if (err.code === 'ENOENT') {
                // Directory doesn't exist, so create it
                fs.mkdirSync(pathToCheck);
            } else {
                throw err;
            }
        }
    };
    fs.writeFileSync(nextReleaseLogDirectory, JSON.stringify(content, null, 2));
}

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
inquirer.prompt([
    {
        type: 'autocomplete',
        name: 'category',
        message: 'Select a category that this update belongs to. It can be service names for service-specific customization or general SDK components like \'Signer\':',
        pageSize: 7,
        source: (_, input) => Promise.resolve(
            prefixMatching(input, [...generalComponents, ...allServices])
        )
    }, {
        type: 'list',
        name: 'type',
        message: 'Select which type this change belongs to:',
        choices: ['breaking', 'feature', 'bugfix', 'documentation', 'internal'],
        default: 'feature',
    }, {
        type: 'input',
        name: 'description',
        message: 'A brief description of your change:',
        validate: (input) => input && input.length > 0
    }
]).then(answers => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmed',
            message: `Please confirm the changelog entry: 
${JSON.stringify(populateChangelog(answers), null, 2)}`
        }
    ]).then(confirmation => {
        if (confirmation.confirmed) {
            createChangelogEntry(
                changeLogDirectory,
                populateChangelog(answers)
            );
        } else {
            console.log('Changelog abandoned');
        }
    })
})