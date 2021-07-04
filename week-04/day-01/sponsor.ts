// Create a Sponsor class that has the same fields and methods as the Person class, and has the following additional

// fields:
// company: name of the company
// hiredStudents: number of students hired

// method:
// introduce(): "Hi, I'm name, a age year old gender who represents company and hired hiredStudents students so far."
// hire(): increase hiredStudents by 1
// getGoal(): prints out "My goal is: Hire brilliant junior software developers."

// The Sponsor class has the following constructors:
// Sponsor(name, age, gender, company): beside the given parameters, it sets hiredStudents to 0
// Sponsor(): sets name to Jane Doe, age to 30, gender to female, company to Google and hiredStudents to 0

export class Sponsor {
    name: string;
    age: number;
    gender: string;
    company: string;
    hiredStudents: number;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google', hiredStudents: number = 0){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.company = company;
        this.hiredStudents = hiredStudents;
    }

    introduce(): void {
        let introducing4: string = `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`;
        console.log(introducing4);
    }

    getGoal(): string {
        let goal4: string = 'My goal is: Hire brilliant junior software developers.';
        console.log(goal4);
        return goal4;
    }

    hire(): void {
        this.hiredStudents ++;
    }
}