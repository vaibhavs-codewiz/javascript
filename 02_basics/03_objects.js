//object can be declare in two style : literal and object constructor

//difference between the two is that literal do not create singelton while object constructor do create singelton , there is no difference of performance in both object declaration style .

//literal declaration of object ::

//object take values in key value pairs
//arrays can only be access by indexes while objects can have variable access method
let mySym = Symbol("interseting");
let mySym2 = Symbol("now it is a symbol.");

let jsUser = {
  name: "vaibhav",
  age: 20,
  [mySym]: "i got it ", //not a symbol
  editor: "vs-code",
  "learning mode": "online", //without "" cannot have key with multi letter
  "project build": "not yet",
  [mySym2]: "now it is a symbol", //symbol [remember]
};
//access of object values 2 styles ::

console.log(jsUser.age); //style 1 not valid for "learning mode" key
console.log(jsUser["age"]); //style 2 always valid

console.log(jsUser["project build"]); // only possible style to access.

console.log(typeof jsUser["age"]); //number
console.log(typeof jsUser.editor); //string
console.log(typeof jsUser); //object

//important :::::: how to add symbol as key inside object ??
//let mySym = Symbol("interseting");
//let mySym2 = Symbol("now it is a symbol."); //always intialize symbol before using inside object.

console.log(mySym); //Symbol(interesting)
console.log(jsUser.mySym); //i got it

console.log(typeof mySym); //symbol
console.log(typeof jsUser.mySym); //string not a symbol
console.log(jsUser[mySym2]);
console.log(typeof jsUser[mySym2]); //symbol
console.log(jsUser); // you can see in terminal symbol mySym

//how to change values of object and freeze them

jsUser.editor = "sublime";
console.log(jsUser.editor); //sublime

Object.freeze(jsUser);

jsUser.editor = "intellij";
console.log(jsUser.editor); //still sublime

//adding methods with object 

jsUser.["greeting"] = function () {
  console.log("this is a function with object");
};

console.log(jsUser["greeting()"]);
