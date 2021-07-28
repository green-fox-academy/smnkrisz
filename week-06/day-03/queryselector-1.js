console.log('1:');
// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.
const king = document.getElementById("b325");
console.log(king);

console.log('2:');
// 2. store 'The Businessman' and 'The Lamplighter' in the 'businessLamp' variable.
// console.log each of them.
const businessLamp = document.getElementsByClassName("big");
for (let i = 0; i < businessLamp.length; i++) {
    console.log(businessLamp[i]);
};

console.log('3: alert them one by one');
// 3. store 'The King' and 'The Conceited Man' in the 'conceitedKing' variable.
// alert them one by one.
const conceitedKing = document.querySelectorAll(".container div");
for (let i = 0; i < conceitedKing.length; i++) {
    alert(conceitedKing[i].innerText);
};

console.log('4:');
// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter' in the 'noBusiness' variable.
// console.log each of them.
const noBusiness = document.getElementsByTagName("div"); // or document.querySelectorAll("div.asteroid")
for (let i = 0; i < noBusiness.length; i++) {
    console.log(noBusiness[i]);
};