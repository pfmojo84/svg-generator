const fs = require('fs');
const { generateSVG, Circle, Triangle, Square } = require('./shapes');

describe('SVG Generator', () => {
    test('Generate SVG file with correct content for Circle', () => {
        const shapeColor = '#FF0000';
        const expectedSVGContent = `<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>`;

        const circle = new Circle(shapeColor);
        const svgContent = circle.generateSVG();

        expect(svgContent).toBe(expectedSVGContent);
    });

    test('Generate SVG file with correct content for Triangle', () => {
        const shapeColor = '#00FF00';
        const expectedSVGContent = `<polygon points="150,20 220,180 80,180" fill="${shapeColor}"/>`;

        const triangle = new Triangle(shapeColor);
        const svgContent = triangle.generateSVG();

        expect(svgContent).toBe(expectedSVGContent);
    });

    test('Generate SVG file with correct content for Square', () => {
        const shapeColor = '#0000FF';
        const expectedSVGContent = `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}"/>`;

        const square = new Square(shapeColor);
        const svgContent = square.generateSVG();

        expect(svgContent).toBe(expectedSVGContent);
    });

    //reset environment and removes temp files created by test
    afterEach(() => {
        const filePath = 'logo.svg';
        
        //checks if the SVG file exits at the specified path
        if (fs.existsSync(filePath)) {
          
        //if the SVG file exists, this line deles the file synchronously     
            fs.unlinkSync(filePath);
        }
    })
})