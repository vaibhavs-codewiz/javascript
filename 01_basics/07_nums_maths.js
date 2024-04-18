const score = 400;
console.log(score); //400 type number

//another way to explicitly create type number
const anotherNumber = new Number(100);
console.log(anotherNumber); //now it is object and comes with additional methods
//we can use methods of string as well on number by :

console.log(anotherNumber.toString().length);
console.log(anotherNumber.toFixed(2)); //100.00 fixes the value after decimal

const marks = 12.56;
console.log(marks.toPrecision(3)); //12.6 priotize the value before decimal and round of the last digit .

let amount = 10000000; //difficult to read
console.log(amount.toLocaleString("en-IN")); //in indian standards 1,00,00,000

//================ math library ==================

console.log(Math); //it is a object with lots of methods like:
console.log(Math.abs(-3)); //3
console.log(Math.round(5.9)); //6
console.log(Math.ceil(4.5)); //5
console.log(Math.floor(4.9)); //4

console.log(Math.min(12, 54, 6, 324, 7, 1, 43)); //1

let num = 23.4;
console.log(Math.ceil(num)); //24

console.log(Math.random()); //generate number between 0 to 0.9999..
console.log(Math.random() * 10 + 1); //generate number from 1 to 10
console.log(Math.floor(Math.random() * 10 + 1)); //generate number from 1 to 10 withput decimal values .

let min = 1;
let max = 6;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //this formula generates number in range of min to max important to be remember .
