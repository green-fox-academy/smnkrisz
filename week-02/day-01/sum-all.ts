// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements of `numbers` to the console

let numbers = [3, 4, 5, 6, 7];
let numbersSum = 0;

numbers.map(function(i) {
    return numbersSum += i;
})

console.log(numbersSum);