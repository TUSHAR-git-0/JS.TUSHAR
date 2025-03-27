const name="tushar";       
const age=21;

console.log(typeof 21); // number)

console.log(name + age + "ka ho gya h")// tushar21ka ho gya h ,,,,,,,, using ( + ) operator is not a good practice to concatinate the string

// we use( ` `) backticks to concatinate the string and  ${} to use the variable in string

console.log(`hello my name is ${name} and my repo countis is ${age}`); // hello my name is tushar and my repo countis is 21

//new way to create string is
const generate_string = new String('hello world')  //  by using new keyword : it will create a object of string  and in this way we can use string methods ,properties
console.log(generate_string[0]); // h
console.log(generate_string.length); // 11

//there are many methods in string we can use

console.log(generate_string.toUpperCase()); // HELLO WORLD   (change in(copy) string will not change the original string)
console.log(generate_string.__proto__); // String

// use "toLowerCase"   instead of "tolowercase"  (it will give error)

console.log(generate_string.toLowerCase()); // hello world   
console.log(generate_string.charAt(6)); // w
console.log(generate_string.indexOf('w')); // 6 

const newstring1 = generate_string.substring(0,5); // hello   (substring will not include the last index)
console.log(newstring1);

const another_string= generate_string.slice(-4,5);//  (slice will include the last index) (and we can give negative values as well   it will print in reverse manner)
console.log(another_string); // worl


//when we are dont want to store"unwanted spaces" in string we can use trim method****( trim start and end spaces)

const string_with_spaces="    hello world    ";
console.log(string_with_spaces); //     hello world     //
console.log(string_with_spaces.trim()); // hello world//

//if we want to replace a word in string we can use replace method

const replace_string = "https://tushar%20sharma%20singh";
replace_string.replace('%20','--'); // https://tushar--20sharma%20singh  (it will replace only first occurence)

// to find weather the string contains a particular word or not we can use "includes" method

replace_string.includes('tushar'); // true
replace_string.includes('tushar',6); // false  (it will start searching from index 6)

// to split the string on any basis , we can use "split" method

const split_string = "hello world this is tushar sharma";
split_string.split(" "); // ["hello", "world", "this", "is", "tushar", "sharma"]    (it will split the string on the basis of space(" "))
console.log(split_string.split(' '));

const split_string1 = "hello-world,this,is,tushar-sharma";
split_string1.split('-'); // ["hello", "world,this,is,tushar", "sharma"]  (it will split the string on the basis of -)
console.log(split_string1.split('-')); // ["hello", "world,this,is,tushar", "sharma"]
