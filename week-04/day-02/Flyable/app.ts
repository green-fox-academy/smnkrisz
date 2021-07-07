import { Helicopter } from "./helicopter";

let medicopter: Helicopter = new Helicopter(500, 85, 'black')

medicopter.takeOff();
medicopter.fly();
medicopter.land();
medicopter.info();