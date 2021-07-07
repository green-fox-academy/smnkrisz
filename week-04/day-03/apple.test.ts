import test from 'tape';
import { Apple } from "./apple";

//pass
test('return the apple', t => {
    const apple = new Apple();
    const expected = 'apple';

    const actual = apple.getApple();

    t.equal(actual, expected);
    t.end();
});

//fail
test('return the apple', t => {
    const apple = new Apple();
    const expected = 'yellow';
    
    const actual = apple.getApple();

    t.equal(actual, expected);
    t.end();
});

//fail
test('return the apple', t => {
    const apple = new Apple();
    const expected = 10;
    
    const actual = apple.getApple();

    t.equal(actual, expected);
    t.end();
});

//pass
test('return the apple', t => {
    const apple = new Apple();
    const expected = 'apple';

    const actual = apple.getApple();

    t.equal(actual, expected);
    t.end();
});