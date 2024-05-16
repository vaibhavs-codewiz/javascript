# async functions : Writing Asynchronous Code Like a Breeze
In JavaScript, async functions provide a powerful and elegant way to handle asynchronous operations. They simplify the process of working with Promises, making your code more readable, maintainable, and resembling synchronous code.

Key Concepts:

Asynchronous Operations: These are actions that take some time to complete, often involving network requests, file I/O, or interaction with external services. JavaScript doesn't halt execution while waiting for these operations to finish.
Promises: Objects that represent the eventual outcome (either successful resolution or rejection) of an asynchronous operation. Async functions inherently return Promises.
How Async Functions Work:

Declaration: You define an async function using the async keyword before the function definition.
Execution: When you call an async function, it starts executing like a regular function.
await Keyword: Inside an async function, you can use the await keyword before a Promise-based expression. This pauses the function's execution until the Promise settles (either resolves or rejects).
The await keyword can only be used within async functions.
The function execution resumes with the resolved value of the Promise when it settles.
Return Value: Async functions always return a Promise, which ultimately resolves with the value returned by the function or rejects with an error if an exception occurs within the function.
Benefits of Async Functions:

Readability: They make asynchronous code appear more synchronous, improving code clarity.
Maintainability: The async/await syntax promotes cleaner code organization and easier debugging.
Error Handling: You can use try...catch blocks to handle errors that might occur within the async function.
Use Cases for Async Functions:

Fetching Data from APIs: Fetching data from servers using the fetch API is a perfect example. You can use async/await to write asynchronous code that looks synchronous, making it easier to work with the fetched data.
File I/O Operations: Reading or writing files can be asynchronous in JavaScript. Async functions can make these operations more manageable.
Event Handling: Responding to events like user interactions or timers often involves asynchronous tasks. Async functions can streamline this process.
Long-Running Operations: When working with operations that take time, async functions can prevent the main thread from blocking, allowing your application to remain responsive.
Requirements for Using Async Functions:

JavaScript Environment: Modern JavaScript environments like web browsers or Node.js support async/await. If you're working with an older environment, you might need to use transpilation techniques to convert your code for compatibility.
Promise Support: Async functions rely on Promises. If your environment doesn't support Promises natively, you'll need a polyfill (a library that provides missing functionality).
In essence, async functions provide a powerful and convenient way to manage asynchronous operations in JavaScript. By combining the async keyword for function declaration and the await keyword for pausing execution until Promises settle, you can write cleaner, more maintainable, and more synchronous-looking asynchronous code.

async function return object called promise with :
prototype : promise
promise state : fulfilled/rejected/pending
promise result : message passed or undefined

# throw keyword
 the throw keyword is an essential tool for robust error handling in JavaScript. By strategically using throw and catch blocks, you can write more reliable and maintainable code that gracefully handles errors and prevents unexpected program behavior.
 
# await keyword :
The Hero of Asynchronous Programming: The await Keyword

In the wild world of asynchronous JavaScript, await is your trusty companion. It lets you work with asynchronous operations (like fetching data from an API) in a way that feels synchronous, making your code cleaner and easier to reason about.

Here's the Power of await in Action:

Imagine you're fetching data from an API. Traditionally, you'd use promises and .then and .catch methods to handle the asynchronous nature of the operation. This can lead to nested callbacks and make your code look like tangled Christmas lights.

Enter await:

Declare an Async Function:  First, you mark your function as asynchronous using the async keyword. This tells JavaScript that the function might contain asynchronous operations.

Unleash the Await:  Inside the async function, you can use the await keyword before any expression that returns a promise. This pauses the execution of the function until the promise settles (resolves or rejects).

Treat it Like Sync (Almost): Once the promise resolves, await unwraps the resolved value and assigns it to a variable just like you would in synchronous code. Any errors are thrown and can be caught using a try...catch block.

