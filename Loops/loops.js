//sum of n natural numbers//
// let sum = 0;
// let n = prompt("Enter the number")
// n = Number.parseInt(n);
// for(let i = 1; i <= n; i++){
//     sum=sum+i;
//     console.log((i), "+")
// }
// console.log("Sum of first" +  n  + "natural number is" +sum)

//factorial
// let sum = 1;
// let n = prompt("Enter the number")
// n = Number.parseInt(n);
// for(let i = 1; i <= n; i++){
//     sum=sum*i;
//     console.log((i), "*")
// }
// console.log("Sum of first" +  n  + "natural number is" +sum)

// for in loops
let obj = {
    Harry : 90,
    Prakash : 60,
    Nitin : 20
}
for(let a in obj) // for in prints "Keys" i.e. Harry, Prakash and nitin
{
    console.log(a)
}

for( let b of "Harry") // prints the strings or arrays one by one here it prints H a R R Y and not the value: 90" --remember//
{
    console.log(b)
}