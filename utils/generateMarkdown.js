// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ##Description
  ${data.description}


  ##Table of Contents
  1. [Introduction](##Description)
  2. [Table of Contents](##Table of Contents)
  3. [Installation Guide](##Installation Guide)
  4. [Usage Guide](##Usage Guide)
  5. [Licenses](##Licenses)
  6. [Contribution](##Contribution)
  7. [Tests](##Tests)
  8. [Contect Me](##Contect Me)


  ##Installation Guide
  ${data.installation}

  ##Usage Guide
  ${data.usage}

  ##Licenses
  

  ##Contribution
  ${data.contribution}

  ##Tests
  ${data.tests}

  ##Contact Me
  https://github.com/${gitUser}
  ${data.email}


`;
}

module.exports = generateMarkdown;
