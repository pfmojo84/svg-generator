function generateSVG(text, textColor, shape, shapeColor) {
    const fs = require('fs');
    let shapeContent = '';

    switch(shape) {
        case 'circle':
            shapeContent = `<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>`;
            break;
        case 'triangle':
            shapeContent = `<polygon points="150,20 220,180 80,180" fill="${shapeColor}"/>`;
            break;
        case 'square':
            shapeContent = `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}"/>`;
            break;
        default:
            console.error('Invalid shape.');
            return;
    }

    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeContent}
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;
    
    fs.writeFileSync('logo.svg', svgContent.trim());
}

module.exports = generateSVG;