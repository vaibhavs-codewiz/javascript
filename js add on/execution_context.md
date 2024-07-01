# javascript execution context :
``` javascript
var n = 5;

function square(n) {
  var ans = n * n;
  return ans;
}

var square1 = square(n);
var square2 = square(8);  

console.log(square1)
console.log(square2)
```
At the very beginning, the JavaScript engine executes the entire source code, creates a global execution context, and then does the following things:

Creates a global object that is window in the browser and global in NodeJs.
Sets up a memory for storing variables and functions.
Stores the variables with values as undefined and function references.
This is called the creation phase. Here's a diagram to help explain it:

   _memory _   |    _ code_
   variable    |   
   function    |
   
Creation Phase in Execution Context
After this creation phase, the execution context will move to the code execution phase.

Execution Phase
Now, in this phase, it starts going through the entire code line by line from top to bottom. As soon as it encounters n = 5, it assigns the value 5 to 'n' in memory. Until now, the value of 'n' was undefined by default.

Then we get to the 'square' function. As the function has been allocated in memory, it directly jumps into the line var square1 = square(n);. square() will be invoked and JavaScript once again will create a new function execution context.

untitled-3-1
Code Execution Phase
Once the calculation is done, it assigns the value of square in the 'ans' variable that was undefined before. The function will return the value, and the function execution context will be destroyed.

The returned value from square() will be assigned on square1. This happens for square2 also. Once the entire code execution is done completely, the global context will look like this and it will be destroyed also.

* scope chain
The code can access the tools available in its own context and look for others in the "parent" contexts using something called the scope chain. Imagine the scope chain as a way to borrow tools from other containers if you can't find them in your own.

* The creation phase includes creating the global and function execution contexts, creating the scope chain, and allocating memories for the variables and functions. During the execution phase, the JavaScript engine executes the code line by line. This includes evaluating and executing statements.

# call stack :
To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack. A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.

It uses the LIFO principle (Last-In-First-Out). When the engine first starts executing the script, it creates a global context and pushes it on the stack. Whenever a function is invoked, similarly, the JS engine creates a function stack context for the function and pushes it to the top of the call stack and starts executing it.

When execution of the current function is complete, then the JavaScript engine will automatically remove the context from the call stack and it goes back to its parent.

The call stack has its own fixed size depending on the system or browser. If the number of contexts exceeds the limit, then a stack overflow error will occur. This happens with a recursive function that has no base condition.