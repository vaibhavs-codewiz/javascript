//array specific loops (can be use anywhere):

//for of loop

let number =[22,23,42,12,3];
for(let rem of number)
{
    console.log(`remainder of ${rem} on mod 10 is ${rem%10}`);
}
//for of loop handels the initialisation and termination condition for loop .

//for of on string:

let greet = "hello world!";
for (const iterator of greet) {
    if(iterator === " ")
    continue;
    console.log(`characters are ${iterator}`);
}

//map in js :

//Map objects are collections of key-value pairs. 
//A key in the Map may only occur once; it is unique in the Map's collection. 
//A Map object is iterated by key-value pairs
//contains no duplicate value .

const map = new Map();

map.set('a',1);
map.set('b',2);
map.set('c',3);

console.log(map);//logged like object
for (const key of map) {
    console.log(key);//logged like array of key , value
}
//special syntax for logging key value pair

for (const [key,value] of map) {
    console.log(key , "::" ,value);//a :: 1
    console.log(key);//only keys logged
}