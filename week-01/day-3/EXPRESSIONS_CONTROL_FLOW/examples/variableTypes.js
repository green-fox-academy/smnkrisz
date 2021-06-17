

let numberOfApples = 5;
let numberOfPears = '5';

//console.log(numberOfApples == numberOfPears); //true
//console.log(numberOfApples === numberOfPears); //false

// console.log(null == undefined);
// console.log(null === undefined);


// falsey: null, undefined, 0, -0, '', false
// truthy: 'hello', 1, '1', true


var a = 3 == 5;
var b = null;
var c = undefined;
var d = 0;
var e = -0;
var f = '';
var g = 'szia';
var h = '0';
var i = true;
var j = isNaN('0hg');
var k = isNaN(1);

function truthyOrFalsy(a) {
    return a ? "truthy" : "falsy";
}

// console.log(truthyOrFalsy(a));
// console.log(truthyOrFalsy(b));
// console.log(truthyOrFalsy(c));
// console.log(truthyOrFalsy(d));
// console.log(truthyOrFalsy(e));
// console.log(truthyOrFalsy(f));
// console.log(truthyOrFalsy(g));
// console.log(truthyOrFalsy(h));
// console.log(truthyOrFalsy(i));
console.log(truthyOrFalsy(j)); 
console.log(truthyOrFalsy(k));