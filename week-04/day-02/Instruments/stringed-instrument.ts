// Next, we add another abstract class, StringedInstrument which extends Instrument. It
// introduces numberOfStrings and
// sound() method what's implementation is yet unknown
// but with the help of the sound() the play() method is fully implementable.

// StingedInstrument has 3 descendants, namely:
// Electric Guitar, Bass Guitar, Violin

import { Instrument } from "./instruments";

export abstract class StringedInstrument extends Instrument {
    numberOfStrings: number = 1;

    constructor(numberOfStrings?: number) {
        super();
        this.numberOfStrings = numberOfStrings || this.numberOfStrings;
    }

    abstract sound(): void;

    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
}