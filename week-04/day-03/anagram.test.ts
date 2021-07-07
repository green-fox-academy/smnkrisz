import test from 'tape';
import { anagram } from "./anagram";

test('Test the anagrams', t => {
    const expected: boolean = true;

    const actual = anagram('heavymetal', 'havemytale');

    t.equal(actual, expected);
    t.end();
})