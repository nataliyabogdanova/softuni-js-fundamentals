function passValidator(pass) {

    let isValidLength = validLength(pass);
    let isOnlyLettersAndDigits = onlyLettersAndDigits(pass);
    let isAtLeastTwoDigits = atLeastTwoDigits(pass);

    if (isValidLength && isOnlyLettersAndDigits && isAtLeastTwoDigits) {
        console.log("Password is valid");
    }

    function validLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }
    function onlyLettersAndDigits(pass) {
        for (let curChar of pass) {
            let code = curChar.charCodeAt(0);

            if (
                !((code >= 48 && code <= 57) ||
                    (code >= 65 && code <= 90) ||
                    (code >= 97 && code <= 122))
            ) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    }
    function atLeastTwoDigits(pass) {
        let digitsCounter = 0;
        for (let curChar of pass) {
            let code = curChar.charCodeAt(0);
            if (code >= 48 && code <= 57) {
                digitsCounter++;
            }
        }
        if (digitsCounter < 2) {
            console.log("Password must have at least 2 digits");
            return false;
        } else {
            return true;
        }
    }
}
passValidator('logIn')