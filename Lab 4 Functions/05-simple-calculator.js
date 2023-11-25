function simpleCalculator(a, b, operation) {
    let result;
    switch (operation) {
        case "multiply":
            result = a * b;
            break;
        case "divide":
            result = a / b;
            break;
        case "add":
            result = a + b;
            break;
        case "subtract":
            result = a - b;
            break;
    }
    console.log(result);

}
simpleCalculator(5, 10, "multiply")