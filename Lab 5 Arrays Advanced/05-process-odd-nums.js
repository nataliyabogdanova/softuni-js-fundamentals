function processOdNums(array) {

    let oddIndex = array.filter((x, i) => i % 2 != 0);

    let doubled = oddIndex.map(x => x * 2);

    let reversed = doubled.reverse();

    console.log(reversed.join(" "));
}
processOdNums([10, 15, 20, 25])