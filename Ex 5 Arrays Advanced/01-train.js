function train(array) {

    let wagons = array[0].split(" ").map(Number);
    let capacity = Number(array[1]);

    for (let i = 2; i < array.length; i++) {
        let command = array[i];
        let marks = command.split(" ");

        if (marks[0] == "Add") {
            let passangers = Number(marks[1]);
            wagons.push(passangers);
        } else {
            let passengers = Number(marks[0]);

            for (let index = 0; index < wagons.length; index++) {
                if (wagons[index] + passengers <= capacity) {
                    wagons[index] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])