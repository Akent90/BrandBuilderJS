// Base class for all shapes 
class Shape {
    // Default color of the shape and text
    constructor() {
        this.color = 'black';
        this.textColor = 'black';
        this.text = '';
    }
    // Method to set the color of the shape
    setColor(color) {
        this.color = color;
    }
    // Mehtod to set the text and its color
    setText(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
    // Method to generate SVG text element
    renderText() {
        // Returns an SVG text element with text centered inside the shape
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
    // Abstract render method to be overridden by subclasses
    render() {
        // Returns an empty string - to be implemented in subclasses
        return'';
    }
}
// Triangle class extending the base Shape class
class Triangle extends Shape {
    constructor() {
        super();
        // Coordinates for the points of the triangle
        this.points = "150, 18 244, 182 56, 182";
    }
    // Overridden method to generate SVG text element specifically for Triangle
    renderText() {
        // Triangle-specific text positioning, slightly lower than the center
        return `<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
    // Overridden render method to generate SVG for a triangle
    render() {
        // Returns an SVG string representing a triangle
        return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="${this.points}" fill="${this.color}" />
                    ${this.renderText()}
                </svg>`;
    }
}
// Circle class extending the base Shape class
class Circle extends Shape {
    constructor() {
        super(); // Calls the constructor of the base Shape class
        // Radius and center coordinates for the circle
        this.radius = 50;
        this.cx = 100;
        this.cy = 100;
    }
    // Overridden render method to generate SVG for a circle
    render() {
        return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
                    ${this.renderText()}
                    </svg>`;
    }
}

// Square class extending the base Shape class
class Square extends Shape {
    constructor() {
        super(); // Calls the constructor of the base Shape class
        // Side length and top-left corner coordinates for the square
        this.sideLength = 100;
        this.x = 50;
        this.y = 50;
    }
    // Overridden render method to generate SVG for a square
    render() {
        return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="100" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
                    ${this.renderText()}
                </svg>`;
    }
}
// Exporting the classes so they can be imported in other files
module.exports = { Shape, Triangle, Circle, Square };