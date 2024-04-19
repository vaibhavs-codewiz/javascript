//object constructor declaration of object

const myApp = new Object(); //also singelton object

myApp.name = "samay"; //filling value in object
myApp.size = "300mb";
console.log(myApp);

//nesting of objects ::

const details = {
  branch: "cse",
  class: {
    section: "c",
    rollNo: {
      enrollNo: 216,
    },
  },
};

console.log(details);
console.log(details.class.rollNo.enrollNo);

//combining the objects ::

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" }; //if same key than last of same key only logged to screen

//const obj4 = { obj1, obj2, obj3 }; //this creates objects inside object
//console.log(obj4);

const obj4 = Object.assign(obj1, obj2, obj3); //obj1 act as target and remainingsource
console.log(obj4);
console.log(obj1); //same as obj4
//it is better to provide {} empty object so that it act as target

const obj5 = Object.assign({}, obj2, obj3);
console.log(obj5);

//spread operator and mostly use for joining objects also array ::

const obj6 = { ...obj2, ...obj3 };
console.log(obj6);

//array of objects ::

const users = [
  {
    id1: "hello@.com",
    pass: 123,
  },
  {
    id2: "who.com",
    pass: 321,
  },
  {
    id3: "why.com",
    pass: 231,
  },
]; //we can acces them using loop database return this type of values .

console.log(users[0]);

console.log(myApp);

console.log(Object.keys(myApp)); //can access keys only of object
console.log(Object.values(myApp));
console.log(Object.entries(myApp));
//many more methods are associated with objects
