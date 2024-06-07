# javascript
js is primarily prototype based language and classes in js is syntactical sugar added on js  because it provides a more familiar and concise way to create objects and handle inheritance, similar to classical OOP languages like Java or C++. However, under the hood, it still uses prototypes.
Prototype-Based Inheritance:

JavaScript's inheritance is prototype-based, meaning objects can inherit directly from other objects.

# spaghetti code 
Spaghetti code is not an endearing term. It’s a word that describes a type of code that some say will cause your technology infrastructure to fail.
* in javascript to avoid the issue of spaghetti code the oop features are introduced , it also leverage the js with the special concepts of java like services etc.

# object literal in js 
* An object literal/initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}). Objects can also be initialized using Object.create() or by invoking a constructor function with the new operator.
* An object initializer is an expression that describes the initialization of an Object. Objects consist of properties, which are used to describe an object. The values of object properties can either contain primitive data types or other objects.
* Duplicate property names
When using the same name for your properties, the second property will overwrite the first.
* this keywprd help to work on current context , the current context in node is an empty curly braces and in browser it is the window object console.log(this).

* it is easy to create the multiple objects with the similar kind of properties but different values with the help of constructor function than using object literal.

# constructor function 
* it provide us with the new copy , which help to maintain the credability of the original one .
* in js if same function is called with different data without using constructor function then the recent function call will overwrite the data of original function with recent function call data.
* The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
* Parameters
constructor
A class or function that specifies the type of the object instance.

arg1, arg2, …, argN
A list of values that the constructor will be called with. new Foo is equivalent to new Foo(), i.e. if no argument list is specified, Foo is called without arguments.
* When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:

Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.

Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).

Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].

If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)

* js instance of 

# four pillars of oops :

* 
* 
* 
* 
