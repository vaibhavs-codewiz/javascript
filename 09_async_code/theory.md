# js is synchronous and single thread language : understand the call back hell :-
Single-threaded: This means JavaScript has one execution thread. Imagine a single lane road where instructions (code) get processed one after another. Only one instruction can be carried out at a time.

Synchronous: This refers to how JavaScript handles tasks. Synchronous means tasks must be completed sequentially, in the order they appear in the code.  Think of it like waiting at a traffic light. The code execution halts  until the current task finishes before moving on to the next one.

* this behaviour of js is default but js not let this weak point to become a major problem (problem major when using standalone js engine) . It is not a problem as there is no js standalone engine present it is always in runtime environment like in browser , node .

## js code execution context :
* the code is executed one line of code at a time in js, each operation waits for previous one to get completed . 

## blocking code versus non - blocking code :-
js have 2 types of codes :
* Blocking Code:

Execution Pauses: When you run blocking code, JavaScript pauses the execution of the main thread until the code finishes its task. Imagine a single lane road where instructions (code) get processed one after another. Blocking code acts like a slow car that holds up traffic behind it.
Example: A function that reads a large file from disk synchronously (without using callbacks or promises) would be blocking code. The entire program would wait until the entire file is read before continuing.

* Non-Blocking Code:

Execution Continues: Non-blocking code allows other code to run while it's performing a task. It achieves this by using asynchronous operations, which don't require the main thread to wait for completion. Think of it like a car that can pull over to let other cars pass while it waits for something (like a network request to finish).
Example: Downloading a file using an asynchronous function with callbacks or promises wouldn't block the main thread. The program can continue executing other code while the download happens in the background.

* which code to use is depend on use case . example it is better to use blocking code when writing code for user registration because if not written then during writing the details at database take time and non block code might show user registration succes or fail without process completion 

* API in js :
In JavaScript (JS), APIs (Application Programming Interfaces) act as intermediaries between your JavaScript code and external functionalities. They provide a structured way for your code to access features or data from other sources, like web servers, databases, or even other web pages.

# js engine with web API manage by event loop :-
In JavaScript, the event loop and Web APIs work together to handle different types of operations efficiently, especially asynchronous ones. Here's a breakdown of their roles:

JavaScript Event Loop:

Single-threaded: JavaScript itself is single-threaded, meaning it has only one call stack to execute code. This call stack processes instructions one after another.

Event Management: The event loop is a core mechanism that manages events and tasks in JavaScript. It continuously monitors different queues:

Call Stack: Holds code to be executed sequentially.
Callback Queue: Stores callback functions waiting to be executed (functions associated with asynchronous operations).
Microtask Queue: Holds microtasks (like Promise resolutions) to be executed after the current call stack finishes but before the next callback from the callback queue.
Non-blocking Nature: The event loop allows JavaScript to handle asynchronous operations (like network requests, file I/O) without blocking the main thread. Here's how it works:

An asynchronous operation is initiated (e.g., fetching data from a server).
A callback function associated with the operation is added to the callback queue.
The main thread continues executing code in the call stack.
When the call stack becomes empty (i.e., current code finishes), the event loop checks the callback queue.
If there are callbacks waiting, the event loop takes one callback at a time, adds it to the call stack, and executes it.

Web APIs:

Browser Features: Web APIs are a set of functionalities provided by the web browser that JavaScript can leverage. These APIs allow JavaScript to interact with the browser environment, perform actions like DOM manipulation, network requests, user input handling, and more.
Asynchronous Operations: Many Web API functionalities involve asynchronous operations. For instance, making a network request using the Fetch API doesn't block the main thread. Instead, the browser handles the request in the background and eventually triggers a callback function when the response is received.
Interaction with Event Loop: Web APIs don't directly execute code within the JavaScript engine. Instead, they schedule callbacks through the event loop. When a Web API function is called to perform an asynchronous task, the corresponding callback function is added to the callback queue.

since js is single threaded and synchronous thus , the multi threading is possible in js with the help of call back functions(one of the options).

# call back functions in javascript :-
Callback functions are a fundamental concept in JavaScript for handling asynchronous operations. Imagine you call a friend and ask them to pick up some groceries for you. You give them a list (the function) and tell them to call you back (the callback) once they're done shopping (the asynchronous task).

How Callbacks Work:

Initiate the Asynchronous Operation: You call a function that performs an asynchronous task, like fetching data from a server or reading a file.
Pass the Callback: This function usually takes another function as an argument, which is the callback.
Code Continues: The main program doesn't wait for the asynchronous task to finish. It continues executing other code.
Task Completion: Once the asynchronous operation finishes, the function you called earlier executes the callback function you provided.
Callback Receives Results (or Errors): The callback function gets the result of the asynchronous task (your groceries) or an error message (if something went wrong).
Callback Hell:

Things can get messy when you chain multiple asynchronous operations together, each relying on a callback from the previous one. This creates a nested structure of functions within functions, resembling a pyramid. This is known as "callback hell."

Here's why callback hell is bad:

Hard to Read: Nested callbacks make code difficult to understand and follow the flow of logic.
Error Prone: With many nested levels, keeping track of errors and data flow becomes challenging.
Difficult to Maintain: As the codebase grows, modifying or debugging code in callback hell can be a nightmare.

The Hero: Promises

Promises were introduced in JavaScript to address the problems of callback hell. They provide a cleaner and more structured way to handle asynchronous operations. 

# promise :-
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. In the old days, doing several asynchronous operations in a row would lead to the classic callback hell.

in call back function(asynchronous function), functions are passed as argument which creates confusion but in promise , function (asynchronous function) return the promise object which based upon internal code provide two call back function reject or resolved, reject function generates error.
promise object as a key value pair have :- prototype : promise , promise state : fulfilled or rejected and promise result : parameter of resolve and reject function .

promise object has 2 methods associated with it then() and catch() , then() work when promise got fulfilled and catch when promise rejected .
then and catch methods have callback functions as argument .