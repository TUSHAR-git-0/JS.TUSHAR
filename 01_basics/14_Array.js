// arrays

// "()" are palenthesis
// "[]" are brackets
// "{}" are curly braces

// arrays are a list of values, brackets are used to create arrays

// arrays are used to store multiple values in a single variable  values can be of any type (string, number, object, array, function, etc.) or mix of all types

const myarray = [1, 2, 3, 4, 5]; // array of numbers
const myarray1 =[1, 2, 3, 4, ,"tushar", true, null, undefined]; // array of numbers and strings and boolean and null and undefined

const chutiye=["tushar", "ayush", "vikram", "kumar", "harshit"]; // array of strings

const myarr2= new Array(1, 2, 3, 4, 5); // array of numbers using new keyword

console.log(myarr2[1]); // 2 (it will give the value of 1st index of array)

console.log(myarr2); // [ 1, 2, 3, 4, 5 ] (it will give the array)

// array size is dynamic, it can grow and shrink as needed in JAVASCRIPT

//copy  of array is shallow copy, it means if we change the value of one array then the other array will also change  ( same refrence of memory is used for both arrays)

// while in deep copy we create a new array and copy the values of old array to new array, so if we change the value of one array then the other array will not change (different refrence of memory is used for both arrays)


// ARRAY METHODS *******************************************************************************************************************************************************************

myarr2.push(5); // use to add element at the end of array (it will add 5 at the end of array)
console.log(myarr2); // [ 1, 2, 3, 4, 5, 5 ] (it will give the array with 5 at the end)

myarr2.push(6, 7, 8); // use to add multiple elements at the end of array (it will add 6, 7, 8 at the end of array)

myarr2.pop(); // use to remove the last element of array (it will remove 8 from the end of array)

myarr2.unshift(9); // use to add element at the beginning of array (it will add 9 at the beginning of array)

//problem : inserting element at the beginning of array is costly operation because we have to shift all the elements to the right to make space for the new element

myarr2.shift(); // use to remove the first element of array (it will remove 9 from the beginning of array)

// questions

console.log(myarr2.includes(5)); // true (it will check if 5 is present in the array or not)
console.log(myarr2.indexOf(5)); // 4 (it will give the index of 5 in the array)
console.log(myarr2.indexOf(100)); // -1 (it will give -1 if 100 is not present in the array)
console.log(myarr2.lastIndexOf(5)); // 4 (it will give the last index of 5 in the array)


// ******************************

join() // use to  add/ join the elements of array into a string (it will join the elements of array into a string with comma as separator)

const newArr= myarr2.join()

console.log(myarr2);
// [ 1, 2, 3, 4, 5 ] (it will give the array)

console.log(newArr);
// "1,2,3,4,5" (it will give the array as string with comma as separator)

//*********************************

slice() // use to slice the array from given index to given index (it will slice the array from 1st index to 3rd index)

console.log("A",myArr2); // print   A [ 1, 2, 3, 4, 5 ] (it will give the array)

const myn1= myArr2.slice(1,3); // it will slice the array from 1st index to 3rd index (it will not include the 3rd index)

console.log(myn1); // [ 2, 3 ] (it will give the sliced array)

console.log( "B", myArr2); // print   B [ 1, 2, 3, 4, 5 ] (it will give the array)


// (it will not change the original array)*********************************



const myn2= myArr2.splice(1,3) // it will slice the array from 1st index to 3rd index (it will include the 3rd index) and remove the elements from the original array
console.log(myn2); // [ 2, 3, 4 ] (it will give the sliced array)
console.log( "C", myArr2); // print   C [ 1, 5 ] (it will give the array after removing the elements from the original array)

// (it will change the original array)*********************************
// (it will remove the elements from the original array)
