// Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
let ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

// Create a new list ('List B') with the values of List A
let ListB: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

// Print out whether List A contains Durian or not
if (ListA.includes('Durian')){
    console.log('ListA contains Durian')
} else {
    console.log('ListA doesn\'t contain Durian')
}

// Remove Durian from List B
ListB.slice(3,1);

// Add Kiwifruit to List A after the 4th element
ListA.push('Kiwifruit');

// Compare the size of List A and List B
console.log(ListA.length === ListB.length);

// Get the index of Avocado from List A
console.log(ListA.indexOf('Avocado'));

// Get the index of Durian from List B
console.log(ListB.indexOf('Durian'));

// Add Passion Fruit and Pomelo to List B in a single statement
ListB.push('Passion Fruit', 'Pomelo');

// Print out the 3rd element from List A
console.log(ListA[2]);