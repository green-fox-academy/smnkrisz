// The Garden
// is able to hold unlimited amount of flowers and trees
// when watering it should only water those plants that need water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10

import { Plants } from "./plants";
import { Flowers } from "./flowers";
import { Trees } from "./trees";

class Garden {
    listOfPlants: Plants[] = [];

    addPlants(newPlant: Plants): void {
        this.listOfPlants.push(newPlant);
    }

    isItThirsty(): number {
        let thirtyPlant: number = 0;
        for (let i = 0; i < this.listOfPlants.length; i++) {
            if(this.listOfPlants[i].currentWater < this.listOfPlants[i].minimumAmountWater){
          thirtyPlant++;
            }
        }
        return thirtyPlant;
    }

    getWater(volume: number): number {
        let waterAmount: number = volume / this.isItThirsty();

        for (let i = 0; i < this.listOfPlants.length; i++) {
            if(this.listOfPlants[i].currentWater < this.listOfPlants[i].minimumAmountWater){
            this.listOfPlants[i].currentWater += waterAmount * this.listOfPlants[i].absordedWater;
            }
        }
        return waterAmount;
    }

    plantInfo(waterAmount: number): void {
        console.log(`Watering with ${waterAmount}.`);
        
        for (let i: number = 0; i < this.listOfPlants.length; i++) {
            if(this.listOfPlants[i].currentWater < this.listOfPlants[i].minimumAmountWater) {
                console.log(`The ${this.listOfPlants[i].color} ${this.listOfPlants[i].type} needs water.`);    
            } else console.log(`The ${this.listOfPlants[i].color} ${this.listOfPlants[i].type} doesn't need water.`);
        }
    }
    

}

let garden: Garden = new Garden();

let flower1: Flowers = new Flowers('yellow');
let flower2: Flowers = new Flowers('blue');
let tree1: Trees = new Trees('purple');
let tree2: Trees = new Trees('orange');

garden.addPlants(flower1);
garden.addPlants(flower2);
garden.addPlants(tree1);
garden.addPlants(tree2);

garden.plantInfo(0);
console.log('\n');
garden.isItThirsty();
garden.getWater(40);
garden.plantInfo(40);
console.log('\n');
garden.isItThirsty();
garden.getWater(70);
garden.plantInfo(70);