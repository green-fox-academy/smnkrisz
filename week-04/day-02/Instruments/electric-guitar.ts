// Electric Guitar (6 strings, 'Twang')

import { StringedInstrument } from "./stringed-instrument";

export class ElectricGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 6) {
        super();
        this.name = 'Electric Guitar';
        this.numberOfStrings = numberOfStrings;
    }

    sound(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes Twang`);
    }
}