# set timeout and clear timeout
* The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
* syntax of set timeout = setTimeout(function_ref,delay);
* parameters : 

* functionRef

A function to be executed after the timer expires.

* delay (Optional)
The time, in milliseconds that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.

Note that in either case, the actual delay may be longer than intended; see Reasons for delays longer than specified below.

Also note that if the value isn't a number, implicit type coercion is silently done on the value to convert it to a number — which can lead to unexpected and surprising results; see Non-number delay values are silently coerced into numbers 

*Return value
The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout.

It is guaranteed that a timeoutID value will never be reused by a subsequent call to setTimeout() or setInterval() on the same object (a window or a worker). However, different objects use separate pools of IDs.
Working with asynchronous functions
setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires.

## clear timeout

* The global clearTimeout() method cancels a timeout previously established by calling setTimeout().
If the parameter provided does not identify a previously established action, this method does nothing.
* syntax : clearTimeout(timeoutID);
* timeoutID
The identifier of the timeout you want to cancel. This ID was returned by the corresponding call to setTimeout().
* return value none

## set interval and clear interval 

* 