class Shape {
    constructor() {
        this.color = 'black';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return '';
    }  
}

class Circle extends Shape {
    constructor() {
        super();
        this.radius = 50;
        this.cx = 50;
        this.cy = 50;
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor() {
        super();
        this.sideLength = 100;
        this.x = 50;
        this.y = 50;
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.sideLength}" height="${this.sideLength}" fill="$this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color, sideLength) {
        super(color);
        this.sideLength = sideLength;
    }

    draw() {
        const path = `MO,${this.sideLength} L${this.sideLength / 2},O L${this.sideLength},${this.sideLength} Z`;
        return SVG.path(path).fill(this.color);
    }
}

module.exports = { Circle, Square, Triangle };