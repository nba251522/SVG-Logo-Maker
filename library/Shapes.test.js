const { circleSVG, triangleSVG, squareSVG } = require('./Shapes');

describe('Shapes Module', () => {
  test('circleSVG generates correct SVG with given color', () => {
    const svg = circleSVG('red');
    expect(svg).toContain('cx="150"');
    expect(svg).toContain('cy="100"');
    expect(svg).toContain('r="90"');
    expect(svg).toContain('fill="red"');
  });

  test('triangleSVG generates correct SVG with given color', () => {
    const svg = triangleSVG('blue');
    expect(svg).toContain('points="150,10 280,190 20,190"');
    expect(svg).toContain('fill="blue"');
  });

  test('squareSVG generates correct SVG with given color', () => {
    const svg = squareSVG('green');
    expect(svg).toContain('x="50"');
    expect(svg).toContain('y="50"');
    expect(svg).toContain('width="200"');
    expect(svg).toContain('height="150"');
    expect(svg).toContain('fill="green"');
  });
});