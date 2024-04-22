const accountId = 23134;
let gmailAdd = "vaibhav@gmail.com";
var password = "789123";
cityName = "bhopal";
let stateName;
/*
prefer not to use var 
because of issue in block and functional scope
*/
console.log(accountId);
//accountId = 23235; //not allowed
//console.log(accountId);
gmailAdd = "vaibhav0072@gmail.com";
var password = "42341";
cityName = "indore";
console.table([accountId, gmailAdd, password, cityName, stateName]);
