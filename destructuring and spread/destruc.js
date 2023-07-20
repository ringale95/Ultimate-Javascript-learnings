// let arr = [3,5,6,7]
// let [a,b,...rest] = arr
// console.log(a,b,rest); // this will print rest element in an array this is destruscturing

//different way
let newarr = [3,4,5,6,7,8,9]
//we want to print 3 and rest 6 to 9 in an array leaving 4,5 then
let[a,,,...rest] = newarr;
console.log(a,rest)

let{e,f} = {e:2, f:9}
console.log(e,f)