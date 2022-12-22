// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    //Title
    {
        type: 'input',
        message: 'What is the title of your program?',
        name: 'title'
    },
    //description
    {
        type: 'input',
        message: 'Type a description of your program',
        name: 'description'
    },
    //Installation
    {
        type: 'input',
        message: 'How do you install the program',
        name: 'installation'
    },
    //Usage
    {
        type: 'input',
        message: 'What is the usage of the program?',
        name: 'usage'
    },
    //License
    {
        type: 'checkbox',
        message: 'pick all Licenses that apply.',
        name: 'license',
        choices: ['ISC', 'Apache_2.0', 'MIT', 'None'],
    },
    //Contribution
    {
        type: 'input',
        message: 'Enter how to contribute to this project.',
        name: 'contribution'
    },
    //Tests
    {
        type: 'input',
        message: 'Enter how to run tests on the program.',
        name: 'tests'
    },
    //Git Username
    {
        type: 'input',
        message: 'Enter Github Username.',
        name: 'gitUser'
    },
    //Email
    {
        type: 'input',
        message: 'Enter your email.',
        name: 'email'
    },
];

// TODO: Create a function to write README file
//creates README file with name and content
function writeToFile(data) {
    

    fs.writeFile('README.md', data, (err) =>
    err ? console.error(err) : console.log('README created!')
    );
}

// TODO: Create a function to initialize app

function init() {
    inquirer
        .prompt(questions)
        
        .then((data) => {
            var myReadMe = generateMarkdown(data)
            writeToFile(myReadMe)
        }
        )
}

// Function call to initialize app
module.exports = writeToFile;
init();
