function addAndSubstract(num1, num2, num3) {

    let sum = (a, b) => a + b;
    let substract = (a, b) => a - b;

    let result1 = sum(num1, num2);
    let result2 = substract(result1, num3);

    console.log(result2);
}
addAndSubstract(23, 6, 10)