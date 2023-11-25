function towns(array) {

    for (let el of array) {
        let [name, latitude, longitude] = el.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObject = {
            town: name, latitude: latitude, longitude: longitude
        };
        console.log(townObject);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])