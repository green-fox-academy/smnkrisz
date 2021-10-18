// https://www.hackerrank.com/challenges/ctci-array-left-rotation

function rotLeft(a: number[], d: number): number[] {
	for (let i = 0; i < d; i++) {
		const firstElement = a.shift();
		a.push(firstElement);
	}
	return a;
}
