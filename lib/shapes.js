const SVG = require('svg.js');

class Shape {
    constructor(color) {
        this.color = color;
    }

    draw() {
        // Base implementation or abstract method
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    draw() {
        return SVG.Circle(this.radius * 2).fill(this.color);
    }
}