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
    constructor() {
        super();
        this.points = "150, 18 244, 182 56, 182";
    }

    render() {
        return `<polygon point="${this.points}" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square, Triangle };