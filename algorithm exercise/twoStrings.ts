// https://www.hackerrank.com/challenges/two-strings

function twoStrings(s1: string, s2: string): string {
	let result = "NO";

	if (s1.length > s2.length) {
		s2.split("").forEach((letter) => {
			if (s1.includes(letter)) {
				result = "YES";
			}
		});
	} else {
		s1.split("").forEach((letter) => {
			if (s2.includes(letter)) {
				result = "YES";
			}
		});
	}
	return result;
}
