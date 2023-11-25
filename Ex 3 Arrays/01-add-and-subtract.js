function addAndSubtract(array) {

    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < array.length; i++) {
        let curNum = array[i];
        originalSum += curNum;

        if (curNum % 2 == 0) {
            curNum += i;
        } else {
            curNum -= i;
        }
        modifiedSum += curNum;
        array[i] = curNum;
    }
    console.log(array);
    console.log(originalSum);
    console.log(modifiedSum);
}
addAndSubtract([5, 15, 23, 56, 35])