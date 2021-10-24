/*
Create a function named isSymmetric that takes an n×n integer matrix (two dimensional array/list) as a parameter and
returns true if the matrix is symmetric or false if it is not.

Symmetric means it has identical values along its diagonal axis from top-left to bottom-right, as in the first example.

Example 1: 

[
  [1, 0, 1],
  [0, 2, 2], 
  [1, 2, 5]
]

Output:

true

Example 2:

[
  [7, 7, 7],
  [6, 5, 7],             
  [1, 2, 1]
]

Output:

false

*/

const array1 = [
	[1, 0, 1],
	[0, 2, 2],
	[1, 2, 5],
];

const array2 = [
	[7, 7, 7],
	[6, 5, 7],
	[1, 2, 1],
];

function Symmetric(array: number[][]) {
	for (let rowI = 0; rowI < array.length; rowI++) {
		for (let columnI = 0; columnI < array[rowI].length; columnI++) {
			if (array[rowI][columnI] !== array[columnI][rowI]) {
				return false;
			}
		}
	}
	return true;
}

console.log("array1: ", Symmetric(array1));
console.log("array2: ", Symmetric(array2));
