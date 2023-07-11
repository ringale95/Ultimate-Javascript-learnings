// Array methods
let num = [1,2,3,34]
let b = num.toString () // convert to string
console.log(b)
let c = num.join("_")
console.log(c) // joining the array returns 1_2_3
console.log(typeof c, c) // returns string

// num.pop()
// console.log(num) //returns the array 
// let r =num.pop()
// console.log(r) // returns the popped elemnt

let p = num.push(56)
console.log(num, p)

let r = num.shift() //shift remove the first element in array
console.log(r)
console.log(num) //modifies the original array

//unshift add first elemnt



