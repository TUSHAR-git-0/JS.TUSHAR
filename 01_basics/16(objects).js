//OBJECTS : object declare karne k 2 tarike hote hain
// // 1. object literal syntax : {}  (object literal syntax)
// // 2. constructor function syntax : new Object() (constructor function syntax)


//SINGLETON OBJECTS : jb literals ka use krte hain to hum ek hi object create karte hain. to singleton  nhi banta hai.
// 
// contructor ka use krte h then singleton  banta



// Object.create()  ----->>                       it will create a new object with the specified prototype object and properties , constructor function syntax

// objects m hum key - values pair m data store krte hain
// //  key = name of the property , value = value of the property


// Object literals


//  declare symbol data type
//  symbol data type ko declare krne k liye hum Symbol() function ka use krte hain
//  symbol data type ko hum kisi bhi object k andar as key use kr sakte hain

const SYM= Symbol("key"); // it will create a new symbol data type with the specified key  , now we can use this symbol as key in the object

const jsuser={
    "full name":"tushar sharma", // full name is stored as string and value is also stored as string

    name:"tushar",             //  name is stored as string  and value is also stored as string
    age:23,                              // age is stored as number and value is also stored as number
    loction:"delhi",                     // loction is stored as string and value is also stored as string
    ismarried:false,                            // ismarried is stored as boolean and value is also stored as boolean           
    hobbies:["cricket","football","reading"],   // hobbies is stored as array and value is also stored as array
    email:" tusharsharma000000@gmail.com",

    // SYM : "key1",

    [SYM]: "key1", 
}

console.log(jsuser); // it will give the jsuser object   [sare key - values pair ko print  krta hai]

// we can access the object properties using dot notation or bracket notation

console.log(jsuser.name);       // dot notation m humme  varible ka type nhi likhna padta hai***********************

console.log(jsuser["name"]); // bracket notation m humme  varible ka type likhna padta hai************************

// ***************** full name  ko ( . ) notation se access nhi kr sakte hain  cause here we have to give datatype as string
// so we have to use bracket notation to access the full name property of the object


// AB " SYMBOL DATA TYPE " K BARE ME JANTE HAIN  :: BAKE TO uppar 

console.log(jsuser.SYM)   //   it will give output== key1 

console.log(jsuser["SYM"]) // it will give output== key1

console.log( typeof(jsuser[SYM]))  // it will give output== string  (it will give the type of the value of the symbol key in the object)

// ********************* MTBL SYM ABHU AS STRING STORE H OBJECT M********************

// ****** TO MAKE SYMBOL TO WORK AS SYMBOL IN OBJECT WE HAVE TO USE SYMBOL AS KEY IN THE OBJECT
//  USE square bracket in the object to make it work as symbol in the object

//   [SYM]: "key1"  // it will create a new symbol data type with the specified key and store it in the object as key and value pair

console.log(jsuser[SYM]) ;
console.log(typeof(jsuser[SYM])) // it will give output== symbol  (it will give the type of the value of the symbol key in the object)



// ****?   we can change the value of the property of the object using dot notation or bracket notation

jsuser.email="tushar_sharma10001001@gmail.com";
console.log(jsuser.email); // it will give the updated email of the object


// we can freeze the vlues of the object using Object.freeze() method

// Object.freeze(jsuser);    ********************       // it will freeze the object and make it immutable (it will not allow to change the values of the object)

jsuser.email="tushar_sharma 11111 chat gpt ..@gmail.com";
console.log(jsuser.email); 


// run karke jsuser object ko check kro  SYM symbol bn chuka h


// using FUNCTIONS IN OBJECTS 

// creating functions in objects is called methods of the object

jsuser.greeting = function(){
    console.log( "HELLO WORLD!!");
}
console.log(jsuser.greeting()); //       HELLO WORLD!!  ( FUNCTION EXECUTE)(it will call the greeting method of the object and print the message)

console.log(jsuser.greeting); //         FUNCTION [ANONYMOUS ]   ( FUNCTION NOT EXECUTE])      it will give the function of the object (it will give the function of the object)


// WE CAN REFER TO THE THE VALUES OF THE OBJECT USING *THIS* KEYWORD IN THE FUNCTION

jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`); // it will give the name of the object using this keyword in the function-
}

console.log(jsuser.greetingtwo()); // HELLO WORLD+tushar  ( FUNCTION EXECUTE)(it will call the greeting method of the object and print the message)
