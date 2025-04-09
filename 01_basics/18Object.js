// DE-STRUCTURING OF ARRAYS AND OBJECTS ki hoti h

// here we learn about the destucturing of OBJECTS


const course={
    courseName: "javascript",

    courseprice: 1000,

    courseInstructor: "tushar",
}

// now excessing the data // 

// course.courseName               to acess the " courseName "                        // if the data is in large amount then we use destructuring to excess the data easily

//DESTRUCTURING OF OBJECTS:  it is not compulsory to use destructuring of objects but it is used to excess the data easily and in a readable format

const{courseInstructor}=course;    // const{ }           = course; ( means course se select/ search karna hh)// it will destructure the object and assign the values to the variables with the same name as the keys of the object

console.log(courseInstructor); //  AB HUME SIRF COURSE INSTRUCTOR KA DATA CHAHIYE TO HUM DIRECTLY USE KREGE COURSE INSTRUCTOR KO

// COURSE.COURSEINSTRUCTOR  KARENGE TO BHI YE HI AATA (NOW WE CAN ACCESS DIRECTLY)(NO USIGN dot notation)

// we can also change the name of the variable to excess the data

const{courseInstructor: instructor}=course; // it will destructure the object and assign the values to the variables with the same name as the keys of the object
console.log(instructor); // it will give the instructor name of the course object

const{courseName: name, courseprice: price}=course; // it will destructure the object and assign the values to the variables with the same name as the keys of the object
console.log(name); // it will give the name of the course object


// const navbar =({company})=>{

// }
// navbar( campany =" tushar")

// ***************** API'S****************************

// JAB HUME APNA KAAM DUSRE K SAR PE DALNA HOTA H TO USE API KHTE H

// verification of user on Login

// values from backend is in form of jason ( objects )   =>  object of NO-NAME  ( having keys and values in STRING TYPE)

// {
//     name: "tushar",
//     coursename: "information techonology",
//     price:"free",
// }

// IF we have api for specifc request  now u can search/fetch in that api by making it object
