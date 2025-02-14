// kis trh se memory m data ko rakha jata h or access kiya jata h 
//  us basis par datatype to 2 parts m divide hote h
//     1. Primitive datatype
//     2. Non-primitive datatype


// *****Primitive datatype

// 7types: 1. Number, 2. String, 3. Boolean, 4. Undefined  (variable ki value decide nhi kari abhi)  , 5. Null, 6. Symbol(to make anything unique), 7. BigInt

 
console.log("javascript dynamically typed language h ya statically typed language h");

console.log("dynamically typed language h  " + "==" + "   jb bhi variable declare karte h to us variable ko datatype nhi batana padta h");
const score = 100.3; // number
const score1= 100; // number
const name ="tushar"; // string
const isloggedin = true; // boolean

const outsidetemo= null; // null
let test; // undefined

let id= symbol("123"); // symbol
let anotherid= symbol("123"); // symbol

//if we pass same value in symbol then it will not be same  (SYMBOL is used to make anything unique)

console.log(id === anotherid); // false

const bigNumber= 1234567890123456789012345678901234567890n; // bigint

console.log("typescript statically typed language h  " + "==" + "   jb bhi variable declare karte h to us variable ko datatype batana padta h");


        // ******Non-primitive datatype (Reference datatype)
        // jinka refrence directly allocate kiya ja sakta h memory m
        // 3types: 1. Object, 2. Array, 3. Function
     
        //ARRAYS
    const array =["tushar","shaktiman","naagraj","doga","bhootnath","chotabheem"];

    //OBJECTS    : in form of key value pair  (curly braces m jitne bhi key value pair hote h unhe object kehte h)
   const obj={
    name:"tushar",   // name,age,class are keys
    age: 21,
    class: "12th",

   } 

   //FUNCTIONS

  const myfunction=function(){
    console.log("hello world");
  }
//    sare non primitive datatype OBJECT hote h

  console.log(typeof myfunction); // function (OBJECT FUNCTIO)

  console.log(typeof outsidetemo); // object  (NULL is also an OBJECT)

  console.log(typeof id); // symbol,