const { Circle } = require("./shapes");

const generateSVG = require('./shapes');

describe ('Circle', () => {
    test ('renders correctly', () => {
        const shape = new Circle();
        var color = ('blue')
        return (color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="${this.color}"/>`);
    });
});