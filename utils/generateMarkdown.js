// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return ***
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return ***
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `The license used in this project is $(license)`
  }
  else [
    return '';
  ]
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;


// const generateREADME = ({ title, description, installation, usage, credits, license, contribution, tests, github, email}) =>
// `#${title}

// ## Description
// #${description}

// ## Table of Contents
// #${table_of_contents}

// ## Installation
// #${installation}

// ## Usage
// #${usage}

// ## License
// #${license}

// ## Contributing
// #${contributing}

// ## Tests
// #${tests}

// ## Questions
// #${questions}


