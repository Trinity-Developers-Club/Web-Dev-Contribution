function calculate(a: number, b: number, type: string): number {
    if (type === "sum") {
        return a + b;
    }
    if (type === "sub") {
        return a - b;
    }
    if (type === "mul") {
        return a * b;
    }
    if (type === "div") {
        return a / b;
    }
    console.error("Unknown operation type");
    return NaN;
}

const ans = calculate(3, 4, "sub"); 
console.log(ans);
