//broadly data type are of 2 types primitive and non primitive (reference)

//stack and heap memory

//stack memory is used for the primitive data types and it returns the copy of variable
//while heap memory is used by the non primitve data types , and heap provide the reference to the reserved memory so that changes are done on actual data variable like array object functions

let name = "vaibhav";
console.log(name); //vaibhav
let yourName = name;
console.log(name); //vaibhav
console.log(yourName); //vaibhav
yourName = "sharma";
console.log(name); //vaibhav
console.log(yourName); //sharma
//in js when sharing the value of a variable onto another variable (primitive) then new variable receives the copy of new variable but not actual variable any changes in new variable wont change the previous variable

//object =>
let userOne = {
  email: "vaibhav@google.com",
  pass: "124",
};
let userTwo = userOne;
console.log(userOne);
console.log(userTwo); //same values for both

userTwo.pass = "1256"; //change in value of both variable .

console.log(userOne);
console.log(userTwo); //same values for both

//since objects got place in heap and it returns the reference from heap , so variable contains reference to it and new variable have value of older variable in it would also start refering to it .
//so any changes in one of them would reflect for both variables .
