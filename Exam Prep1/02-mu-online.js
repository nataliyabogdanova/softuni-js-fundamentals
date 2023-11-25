function muOnline(input) {

    let rooms = input.split("|");
    let hp = 100;
    let moneyBox = 0;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(" ");
        let command = room[0];
        let num = Number(room[1]);


        if (command == "potion") {
            if (num + hp > 100) {
                num = 100 - hp;
            }
            hp += num;
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${hp} hp.`);
        } else if (command == "chest") {
            moneyBox += num;
            console.log(`You found ${num} bitcoins.`);

        } else {
            hp -= num;
            if (hp <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            } else {
                console.log(`You slayed ${command}.`);
            }

        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${moneyBox}`);
    console.log(`Health: ${hp}`);

}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")