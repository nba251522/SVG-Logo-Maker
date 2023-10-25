const inquirer = require('inquirer');
const fs = require('fs');
const mockConsole = require('jest-mock-console');

jest.mock('inquirer');

describe('Main Application', () => {

  afterEach(() => {
    if (fs.existsSync('logo.svg')) {
      fs.unlinkSync('logo.svg');
    }
  });

  test('Correctly generates SVG based on user input', async () => {
    const restoreConsole = mockConsole();
    
    inquirer.prompt.mockResolvedValue({
      text: 'TXT',
      textColor: 'white',
      shape: 'circle',
      shapeColor: 'blue'
    });

    const app = require('../Index.js');

    expect(fs.existsSync('logo.svg')).toBeTruthy();
    expect(console.log).toHaveBeenCalledWith('Generated logo.svg');

    restoreConsole();
  });
});