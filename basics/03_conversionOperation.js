let score = "69abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)//converting score into number 
console.log(typeof valueInNumber)
console.log( valueInNumber)//checking what value is being stored here

//Now as score is not a pure no. thts y its output will be NaN I.E Not a NUmber although its data type is being shown as number This is how data type confusion occurs in js

let p = null
console.log(typeof p)

let newVal = Number(p)
console.log(typeof newVal)
console.log( newVal)
//it stores 0 as the nulls value

let q = undefined
console.log(typeof q)

let newVal1 = Number(q)//converting score into number 
console.log(typeof newVal1)
console.log( newVal1)