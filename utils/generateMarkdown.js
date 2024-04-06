// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `[Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n [License](#license)\n`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License

This project is licensed under the ${license} license.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [Contribution](#contribution)
  [Tests](#tests)
  [License](#license)
  [Questions](#questions)

  ${renderLicenseLink(data.license)}
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ##Credits
  ${data.credits}
  
  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## License 
  ${renderLicenseSection(data.license)}
  
  ## Questions
  Contact me with any questions about this project:
1. [GitHub Profile](https://github.com/${data.github})
2. Email me at: <${data.email}>`;
}

module.exports = {
  generateMarkdown
};


