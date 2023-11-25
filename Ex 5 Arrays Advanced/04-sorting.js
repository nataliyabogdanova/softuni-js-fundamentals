function sorting(array) {

    let sortedArray = array.sort((a, b) => a - b);
    let finalArray = [];

    while (sortedArray.length > 0) {
        let maxNum = sortedArray.pop();
        let minNum = sortedArray.shift();

        finalArray.push(maxNum);
        finalArray.push(minNum);
    }
    console.log(finalArray.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])