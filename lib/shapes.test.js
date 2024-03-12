const fs = require('fs');
const generateSVG = require('./shapes');

describe('SVG Generator', () => {
    test('Generate SVG file with correct content', () => {
        const text = 'ABC';
        const textColor = '#000000';
        const shape = 'circle';
        const shapeColor = '#FF0000';
        const expectedSVGContent = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="#FF0000"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#000000">ABC</text>
            </svg>
        `.replace(/\s/g, ''); // Remove white spaces for comparison

        generateSVG(text, textColor, shape, shapeColor);
        const svgContent = fs.readFileSync('logo.svg', 'utf8').trim().replace(/\s/g, '');

        expect(svgContent).toBe(expectedSVGContent);
    });

    test('SVG file contains correct text, shape, and colors', () => {
        const text = 'XYZ';
        const textColor = '#FFFFFF';
        const shape = 'square';
        const shapeColor = '#00FF00';

        generateSVG(text, textColor, shape, shapeColor);
        const svgContent = fs.readFileSync('logo.svg', 'utf8');

        expect(svgContent).toContain(`<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`);
        expect(svgContent).toContain(`<rect x="50" y="50" width="200" height="200" fill="${shapeColor}"/>`);
    });

    afterEach(() => {
        // Clean up after each test
        fs.unlinkSync('logo.svg');
    });
});
