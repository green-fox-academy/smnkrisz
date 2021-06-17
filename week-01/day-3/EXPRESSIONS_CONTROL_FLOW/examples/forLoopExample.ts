

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('-----');

for (let i = 10; i > 0; i--) {
    console.log(i);
}


// My plant lives for 5 years
// every year it gives me 5 peppers

let numberOfPeppers = 0;

for (let i = 0; i < 5; i++) {
    numberOfPeppers += 5;
    // numberOfPeppers = numberOfPeppers + 5;
}

console.log('peppers in total: ', numberOfPeppers);

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log('i equals: ', i, ' j equals: ', j);
    }

    console.log('in this round i equals: ', i);
}