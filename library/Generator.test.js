const fs = require('fs');
const generateSVG = require('./Generator');

jest.mock('./Shapes.js', () => ({
  circleSVG: () => '<mockShape></mockShape>',
  triangleSVG: jest.fn(),
  squareSVG: jest.fn()
}));

describe('SVG Generator', () => {

  afterEach(() => {
    if (fs.existsSync('logo.svg')) {
      fs.unlinkSync('logo.svg');
    }
  });

  test('generateSVG creates an SVG file named logo.svg', () => {
    generateSVG('TXT', 'white', 'circle', 'blue');  
    expect(fs.existsSync('logo.svg')).toBeTruthy();

    const content = fs.readFileSync('logo.svg', 'utf8');
    expect(content).toContain('<mockShape></mockShape>');
    expect(content).toContain('TXT');
  });
});