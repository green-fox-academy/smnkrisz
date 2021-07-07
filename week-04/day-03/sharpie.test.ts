import test from 'tape';
import { Sharpie } from "./sharpie-for-test";

test('is inkAmount equal to 100', t => {
    const sharpie1 = new Sharpie('green', 10, 80);
    const expected = 100;

    const actual = sharpie1.inkAmount;

    t.equal(actual, expected);
    t.end();
})

test('is inkAmount less than 100', t => {
    const sharpie1 = new Sharpie('green', 10, 80);
    const expected = 80;

    const actual = sharpie1.inkAmount;

    t.equal(actual, expected);
    t.end();
})