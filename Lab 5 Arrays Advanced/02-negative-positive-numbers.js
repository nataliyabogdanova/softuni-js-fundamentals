function negativePositiveNums(array) {

    let result = [];

    for (let numAsString of array) {
        let num = Number(numAsString);

        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    for (let num of result) {
        console.log(num);
    }
}
negativePositiveNums(['7', '-2', '8', '9'])