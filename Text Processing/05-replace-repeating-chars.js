function replaceRepeatingChars(str) {
    let noRepeat = "";
    let prevChar = "";
    for (let char of str) {
        if (char !== prevChar) {
            noRepeat += char;
            prevChar = char;
        }
    }
    console.log(noRepeat);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')