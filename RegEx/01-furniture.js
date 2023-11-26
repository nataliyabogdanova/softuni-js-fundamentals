function furniture(array) {

    let furnitureItems = [];
    let finalPrice = 0;
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9]+\.?[0-9]+)!(?<quantity>[0-9]+)/;
    let command = array.shift();

    while (command != "Purchase") {
        let match = command.match(pattern);
        if (match) {
            let { name, price, quantity } = match.groups;
            let totalPrice = Number(price) * Number(quantity);
            furnitureItems.push(name);
            finalPrice += totalPrice;
        }
        command = array.shift();
    }
    console.log('Bought furniture:');
    if (furnitureItems.length > 0) {
        console.log(furnitureItems.join('\n'));
    }
    console.log(`Total money spend: ${finalPrice.toFixed(2)}`);
}
furniture
(['>>Laptop<<312.2323!3',

    '>>TV<<300.21314!5',

    '>Invalid<<!5',

    '>>TV<<300.21314!20',

    '>>Invalid<!5',

    '>>TV<<30.21314!5',

    '>>Invalid<<!!5',

    'Purchase']);