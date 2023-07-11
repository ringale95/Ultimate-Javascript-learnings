//difference between map and foreach is map creates a new array and foreach perform funciton on same array
// let arr = [1,2,3]
//  let a = arr.map((value) =>
//  {
//     console.log(value)
//     return value+1

// })
// console.log(a)

let arr = [1,2,3]
 let a = arr.map((value,index,array) =>
 {
    console.log(value,index,array)
    return value+1

})
console.log(a)

//filter
let abc = [4,5,6,71,9,2,3]
let b = abc.filter((a2) =>{
    return a2<5
})
console.log(b)

//reduce
let u = [1,2,3,4,5,6]
const reduce_func =(h1,h2) =>{
    return h1+h2
}
let v=u.reduce(reduce_func)
console.log(v)