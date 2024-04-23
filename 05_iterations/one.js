// for
for(let i = 0; i <= 10; i++)
{
    const element = i;
    console.log(element);
}

// printing table using for loop

for(let i = 1 ; i<=10 ; i++)
{
    console.log(`table of ${i} is:`);
    for (let index = 1; index <=10; index++) {
        console.log(`${i} * ${index} = ${i*index}`);
    }
}

//traversing loop over array :

const array = ['a','bb','ccc'];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

//break and continue keyword :

for (let index = 1; index < 21; index++) {
    if(index == 5)
    {
        console.log(` do not log 5 and above elements `);
        break;
    }
   console.log(`value of i is ${index}`);
   
}


for (let index = 1; index < 21; index++) {
   if(index == 5)
   {
    console.log(`only skip 5 and log every other element from 1 to 20`);
   }
   console.log(`index value is ${index}`);   
}

//while loop

let char = ['a','bb','ccc','dddd'];
let index = 0;
while (index < char.length) {
    console.log(char[index]);
    index = index + 1;
}

// do while loop

let score = 21
do
{
    console.log(`value of score is ${score}`);
    score++;

}while(score <= 25);