// The Flower
// needs water if its current water amount is less than 5
// when watered the flower can only absorb 75% of the water
// eg. watering with 10 the flower's amount of water should only increase by 7.5

import { Plants } from "./plants";

export class Flowers extends Plants {

    constructor(color: string) {
        super(color, 0, 'Flower', 5, 0.75);
    }
}