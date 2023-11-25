function revealWords(wordsStr, text) {

    let words = wordsStr.split(", ");
    for (let word of words) {
        let length = word.length;
        let template = "*".repeat(length);
        text = text.replace(template, word);
 
    }
    console.log(text);
}
revealWords('great', 'softuni is ***** place for learning new programming languages')