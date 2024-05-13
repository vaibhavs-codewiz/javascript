// call stack in js
//it is a data structure which keep tracks of the function which got executed .
//internally for all the function call, *stack frame* gets created which keeps function call 
//in it in LIFO order .
//function call remain in stack frame unless it got executed completely.
//as soon as the function execution done the local variable of function also get remove .
//consider example for better understanding :-

function one(){
    return 1;
}
function two()
{
    return one() + one();
}
function three()
{
    let ans = two() + one();//ans is a vatiable with functional scope
    console.log(ans);//3
}
three();//remain in stack frame for longest time .
//call stack can be visualize by applying break point inside the debugger mode in 
//browser.