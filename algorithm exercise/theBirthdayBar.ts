// https://www.hackerrank.com/challenges/the-birthday-bar

function birthday(s: number[], d: number, m: number): number {
	let matchCount = 0;

	if (s.length < m) {
		return matchCount;
	}
	for (let i = 0; i < s.length - (m - 1); i++) {
		let currentBars = [...s].splice(i, m);
		let currentCounter = currentBars.reduce((prev, current) => prev + current);

		if (currentCounter === d) {
			matchCount++;
		}
	}
	return matchCount;
}
