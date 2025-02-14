//comparisons

console.log(2 > 1);   // true
console.log(2 < 1);   // false
console.log(2 >= 1);  // true
console.log(2 <= 1);  // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true


// different types of comparisons

//conversion hone lagta h

console.log(1<"2");  // true    (because 1 is converted to string and then compared)
console.log("02">1); // false   (because 02 is converted to number and then compared)

//   jo bhi baad me likha h uske according output aayega

//NULL
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

// the reason  is that an equality check == and comparisons > < >= <= work differently.
// An equality check converts null to a number, so without any surprises, it equals 0.
//
// On the other hand, comparisons convert null to a number, treating it as 0. That’s why null is neither less than, nor equal to, nor greater than 0.

//UNDEFINED
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false

//   === is used to check the type(data type) of the variable also
console.log(2==="2"); // false because of the data type difference