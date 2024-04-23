//map
//The map() method is an iterative method. It calls a provided callbackFn function 
//once for each element in an array 
//and constructs a new array from the results
//A new array with each element being the result of the callback function.

let numbers = [1,3,5,7,8];

//numbers = numbers.map( (value) => value + 10);
console.log(numbers);

//chaining : this allow multiple methods to execute on same array 
//methods can be same or different .

//task : multiply the numbers with 10 and increment by 2 and pass the value > 40

numbers = numbers
           .map( (value) => value * 10)
           .map( (value) => value + 2)
           .filter((value) => value > 40);
console.log(numbers);
//remeber that the value at above method pass to lower chain method .

console.log(numbers);//due to mao the original array get modified .
numbers.map((item,index) => console.log(item,index));//can have multiple parameters
numbers.filter((item,index,numbers) => console.log(item,index,numbers));

//reduce :
//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer
// across all elements of the array is a single value.

let initialValue = 0;
let total = numbers.reduce(function (accumulator,currentval) {
   return accumulator + currentval;
},initialValue);
//at first iteration accumulator is empty that is why initial value created to set at once only .
//in other iterations accumulator contains sum of accumulator and current value .
console.log(total);

//using arrow function:

let sumall = numbers.reduce((acc,curr) => acc + curr,0);
console.log(sumall);

//task : add the price of object in array :

const shopCart = [
    {
        course: 'js',
        price: 2999
    },
    {
        course: 'java',
        price: 4999
    },
    {
        course: 'react',
        price: 5999
    },
    {
        course: 'spring',
        price: 2999
    }
];

let totalCost = shopCart.reduce((acc,obj) => acc + obj.price,1000);
console.log(totalCost);


