const fs = require('fs');
const inquirer = require('inquirer');
const generateSVG = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color:'
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
            message: 'Enter shape color:'
        }
    ])
    .then(answers => {
        //retrieves answers provided by user
        const { text, textColor, shape, shapeColor } = answers;

        //calls generateSVG function and creates file based on user input
        generateSVG(text, textColor, shape, shapeColor);

        //prints message confirmt that the SVG file has been created
        console.log(`Generated logo.svg`);
    });
