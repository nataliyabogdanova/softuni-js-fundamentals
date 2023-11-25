function sumFirstLast(array){

let firstNum = Number(array.shift());
let secondNum = Number(array.pop());

console.log(firstNum + secondNum);

}
sumFirstLast(['20', '30', '40'])