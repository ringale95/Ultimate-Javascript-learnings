//let num=[1,2,3,4,5,6,7,8,9]
// console.log(num.length)  
// delete num[0]
// console.log(num) //removes 0th element but length of array is not affected at all
// console.log(num.length) //same length only

// //console
// let num_more = [11,12,13,14,15,16,17]
// let newArray = num.concat(num_more)
// console.log(newArray) //joins the array

//sort
let num=[1,2.666,3,3.67,4.77,4,5,6,7,8,9]
num.sort();
console.log(num) // Remember this sorts alphabetically and not by ascendingorder

// To sort in descending order:
let compare = (a,b) => {
    return b - a;  // sorts in desdendiing order and for ascending order do (a-b)
}
let numbers = [1,2,3]
numbers.sort(compare)
console.log(numbers);

//reverse
numbers.reverse();
console.log(numbers)

//splice
let sp = [1,2,3,4,5,6,7,8]
let f = sp.splice(2,3,15,16,17)
console.log(sp) //from index 2, removes 3 elements and add 15,16,17 
console.log(f)

