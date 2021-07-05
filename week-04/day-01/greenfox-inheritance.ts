// Create a Person class with the following fields:

// name: the name of the person
// age: the age of the person (whole number)
// gender: the gender of the person (male / female)

// And the following methods:
// introduce(): prints out "Hi, I'm name, a age year old gender."
// getGoal(): prints out "My goal is: Live for the moment!"

// And the following constructors:
// Person(name, age, gender)
// Person(): sets name to Jane Doe, age to 30, gender to female

class Person {
    name: string;
    age: number;
    gender: string;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female'){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
    }

    getGoal(): void {
        console.log('My goal is: Live for the moment!');
    }
}


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


class Student extends Person {
    previousOrganization: string;
    skippedDays: number = 0;

    constructor(previousOrganization: string = 'The School of Life', skippedDays: number){
        super();
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays || this.skippedDays;
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }

    getGoal(): void {
        console.log('My goal is: Be a junior software developer.');       
    }

    skipDays(numberOfDays: number): void {
        this.skippedDays += numberOfDays;
    }
}


// Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

// fields:
// level: the level of the mentor (junior / intermediate / senior)

// methods:
// getGoal(): prints out "My goal is: Educate brilliant junior software developers."
// introduce(): "Hi, I'm name, a age year old gender level mentor."

// The Mentor class has the following constructors:
// Mentor(name, age, gender, level)
// Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate

class Mentor extends Person {
    level: string;

    constructor(level: string = 'intermediate'){
        super();
        this.level = level;
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
    }

    getGoal(): void {
        console.log('My goal is: Educate brilliant junior software developers.');
    }  
}


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

class Sponsor extends Person {
    company: string;
    hiredStudents: number;

    constructor(company: string = 'Google', hiredStudents: number = 0){
        super();
        this.company = company;
        this.hiredStudents = hiredStudents;
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    getGoal(): void {
        console.log('My goal is: Hire brilliant junior software developers.');
    }

    hire(): void {
        this.hiredStudents ++;
    }
}


// Create a Cohort class that has the following

// fields:
// name: the name of the cohort
// students: a list of Students
// mentors: a list of Mentors

// methods:
// addStudent(Student): adds the given Student to students list
// addMentor(Mentor): adds the given Mentor to mentors list
// info(): prints 'The name cohort has size of students students and size of mentors mentors.'

// The Cohort class has the following constructors:
// Cohort(name): beside the given parameter it sets students and mentors as empty lists

class Cohort{
    
}