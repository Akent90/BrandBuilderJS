const { Circle, Square, Triangle } = require('./shapes');

describe('Shape rendering', () => {
    test('Circle render test', () => {
        const circle = new Circle();
        circle.setColor("blue");
        circle.setText('ABC', 'black');
        expect(circle.render()).toEqual(expect.stringContaining('<circle cx="100" cy="100" r="50" fill="blue" />'));
        expect(circle.render()).toEqual(expect.stringContaining('<text x="50%" y="50%"'));
    });

    test('Square render test', () => {
        const square = new Square();
        square.setColor("red");
        square.setText('ABC', 'black');
        expect(square.render()).toEqual(expect.stringContaining('<rect x="50" y="50" width="100" height="100" fill="red" />'));
        expect(square.render()).toEqual(expect.stringContaining('<text x="50%" y="50%"'));
    });

    test('Triangle render test', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        triangle.setText('ABC', 'black');
        expect(triangle.render()).toEqual(expect.stringContaining('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'));
        expect(triangle.render()).toEqual(expect.stringContaining('<text x="50%" y="50%"'));
    });
});