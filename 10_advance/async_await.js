//async function :-
//async function greet(){
//  throw '(404) error identified';
//return 'hello';
//}
//greet()
//.then((result)=>{
//    console.log('successfully done' + result);
//})
//.catch((result)=>{
//    console.log('error received '+ result);
//});

//async can also be use with the arrow function :-
//position of writing async is just before the function .
// let demo = async (data) => {
//   return new Promise((resolve,reject)=>{
//      setTimeout(
//       ()=>{
//          if (data == 1) {
//            resolve({ username: "vaibhav", email: "vaibhav@google.com" });
//          } else {
//            reject({ nodata: "error" });
//          }
//       },1000);

//   })
// }
// demo(1)//this is how arrow function call to access promise .
// .then((result)=>{
//   console.log(result);
// })
// .catch((res)=>{
// console.error(res);
// })
// let value = demo();
//console.log(value);//logs the object promise .

//understanding await keyword :-it pauses the execution of sourrounding async function
//untill promise is settelled .

function getrandomNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10);
      if (num < 5) {
        console.log(num);
        resolve();
      } else reject("num>5");
    }, 1000);
  });
}
//if not use await random num will display simuntanously without any delay.
// getrandomNum();
// getrandomNum();
// getrandomNum();
async function demo() {
  try {
    await getrandomNum();
    await getrandomNum();
    await getrandomNum();
  } catch (err) {
    console.log('error caught ' + err);
  }
//handling rejection in async await :-write the code that can create error in try
}
demo();
