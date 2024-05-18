//for each loop
//The forEach() method is an iterative method. 
//It calls a provided callbackFn function once for each element 
//in an array in ascending-index order.
//There is no way to stop or break a forEach() loop other
// than by throwing an exception. If you need such behavior,
// the forEach() method is the wrong tool.

const codLan = ['python','c','cpp','java','js'];
codLan.forEach(function (item){
    console.log(item);
});

//call back function does not have name they are smart fucntion know the array indexing and all
//here inside parameter of forEach method there is a call back function

//using arrow function :

codLan.forEach((language) => {
    console.log(language);
})

//we can also pass the reference of already defined function in forEach parameter
function print(item){
    console.log(item);
}
codLan.forEach(print);//pass refernce not execute print().

//more possible parameter inside forEach

codLan.forEach( (item, index, codLan) => {
    console.log(item, index, codLan);
})

//accessing array of objects using forEach loop

const superHero = [
    {
    heroName: 'spiderman',
    power: 'web-art'
},
{
    heroName: 'hulk',
    power: 'high-strength'
},
{
    heroName: 'thor',
    power: 'god-of-thunder'
}]
superHero.forEach( (item) => {
    console.log(item.power);
})

let array =[1,2,3,4,5];
let receive = array.forEach((value) => {
    if(value >= 3)
    return value;
    console.log(value);
})
console.log(receive);//undefined

//forEach loop returns undefined in every case .
//so to return the value we use filter .