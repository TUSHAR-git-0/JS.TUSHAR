"use strict"; // treate all js code as a newer version of js

// alert("hello world") // we are using nodejs, not browser
// alerrt ( 3+3 )    node js yaha error deti hai ,,,, browser m pop up hogi !



// LEARN PREMEATIVE AND NON PREMEATIVE DATATYPE 


// ECMA SCRIPT   is a organizations  =>   M java script ki documentation likhi hai !

console.log(3+3)   // js avoid the white space,2)extra space,3)tab space,4) new line space

console.log("tushar")

let name="tushar"            // string
let age=21                 // number                    
let is_logged_in=true         //boolean

//number=>  2 to power 53-1
//bigint=> 2 to power 53
//string=> "tushar" or 'tushar'
//boolean=> true or false
//null=> null               //stand alone value  (intensionally empty) (does not having any datatype)
//undefined=> undefined     // jb value define nhi hoti h to undefined hoti h   variale declare kr diya h
//symbol=> symbol()         // unique value

//obejects

console.log(typeof "name")  //string

console.log(typeof age)   //number

console.log(typeof null)   //object

console.log(typeof undefined)   //undefined


// special exceptional case 
typeof []        // "object"
typeof {}        // "object"
typeof function(){} // "function" (special case)




📒 JavaScript Notes: Primitive vs Non-Primitive
🔹 Primitive Data Types

Stored by value

Types:

Number
String
Boolean
Null
Undefined
Symbol
BigInt

Key Points:

Direct value store hoti hai

Immutable (original value change nahi hoti)

Copy karne par naya value create hota hai

Example:

let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20

🔸 Non-Primitive (Reference Types)

Stored by reference

Types:

Object
Array
Function

Key Points:

Memory ka reference store hota hai

Mutable (value change ho sakti hai)

Copy karne par same reference share hota hai

Example:

let obj1 = { name: "Tushar" };
let obj2 = obj1;

obj2.name = "JANGO";

console.log(obj1.name); // JANGO

⚠️ Main Differences
Feature	Primitive	Non-Primitive
Storage	Value	Reference
Mutable	❌ No	✅ Yes
Copy Behavior	Independent	Linked
typeof	Actual type	Mostly "object"
❗ Important Interview Points

null is primitive but typeof null === "object" (JS bug)
Arrays and functions are non-primitive
Functions return typeof === "function" (special case)
