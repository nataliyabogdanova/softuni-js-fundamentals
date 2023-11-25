function phoneShop(array) {
    let phones = array[0].split(', ');

    for (let i = 1; i < array.length; i++) {
        let [command, phone] = array[i].split(' - ');

        switch (command) {
            case 'Add':
                if (!phones.includes(phone)) {
                    phones.push(phone);
                }
                break;
            case 'Remove':
                if (phones.includes(phone)) {
                    phones = phones.filter(p => p !== phone);
                }
                break;
            case 'Bonus phone':
                let [oldPhone, newPhone] = phone.split(': ');
                let index = phones.indexOf(oldPhone);

                if (index !== -1) {
                    phones.splice(index + 1, 0, newPhone);
                }
                break;
            case 'Last':
                if (phones.includes(phone)) {
                    phones = phones.filter(p => p !== phone);
                    phones.push(phone);
                }
                break;
        }

        if (command === 'End') {
            console.log(phones.join(', '));
        }
    }
} 
phoneShop(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"]);