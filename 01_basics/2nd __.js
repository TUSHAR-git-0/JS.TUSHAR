console.log("tushar sharma")
// DATATYPES AND variables  ,ECMA

const account_id="1397243792"
let account_email="tusharsharma@outlook.com"
var  account_password="123456"
account_city="New delhi"

//CHANGING THE VALUES OF VARIABLES

// account_id="1397243793"          const can't be reassigned
account_email="tusharjangra@outlook.com"
account_password="1234567"
account_city="Gurugram"

console.log(account_email)

console.table({account_id,account_email,account_password,account_city})

// we can declare the variables without using var,let,const but it is not a good practice//

// we can declare the variable using var, let.

// var is a global scope variable     -----//   don't use var as variable type
// let is a block scope variable

// we will use ( let, const ):- because it will remove the global scope variable problem

let account_state;

console.log(account_state);   //undefined