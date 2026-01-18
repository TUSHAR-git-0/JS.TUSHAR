let score =33
let score1="33"
console.log(score)   //33
console.log(typeof score)  //number

console.log(score1)   //"33"
console.log(typeof score1)  //string

//CONVERSIONS

// 1) string to number

        let value_in_number=Number(score1);  // ye string ko number me convert kr dega
        console.log(typeof value_in_number)  //number

        let score2="33.5"
        let value_in_number1=Number(score2);
        console.log(value_in_number1)  //33.5
        console.log(typeof value_in_number1)  //number

        let score3="33eriueivn"
        let value_in_number2=Number(score3);
        console.log(value_in_number2)  //NaN  =not a number
        console.log(typeof value_in_number2)  //number           MEANS YE NUMBER M CONVERT TO HUA HAI 

        let score4= null
        let value_in_number3=Number(score4);    
        console.log(value_in_number3)  //  0                      NULL -> 0 
        console.log(typeof value_in_number3)  //number

        let score5= undefined
        let value_in_number4=Number(score5);    
        console.log(value_in_number4)  //NaN                       undefined  -> NaN
        console.log(typeof value_in_number4)  //number


/*  conclusion 
{

string              ->              number
string + number     ->              Nan
 undefined          ->              NaN
 NULL               ->              0
}
*/


        // string to number will give NaN if the string is not a number 

// 2) to boolean

        let value_in_boolean=Boolean(score1);  // ye string ko boolean me convert kr dega
        console.log(value_in_boolean)  //true   //if string is not empty then it will be true
        console.log(typeof value_in_boolean)  //boolean

        let score6=1;
        let value_in_boolean1=Boolean(score6);
        console.log(value_in_boolean1)  //true
        console.log(typeof value_in_boolean1)  //boolean
       

        // result
        // 0=> false
        // 1=> true
        // null=> false
        // undefined=> false
        // NaN=> false
        // ""=> false
        // "tushar"=> true

// 3) to string
        let score7=33;
        let some_value=String(score7);
        console.log(some_value)  //33
        console.log(typeof some_value)  //string
