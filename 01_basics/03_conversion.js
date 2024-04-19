let score = "33abc";

console.log(typeof score); //string
console.log(score); //33abc

let valueInScore = Number(score); //type converion of string score to Number
console.log(typeof valueInScore); //number
console.log(typeof score); //string
console.log(valueInScore); //NaN not a number
console.log(score); // still 33abc

let test = null;

let testVariableValue = Number(test);
console.log(testVariableValue); //0

test = undefined;

testVariableValue = Number(test);
console.log(testVariableValue); //NaN
// in case of true consolelog will be 1
console.log(typeof NaN); //number
//the takeaway from the number conversion is that , consider you are at backend work
//and a variable which should store number and also its typeof is number, but it
//could have NaN as value like in ValueInScore variable .

let loggedin = "";

let boolLoggedin = Boolean(loggedin);
console.log(typeof boolLoggedin); //boolean
console.log(boolLoggedin); //false
//when loggedin = "vaibhav" true
//loggedin = 1 then true if 0 then false

let someNumber = 34;

let stringsomeNumber = String(someNumber);
console.log(stringsomeNumber); //34
console.log(typeof stringsomeNumber); //string

//=======================*************=================operations

let value = 4;
let negvalue = -value;
console.log(negvalue); //-4

console.log("1" + 4); //14
console.log(4 + "1"); //41
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
console.log(1 + 2 + "3" + 2 + 3); //3323
//string k pahle wala add after wala concatenate .
