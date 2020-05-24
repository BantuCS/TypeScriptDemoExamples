//Array
var list = [1, 3, 5]; // normal way
var list1 = [1, 3, 5]; //generic way
console.log(list1);
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
console.log(x);
console.log(x[0].substring(1)); // OK
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName);
//class
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello, " + this.greeting);
    };
    return Greeter;
}());
var greeter = new Greeter("world");
greeter.greet();
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//Generics
function identity(arg) {
    return arg;
}
var output2 = identity("myString");
var output3 = identity(10);
console.log(output2);
console.log(output3);
