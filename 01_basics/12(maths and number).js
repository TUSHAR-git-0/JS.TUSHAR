const score = 400;
console.log(score); // 400  (it will automatically detect it as number)

let balance = new Number(560);  //  by using new keyword : it will create ***a object of number***'
console.log(balance); // [Number: 560]            (it will print the object of number)  and show it as number  type =="number"

console.log(typeof balance); // object  (it will show the type of balance)

//can convert number to string

console.log(balance.toString()); // 560  (it will convert the number to string)

//AB STRING KI BHOT SAARI PROPERTIES ACTIVE HO JATI HAI NUMBER MEIN BHI

console.log(balance.toString().length); // 3  (it will convert the number to string and show its length)

console.log(balance.toFixed(2)); // 560.00  (it will convert the number to string and show it with 2 decimal places  to more precise value!)

//we can also use "toPrecision" method to get the number with PRECISION

const othernumber = 12560.1234;

console.log(othernumber.toPrecise(3)); // 12500  (it will show the number with 3 decimal places)

console.log(othernumber.toPrecision(4)); // 12560  (it will show the number with 4 decimal places)

console.log(othernumber.toPrecision(3)); // 1.26e+4  (it will show the number with 3 decimal places in exponential form)

const number_with_multiple_zeros = 100000000000;
console.log(number_with_multiple_zeros.toLocaleString('en-IN')); // 10,00,00,00,00,000  (it will show the number with commas)


// +++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); // Math { E: 2.718281828459045, LN2: 0.6931471805599453, LN10: 2.302585092994046, LOG2E: 1.4426950408889634, LOG10E: 0.4342944819032518, … } these are some properties of math object use them just by writing "Math."

// object {MATH} {} THIS SHOWS  math is object which contains many properties

console.log(Maths.abs(-5)); // 5  (it will give the absolute value of number)(POSITIVE VALUE)
console.log(Maths.abs(-5)); // 5  (it will give the absolute value of number)(POSITIVE VALUE)

console.log(Math.round(4.6)); // 5  (it will round off the number to nearest integer)
console.log(Math.round(4.4)); // 4  (it will round off the number to nearest integer)

console.log(Math.ceil(4.1)); // 5  (it will round off the number to nearest greater integer)
console.log(Math.floor(4.9)); // 4  (it will round off the number to nearest smaller integer)

console.log(Math.sqrt(16)); // 4  (it will give the square root of number)

console.log(Math.min(1,2,3,4,5,6,7,8,9,10)); // 1  (it will give the minimum number from the list)
console.log(Math.max(1,2,3,4,5,6,7,8,9,10)); // 10  (it will give the maximum number from the list)

console.log(Math.random()); // 0.123456789  (it will give the random number between 0 and 1)
console.log(Math.random()*10+1); // 5.123456789  (it will give the random number between 1 and 10)
console.log(Math.floor(Math.random()*10+1)); // 5  (it will give the random number between 1 and 10 in integer form)

// max-min+1 is used to get the random number between min and max but not including zero


const min=10
const max=20

Math.random(Math.floor(Math.random()*(max-min+1)+min)); // 15  (it will give the random number between 10 and 20 in integer form)
// and many more methods are there in math object



