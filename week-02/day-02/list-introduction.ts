// Create an empty list which will contain names (strings)
let listOfNames: string [] = []

// Print out the number of elements in the list
console.log(listOfNames.length);

// Add William to the list
listOfNames.push('William');

// Print out whether the list is empty or not
if (listOfNames.length === 0){
    console.log('List is not empty');
}   else {
    console.log('List is empty');
}

// Add John to the list
listOfNames.push('John');

// Add Amanda to the list
listOfNames.push('Amanda');

// Print out the number of elements in the list
console.log(listOfNames.length);

// Print out the 3rd element
console.log(listOfNames[2]);

// Iterate through the list and print out each name
// William
// John
// Amanda
for (let i = 0; i < listOfNames.length; i++){
    console.log(listOfNames[i]);
}

// Iterate through the list and print
// 1. William
// 2. John
// 3. Amanda
for (let j = 0; j < listOfNames.length; j++){
    console.log((j + 1) + '. '+ listOfNames [j]);
}

// Remove the 2nd element
listOfNames.splice(1,1);

// Iterate through the list in a reversed order and print out each name
// Amanda
// William
for (let i = listOfNames.length - 1; i >= 0; i--){
    console.log(listOfNames [i]);
}

// Remove all elements    
listOfNames.slice(0,2);