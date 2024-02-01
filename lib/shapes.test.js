const { Circle, Square, Triangle } = require('./shapes');

describe('Shape rendering', () => {
    test('Circle render test', () => {
        const circle = new Circle();
        circle.setColor("blue");
        expect(circle.render()).toEqual('<circle cx="50" cy="50" r="50" fill="blue" />');
    });

    test('Square render test', () => {
        const square = new Square();
        square.setColor("red");
        expect(square.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="red" />');
    });

    test('Triangle render test', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});