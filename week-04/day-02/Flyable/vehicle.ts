// Create an abstract Vehicle class
// it should have at least 3 fields

export abstract class Vehicle {
    weight: number;
    speed: number;
    color: string;

    constructor(weight: number, speed: number, color: string) {
        this.weight = weight;
        this.speed = speed;
        this.color = color;
    }
}