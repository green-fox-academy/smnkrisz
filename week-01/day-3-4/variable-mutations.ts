import { features } from "process";

let a: number = 3;
// make it bigger by 10
a = a + 10;
console.log(a);

console.log("----")

let b: number = 100;
// make it smaller by 7
b = 100 - 7;
console.log(b);

console.log("----")

let c: number = 44;
// double c's value
c *= 2; 
console.log(c);

console.log("----")

let d: number = 125;
// divide d's value by 5
d /= 5;
console.log(d);

console.log("----")

let e: number = 8;
// what's the cube of e's value?
e = e * e * e;
console.log(e);

console.log("----")

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
if (f1 > f2) {
    console.log(true);
}   else {
    console.log(false);
}

console.log("----")

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
if ((g1 * g1) > g2) {
    console.log(true);
}  else {
    console.log(false);
}

console.log("----")

let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
if (h % 11 == 0) {
    console.log(true);
}  else {
    console.log(false);
}

console.log("----")

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
if (i1 > i2 * i2 && i1 < i2 * i2 * i2 ) {
    console.log(true);
}  else {
    console.log(false);
}

console.log("----")

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
if (j / 3 || j / 5) {
    console.log(true);
}  else {
    console.log(false);
}

