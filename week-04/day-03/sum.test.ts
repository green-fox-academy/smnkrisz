import test from 'tape';
import { Sum } from "./sum";

test('sumNumbers returns the sum of numbers when 2 numbers added', t => {
    const numbers = new Sum([4, 5]);
    const expected = 9;

    const actual = numbers.sumNumbers();

    t.equal(actual, expected);
    t.end();
});

//empty list
test('sumNumbers returns 0 when empty array is given', t => {
    const numbers = new Sum([]);
    const expected = 0;

    const actual = numbers.sumNumbers();

    t.equal(actual, expected);
    t.end();
});

// only one element
test('sumNumbers returns 36 when one number added', t => {
    const numbers = new Sum([36]);
    const expected = 36;

    const actual = numbers.sumNumbers();

    t.equal(actual, expected);
    t.end();
});

//multiple elements
test('sumNumbers returns the sum of numbers when a lot of numbers added', t => {
    const numbers = new Sum([36, 51, 93, 121, 365]);
    const expected = 666;

    const actual = numbers.sumNumbers();

    t.equal(actual, expected);
    t.end();
});