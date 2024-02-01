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