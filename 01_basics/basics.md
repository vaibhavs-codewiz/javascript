# strict, primitive data type, undefined , null and object in js

* use strict: 

treat all js code as newer verison
Strict mode makes several changes to normal JavaScript semantics:
Eliminates some JavaScript silent errors by changing them to throw errors.
Fixes mistakes that make it difficult for JavaScript engines to perform optimizations:
 strict mode code can sometimes be made to run faster than identical code that's not strict mode.
 don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode.

 * primitive data type :

In JavaScript, a primitive (primitive value, primitive data type) is data 
that is not an object and has no methods or properties. There are 7 primitive data types:
this primitve are immutable that  means :
 immutability of primitive data types means that once a primitive value is created, its content cannot be directly changed.

string (value in double quotes or single quotes)
number = range2^53
bigint = greater range than number
boolean = true/false
null = standalone value .
undefined
symbol = to find uniqueness will learn later

null is not a type but an object
null value assigned to variable when we cannot say what value should it have
and also need not want to remain it undefined

* undefined 

undefined is a property of the global object. That is, it is a variable in global scope.
this is also a primitive data type,
A variable that has not been assigned a value is of type undefined. 
A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.

 A function returns undefined if a value was not returned.

 you can use undefined as an identifier (variable name) in any scope other than the global scope (because undefined is not a reserved word), doing so is a very bad idea that will make your code difficult to maintain and debug.

* null

The value null is written with a literal: null. null is not an identifier for a property of the global object, like undefined can be. Instead, null expresses a lack of identification, indicating that a variable points to no object. In APIs, null is often retrieved in a place where an object can be expected but no object is relevant.

* symbol 

Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.



object
