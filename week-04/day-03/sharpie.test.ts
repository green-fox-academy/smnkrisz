import test from 'tape';
import { Sharpie } from "./sharpie-for-test";

test('return the ink usage', t => {
    const inkUsage = new sharpie1;
    const expected = 80;

    const actual = inkUsage.use();

    t.equal(actual, expected);
    t.end();
})