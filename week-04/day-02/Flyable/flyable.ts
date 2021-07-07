// Flyable
// Create a Flyable interface
// it should have land, fly and takeOff methods (TakeOff in C#)

export interface Flyable {
    fly(): void;
    land(): void;
    takeOff(): void;
    info(): void;
}