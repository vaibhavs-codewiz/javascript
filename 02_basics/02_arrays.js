//concatenation of arrays
const marvel_heroes = ["antman", "thor", "captain-america"];
const dc_heroes = ["batman", "superman", "flash"];

// marvel_heroes.push(dc_heroes);this changes marvel array
console.log(marvel_heroes); //since array can hold different type of values so it takes dc_hero as an whole array inside array .

//so better way is use concate method . which return array if array concated

let new_heroes = marvel_heroes.concat(dc_heroes);
console.log(new_heroes); //the correct way to concat into single array .
//in concate we can only concat the 2 arrays

// spread operator
const Indian_heroes = ["shaktiman", "baalvir"];
const all_new_heroes = [...marvel_heroes, ...dc_heroes, ...Indian_heroes];
console.log(all_new_heroes); //concatinate multiple arrays , no change in other array

//when multiple arrays inside a single array
const mix_arr = [12, 3, [1, 2, 3], [12, 3, [12, 23, 4]]]; //convert into single array

let mix_to_single = mix_arr.flat(Infinity); //parameter is depth of mix array
console.log(mix_to_single);

//to coonvert any non array to array

console.log(Array.isArray("vaibhav123")); //false
console.log(Array.from("vaibhav123")); //converted to array

console.log(Array.from({ name: "vaibhav" })); //will return empty array in case of object since not specify array of key or value .

let sc1 = 10;
let sc2 = 20;
let sc3 = 30;
console.log(Array.of(sc1, sc2, sc3)); //Returns a new array from a set of elements.
