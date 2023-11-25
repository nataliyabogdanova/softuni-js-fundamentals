function palindromeIntegers(array) {
    for (let curNum of array) {
        let isPalindrome = checkIfPalindrome(curNum);
        console.log(isPalindrome);
    }

    function checkIfPalindrome(num) {
        let numAsString = String(num);
        let reversedNumStr = "";

        for (let i = numAsString.length - 1; i >= 0; i--) {
            let curChar = numAsString[i];
            reversedNumStr += curChar;
        }
        let isPalindrome = numAsString == reversedNumStr;
        return isPalindrome;
    }
}
palindromeIntegers([123, 323, 421, 121])