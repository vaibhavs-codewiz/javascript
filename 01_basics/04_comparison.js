console.log("2" > 0); //true
console.log("02" > 0); //true
//it is advisable to perform comparison operations only on similar data type.
console.log(Number("2") > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//make sure that data type of comparators are similar otherwise unpredictable results
//learn about coercion .

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
// in js equality check and comparisons have different rules of working so different outputs
//avoid use of this type of comparisons .

//strict check ===
console.log("2" === 2);
// === also checks the data type of comparators .
