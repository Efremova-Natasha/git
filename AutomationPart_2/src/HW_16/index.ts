import { test } from "./test"

console.log('Hi everyone!!!\n');

//Positive
test(5, 6, '-', -1);
test(10, 6, '+', 16);
test(2, 15, '*', 30);
test(56, 8, '/', 7);
//Negative
console.log();

test(5, 6, '-', 1);
test(10, 6, '+', 5);
test(2, 15, '*', 8);
test(56, 8, '/', 5);
