import {evaluate} from "../src/Calculator";

const test = require('ava');

test('default evaluates to zero', t => {
  const result = evaluate();
  t.is(result, "0");
})