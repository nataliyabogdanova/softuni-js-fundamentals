function pascalCaseSplitter(str) {
    let words = [];
    let curWord = "";
    for (let char of str) {
        if (char === char.toUpperCase() && curWord !== "") {
            words.push(curWord);
            curWord = char;
        } else {
            curWord += char;

        }
    }
    words.push(curWord);
    let result = words.join(", ");
    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')