//IIFE : immediately invoked function expression .
//reason 1 : to avoid the pollution from global scope .
//reason 2 : to make faster connection with database as soon as file of application got executed .
//syntax :- ()() first paranthesis is scope for code and second is its execution which also can contain the arguments .

// named IIFE :
(function Fast() {
  console.log("this is fast execution .");
})(); //this terminator is cumpolsory if wanna use multiple iife
//if not ; apply the error occur because iife does not know where to stop the context. so we need to explicitly terminate .

//un-named iife
(() => {
  console.log(`this is also fast execution.`);
})();

//un - named iife with arguments :
((name) => {
  console.log(`this is also fast execution, for ${name}`);
})("samay");
//theory of iffy::

//Immediately Invoked Function Expressions (IIFEs, pronounced "iffy") are a design pattern in JavaScript that involve creating a function expression and invoking it immediately after it's defined. This creates a self-contained block of code that executes once and prevents variables and functions within it from polluting the global scope.

//Benefits of IIFEs:

//Private Scope: Variables and functions defined inside the IIFE are not accessible from outside, preventing conflicts with other parts of your code.
//Module Pattern: IIFEs can be used to create modules that encapsulate functionality and data, promoting better code organization.
//Data Hiding: Sensitive information can be hidden within the IIFE, protecting it from unintended modifications.
