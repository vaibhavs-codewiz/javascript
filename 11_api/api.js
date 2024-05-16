//how api are received and used in js :-
let jsonRes =
  '{"fact": "While many parts of Europe and North America consider the black cat","length": 46}';
//validating json res to object for use in js as we cannot use directly json
let validRes = JSON.parse(jsonRes);//parse data from sting to js object.
console.log(jsonRes);//log as a string
console.log(validRes);//log as an object
console.log(validRes.fact);//access only fact

//js object to json:-
let obj = {
    userName : 'vaibhav',
    marks : 8.5,
};
console.log(obj);//js object logged
let jsonObj = JSON.stringify(obj);//json data logged without stings here but key in string .
console.log(jsonObj);

