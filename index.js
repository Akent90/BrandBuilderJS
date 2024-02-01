const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function promptUser() {
    return inquirer.prompt([
       {
        type: 'input', 
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: input => input.lenth <= 3
       },
       {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text:',
        default: 'black'
       },
       {
        type: 'list', 
        name: 'shape', 
        message: 'Which shape would you like to use?', 
        choices: ['Circle', 'Triangle', 'Square'],
       },
       {
        type: 'input',
        name: 'shapeColor', 
        message: 'What color would you like your shape to be?',
        default: 'blue',
       } 
    ]);
}

function generateSVG(shapeName, shapeColor, text, textColor) {
    let shape;

    switch (shapeName) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
        default:
            throw new Error('Unknown shape type');
    }

    shape.setColor(shapeColor);
    shapeColor.setText(text, textColor);

    return shape.render();
}