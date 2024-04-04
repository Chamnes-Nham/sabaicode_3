function isStrongPassword(password) {
    return password.length >= 8;
}

function checkPasswordStrength() {
    const prompt = require('prompt-sync')();
    const password = prompt("Please enter your password:");
    
    if (isStrongPassword(password)) {
        console.log("Your password is strong!");
    } else {
        console.log("Your password is not strong. Please make sure it has at least 8 characters.");
    }
}

checkPasswordStrength();

