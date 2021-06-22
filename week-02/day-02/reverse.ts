// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(toBeReversed: string){
    let reverse = '';
    for ( let i = toBeReversed.length - 1; i >=0; i--){
        reverse += toBeReversed[i]
    }
    return reverse;
}

console.log(reverse(toBeReversed));

export = reverse;