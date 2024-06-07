// //object literal.
// let user = {
//     userName : "vaibhav",
//     role: "developer",
//     getDetail : function () {
//         password = "721";
//         console.log(this);
//        return this;//this keyword return the entire function.
//     }

// }

// console.log(this);
// console.log(user.getDetail());


//constructor function

getDetail = function(name ,password ,domain){
    //properties
    this.name = name;
    this.password = password;
    this.domain = domain;
    //methods
    this.getName = function (){
        console.log(`have a good day ${this.name}`);
    }
    return this;
}
let user1 = new getDetail("vaibhav","721","cs");
let user2 = new getDetail("david",'699',"ml");
console.log(user2);
console.log(user1);
console.log(user1.getName);
console.log(user1.constructor);//reference to itself
//if not use new (constructor function) this would lead to problem of overwrite.
