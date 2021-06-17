// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52


let lengthOfSemester = 17;
let hoursPerDay = 6;
let hoursPerWeek = 52;
let codesPerWeek = 5;


let hoursPerSemester = lengthOfSemester * codesPerWeek * hoursPerDay;

console.log('That many hours is spent coding during the semester:', hoursPerSemester, 'hours');
console.log('Percentage of coding:', codesPerWeek * hoursPerDay / hoursPerWeek * 100, '%');
