/**
  * Sytax for Variable Declaration: let identifier: number = value;  
  */
  //number data type
  console.log('Built-in type data types or primitives data types')
let num1: number = 12;
let num2: number = 13;
console.log(num1+num2);

//String data type
let empName: string = "Rohan";   
let empDept: string = "IT";   
// Before-ES6  
let output1: string = empName + " works in the " + empDept + " department.";   
// After-ES6  
let output2: string = `${empName} works in the ${empDept} department.`;   
console.log(output1); 
console.log(output2);  
//boolean datatype
let isDone: boolean = false;  
console.log(isDone);  
//void datatype
function helloUser(): void {  //function creation
    console.log("This is a welcome message");  
    }  
  helloUser(); // function call

//any type
// Syntax: let identifier: any = value; 
let num3: any = 'hello'; // first num assigned to string type
console.log(num3);
num3=10; // second it is assigned to number type
console.log(num3);



