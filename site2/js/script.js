/*
console.log("hello world");
var a = 1;
console.log(a);

function compare(x,y){
    return x > y;
};

console.log(compare(5,2));
console.log(compare(3,7));


var string = "hola";
string += " mundo";
console.log(string);

*/

// Equality ==
// Strict equality ===   , Same value and same type

var a = 4;
var b = "4";
if(a == b){
    console.log("a y b son iguales");
}
else{
    console.log("a y b no son iguales");
}

if(a === b){
    console.log("a y b son estrictamente iguales");
}
else{
    console.log("a y b no son estrictamente iguales");
}


// ***** If statement (all false)
if ( false || null || 
    undefined || "" || 0 || NaN) {
 console.log("This line won't ever execute");
}
else {
 console.log ("All false");
}

// ***** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
 console.log("All true");
}

// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);


// Default values
function orderChickenWith(sideDish) {
    sideDish = sideDish || "whatever!";
    console.log("Chicken with " + sideDish);
  }
  
  orderChickenWith("noodles");
  orderChickenWith();