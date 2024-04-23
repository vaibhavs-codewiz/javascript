// functions in javascript

function myName() {
  console.log("vaibhav sharma");
}

myName(); //myName is function reference and myName() is function execution.

//function with parameter ::

function addNumbers(numb1, numb2) {
  //here we call them parameters
  console.log(numb1 + numb2);
}

addNumbers(10, 29); //here we call them arguments, if argument not pass then NaN prints.

//fucntion with return value

function addIntegers(numb1, numb2) {
  return numb1 + numb2;
}var sum = addIntegers(12.4, 7.6);
console.log(sum);

function strValue(username) {
  return `${username} is doing his studies`;
}

console.log(strValue("vaibhav")); //if not passed parameter than o/p: undefined is do.. in this case check before returning ::->

function preCheck(username) {
  if (username === undefined) return `enter a valid username`;
  return `${username} is doing his studies`;
}

let str = preCheck();
console.log(str);

//default value inside parameter

function setDefault(username = "samay") {
  return `${username} is doing his studies`;
}

console.log(setDefault());

//shopping cart problem :: prgmr not know how many parameter to recieve 
//in function so to create such function use rest operator (solution)

//rest operator

function shoppingCartItemsPrice(...price) {
  return price;
}

console.log(shoppingCartItemsPrice(10, 200, 230, 900, 232));
//this return an array of item price .
//variety two in rest operator

function cartItems(count1, count2, ...restCount) {
  //initial parameter receive by count1 and count2 rest inside rest count
  console.log(count1 + " " + count2);
  return restCount;
}

console.log(cartItems(2, 4, 3, 1, 4, 7, 3)); //3,1,4,7,3

//passing object as parameter to function

const user = {
  name: "samay",
  rate: 499,
};

function detailsofUser(anyObject) {
  //parameter can have any object
  console.log(
    `${anyObject.name} is your customer at ${anyObject.rate} price rate`
  );
}

detailsofUser(user); //argument as specific object to call function upon .

//array as parameter

const myArray = [1, 2, 4, 5, 3, 5, 1, 3];

function printArray(anyArray) {
  return anyArray;
}

console.log(printArray(myArray));

//important about function without {}

function returnNo(a,b) {
  return a+b;//remember when {}scope starts, we explicitly need to return the sum
}
let sumNo = (a,b) => (a+b);//no need of return when there is no scope{}
let sumNumb = (a,b) => a+b;
let objret = () => ({username: 'samay'});//return object

var addit = sumNo(1,2);
var addi = sumNumb(1, 3);
var add = sumNo(1, 2);




