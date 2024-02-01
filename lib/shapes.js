class Shape {
    constructor() {
        this.color = 'black';
        this.textColor = 'black';
        this.text = '';
    }

    setColor(color) {
        this.color = color;
    }

    setText(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    renderText() {
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

    render() {
        return'';
    }
}

class Triangle extends Shape {
    constructor() {
        super();
        this.points = "150, 18 244, 182 56, 182";
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="${this.points}" fill="${this.color}" />
                    ${this.renderText()}
                </svg>`;
    }
}

