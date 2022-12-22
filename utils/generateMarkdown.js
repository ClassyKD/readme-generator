const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Description
  ${data.description}


  ## Table of Contents
  1. [Introduction](##Description)
  2. [Installation](##Installation)
  3. [Usage](##Usage)
  4. [Licenses](##Licenses)
  5. [Contribution](##Contribution)
  6. [Contact](##Contact)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licenses
  This program is licensed under ${data.license}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Contact
  https://github.com/${data.gitUser}

  ${data.email}


`;
}
module.exports = generateMarkdown;
