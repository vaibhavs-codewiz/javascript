let name = "vaibhav";
let age = 20;
console.log("my name is " + name + " my age is " + age);
//less readable format of concating strings with variables .
//the better more readable idea is :
//string interpolation

console.log(`my name is ${name} my age is ${age}`); //same output

//another style of creating string :

let newName = new String("vaibhavvs");

console.log(newName); //this is not simple variable but an object associated with lots of methods and have indexing

console.log(newName.toUpperCase()); //wont change original value
console.log(newName.charAt(4));
console.log(newName.indexOf("v"));
//there are numerous methods associated with string can be sen on all at once on browser at console like substring , slice etc.

let animeName =
  "    one piece  djjjjjjjjjjj                                              ffffffffffffff";
console.log(animeName.trim()); //one piece
//trim removes the end spaces and also new line spaces but not the middle space so that we avoid pushing the extra space into database .

let url = "https://vaibhav.com/v sharmas";
//browser automatically adds %20 when find space in url so to avoid this we can use string method replace
url = "https://vaibhav.com/v%20sharmas";
console.log(url.replace("%20", "-")); //change in original url
console.log(url);
console.log(url.includes("sharmas")); //true if parameter value present in string
