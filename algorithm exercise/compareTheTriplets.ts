// https://www.hackerrank.com/challenges/compare-the-triplets

function compareTriplets(a: number[], b: number[]): number[] {
	let aliceScoreCount = 0;
	let bobScoreCount = 0;

	for (let i = 0; i < 3; i++) {
		if (a[i] > b[i]) {
			aliceScoreCount++;
		}
		if (a[i] < b[i]) {
			bobScoreCount++;
		}
	}
	return [aliceScoreCount, bobScoreCount];
}
