//create a method which return object with 3 function in it , uncrement reset and 
//decrement
function counter(init){
    let count = init;
     increment = () => ++count;
     decrement = () => --count;
     reset = () => {count = init; return count;}

    //here is object in which key are initialize with functions
    return (
        {
            //when returning the object if key and value are of same name than we can
            //replace it with consice syntac ->
            increment,
            //increment: increment,
            decrement,
           // decrement: decrement,
           reset,
            //reset: reset,
        }
    )
}

let createCounter = counter(2);
console.log(createCounter.increment());
console.log(createCounter.decrement());
console.log(createCounter.reset());

// class implementation of above code:

//in class the closure properties are not valid so we have to take init variable 
//into member variable inside the constructor function fot later use .
class newCounter {
    constructor(init){
        this.init = init;
        this.count = init;
    }
    increment() {
        return ++this.count;
    }
    decrement(){
        return --this.count;
    }
    reset(){
        this.count = this.init;
        return this.count;
    }
}
let object = new newCounter(4);
console.log(object.decrement());
console.log(object.increment());
console.log(object.reset());

