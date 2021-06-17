export {}

let welcome = 'Hello';
console.log('Hello');
console.log(welcome);

{
    var goodbye = 'Bye';
    console.log(goodbye);
}

console.log(goodbye);

var x = 5;
var numberOfApples = x;
var numberOfPears = numberOfApples;
const numberOfLemons = 16;


console.log('number of apples: ', numberOfApples); //5
console.log('number of pears: ', numberOfPears); //5
console.log('number of lemons: ', numberOfLemons); //5

x = 10;
numberOfPears = numberOfLemons;

console.log('----');
console.log('number of apples: ', numberOfApples); //5
console.log('number of pears: ', numberOfPears); //16
