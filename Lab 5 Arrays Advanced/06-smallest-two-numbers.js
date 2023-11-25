function smallestTwoNums(array){

array.sort((a, b) => a - b);

console.log(array.slice(0,2).join(" "));

}
smallestTwoNums([30, 15, 50, 5])