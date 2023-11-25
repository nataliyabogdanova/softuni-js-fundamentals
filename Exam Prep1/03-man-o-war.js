function manWar(input) {

    let pirateShip = input.shift().split(">").map(Number);
    let warship = input.shift().split(">").map(Number);
    let maxHp = Number(input.shift());
    let sectionsNeededRepair = 0.2 * maxHp;

    for (let cur of input) {
        let tokens = cur.split(" ");
        let command = tokens.shift();

        if (cur == "Retire") {
            break;
        } else if (command == "Fire") {
            let index = Number(tokens[0]);
            let damage = Number(tokens[1]);
            if (index < 0 || index >= warship.length) {
                continue;
            }
            warship[index] -= damage;
            if (warship[index] <= 0) {
                console.log("You won! The enemy ship has sunken.");
                return;
            }
        } else if (command == "Defend") {
            let start = Number(tokens[0]);
            let end = Number(tokens[1]);
            let damage = Number(tokens[2]);
            if (start < 0 || start >= pirateShip.length || end < 0 || end >= pirateShip.length) {
                continue;
            }
            for (let i = start; i <= end; i++) {
                pirateShip[i] -= damage;
                if (pirateShip[i] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    return;
                }
            }
        } else if (command == "Repair") {
            let index = Number(tokens[0]);
            let hp = Number(tokens[1]);
            if (index < 0 || index >= pirateShip.length) {
                continue;
            }
            pirateShip[index] += hp;
            if (pirateShip[index] > maxHp) {
                pirateShip[index] = maxHp;
            }
        } else if (command == "Status") {
            let damagedSection = pirateShip.filter(section => section < sectionsNeededRepair);
            console.log(`${damagedSection.length} sections need repair.`)
        }
    }
    let pirateShipSum = 0;
    let warshipSum = 0;

    for (let section of pirateShip) {
        pirateShipSum += section;

    }
    for (let section of warship) {
        warshipSum += section;
    }
    console.log(`Pirate ship status: ${pirateShipSum} 
    Warship status: ${warshipSum}`);
}
manWar((["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]))