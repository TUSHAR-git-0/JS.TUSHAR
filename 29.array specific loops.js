// 1     (for of) loop

// array of strings     [" ", " "," " ]
// array of objects     [ {}, {} , {} ]


// for(auto num : nums){
//     cout<<nums;
// }
// 
// bs issi ko likhna h js m = for of loop*********************

const arr=[1,2,3,4,5,6,7];          // ARRAYS

for(const num of arr){
    console.log(num);
}

console.log("\n")
const greetings = "Hello ! world";

for(const greet of greetings){
    console.log(greet);
}

// MAPS :- store  unique**key value pairs same as DSA

const map= new Map ();

map.set('IN',"india")
map.set('USA',"united state of america")
map.set('fr', "france")
map.set('IN',"india")

// console.log(map)       :- this will print whole map 

// for( const key of map){      // this will create individual array of key value pair
//     console.log(key);
// }

// to remove the above problem (if we want whole key value pair in same array)

for(const [key, value] of map){
    console.log(key,':-' ,value);
}

// ********************* OBJECTS ************************** ME LOOPS KA USE

const My_obj={
    'game1': 'NFS',
     
    'game2': 'spiderman'
}

// for(const [key,value] of My_obj ){      // this is giving us error
//     console.log(key,':-', value);
// }

// error in above code because : objects are not iteratable this way ( using for of loop )

// *****************************(  FOR IN  )  used for objects and other

console.log("\n")
const OBJ= {
    js:"java script",
    cpp: "c plus plus",
    py: "python",
    rb: "ruby",
}

for(const key in OBJ){
    console.log(key);         // this will print all the keys ( js, cpp,py, rb)
}

// printing values and key together {   for values : OBJ(key)  }
for(const key in OBJ){
    console.log(`${key} short cut is : ${OBJ[key]}`);        
}
console.log('\n')
// js short cut is : java script
// cpp short cut is : c plus plus
// py short cut is : python
// rb short cut is : ruby


//************************** */ using ( FOR-IN ) for arrays *************************


const programming=["js","rb","java","cpp"]

for(const key in programming){
    console.log(key);
}

console.log('\n')
// here it print 0,1,2,3,    ( KEYS OF ARRAY ARE 0,1,2,3,)  IT IS PRINTING KEYS  AS WELL

// FOR VALUES 
for(const key in programming){         // "js","rb","java","cpp"
    console.log(programming[key]);
}

// we can't use (FOR-IN) in maps  // FOR-IN  is not working in maps(not iteratable)




// ************************  FOR EACH  *********using in arrays*****************************


// use "callback" function with for each

// callback function having no name , iterate  to each value/item of array  and perform functionality accordingly

// how to make / use callback function

//  array_name.forEach ( function (parameter_name (variable)){defination/functanility}})

console.log('\n')
const cooding=["js","cpp","rb","python","cpp",'java']

cooding.forEach(function(item){
    console.log(item);
})
console.log('\n')

// using arrow function 

console.log("ARROW FUNCTION:\n")
cooding.forEach((item)=>{
    console.log(item);
    
})

// we can also use another declared function  + forEach

function printing(item){   // using this function 
    console.log(item);
}

console.log('\n')
console.log(" using declared function + forEach\n")
cooding.forEach(printing)  // only give refrence  function/  not to execute the function()


// forEach has many excess other than keys<values

function printing(item ,index,arr){  
    console.log(item, index,arr);
}


// *******************************

// database se values arrays  k formate m aati h or har 1  value  "object"   hota h

const MYcoding =[
    {
        language_name:"js",
        languagefile_name: "js",

    },
    {
        language_name:"c++",
        languagefile_name: "cpp",
    },
    {
        language_name:"java",
        languagefile_name: "java",
    },
    {
        language_name:"python",
        languagefile_name: "py",
    }
]

// iterations 

MYcoding.forEach((item)=>{
    console.log(item.language_name,item.languagefile_name);
})
