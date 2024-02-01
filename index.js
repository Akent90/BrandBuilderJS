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
            validate: input => input.length <= 3
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
    shape.setText(text, textColor);

    return shape.render();
}

function saveSVGToFile(svgString) {
    const filePath = path.join(__dirname, 'logo.svg');
    fs.writeFileSync(filePath, svgString);
    console.log('Generated logo.svg');
}

async function main() {
    try {
        const userInput = await promptUser();
        const svg = generateSvg(userInput.shape, userInput.shapeColor, userInput.text, userInput.textColor);
        saveSVGToFile(svg);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();

