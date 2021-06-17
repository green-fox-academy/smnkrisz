let massInKg: number = 81.2;
let heightInM: number = 1.78;

// Print the Body mass index (BMI) based on these values

let bmi: number = massInKg / (heightInM ** 2);
console.log(bmi);

console.log('---');

function bmiCalculator(param1: number, param2: number) {
    let bmiCalculated = param1 / (param2 ** 2);
    return bmiCalculated
}

console.log((bmiCalculator(81.2, 1.78)));