let myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); //Thu Apr 18 2024 07:09:16 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString()); //2024-04-18T07:09:16.490Z
console.log(myDate.toDateString()); //Thu Apr 18 2024
console.log(myDate.toLocaleDateString()); //4/18/2024
console.log(myDate.toLocaleString()); //4/18/2024, 7:09:16 AM

console.log(typeof myDate); //object

let myCreateddate = new Date(2024, 3, 18);
console.log(myCreateddate.toDateString()); //indexing of months starts from 0.

myCreateddate = new Date("3-18-2024"); //we can arrange the dd mm yy according to our requirement also .
console.log(myCreateddate.toLocaleString());

//this is important ::
let myTimeStamp = Date.now();
console.log(myTimeStamp); //time in milliseconds from 1 jan 1970 to current .
console.log(myCreateddate.getTime()); //here we get time in ms from 1970 to specified date this helps in comaparing the time .

console.log(Math.floor(myTimeStamp / 1000)); //time in seconds just by divide with1000

//we can also extract the day date month from the new Date

let extract = new Date();
console.log(extract.getMonth() + 1); //4 april
console.log(extract.getHours()); //hour passed after 12 am

console.log(
  `${extract.getFullYear()} at this year , ${extract.toLocaleString("default", {
    weekday: "long",
  })} on this day we are learning js`
); //day 4 means thursday , this style is used to design complex day date format .

//this below is interlisation helps to perform more cuatomiztion and get any specific date time timezone ... etc...
console.log(
  extract.toLocaleString("default", {
    weekday: "long",
  })
);
