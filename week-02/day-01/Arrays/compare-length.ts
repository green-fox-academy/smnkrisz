// - Create a variable named `firstList`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `secondList`
//   with the following content: `[4, 5]`
// - Log "secondList is longer" to the console if `secondList` has more elements than
//   `firstList`
// - Otherwise log: "firstList is the longer one"

import { setMaxListeners } from "process";

let firsList = [1, 2,3];
let secondList = [4, 5];

if ( firsList[firsList.length] > secondList[secondList.length])
    console.log('secondList is longer');
    else {
        console.log('firsList is the longer one');
    }