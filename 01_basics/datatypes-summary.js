// primitive(call by value0)

//approx 7
// String
// Number
// Boolean
// null
// undefined
// Symbol 
// BigInt

const score =100
const scoreValue =100.3

const isLoggedIn =false
const temp = null
let userName;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log( id === anotherId);





// non primitive(reference type)
// approx 3-4 
// arrays
// objects
// functions

const heroes = ["shaktiman" , "nagraj"];

let myObj = {
    name:"himanshi",
    age: 21,
}

const myFunstion = function(){
    console.log("hello world");
}

console.log(typeof temp)
// js is dynamically typed language




// stack(primitive)
// heap (non-primitive)

let myYoutubename = "himanshiagrawal331@gmail.com"
let anotherName = myYoutubename
anotherName  = "himanshi"
console.log(myYoutubename)
console.log(anotherName)


let userOne = {
    email: "himanshiagrawal8393@gmail.com",
    age: 21,

}

let userTwo = userOne;
userTwo.email = "himanshiagrawal331@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
