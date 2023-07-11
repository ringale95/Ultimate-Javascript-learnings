//create an array and take user input and add those inputs into array
// let arr=[1,2,3,4,5]
// let a = prompt("Enter the no")
// a=Number.parseInt(a);
// arr.push(a)
// console.log(arr)

//do while
// let arr=[1,2,3,4,5]
// let a;
// do{
//  a= prompt("Enter the no")
// a=Number.parseInt(a);
// arr.push(a);


// } while(a!=0);
// console.log(arr);

//filter from array divisible by 10
let arry=[50,60,3,4,5];
 let n = arry.filter((a) => {
    return a%10 ==0;

}) 
console.log(n)

// reduce to calculate factorial of array nos
let f = [1,2,3]
let t = f.reduce((h1,h2)=>{
return h1*h2

})
console.log(t)
