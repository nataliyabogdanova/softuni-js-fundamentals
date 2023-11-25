function theHuntingGames(input) {
    let days = Number(input.shift());
    let players = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterPerPerson = Number(input.shift());
    let foodPerPerson = Number(input.shift());

    let totalWater = days * players * waterPerPerson;
    let totalFood = days * players * foodPerPerson;

    for (let day = 1; day <= days; day++) {
        let energyLoss = Number(input.shift());

        groupEnergy -= energyLoss;

        if (groupEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }

        if (day % 2 === 0) {
            groupEnergy *= 1.05;
            totalWater *= 0.7;
        }

        if (day % 3 === 0) {
            let foodPerDay = totalFood / players;
            totalFood -= foodPerDay;
            groupEnergy *= 1.1;
        }
    }

    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
}
theHuntingGames(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"]);