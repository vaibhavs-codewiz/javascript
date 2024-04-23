//filter The filter() method of Array instances creates a shallow copy of a 
//portion of a given array, filtered down to just the elements from the given array
// that pass the test implemented by the provided function.
//and return the shallowcopy of that array , return empty array if no value pass the
//filter condition (values which remain true for set condition)

const myNums = [10,20,30,40,50];

let receiveNUm = myNums.filter( (value) => value > 20)//no scope therefore implicit return
console.log(receiveNUm);

let receiveValue = myNums.filter( (item) => {
    return item > 20;
});

console.log(receiveValue);

//doing similar task using for each loop since return undefined in case of for each 
//hence we create another array to keep items > 20

let newarr = [];
myNums.forEach( (item) => {
    if(item > 20)
    newarr.push(item);
});

console.log(newarr);

//task : use filter to get user requiremetn book from guven array:

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

//requirement: book which are of genre non - fiction :

let task1 = books.filter( (item) => item.genre === 'Non-Fiction');
console.log(task1);

//task 2 : book which publish after 1995 and of genre history

let task2 = books.filter( (value) => {
    if(value.genre === 'History' && value.publish > 1995)
    return value;
});
console.log(task2);

//task 3 : add all number by 10
let number = [1,3,5,7,8];

let incrementNum = number.filter((value) => { 
    if(value < 7)
    value = value + 10;
return value;
});

console.log(number);//no modification in originalarray due to use of filter .
console.log(incrementNum);
//not possible by using filter . but by map possible


