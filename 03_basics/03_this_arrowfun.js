// this keyword used to refer the current context ,
// when in node environment this console logged it provide the empty object {}
//but when on browser it console log it gives global object of browser that is window object

const user = {
  userName: "samay",
  entryCode: 519,
  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to website .`); //if user name updated then also log recent user name because of this (current context) .//writing this is cumpolsory.
    console.log(this); //console log object(calling object) user (current context) .
  },
};

console.log(user); //console log whole object .
console.log(user.welcomeMessage()); //execute method .
console.log(this); //console log {} .
user.userName = "sourav";
user.welcomeMessage(); //due to this new user name logged .

//using this inside function ::

function frog() {
  userName: "radhika";
  console.log(this); //log something about performance and much.
  console.log(this.userName); //undefined , this works well in object not in function
}
frog();

//more ways of declaring a function :: arrow function

const tadePol = () => {
  //syntax of arrow function
  userName: "madan";
  console.log(this.userName); //undefined
  console.log(this); //empty object {}
};

tadePol();

// compact syntax offer by arrow function::

() => {}; //this is a function

// explicit and implicit return in arrow function

const greet = (name) => {
  return "hello " + name; //expicit return, when using {} need to write the return keyword alternate option is using () where we need not to write the return :
};

console.log(greet("samay"));

const namaste = (num1, num2) => num1 + num2; //automatic return the sum .

console.log(namaste(10, 12));

const greetings = (name) => "hello " + name; //implicit return

console.log(greetings("uday"));

//advantage of applying () after => when using object inside function

const objfun = () => ({ userName: "samay" });

console.log(objfun());

const obj2fun = () => {
  user2 = {
    userName: "uday",
    bodyCount: 0,
  };
  console.log(`${this.userName}, what is bodyCount?`);
  console.log(this); //undefined
  console.log(this.user2); //undefined
};

obj2fun();

const obj3fun = function () {
  user3 = {
    userName: "uday",
    bodyCount: 0,
  };
  console.log(`${this.userName}, what is your bodyCount?`);
  console.log(this.user3); //logged the object
};

obj3fun();

//understanding arrow function and this relation ::

const usethis = {
  user: "samay",
  welcome: function () {
    console.log(`welome in our house dear, ${this.user}`);
  },
  welcome2: () => {
    console.log("welcome in our house also " + this.user); //not borrowed user from objectusethis
  },
};

usethis.welcome();
usethis.welcome2();

//behaviour of this inside browser : when logged in

// global area refer window object
//inside a function body again refer to window object
//inside a method body refer to calling object
//inside HTML event handeler refer to element for which event has executed.

//behaviour of this in node environment :

//global area logs {} empty object .
//inside a function body shows related to performance .
//inside a method body refer to calling object.

var x = 30;
let fun = function () {
  var x = 10;
  console.log(this);
  console.log(this.x); //undefined
};
fun();
