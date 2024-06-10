// create a function which always returns a fucntion which says hello world
const greet = function (){
    return (...args) => "hello world";
}
let fun = greet();
console.log(fun);
//use let keyword mostly but when defining function use const as it will not change
//somewhere else .
//remember use anonymous or arrow function when returning function from another function
//as the receiving variable will be the name to return function .
//args is spread operator.
//function returning the function is higher order functions .

//iife we can instead of calling the function and return new function
//we can execute the inner function as soon as the superior function is get call

function add(a)
{
    ((b)=> console.log(a+b))(5);//iife syntax ()() first code second call + argument.
}

let a = add(6);//as soon as add is call the inside iify got executed 
console.log(a);//undefined

//in function hoisting the declaration of the fucntions is kept at top by js
//so we feel like executing the function before its declaration .
//remember hoisting is only possible for the function declared with the keyword function .

//closure in js , it access the things near to function even if not in the same scope.

let c = 10;
((a,b) => console.log(a+b+c))(5,3);
//iffy function uses the c even if not in scope.

//when there is higher order function :-
//this higher order function are also called as factory function.

function subt(a,b){
    return ()=>{
        c = a-b;
        console.log(c);
    }
}
subt(2,1)();//here we are in place of accepting inner function we are directly executing it.
//first() means receving inner function second means executing it .
//omit the return 
let mul = (a,b) => a*b;

let prod = mul(2,3);
console.log(prod);

//use case of spread operator : concating the strings.
let arr = [1,2,3];
let brr = [4,5,6];
let crr = [...arr,...brr];
console.log(crr);

//with the help of closure we can code like class in js and create the separate
//copy for objects .

function createCounter(){
    let value = 0;//hidden state.
   function increment() {
    return ++value;
   } 
   return {
    increment: increment,
   }
}
let counter1 = createCounter();//new copy of value for counter1
let counter2 = createCounter();//separate copy of value for counter2

console.log(counter1.increment());
console.log(counter2.increment());
console.log(counter2.increment());
//this separate copy of value for counters is possible due to closure which make
//value as hidden state this hidden state is useful for object oriented programming
//closure
//A closure in JavaScript is a function that has access to the variables in its 
//parent scope, even after the parent function has completed execution. This allows
// for data to be "closed over" or remembered by the inner function, even after the
// outer function has returned. In JavaScript, closures are created every time a 
//function is created, at function creation time.