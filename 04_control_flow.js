//conrol flow if else, else if , switch
//logical operators == <= >= < > !== ===
const score = 200;

if (score == 200) {
  const power = "fly";
  console.log(`power is : ${power}`); //here no prblm in execution
}
// console.log(`power is : ${power}`);//power is undefined out of scope which is good thing

if (score == 200) {
  var power = "fly";
  console.log(`power is : ${power}`); //no problem
}
console.log(`power is : ${power}`); //here also it get executed , problem with var as it is not limited to scope .

//short hand notation :

if (score > 100) console.log("working well");

// multiple lines can written without {} by separating with , but not assume as a good practise so avoid using this syntax :

if (score > 30) console.log("its working"), console.log("now also working");

// switch
//shift + alt + down arrow (selecting and copying)

let month = 3;
switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;

  default:
    console.log("wrong input");
    break;
}

// learn every day

