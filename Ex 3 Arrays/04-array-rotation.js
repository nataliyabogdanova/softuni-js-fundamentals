function arrayRotation(array, numOfRotations) {

    for (let rotations = 1; rotations <= numOfRotations; rotations++) {

        let firstElement = array.shift();
        array.push(firstElement);
    }
    console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)