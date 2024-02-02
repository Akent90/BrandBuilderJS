// Import the shape classes from the shapes module
const { Circle, Triangle, Square } = require('./shapes');

describe('Shape rendering', () => {
    // Test for rendering a circle
    test('Circle render test', () => {
        const circle = new Circle(); // Create a new instance of Circle
        circle.setColor("blue");
        circle.setText('ABC', 'black'); // Set the circle's text to 'ABC' and text color to black
        // Define the expected SVG outcome for a circle
        const expectedSvg = 
            `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">\n` +
            `                    <circle cx="150" cy="100" r="50" fill="blue" />\n` +
            `                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">ABC</text>\n` +
            `                    </svg>`;
        // Assert that the rendered SVG matches the expected outcome
        expect(circle.render()).toEqual(expectedSvg);
    });
    // Test for rendering a square
    test('Square render test', () => {
        const square = new Square();
        square.setColor("red");
        square.setText('ABC', 'black');
        const expectedSvg = 
            `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">\n` +
            `                    <rect x="100" y="50" width="100" height="100" fill="red" />\n` +
            `                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">ABC</text>\n` +
            `                </svg>`;
        expect(square.render()).toEqual(expectedSvg);
    });
    // Test for rendering a triangle
    test('Triangle render test', () => {
        const triangle = new Triangle();
        triangle.setColor("green");
        triangle.setText('ABC', 'black');
        const actualSvg = triangle.render();// Render the SVG for the triangle
        // Assert that the rendered SVG contains the expected polygon element
        expect(actualSvg).toContain('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
        // Assert that the rendered SVG contains the expected text element
        expect(actualSvg).toContain('<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="black">ABC</text>');
    });
});
