// Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

// fields:
// level: the level of the mentor (junior / intermediate / senior)

// methods:
// getGoal(): prints out "My goal is: Educate brilliant junior software developers."
// introduce(): "Hi, I'm name, a age year old gender level mentor."

// The Mentor class has the following constructors:
// Mentor(name, age, gender, level)
// Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate

export class Mentor {
    name: string;
    age: number;
    gender: string;
    level: string;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate'){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.level = level;
    }

    introduce(): void {
        let introducing3: string = `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`
        console.log(introducing3);
    }

    getGoal(): string {
        let goal3: string = 'My goal is: Educate brilliant junior software developers.';
        console.log(goal3);
        return goal3;
    }  
}