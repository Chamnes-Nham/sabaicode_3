const calculateBMI = function(weight, height) {
    return weight / (height * height);
};

const weight = 55; 
const height = 1.70;
console.log("Your BIM is: "+(calculateBMI(weight, height))); 
