 //Create a var of typestring and add a no to it//

 let a = "Harry"
 let b = 6
 console.log(a+b)

 //use typeof operator and find data type of above ques//
 console.log(typeof (a+b))

 //create a const object in javascript and can you change it to hold a no later?//
 const a1 = {
    name : "Harry",
    section : 1,
    isPrincipal : false
 }
// a1 = 54 (We cant change the object to hold a no or string since its already declared)
a1['friend'] = "Shubham"
console.log(a1)

// create a program to create dictionary of 5 words://
const dict = {
    appreciate : "say good things",
    new : "pure",
    happy : "enjoying"
}
console.log(dict.happy)