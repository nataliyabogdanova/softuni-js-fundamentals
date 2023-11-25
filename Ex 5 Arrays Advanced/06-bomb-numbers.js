function bombNumbers(nums, bomb) {
    let bombNum = bomb[0];
    let power = bomb[1];

    while (nums.includes(bombNum)) {
        let index = nums.indexOf(bombNum);
        nums.splice(Math.max(0, index - power), 2 * power + 1)
    }

    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])