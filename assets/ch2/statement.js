// label example
var i = 0
  , t = 0
  , n = 100;

// This loop adds all numbers from 1 to 10 excluding 5.
loop:
for (; i < n; i += 1) {
  if (i === 5 ) { continue loop; }
  if (i === 11) { break loop; }
  t += i;
}
console.log("\nLabel: using continue and break to skip adding 5 and end the loop (set to 100) after 10 iterations.")
console.log("1 + 2 + 3 + 4 + 6 + 7 + 8 + 9 + 10 = " + t);

// for...in loop example
var obj = {
  a: 1, b: 2, c: 3
}

console.log("\nProperties on obj")
for (var property in obj) {
  console.log("o." + property + " = " + obj[property]);
}

function ColoredObj() {
  this.color = "red";
}

ColoredObj.prototype = obj;

var cObj = new ColoredObj();

console.log("\nProperties on cObj which inherits from obj")
for (var property in cObj) {
  if (cObj.hasOwnProperty(property)) {
    console.log("o." + property + " = " + cObj[property]);
  }
}

// try...catch example
console.log("\nTry...Catch: Throwing a custum exception")
try {
  throw "too awesome exception";
}
catch(error) {
  console.error(error);
}

// return: do not place a line ending between return and the expression
objByRef = function() {
  return
  obj;
}

console.log("\nReturn: do not place a line ending between return and the expression")
console.log("objByRef() === undefined? " + (objByRef() === undefined));
console.log(objByRef().b);
