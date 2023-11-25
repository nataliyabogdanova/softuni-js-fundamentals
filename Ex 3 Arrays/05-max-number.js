function maxNumber(array) {

    let topNumsArray = [];

    for (let i = 0; i < array.length; i++) {
        let curNum = array[i];
        let isNumTop = true;

        for (let j = i + 1; j < array.length; j++) {
            let rightNum = array[j];

            if (curNum <= rightNum) {
                isNumTop = false;
                break;
            }
        }
        if (isNumTop) {
            topNumsArray.push(curNum);
        }
    }
    console.log(topNumsArray.join(" "));
}
maxNumber([1, 4, 3, 2])