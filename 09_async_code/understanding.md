# what is sync async code ?
sync mtlb ek kaam k baad hi dusra hoga (synchronous).
async multiple task work ek saath (asynchrounous). 
# how to identify sync and async code ?
set timeout , set timeinterval , promises , fetch , axios(package) , XMLhttprequest 
if your code contains these then it is async code . otherwise sync code .
# callback
callback hamesha ek function hota h jo async code k complete hone k baad chalta h.
example in set timeout(async code) after the given delay callback got executed .
callback are useful when request made to third party the response might take some time ,so instead of executing then and their(if sync code using response) callback allow execution only when successful response received. callback are used to execute the answer of async code(like set timeout).
# synchronous type task can be perform asynchronously using promise chaining .
# promise chaining is more readable way of writing code with multiple then .
# promise 
promise is a object which have a function as argument whose body contains a async task(always).and base on async task it provide resolve or reject .
