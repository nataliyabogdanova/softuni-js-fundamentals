function softuniBar(array) {
    let income = 0;
    let command = array.shift();

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.0-9]*(?<price>[0-9]+\.?[0-9]+)\$/;

    while (command != "end of shift") {
        let match = command.match(pattern);

        if (match) {
            let { name, product, count, price } = match.groups;
            let totalPrice = Number(count) * Number(price);
            income += totalPrice;

            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }

        command = array.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}
softuniBar(['%George%<Croissant>|2|10.3$',

    '%Peter%<Gum>|1|1.3$',

    '%Maria%<Cola>|1|2.4$',

    'end of shift'])