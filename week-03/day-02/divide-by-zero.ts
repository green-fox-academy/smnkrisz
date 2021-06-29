// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

let a: number = 0;

let divided = (a: number) => {
    if (a === 0){
        console.log('fail');
    } else {
        console.log(10 / a);
    }
}
divided(a);