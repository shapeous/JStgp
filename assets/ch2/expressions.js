// INVOCATIONS
// These finctions belong to the global object
function times(a, b) {
  return a * b;
}
console.log(times(10, 2)); // Expression
console.log(window.times(10, 2)); // Expression

function getGlobalObject() { return this; }
console.log(getGlobalObject()); // Expression

// Functions as methods
var Person =
{ "firstName": "John"
, "lastName": "Doe"
, "fullName": function () {
    return this.firstName + " " + this.lastName;
  }
, "getPerson": function () { return this; }
}
console.log(Person.fullName()); // Expression
console.log(Person.getPerson()); // Expression

// Invoking a function with a function constructor
function Human (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
var John = new Human("John", "Doe");
console.log(John.firstName); // Expression

// Invoking functions with function methods call and apply
function multiply(a, b) {
  return a * b;
}
obj = {};
obj = multiply.call(obj, 10, 2);
console.log(obj); // Expression
myArray = [2, 40];
console.log(multiply.apply(obj, myArray));

// REFINEMENT
function oneFunc() {
   return "world"
}

console.log(oneFunc);

oneFunc = (function (original) {
   // a closure will prevent the original function -- which is an object
   // from ever being lost
   return function () { 
      console.log("before");
      var ret = original()
      console.log("after")
      return "hello " + ret
   }
})(oneFunc);

console.log(oneFunc());

// TYPEOF
console.log(typeof 1);
console.log(typeof "");
console.log(typeof true);
console.log(typeof awesomeVar);
console.log(typeof oneFunc);
console.log(typeof myArray); console.log("-- The previous line should be an Array instead of an Object.");
console.log(typeof null); console.log("-- The previous line, NULL should not be an Object.");

// Invocation
(1);
(x = 12 + 96, y = 2);
console.log(x + y);

// Refinement
console.log(Person.firstName);
console.log(myArray[1]);

Person.age = 44; // Add a new property
console.log(Person);
delete Person.age; // or delete Person["age"]
console.log(Person);
