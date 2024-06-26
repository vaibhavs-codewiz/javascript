# fetch 
the execution of fetch event is done even before any other asynchronous event when they are schedule at same time this is because the for fetch tasks there is special microtask queue(fetch queue/ priority queue) is created which give them prirority over the task which are present in call back queue(task queue).
* microtask quese only contains the function from promises and mutation observer.
* The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
* if there are 3 function in microtask queue and only 1 task in task queue , in this case at first all the task of microtask queue gets executed and then only the tasks of call back queue are performed.
* task of task queue starvation : this happen when the tasks of priority queue are generating similar kind of prior task , in that the task in callback queue have to wait for too long to get its turn .

# response = fetch(url)
when fetch is called for url , 2 task initiated one is in web browser/node where network request is made and second is in memory where variable is created which is dependent on 2 arrays namely onfulfilled[] and on rejection[] onulfilled receive the response from webserver (404 page not found is also a response) and fill the varaiable accordingly and then it get pass to response variable , and similarly there is another array called onrejection() .
*  fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
* Unlike XMLHttpRequest that is a callback-based API, Fetch is promise-based and provides a better alternative that can be easily used
* A basic fetch request looks like this:

JS
Copy to Clipboard
async function logMovies() {
  const response = await fetch("http://example.com/movies.json");
  const movies = await response.json();
  console.log(movies);
}
Here we are fetching a JSON file across the network, parsing it, and printing the data to the console. The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.

The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON
