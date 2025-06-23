

const cooding=["js","cpp","rb","python","cpp",'java'];

cooding.forEach((item)=>{
    console.log(item)        // this will print each item in the array
})


console.log("\n")


// what if we want to store it in variable 
const coding=["js","cpp","rb","python","cpp",'java']

const values=coding.forEach((item)=>{
    console.log(item)
    return item                        //  2 still undefine
    })

console.log(values)                // 1 undefine  (kuch bhi return nhi kiya)

// means ( forEach ) function does not return anything\


//**********************************  FILTER  **************************************************************************************** */


// FILTER () method  FOR ITERATION   (IT RETURNS VALUES)

console.log(" FILTER \n")
const myarray=[1,2,3,4,5,6,7,8,9,10];


// myarray.filter((nums) => nums > 4)      // nothing will return/output  because we have not return (store)  it 
// console.log(nums)


let newNums=myarray.filter((nums) => nums > 4)   // condition deni padti h( num > 4 )

console.log(newNums);  // jo jo condition ko satisfy karenge unnhe return kr denge
;

// const newNums1= myarray.filter((nums)=>{
//     nums>4                                // empty array because  here ( we objected law of arrow functions ) : jab bhi condition ko {} ke andar likhenge then scope voilates:  return keyword likhna hi padega!!!!

// console.log(newNums1);

console.log ("using return keyword\n")
const newNums1= myarray.filter((nums)=>{
   return nums>4  ;
})
console.log(newNums1) 


// filter array return krta tha

// **********************************************************************

// DOING THE SAME THING WITH * FOREACH * LOOP

console.log("\n")


console.log("DOING THE SAME THING WITH * FOREACH * LOOP")

// phle empty array declare krna hota h


const Myarray=[]

myarray.forEach((item)=>{
    if(item>4){
        Myarray.push(item)
    }
})
// kuch bhi use kariye filter / for loop  jo easy lage
console.log(Myarray)



// lets learn from basics  filter for the database data( array of objects)

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004

     },
    { title: "Book Two", genre: "HISTORY", publish: 1995, edition: 2000 

    },
    { title: "Book Three", genre: "Science Fiction", publish: 2001, edition: 2010 

    },
    { title: "Book Four", genre: "Fantasy", publish: 1988, edition: 1992

     },
    { title: "Book Five", genre: "Fantasy", publish: 2015, edition: 2018

     },
    { title: "Book Six", genre: "Biography", publish: 1999, edition: 2005 },
    { title: "Book Seven", genre: "Horror", publish: 2003, edition: 2007 

    },
    { title: "Book Eight", genre: "HISTORY", publish: 2010, edition: 2013 

    },
    { title: "Book Nine", genre: "Thriller", publish: 2020, edition: 2021 

    }

];
console.log("\n")
// EXTRACTING DATA FROM DATABASE TABLE (DATA)
const newarray= books.filter((book)=>book.genre=="HISTORY")

console.log(newarray)       // we  get array data  which satisfy these condition
console.log("\n")

console.log("fetching another data :: ABOUT EDITIONS\n")


const newarray1=books.filter((items)=>{ return items.edition>2004 && items.genre=="HISTORY"})  // ye use karne  { } ke liye return use karna padega!!!!!!!!!!!!!!

console.log(newarray1)






// *************************************************************************************************************************************************************************?
// ******************************  MAP  ***********************************************************************88888888888888
// somthing new  // IF WE HAVE TO UPDATE THE VALUES OF ARRAY  :- MAP*********


const number_name_ki_string=[1,2,3,4,5,6,7,8,9,10];

const new_number= number_name_ki_string.map((num)=>num+10)

// return array ( aswe have stored in new_number)

console.log(new_number)
console.log("\n")

// ********* CAN DO THE SAME THING WITH (*FOREACH*)


// *****************************************************************************************************88888888888888

// WE CAN PERFORM MULTIPLE MAP().MAP().MAP() ALONG WITH ,FILTER()
console.log("\n")
const number_array=[1,2,3,4,5,6,7,8,9,10];

const new_num= number_array.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)

// return array ( aswe have stored in new_number)
// 
console.log("MULTIPLE MAP.MAP + FILTER")


console.log(new_num)

// *****************************************************************************************************88888888888888

//  *********  REDUCE()  METHOD  *************************************************************************************************************88888888888888

// reduce having ,1) accumulator ,2) currentValue, 3) initialValue

// first havto give initial value which automatically assign to  accumulator  at begining

console.log("\n")

console.log("USING REDUCE\N")

console.log("\n")


const mynums=[1,2,3];

const mytotal=mynums.reduce(function (acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+ currval;
},0)  // yha mene 0= initial value di h this automatically assign to accumulator(acc)


// using       //   (   arrow functions  )



// const mytotal=mynums.reduce((acc,curr)=>acc+curr,0)// , deke initial value di h
// console.log(mytotal)

console.log("\n")

console.log("ANOTHER EXAMPLE")

console.log("\n")

const price_chart=[
    {
        "product_name": "apple",
        price: 100
    },
    {
        "product_name": "banana",
        price: 200
    },
    {
        "product_name": "orange",
        price: 300
    },
    {
        "product_name": "grapes",
        price: 400
    },

]

const price_to_pay=price_chart.reduce((acc, item)=>acc+item.price,0)

console.log(price_to_pay)
