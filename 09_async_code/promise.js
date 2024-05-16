//the issue of call back hell can be improve by promises :-
//understand the call back hell example given below :-

// function savetoDb(data, success, failure) {
//   //argument as data message and 2 callback functions
//   let internetSpeed = Math.floor(Math.random() * 10 + 1);
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

//call back hell problem :-
// savetoDb(
//   "modi score = 345",
//   () => {
//     //call back function success
//     console.log("success in saving data1");
//     savetoDb(
//       "modi wins",
//       () => {
//         console.log("modi wins is data2");
//       },
//       () => {
//         console.log("fail in saving data2");
//         savetoDb(
//           "raga score 300",
//           () => {
//             console.log("raga has chances is data3");
//           },
//           () => {
//             console.log("unable to save the data3");
//           }
//         );
//       }
//     );
//   },
//   () => {
//     //second call back function failure
//     console.log("fail in saving data1");
//   }
// );

//call back hell arise when nesting of call back functions .
//above function pass the data1 if >4 save and pass data2 if >4 save otherwise
//pass data3 from failure call back function if >4 save data3 otherwise failure in
//saving data3 .
//this problem is solved by promises.

//savetoDb function using promise concepts :-

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("modi wins");
    } else {
      reject("raga wins");
    }
  });
}
// using then() and catch :-
let request = savetoDb("modi 345");
request
  .then(() => {
    console.log("resolved state");
    console.log(request);
  })
  .catch(() => {
    console.log("reject state");
    console.log(request);
  });
//understanding promise chaining , performing synchronous task asynchronously.
// let ans = new Promise((resolve, reject) => {
//   return resolve("task 1 : ghar par aao");
// });
// let p2 = ans.then((data) => {
//   console.log(data);
//   return new Promise((resolve,reject)=>{
//     return resolve('task 2 : padhai karo');
//   })
// });
// let p3 = p2.then((data)=>{
//   console.log(data);
//   return new Promise((resolve,reject)=>{
//     return resolve('task 3 : khana khao');
//   })
// });
// let p4 = p3.then((data)=>{
//   console.log(data);
//   return new Promise((resolve,reject)=>{
//     resolve('task 4 : so jao');
//   })
// });
// p4.then((data)=>{
//   console.log(data);
// })

//performing the above callback hell problem using promise chaining (more efficicent and readable)
function saveinDb(data){
  return new Promise((resolve,reject)=>{
    let internetSpeed = Math.floor(Math.random()*10) + 1;
    if(internetSpeed > 5)
      {
        resolve('data save successfully');//() may contains data from database which 
        //is furthur received by .then(function(data){}) this data is generally object.
      }
      else{
        reject('unsuccessful hit');//promises are resolved and rejected with some data.
      }
  })
}
let pro1 = saveinDb('data1');
pro1.then((data)=>{
  console.log(data);
  return saveinDb('data2');
})
.then((data)=>{
  console.log(data);
})
.catch((data)=>{
  console.log(data);
})
