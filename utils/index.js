// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? /nProvide a step-by-step description of how to get the development environment running.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use your application. /nAdd screenshots if needed.',
      },
      {
      type: 'input',
      name: 'credits',
      message: 'Please list any collaborators (their GitHub profiles), third-party assets, or tutorials used in the making of this project.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose which license you used.',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'MPL-2.0', 'Unlicense'],
        default: 'MIT'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'If you would like other developers to contribute to your package or application, please state how they can do so.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'If tests were made for your application, provide examples on how to run them.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
      },
]; 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
    console.log("Generating README.md file...");
    writeToFile("./example/README.md", generateMarkdown({...responses}));
});
}
// Function call to initialize app
init();
