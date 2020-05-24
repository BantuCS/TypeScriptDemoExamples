/**
  * Sytax for Variable Declaration: let identifier: number = value;
  */
//number data type
console.log('Built-in type data types or primitives data types');
var num1 = 12;
var num2 = 13;
console.log(num1 + num2);
//String data type
var empName = "Rohan";
var empDept = "IT";
// Before-ES6  
var output1 = empName + " works in the " + empDept + " department.";
// After-ES6  
var output2 = empName + " works in the " + empDept + " department.";
console.log(output1);
console.log(output2);
//boolean datatype
var isDone = false;
console.log(isDone);
//void datatype
function helloUser() {
    console.log("This is a welcome message");
}
helloUser(); // function call
//any type
// Syntax: let identifier: any = value; 
var num3 = 'hello'; // first num assigned to string type
console.log(num3);
num3 = 10; // second it is assigned to number type
console.log(num3);
