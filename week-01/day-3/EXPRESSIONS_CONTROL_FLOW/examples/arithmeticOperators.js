// arithmetic (+, -, /, *, %, **, ++, --)
var numberOfApples = 3;
var numberOfPears = numberOfApples--;
console.log('apples: ', numberOfApples); //2
var numberOfLemons = --numberOfApples;
console.log('pears: ', numberOfPears); //3
console.log('apples: ', numberOfApples); //1
console.log('lemons: ', numberOfLemons); //1 
//% is called modulo
var numberOfBananas = 8 % 4;
console.log(numberOfBananas);
