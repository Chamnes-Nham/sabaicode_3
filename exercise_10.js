function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
const num = 5;
console.log("Factorial of", num, "is", factorial(num)); 
