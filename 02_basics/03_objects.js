//singleton
//object.ctreate

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "himanshi",
    "full name": "himanshi agrawal",
   [mySym]: "myKey1",
    age: 20,
    location: "mathura",
    email: "himanshiagrwal331@gmail.com",


}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "himanshiagrawal8393@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "himanshiagrawal3@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greeting2 = function(){
    console.log(`hello js user , ${this.name}`);
}
console.log(jsUser.greeting2())



