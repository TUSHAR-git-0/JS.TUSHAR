// we have many methods to work with arrays

const marvel_heroes=["iron man","hulk","thor","captain america","spiderman"];

const dc_heroes= ["superman","batman","flash"];

// ab jb hum in dono arrays ko merge karenge then, ek array dure array ko as data lelegi (" matlab ek array k andar dusri array as input")

marvel_heroes.push(dc_heroes); // it will add dc_heroes array at the end of marvel_heroes array

console.log(marvel_heroes);///  arrays hr type k data ko store kr sakte hain (array of arrays)


// ***********************************


// so we use  concate to add two string ,( or add two elements )

const marvel_heroes1=["iron man","hulk","thor","captain america","spiderman"];
const dc_heroes1= ["superman","batman","flash"];

marvel_heroes1.concat(dc_heroes1);

console.log(marvel_heroes1);  // it will give marvel_heroes1 array

// because concat method does not change the original array, it returns a new array with the concatenated values
//// so we can use this method to add two arrays together without changing the original arrays


const all_heroes = marvel_heroes1.concat(dc_heroes1); // it will add dc_heroes1 array at the end of marvel_heroes1 array and store it in all_heroes array
console.log(all_heroes); // it will give the all_heroes array with both arrays


//******************************************* */

// we can also use SPREAD  operator to add two arrays together without changing the original arrays

const all_new_heroes = [...marvel_heroes1, ...dc_heroes1]; // it will add dc_heroes1 array at the end of marvel_heroes1 array and store it in all_new_heroes array
console.log(all_new_heroes); // it will give the all_new_heroes array with both arrays


// ****************************************************

//  when we face the array with multiple depth then we can use flat method to flatten the array
//  it will remove the extra depth of array and make it single depth array


const depth_array = [1,2,[3,4,[5,6,[7,8]]]]; // it is a multi depth array
console.log(depth_array); // it will give the multi depth array

console.log(depth_array.flat(Infinity)); // it will give the single depth array [ 1, 2, 3, 4, [ 5, 6, [ 7, 8 ] ] ] (it will remove the extra depth of array and make it single depth array)

console.log(depth_array.flat(2)); // it will give the single depth array [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ] (it will remove the extra depth of array and make it single depth array)
console.log(depth_array.flat(3)); // it will give the single depth array [ 1, 2, 3, 4, 5, 6, 7, 8 ] (it will remove the extra depth of array and make it single depth array)

//**********************************************

// some times data we fetching is not in correct format 
so we can convert and ask in correct format


console.log(Array.isArraya("tushar")); // false (it will check if the given data is array or not)
console.log(Array. form ( "tushar")); // [ 't', 'u', 's', 'h', 'a', 'r' ] (it will convert the string into array)

console.log( Array.from({ame :"tushar"})); // it will give empty array because we need to pass the iterable object to convert it into array

// ************************************************

// when we have values , then we can use array.of method  to    convert values into array

let value1="tushar";
let value2="ayush";
let value3="vikram";
let value4="kumar";

console.log(Array.of(value1,value2,value3,value4)); // it will give the array of values [ 'tushar', 'ayush', 'vikram', 'kumar' ] (it will convert the values into array)
console.log(Array.of(1,2,3,4,5)); // it will give the array of numbers [ 1, 2, 3, 4, 5 ] (it will convert the values into array)
