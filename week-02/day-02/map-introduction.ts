// We are going to play with maps. Feel free to use the built-in methods where possible.

// Create an empty map where the keys are integers and the values are characters
let emptyMap: { [key: number]: string } = {};

// Print out whether the map is empty or not
if (Object.keys(emptyMap).length === 0){
    console.log('map is full');
}   else  {
    console.log('map is empty');
}

// Add the following key-value pairs to the map

// Key	Value
// 97	a
// 98	b
// 99	c
// 65	A
// 66	B
// 67	C

emptyMap[97] = 'a';
emptyMap[98] = 'b';
emptyMap[99] = 'c';
emptyMap[65] = 'A';
emptyMap[66] = 'B';
emptyMap[67] = 'C';

// Print all the keys
console.log(Object.keys(emptyMap));

// Print all the values
console.log(Object.values(emptyMap));

// Add value D with the key 68
emptyMap[68] = 'D';

// Print how many key-value pairs are in the map
console.log(Object.keys(emptyMap).length);

// Print the value that is associated with key 99
console.log(Object.values(emptyMap[99]));

// Remove the key-value pair where with key 97
delete emptyMap[97];

// Print whether there is an associated value with key 100 or not
console.log(Object.keys(emptyMap) !== undefined);

// Remove all the key-value pairs
for (let i: number = 0; i <= Object.values(emptyMap).length; i++){
    delete emptyMap[i];
}