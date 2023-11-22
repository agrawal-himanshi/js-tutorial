const name = "himanshi"
const repoCount = 50
console.log(name + repoCount + " value")//not effective way

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('himanshi-ag-yes')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))

console.log(gameName.indexOf('h'))

const newStirng = gameName.substring(0,4)
console.log(newStirng)

const anotherString = gameName.slice(-6,4)
console.log(anotherString)

const stringOne = "       himanshi  "
console.log(stringOne)
console.log(stringOne.trim())


const url = "https://www.geeksforgeeks.org/array-data%20structure/?ref=lbp"
console.log(url.replace('%20', '-'))
console.log(url.includes('geeks'))
console.log(gameName.split('-'))