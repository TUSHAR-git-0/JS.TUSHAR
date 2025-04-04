//   Dates (object) are calculated from 1st january 1970
// store and calculated in milliseconds (1 sec = 1000 milliseconds)

//dates are proposal for standardization in ECMAScript 1 in ("temoral proposal")

//the new keyword is used to create an instance of an*********** object ****** that has a constructor function. It’s essentially used to create a new object and allocate memory for it.

// DATE IS OBJECT

let mydate= new Date();
console.log(mydate); // 2025-02-16T15:13:38.000Z  (it will give the current date and time)
console.log(mydate.toString()); // Tue Feb 16 2025 20:43:38 GMT+0530 (India Standard Time)  (it will give the current date and time in GMT)
console.log(mydate.toDateString()); // Tue Feb 16 2025  (it will give the current date)
console.log(mydate.toLocaleString()); // 2/16/2025, 8:43:38 PM  (it will give the current date and time in local time)

console.log(typeof mydate); // object  (date is object)

let mycreatedDate= new Date(2003,7,1); // 1st august 2003 ***********************************  (month is 0-based index)  only when we give sinle digit argument then it will be 0-based index

console.log(mycreatedDate.toLocaleString); // 8/1/2003, 12:00:00 AM  (it will give the date in local time)

let mycreatedDate1= new Date(2-9-2001); 
console.log(mycreatedDate1.toLocaleString); // 1/1/1970, 12:00:00 AM  (it will give the date in local time)

let mycreated_date2 =new date( "2023-11-01"); //   ( IN YYYY-MM-DD FORMAT) 1st november 2023
console.log(mycreatedDate1.toString()); 

// to decide winner of constants and  polls (to know the fastest answer) we use** gettime method**

let mytimestamp= new Date.now();

// timestamp is the number of milliseconds since 1st january 1970
// it is used to calculate the time taken by user to solve the quiz and the time taken by the fastest user to solve the quiz

console.log(mytimestamp.getTime()); //getTime() method is used to get the time in milliseconds from 1st january 1970

// 1655569838000  (it will give the time in milliseconds from 1st january 1970)

//to design quiz and to know the time taken by user to solve the quiz we use GETTIME method

console.log(mycreatedDate1.getTime()); // 978307800000  (it will give the time in milliseconds from 1st january 2001  se input date tak ka time)


// now we can compare the time taken by user to solve the quiz and the time taken by the fastest user to solve the quiz


// we can get this time in seconds by dividing it by 1000

console.log(mycreatedDate1.getTime()/1000); // 978307800  (it will give the time in seconds from 1st january 2001) but can be in decimal form 
//  to remove decimal we can use "math.floor" method
console.log(Math.floor(mycreatedDate1.getTime()/1000)); // 978307800  (it will give the time in seconds from 1st january 2001) in integer form

// we can also get the time in minutes by dividing it by 60

let newdate = new Date(2003,8,2); // Corrected date creation
console.log(newdate.getMonth()+1); // 9 (it will give the month of date, 0-based index)
console.log(newdate.getDate()); // 2 (it will give the date of date)
 console.log(newdate.getDay()); // 6 (it will give the day of date, 0-based index)


// using string_interpolation we can get the date in string form

console.log(`${newdate.getDate()}/${newdate.getMonth()+1}/${newdate.getFullYear()}`); // 2/9/2003  (it will give the date in string form)



// Using toLocaleString() in JavaScript is beneficial for formatting numbers, dates, and times according to the locale (geographical, cultural, or linguistic settings) of the user's environment. Here are some key reasons to use toLocaleString():

//let date = new Date();
// console.log(date.toLocaleString('en-US')); // "MM/DD/YYYY, HH:MM:SS AM/PM" in the US
// console.log(date.toLocaleString('en-GB')); // "DD/MM/YYYY, HH:MM:SS" in the UK
// console.log(date.toLocaleString('fr-CA')); // "YYYY-MM-DD, HH:MM:SS" in Canada (French)



newdate.toLocaleString('default', { // toLocaleString is used to get the date in string form(and date as an object)
    month: 'long'
 }); // September  (it will give the month ia a string form)
