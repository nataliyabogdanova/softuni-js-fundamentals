function orders(product, quantity){
    
let price = 0;
switch(product){
    case "coffee": price = quantity * 1.50;
    break;
    case "water": price = quantity * 1;
    break;
    case "coke": price = quantity * 1.40;
    break;
    case "snacks": price = quantity * 2;
    break;
}
console.log(price.toFixed(2));
}
orders("water", 5)