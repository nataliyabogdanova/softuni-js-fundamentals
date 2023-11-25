function commonElements(array, array2) {

    for (let element of array) {
        if (array2.includes(element)) {
            console.log(element);
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])