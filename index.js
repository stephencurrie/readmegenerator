const inquirer = require('inquirer');
const fs = require('fs');

// Collects input from command prompt

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation steps for your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What licensing do you want to set up for your project?',
        choices: [
          {value: 'None', name: "None"},
          {value: 'MIT', name: "MIT License"},
          {value: 'GNU', name: "GNU GPLv3"},
        ],
          //   let license = list.includes({
      //     'None': '',
      //     'MIT': 'john.doe@example.com'
      //     'GNU': ""
      // });
      },
      {
        type: 'input',
        name: 'contributor',
        message: 'List the contributors of your project',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Document what testing methodology was done for your project',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your gitub user name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ]);
  };

  const generateMd = ({ title, description, installation, license, contributor, tests, github, email }) =>
{
  let licenseBlock = "";
  if (license === "None"){
    licenseBlock = `There are no licensing requirements`
  } 
  else if (license === "MIT"){
    licenseBlock = `${title} is licensed under the [${license} License](./License/${license}/${license}.txt)`
  } 
  else if (license === "GNU"){
    licenseBlock = `${title} is licensed under the [GNU GPLv3 License](./License/${license}/${license}.txt)`
  } 
  // elseif
  let licenseBadge = "";
 
  if (license === "MIT"){
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } 
  else if (license === "GNU"){
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }

return `# ${title}
${licenseBadge}
## Description

${description}

## Table of Contents 

- [Installation Instructions](#installation)
- [Licensing Information](#license)
- [Who Contributed to ${title}](#contributor)
- [Testing Methodology](#tests)
- [Contact Me](#questions)

## Installation

${installation}

## License

${licenseBlock}


## Contributor

${contributor}

## Tests
${tests}

## Questions

For any questions, please contact me at https://github.com/${github}

I can be reached at ${email}`;
}

// Starts function to prompt user and then generates README.md file

const init = () => {
    promptUser()
      
      .then((answers) => fs.writeFileSync('README.md', generateMd(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();

