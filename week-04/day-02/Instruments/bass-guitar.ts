// Bass Guitar (4 strings, 'Duum-duum-duum')

import { StringedInstrument } from "./stringed-instrument";

export class BassGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 4) {
        super();
        this.name = 'Bass Guitar';
        this.numberOfStrings = numberOfStrings;
    }

    sound(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes Duum-duum-duum`);
    }
}