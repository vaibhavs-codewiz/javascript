//understanding call back functions and callback hell
//this is the example of call back , look how complicated it has become to understand
//the code .
// function getDataFromAPI(callback) {
//   setTimeout(() => {
//     const data = { name: "Alice" };
//     callback(data);
//   }, 1000);
// }

// function processData(data, callback) {
//   setTimeout(() => {
//     const message = "Welcome, " + data.name;
//     callback(message);
//   }, 500);
// }

// function displayData(message) {
//   console.log(message);
// }

// getDataFromAPI(function (data) {
//   processData(data, function (message) {
//     displayData(message);
//   });
// });

//When the call stack becomes empty (i.e., current code finishes),
// the event loop checks the callback queue.
//If there are callbacks waiting, the event loop takes one callback at a time, 
//adds it to the call stack, and executes it.

console.log('sync first');
setInterval(()=>{console.log('async fifth');},2000);
console.log("sync second");
setTimeout(function(){console.log("async third");},0);//logged at last since async
console.log('sync fourth');

