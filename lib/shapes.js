//defines classes for circle, triangle, and square -- generateSVG() method to generate the SVGs for the respective shapes

class Circle {
    constructor(color) {
        this.color = color;
    }

    generateSVG() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }

    generateSVG() {
        return `<polygon points="150,20 220,180 80,180" fill="${this.color}"/>`;
    }
}

class Square {
    constructor(color) {
        this.color = color;
    }

    generateSVG() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}"/>`;
    }
}


//function generates SVG files
function generateSVG(text, textColor, shape, shapeColor) {
    let shapeObject;

    //create instance of respective shape classes based on shape selected
    switch (shape) {
        case 'circle':
            shapeObject = new Circle(shapeColor);
            break;
        case 'triangle':
            shapeObject = new Triangle(shapeColor);
            break;
        case 'square':
            shapeObject = new Square(shapeColor);
            break;
        default:
            console.error('Invalid shape.');
            return;
    }

    const shapeSVG = shapeObject.generateSVG();

    //constructs SVG image using the shape and text parameters
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeSVG}
            <text x="50%" y="50%" font-size="30" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;
    
    const fs = require('fs');
    fs.writeFileSync('logo.svg', svgContent.trim());
}

//exports function and shape classes to other modules
module.exports = { generateSVG, Circle, Triangle, Square };
