const { Circle, Square, Triangle } = require('./shapes');

describe('Shape rendering', () => {
    test('Circle render test', () => {
        const circle = new Circle();
        circle.setColor("blue");
        circle.setText('ABC', 'black');
        const expectedSvg = `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">` +
                            `<circle cx="150" cy="100" r="50" fill="blue" />` +
                            `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">ABC</text>` +
                            `</svg>`;
        expect(circle.render()).toEqual(expectedSvg);
    });

    test('Square render test', () => {
        const square = new Square();
        square.setColor("red");
        square.setText('ABC', 'black');
        const expectedSvg = `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">` +
                            `<rect x="100" y="50" width="100" height="100" fill="red" />` +
                            `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">ABC</text>` +
                            `</svg>`;
        expect(square.render()).toEqual(expectedSvg);
    });

    test('Triangle render test', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        triangle.setText('ABC', 'black');
        const expectedSvg = `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">` +
                            `<polygon points="75,10 225,10 150,100" fill="blue" />` +
                            `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">ABC</text>` +
                            `</svg>`;
        expect(triangle.render()).toEqual(expectedSvg);
    });
    
});