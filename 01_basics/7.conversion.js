// lecture 5 & 6 k notes bana lo

let value  = 7;
let stringnumber= String(value);
console.log(stringnumber); // 7

let value1= 3;
let negvalue= -value1;
console.log(negvalue);    //   -3

// console.log(2 + 2 + '1'); // 41     
// console.log('1' + 2 + 2); // 122        (agr suru me string hai toh baaki sab string hi hoga)
// console.log(2 + '2' + 2); // 222        (agr beech me string hai toh baaki sab string hi hoga)
// console.log(2+2);// 4
// console.log(2-2);// 0
// console.log(2*2);// 4
// console.log(2/2);// 1
// console.log(2%2);// 0
// console.log(2**2);// 4


// cancatenation of string

let name = "tushar ";
let age = 22;
let cancatenation= name + age;  // tushar 22
console.log(cancatenation);

console.log((3+4)*2 % 4);   // use ( ) for long expressions 


// more expressions
console.log(true); // true
console.log(+true); // 1

// console.log(true+); // this will give an error

console.log(+""); // 0

let num1,num2,num3;     // multiple variable declaration is not considered as good practice
num1=num2=num3=2+3;

let gamecounter=100
gamecounter++;
console.log(gamecounter); // 101
console.log(++gamecounter); // 101   (pre increment)
