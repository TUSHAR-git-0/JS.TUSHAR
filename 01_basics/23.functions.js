// arrow functions and this keyword
// context  ka matlab hai ki kis ki baat ho rahi hai

const user = {
    username: "tushar",
    price :999,

    welcomeMessage:function(){
        console.log(`Welcome ${this.username} to our website`);//  this is used because " username "is out of scope for console.log
        // to use current context we have to use this keyword

        console.log(this) // this means  "this" sare variable ko refer karta hai jo user object ke andar hai
    }

}
user.welcomeMessage(); // Welcome tushar to our website

user.username="ayush"; // value change ho gyi!

user.welcomeMessage(); // Welcome ayush to our website

console.log(this );  //  {} :-this will print nothing because yha no variable is defined in node(outside)

//browser m sabse jyada user object h window object


// function chai(){
//     let username="tushar"
//     console.log(this); // window objects (bhot sare objects return honge )  , when we use *this* inside any function
//     console.log( this.username);// undefined
// }
// chai()

function chai(){
    let username="tushar"
    console.log(this); // window objects (bhot sare objects return honge )  , when we use *this* inside any function
    console.log( this.username);// undefined

    // hum yaha NORMAL function m  * this *  ka use krte hain
    // it refers to the global object (window in browsers). Since you're using a regular function, this inside it is not bound to the enclosing scope but instead refers to the global context.
    // this.username will be undefined because username is not defined in the global scope
    // this normal function k andar global object ko refer karta hai
// 

}

// if you want  * this *    to refer to the function’s own object, consider using an object method or an************** arrow function:********************


// to make arrow function ( remove the function keyword , and use =>)

    const chai=()=>{
        let username="tushar"
        console.log(this); // window objects (bhot sare objects return honge )  , when we use *this* inside any function
       
    }

// we can use this in both arrow function and normal function

// arrow function (   ( )=>{ }                ) bs

const addtwo=( a,b)=>{  
    return (a+b);
    
}
console.log(addtwo(5,6)); // 11

// implicite tarike se funcion create krna

const addtwo1=( a,b)=>(a+b)         // sara code 1 line m le aao , then return hta do 

console.log(addtwo1(3,7))

// arrow functions are widely use in loops

const Array= [1,2,4,5,78,86,5]

Array.forEach(function() {})

Array.forEach(()=>{})  // arrow functions

Array.forEach(()=>())// all




