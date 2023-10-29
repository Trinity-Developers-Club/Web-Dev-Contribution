type area = "square" | "rectangle";

function calculateArea(type: area, ...args: number[]): number {
    switch (type) {
        case "square":
            const [side] = args;
            return side ** 2;
        case "rectangle":
            const [length, width] = args;
            return length * width;
        default:
            console.error("Unknown shape type");
            return NaN;
    }
}

const squareArea: number = calculateArea("square", 7);
console.log("Square Area:", squareArea);

const rectangleArea: number = calculateArea("rectangle", 8, 7);
console.log("Rectangle Area:", rectangleArea);
