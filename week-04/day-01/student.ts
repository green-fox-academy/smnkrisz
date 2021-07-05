// Create a Student class that has the same fields and methods as the Person class, and has the following additional

// fields:
// previousOrganization: the name of the student’s previous company / school
// skippedDays: the number of days skipped from the course

// methods:
// getGoal(): prints out "My goal is: Be a junior software developer."
// introduce(): "Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already."
// skipDays(numberOfDays): increases skippedDays by numberOfDays

// The Student class has the following constructors:
// Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
// Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0

import { Person } from "./person"

export class Student extends Person {
    previousOrganization: string;
    skippedDays: number = 0;

    constructor(name?: string, age?: number, gender?: string, previousOrganization: string = 'The School of Life'){
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays;
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }

    getGoal(): void {
        console.log('My goal is: Be a junior software developer.');       
    }

    skipDays(numberOfDays: number): number {
        this.skippedDays += numberOfDays;
        return this.skippedDays;
    }
}