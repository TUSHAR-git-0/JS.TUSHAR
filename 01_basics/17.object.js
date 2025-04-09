// object using constructor function syntax  ( mtlb SINGLETON OBJECTS)

const tinder_user = new Object()


console.log(tinder_user); // it will give the empty object {} (it will create a new object using constructor function syntax)

// it is same as 
// const tinder_user = {}  (it will create a new object using object literal syntax)

//no internal difference between both the methods

tinder_user.name = "tushar" ;
tinder_user.age = 23;
tinder_user.isMarried = false;

tinder_user.hobbies = ["cricket","football","reading"];

console.log(tinder_user); // it will give the tinder_user object with the properties and values [sare key - values pair ko print  krta hai]

//  we can create objects inside objectsm(nested objects)

const regular_user={
    email: "someones@gmail.com",
    password: "123456789",

    full_name:{                                             // it is a nested object inside the regular_user object
                                     
        user_full_name: {                                   // it is a nested object inside the full_name object
            first_name: "tushar",
            last_name: "sharma",    
        }
    }
}

// excessing 

console.log(regular_user);

console.log(regular_user.full_name.user_full_name.first_name); // it will give the first name of the user from the nested object inside the regular_user object


// COMBINING OF OBJECTS  (Merging of objects)

// USING ASSIGN METHOD AND SPREAD OPERATOR

const user1= { 1:"A", 2:"B", 3:"C"}; // it is a object with key as number and value as string
const user2= { 4:"D", 5:"E", 6:"F"}; // it is a object with key as number and value as string
const user3= { 7:"G", 8:"H", 9:"I"}; // it is a object with key as number and value as string

const user4= {user1,user2};
console.log(user4);  //  it will contain object user1 and user2 inside the user3 object as key - values pair


// THEREFORE WE USE ASSIGN METHOD TO MERGE OBJECTS

//  it will merge the two objects into one object and return the new object with the merged values

const user5= Object.assign({},user1,user2); // YE JO {} ME HUMNE EMPTY OBJECT LIYA HAI JISME HUMARE DONO OBJECTS DATA MERGE KREGA

console.log(user5); //  it will give the merged object with the values of both objects [ 1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F' ] (it will merge the two objects into one object and return the new object with the merged values)

// ASSIGN :- DONO K KEY-VALUE KO MERGE KREGA

const user6= Object.assign({},user1,user2,user3); //{ } HERE WE HAVE CREATED AN EMPTY OBJECT JISME 2-3--> OBJECT KO MERGE KREGA
console.log(user6);

// SPREAD OPERATOR

const user7= {...user1,...user2}; 
console.log(user7); 

const user8= {...user1,...user2,...user3}; 
console.log(user8); 

// when we receive data from database is in form of arrays of objects

const users=[
    {

        name: "tushar",
        age: 23,
        isMarried: false,
        hobbies: ["cricket","football","reading"],
    },
    {
        name: "ayush",
        age: 24,
        isMarried: true,
        hobbies: ["cricket","football","reading"],
    },
    {
        name: "vikram",
        age: 25,
        isMarried: false,
        hobbies: ["cricket","football","reading"],

    }
]

// acessing would be done using for loop or forEach method  like array [ BECAUSE IT IS AN ARRAY OF OBJECTS]

// for first element of the array

console.log(users[0].name); // it will give the name of the first user in the array of objects


// ACESSING  THE DATA IN OBJECTS 


console.log(tinder_user)

// we can access all the keys and values of the object

console.log(Object.keys(tinder_user)); // IT WILL GIVE THE ARRAYS OF KEYS [ 'name', 'age', 'isMarried', 'hobbies' ] (it will give the keys of the object)
console.log(Object.values(tinder_user)); // IT WILL GIVE THE ARRAY OF VALUES [ 'tushar', 23, false, [ 'cricket', 'football', 'reading' ] ] (it will give the values of the object)

// ARRAY K ANDAR ARRAY CREATE KRTA H  "ENTRIES" METHOD
console.log(Object.entries(tinder_user)); // IT WILL GIVE THE ARRAY OF KEY VALUE PAIR [ [ 'name', 'tushar' ], [ 'age', 23 ], [ 'isMarried', false ], [ 'hobbies', [Array] ] ] (it will give the key value pair of the object in array form)


// need to check if object has specific  property or not
// using hasOwnProperty method

console.log(tinder-user.hasOwnProperty("name"));  return true 
console.log(tinder-user.hasOwnProperty("email")); return false
