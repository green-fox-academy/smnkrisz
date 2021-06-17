// vampires lie
// humans are honest
// crazy vampires honest
// crazy humeans lie
// hungry creaturs lie (6 or above 6 means hungry from 10) 

export {}

let isCharlieVampire = false;
let isCharlieCrazy = true;
let hungryMeter = 4;

// console.log('Charlie is honest.');
// console.log('Charlie is lying');

if (isCharlieVampire) {
    // go in this loop if charlie if carzy AND not hungry
    if (isCharlieCrazy && hungryMeter < 6) {
        console.log('line 16');
        console.log('Charlie is honest.');
    } else {
        console.log('line 19');
        console.log('Charlie is lying');
    }
    
} else {

    // go in this loop if charlie is crazy OR he is hungry
    if (isCharlieCrazy || hungryMeter >= 6) {
        console.log('line 25');
        console.log('Charlie is lying');
    } else {
        console.log('line 28');
        console.log('Charlie is honest.');
    }
}


// isSomething === true
// isSomething

// isSomething !== true     isSomething === false
// !isSomething