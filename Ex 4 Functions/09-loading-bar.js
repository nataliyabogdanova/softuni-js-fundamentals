function loadingBar(num) {

    let goal = 100;
    let result = `${num}% [`;


    for (let i = 0; i < num; i += 10) {
        result += "%";
    }

    let repeated = ".".repeat((goal - num) / 10);
    result += `${repeated}]`;

    if (num !== goal) {
        console.log(result);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
    }
}
loadingBar(30)