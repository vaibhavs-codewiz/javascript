//scope of vairables

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
//console.log(a); //error as let is inside if scope
//console.log(b); //error of scope (this how it should be )
//console.log(c); //log 30 (poblem with var )

//nested scope ::

function first() {
  const supplier = "youtube";
  console.log(supplier);
  function second() {
    const moreOption = "telegram";
    console.log(supplier); //no error inside the scope
  }
  //console.log(moreOption);//not in this scope error
  second();
}
//console.log(supplier); //not accessible not in this scope

first();

//inside function if we can access outside function's variable is closure and much more .

//function inside variable and mini hoisting

addTwonumb();

//no issue can use before function definition
//this function is hoisted means in js hoisting mechanism hoisting means you can use these elements even before they are explicitly defined in your code.

function addTwonumb() {
  let n1 = 10,
    num2 = 20;
  console.log(n1 + num2);
}

addTwonumb();

//funKeeper(); error

//not hoisted for function inside a variable .
// error Cannot access 'funKeeper' before initialization .

let funKeeper = function () {
  let no1 = 9,
    no2 = 12;
  console.log(no1 + no2);
};

funKeeper();
