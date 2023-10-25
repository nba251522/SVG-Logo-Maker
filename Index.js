const inquirer = require('inquirer');
const generateSVG = require('./Generator');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (value) => value.length > 3 ? 'Please enter up to three characters.' : true
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal number):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal number):'
  }
];

inquirer.prompt(questions).then(answers => {
  generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  console.log('Generated logo.svg');
});