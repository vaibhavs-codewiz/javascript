//falsy and truthy values :: which themselve treated as test condition .

if ("") {
  console.log("truthy value");
} else console.log("falsy value");

//falsy values : false , 0 , -0 , NaN , undefined , null , BigInt 0n , ""
//rest are truthy values .

//some special truthy values are :
//"0" , "false" , " " anything inside double quotes will make it truthy value .
//[] , {} empty object , function (){}

//right way to check empty array and empty object as test condition .

let emptyArr = [];

if (emptyArr.length == 0) {
  console.log("array is empty");
}

//for empty object

let emptyObj = {};

if (Object.keys(emptyObj).length == 0) {
  //Object.keys return the array of keys over which we apply array property length .
  console.log("object is empty");
}

//general point to be remember :

//false == 0 is true
//false == '' is true
//0 == '' is true

//nullish coalescing operator ::

//simplifies the way you handle null and undefined values.

//The operator checks the value of its left operand.
//If the left operand is either null or undefined, the operator returns the value of the right operand.
//If the left operand is any other value (including 0, an empty string "", or false), the operator returns the left operand itself.

//syntax
//let result = left_operand ?? right_operand;

let name = undefined;
let username = name ?? "Guest"; // username will be "Guest"
console.log(username);

let age = 0;
let defaultAge = age ?? 25; // defaultAge will be 0
console.log(defaultAge);

let val1 = undefined ?? null;
let val2 = null ?? undefined;
let val3 = null ?? 10 ?? 20;
console.log(val1); //null
console.log(val2); //undefined
console.log(val3); //10

//Benefits of Using the Nullish Coalescing Operator:

//Conciseness: It provides a more compact way to handle nullish values compared to traditional conditional statements like if...else.
//Clarity: It makes the code easier to read by explicitly stating the default value to use in case of null or undefined.
//Safety: It avoids errors that might occur when using the logical OR operator (||) for nullish checks, as || considers any falsy value (including 0, "", and false) as equivalent to nullish values.

//ternary operator

//syntax = condtion ? true : false
