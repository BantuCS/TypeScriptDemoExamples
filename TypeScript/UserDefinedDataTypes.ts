//Array
let list : number[] = [1, 3, 5]; // normal way
let list1 : Array<number> = [1, 3, 5];  //generic way
console.log(list1);

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
console.log(x);
console.log(x[0].substring(1)); // OK

//enum
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
console.log(colorName); 

//class
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        console.log("Hello, " + this.greeting);
    }
}
let greeter = new Greeter("world");
greeter.greet();

//interface
interface LabeledValue {
    label: string;
}
function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//Generics
function identity<T>(arg: T): T {
    return arg;
}
let output2 = identity<string>("myString");
let output3 = identity<number>(10);
console.log(output2);
console.log(output3);