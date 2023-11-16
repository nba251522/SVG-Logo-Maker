const fs = require('fs');
const { circleSVG, triangleSVG, squareSVG } = require('./Shapes');

const generateSVG = (text, textColor, shape, shapeColor) => {
  let shapeSVG;
  switch (shape) {
    case 'circle':
      shapeSVG = circleSVG(shapeColor);
      break;
    case 'triangle':
      shapeSVG = triangleSVG(shapeColor);
      break;
    case 'square':
      shapeSVG = squareSVG(shapeColor);
      break;
  }

  const content = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="150" y="115" font-family="Arial" font-size="45" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', content.trim());
}

module.exports = generateSVG;