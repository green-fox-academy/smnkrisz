// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter


function sum(a: number) {
    let numbers = 0;
    for (let i = 0; i <= a; i++) {
        numbers += i;
    }
    return numbers
}

console.log(sum(666));