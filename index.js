// Import necessary modules
const inquirer = require('inquirer'); // Module for interactive command line user interfaces
const fs = require('fs'); // File system module for file operations
const path = require('path'); // Module for working with file and directory paths
const { Circle, Triangle, Square } = require('./lib/shapes'); // Import shape classes

// Asynchronously prompt user for input using inquirer
async function promptUser() {
    // Returns a promise that resolves with the answers to the command line prompts
    return inquirer.prompt([
        // Prompt for text to include in the logo
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 // Validator to limit input to three characters
        },
        // Prompt for text color
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text:',
            default: 'black'
        },
        // Prompt for shape selection with choices
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you like to use?',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        // Prompt for shape color
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape to be?',
            default: 'blue',
        }
    ]);
}
// Function to generate SVG based on user input
function generateSVG(shapeName, shapeColor, text, textColor) {
    let shape; // Variable to hold the shape object

    // Switch statement to instantiate the correct shape class based on user input
    switch (shapeName) {
        case 'Circle':
            shape = new Circle(); // Create a new Circle instance
            break;
        case 'Triangle':
            shape = new Triangle(); // Create a new Triangle instance
            break;
        case 'Square':
            shape = new Square(); // Create a new Square instance
            break;
        default:
            throw new Error('Unknown shape type'); // Error for invalid shape type
    }
    // Set the color and text properties of the shape
    shape.setColor(shapeColor);
    shape.setText(text, textColor);

    // Return the rendered SVG string
    return shape.render();
}
// Function to save the SVG string to a file
function saveSVGToFile(svgString) {
    const filePath = path.join(__dirname, 'logo.svg'); // Construct file path for the SVG
    fs.writeFileSync(filePath, svgString); // Write the SVG string to a file
    console.log('Generated logo.svg'); // Log to the console
}
// Main async function to run the application
async function main() {
    try {
        const userInput = await promptUser(); // Wait for user input
        const svg = generateSVG(userInput.shape, userInput.shapeColor, userInput.text, userInput.textColor); // Generate SVG from input
        saveSVGToFile(svg); // Save SVG to file
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
// Execute the main function
main();

