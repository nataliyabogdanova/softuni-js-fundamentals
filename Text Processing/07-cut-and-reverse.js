function cutAndReverse(str) {

    let midIndex = str.length / 2;
    let leftHalf = str.slice(0, midIndex).split("").reverse().join("");
    let rightHalf = str.slice(midIndex).split("").reverse().join("");

    console.log(leftHalf);
    console.log(rightHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')