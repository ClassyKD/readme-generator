// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        choices: ['Apache 2.0', 'Boost Software', 'BSD 3-Clause', 'CC0', 'GNU GPL v3'],
    },
    //Contribution
    {
        type: 'input',
        message: 'Enter contributions to this project.',
        name: 'contribution'
    },
    //Tests
    {
        type: 'input',
        message: 'Type a description of your program',
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
function writeToFile(fileName, data) {
    let finishedReadMe = generateMarkdown

    fs.appendFile('README.txt', finishedReadMe, (err) =>
    err ? console.error(err) : console.log('README created!')
    );
}

// TODO: Create a function to initialize app

function init() {
    inquirer
        .prompt(questions)
        .then
}

// Function call to initialize app
init();
