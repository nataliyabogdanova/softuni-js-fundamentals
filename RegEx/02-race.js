function race(array) {

    let names = array.shift().split(", ");
    let command = array.shift();
    let result = {};

    let wordPattern = /[A-Za-z]/g;
    let numPattern = /[0-9]/g;

    names.forEach(name => result[name] = 0);

    while (command != "end of race") {
        let wordMatch = command.match(wordPattern);
        let name = wordMatch.join("");
        let numMatch = command.match(numPattern);
        let distance = numMatch.map(Number).reduce((acc, val) => acc + val);

        if (name in result) {
            result[name] += distance;
        }
        command = array.shift();
    }
    let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedResult[0][0]}`);
    console.log(`2nd place: ${sortedResult[1][0]}`);
    console.log(`3rd place: ${sortedResult[2][0]}`);
}
race(['George, Peter, Bill, Tom',

    'G4e@55or%6g6!68e!!@ ',

    'R1@!3a$y4456@',

    'B5@i@#123ll',

    'G@e54o$r6ge#',

    '7P%et^#e5346r',

    'T$o553m&6',

    'end of race'])