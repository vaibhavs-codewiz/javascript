const myArray = [1, 2, 3, 4, 5];
const characters = ["hinata", "sasuke", "kagiyama"];
console.log(characters[2]); //these arrays also have protype access i.e, lots of methods are associated with them .

//another style of array declaration

const myArray2 = new Array([1, 2, 3]); // This part creates a new array object using the Array constructor.
console.log(myArray2[1]);
console.log(typeof myArray2); //object

//=============== methods of array ================

myArray.push(6);
myArray.push(7);
console.log(myArray);
myArray.pop();
console.log(myArray);

myArray.unshift(20); //place the element at first index
console.log(myArray);
myArray.shift(); //shifts the first element out of array
console.log(myArray);
console.log(myArray.includes(19)); //false
console.log(myArray.indexOf(3)); //2 index of value 3 if not present than -1.

const newArr = myArray.join(); //this methods return the string

console.log(myArray);
console.log(newArr);
console.log(typeof myArray); //object
console.log(typeof newArr); //string

//========= slice versus splice =========

console.log("A ", myArray);
const sl = myArray.slice(1, 3); //3 not inclusive
console.log("sliced part ", sl);
console.log("A ", myArray); //original array after slice no change

console.log("B ", myArray);
const spl = myArray.splice(1, 3);
console.log("spliced part ", spl); //3 inclusive
console.log("B ", myArray); //original array after splice, the splice is remove form original array
