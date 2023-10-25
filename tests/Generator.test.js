const fs = require('fs');
const generateSVG = require('../Generator');

describe('SVG Generator', () => {
  
  afterEach(() => {
    if (fs.existsSync('logo.svg')) {
      fs.unlinkSync('logo.svg');
    }
  });

  test('generateSVG creates an SVG file named logo.svg', () => {
    const mockShapeSVG = () => '<mockShape></mockShape>';
    generateSVG('TXT', 'white', mockShapeSVG, 'blue');

    expect(fs.existsSync('logo.svg')).toBeTruthy();

    const content = fs.readFileSync('logo.svg', 'utf8');
    expect(content).toContain('<mockShape></mockShape>');
    expect(content).toContain('TXT');
  });
});