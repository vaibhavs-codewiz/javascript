// create a function which return value n which is +1 the previous value every time 
//it get call.
function value(n)
{
    let count = n;
    return () => count++;
}

let counter = value(10);//counter have function in it

console.log(counter());
console.log(counter());
console.log(counter());

//wkt js do not support object oriented programming but we are able to achieve this 
//with the help of closure and functions in js , 
//here we are executing counter function and n is acting as hidden state like the 
//private variable in OOP so it feels like we are calling method on object.

//this is how class are created in js and performed object oriented programming.
//also ES6 support class in js :-
class counterClass {
  constructor(n){
    this.n = n;
  }
  increment(){//here in class function created without using the keyword function.
    return this.n++;
  }
}

let newCount = new counterClass(-2);
console.log(newCount.increment());
console.log(newCount.increment());
console.log(newCount.increment());
console.log(newCount.increment());
console.log(newCount.increment());


