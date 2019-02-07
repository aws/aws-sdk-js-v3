const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

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
    return JSON.stringify({
        type,
        category,
        description
    }, null, 2);
}
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
inquirer.prompt([
    {
        type: 'autocomplete',
        name: 'category',
        message: 'Select a category that this update belongs to. It can be service names for service-specific customization or general SDK components like \'Signer\':',
        pageSize: 7,
        suggestOnly: true,
        validate: () => true,
        source: (answersSofar, input) => Promise.resolve(
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
    }
]).then(answers => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmed',
            message: `Please confirm the changelog entry: 
${populateChangelog(answers)}`
        }
    ]).then(confirmation => {
        console.log(confirmation.confirmed)
    })
})