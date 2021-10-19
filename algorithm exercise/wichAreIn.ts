// https://www.codewars.com/kata/550554fd08b86f84fe000a58

export class G964 {
	public static inArray(a1: string[], a2: string[]): string[] {
		const r = [];
		a1.sort();

		a1.forEach((item) => {
			if (a2.find((word) => word.indexOf(item) > -1)) {
				r.push(item);
			}
		});
		return r;
	}
}
