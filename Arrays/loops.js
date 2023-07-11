let num = [1,2,4,5,67];
// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }

//for each loop and print num[i]*num[i]
num.forEach((element) => {
    console.log(element*element);
}) //see the brackets

//Array.from -> converts an object into array
let name = "Raveena"
let arr=Array.from(name)
console.log(arr)

//.. for ..of (shortcut for for lopp)
for(let i of num){
    console.log(i)
}
//for..in // in object it gives keys so in array also it returns keys which is not visible which is 0,1,2,3,4..
for(let i in num){
    console.log(i)
}