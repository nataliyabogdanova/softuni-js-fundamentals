function minerTask(array) {
    let resources = {};
    for (let i = 0; i < array.length; i += 2) {
        let resource = array[i];
        let quantity = Number(array[i + 1]);
        if (resource in resources) {
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }
    let entries = Object.entries(resources);
    for (let [name, quantity] of entries) {
        console.log(`${name} -> ${quantity}`);
    }
}
minerTask([

    'Gold',

    '155',

    'Silver',

    '10',

    'Copper',

    '17'

])