// Violin (4 strings, 'Screech')

import { StringedInstrument } from "./stringed-instrument";

export class Violin extends StringedInstrument {

    constructor(numberOfStrings: number = 4) {
        super();
        this.name = 'Violin';
        this.numberOfStrings = numberOfStrings;
    }

    sound(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes Screech`);
    }
}