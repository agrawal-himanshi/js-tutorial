let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())

// let myCreatedDate = new Date(2023,5,20)
// let myCreatedDate = new Date(2023,5,20,5,3)
// let myCreatedDate = new Date("2023-06-20")
// let myCreatedDate = new Date("20-06-2023")
let myCreatedDate = new Date("06-20-2023")


// console.log(myCreatedDate.toLocaleString())

let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth() + 1)

newDate.toLocaleString('default'{
    weekday:'long'
})









