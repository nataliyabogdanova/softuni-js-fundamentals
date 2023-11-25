function guineaPig(input) {
    input = input.map(Number);
    let food = input[0] * 1000;
    let hay = input[1] * 1000;
    let cover = input[2] * 1000;
    let weight = input[3] * 1000;
    let coverConsumtion = weight / 3;


    for (let i = 1; i <= 30; i++) {
        food -= 300;

        if (i % 2 == 0) {
            hay -= 0.05 * food;
        }

        if (i % 3 == 0) {
            cover -= coverConsumtion;
        }
    }

    let foodInKg = food / 1000;
    let hayInKg = hay / 1000;
    let coverInKg = cover / 1000;

    if (foodInKg > 0 && hayInKg > 0 && coverInKg > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodInKg.toFixed(2)}, Hay: ${hayInKg.toFixed(2)}, Cover: ${coverInKg.toFixed(2)}.`);
    } else {
        console.log("Merry must go to the pet store!");
    }

}
guineaPig(["10",

"5",

"5.2",

"1"])