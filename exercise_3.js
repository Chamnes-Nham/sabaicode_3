const calculateAverage = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    return sum / numbers.length;
};

const numbers = [10, 20, 30, 40, 50, 2, 100, 30];
console.log(calculateAverage(numbers)); 
