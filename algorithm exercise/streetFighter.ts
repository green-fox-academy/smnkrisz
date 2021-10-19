// https://www.codewars.com/kata/5853213063adbd1b9b0000be

export function streetFighterSelection(
	fighters: Array<string[]>,
	position: number[],
	moves: string[]
) {
	const items: string[] = [];

	moves.forEach((move) => {
		switch (move) {
			case "left":
				position[1] =
					position[1] === 0
						? fighters[position[0]].length - 1
						: position[1] - 1; // or write (- 5) instead of (- 1)
				break;
			case "right":
				position[1] =
					position[1] === fighters[position[0]].length - 1
						? 0
						: position[1] + 1;
				break;
			case "up":
				position[0] = position[0] === 0 ? position[0] : position[0] - 1;
				break;
			case "down":
				position[0] =
					position[0] === fighters.length - 1 ? position[0] : position[0] + 1;
				break;
		}

		items.push(fighters[position[0]][position[1]]);
	});
}
