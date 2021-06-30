// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// When creating a new animal instance these values must be set to the default 50 value
// Every animal can eat() which decreases its hunger by one
// Every animal can drink() which decreases its thirst by one
// Every animal can play() which increases both its hunger and thirst by one


class Animal {
    name: string = '';
    hunger: number = 50;
    thirst: number = 50;
    
    constructor (name: string, hunger?: number, thirst?: number){
        this.name = name;
        this.hunger = hunger || this.hunger;
        this.thirst = thirst || this.thirst;
    }

    show() {
        console.log(`Animal name: ${this.name} \n Hunger level: ${this.hunger} \n Thirst level: ${this.thirst} \n`);
    }

    eat() {
        this.hunger--;
        return this         // use this to decrease code length
    }
    drink() {
        this.thirst--;
        return this
    }
    play() {
        this.hunger++;
        this.thirst++;
        return this
    }    
}

let animal1 = new Animal('ferret');
let animal2 = new Animal('lion');

animal1.show();
animal2.show();
animal1.eat().drink().show();
animal2.play().show();
animal2.eat().drink().eat().play().show(); 