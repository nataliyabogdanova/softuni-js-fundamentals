function wordTracker(array) {

    let searchedWords = array.shift().split(" ");
    let object = {};

    for (let word of searchedWords) {
        object[word] = 0;
    }
    for (let word of array) {
        if (word in object) {
            object[word]++;
        }
    }
    let entries = Object.entries(object).sort((a,b) => b[1]- a[1]);
    for (let [word, repeats] of entries) {
        console.log(`${word} - ${repeats}`);
    }
}
wordTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])