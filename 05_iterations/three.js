//for of loop 
//on objects (not iterable for objects but for array and string)

let myObject = {
    js: 'javascript',
    py: 'python',
    cpp: 'c++',
    rb: 'ruby'
};
// for (const it of myObject) {
//     console.log(it);//not iterable
// }
// for (const [key,value] of myObject) {
//     console.log(key,value);//not iterable
// }
let array = [1,2,3,4]
for(let it of array)
{
    console.log(it);//iterable 
}
let name = "vaibhav";
for(let it of name)
{
    console.log(it);//iterable
}

//better option for iteration on objects is for in loop

for(let it in myObject)
{
    console.log(it);//logs the key
    console.log(`key is ${it}, value is ${myObject[it]}`);
}
for(const it in name)
{
    console.log(it);
}
for(const it in array)
{
    console.log(it);
}