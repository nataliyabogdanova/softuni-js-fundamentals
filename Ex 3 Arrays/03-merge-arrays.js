function mergeArrays(array, array2) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {

        let element = array[i];
        let element2 = array2[i];


        if (i % 2 == 0) {
            newArray.push(Number(element) + Number(element2));
        } else {
            newArray.push(element + element2);

        }
    }
    console.log(newArray.join(" - "));

} 
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])