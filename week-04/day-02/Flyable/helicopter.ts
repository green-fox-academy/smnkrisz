// Extend Helicopter class from Vehicle
// implement your Flyable interface

import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";

export class Helicopter extends Vehicle implements Flyable {
    fly() {
        console.log('The helicopter flys.');
    }

    land() {
        console.log('The helicopter landed.');
    }

    takeOff() {
        console.log('The helicopter pushes itself to the air.');
    }

    info(): void {
        console.log(`The Medicopter is ${this.weight} kg, it can fly with ${this.speed} km/h and has a beautiful ${this.color} color.`);
    }
}