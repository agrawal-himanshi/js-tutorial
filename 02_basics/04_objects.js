//singleton or using constructor

const tinderUser = new Object()   //singleton object
// const tinderUser2 = {}    //non-singleton object

tinderUser.id = "abc"
tinderUser.name = "himmi"
tinderUser.loggedIn = false
// console.log(tinderUser)
// console.log(tinderUser2)

const regularUser = {
    email:"himmiagrawal",
    fullName:{
        userFullName:{
            firstName:"himanshi",
            lastName: "agrawal"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('loggedIn'))



