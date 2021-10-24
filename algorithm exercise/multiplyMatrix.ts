/*
Write a method called multiplyMatrix() that takes a matrix of non-negative integers (any matrix is allowed, including square matrices) as a parameter.

The function should:

multiply each odd (1, 3, 5, 7, 9, ...) number by 2 in each odd indexed row
multiply each even (2, 4, 6, 8, 10, ...) number by 2 in each even indexed row
use the same indexing which we use in most programming language (starting with 0) and remember that 0 is also an even number.
See the example for better understanding and ask questions if it is still unclear.

Example 1:                

[                        
  [1, 3, 6, 2],
  [7, 5, 6, 1],
  [3, 3, 1, 5],
  [9, 0, 5, 3]
]

Output:

[
  [1,  3,  12, 4],
  [14, 10, 6,  2],
  [3,  3,  1,  5],
  [18, 0,  10, 6]
]

Example 2:

[
  [2, 3],
  [5, 0, 4, 0],
  [6],
  [5, 2]
]

Output:

[
  [4,  3],
  [10, 0, 4, 0],
  [12],
  [10, 2]
]

*/

const array1 = [
	[1, 3, 6, 2],
	[7, 5, 6, 1],
	[3, 3, 1, 5],
	[9, 0, 5, 3],
];

const array2 = [[2, 3], [5, 0, 4, 0], [6], [5, 2]];

function multiplyMatrix(matrix: number[][]): number[][] {
	for (let rowI = 0; rowI < matrix.length; rowI++) {
		for (let collumI = 0; collumI < matrix[rowI].length; collumI++) {
			if (rowI % 2 !== 0) {
				if (matrix[rowI][collumI] % 2 !== 0) {
					matrix[rowI][collumI] = matrix[rowI][collumI] + matrix[rowI][collumI];
				}
			} else if (rowI % 2 === 0) {
				if (matrix[rowI][collumI] % 2 === 0) {
					matrix[rowI][collumI] = matrix[rowI][collumI] + matrix[rowI][collumI];
				}
			}
		}
	}
	return matrix;
}

console.log("array1: ", multiplyMatrix(array1));
console.log("array2: ", multiplyMatrix(array2));
