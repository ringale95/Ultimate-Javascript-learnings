function oneplusAvg(x, y){
    console.log("Done")
    return 1 + (x + y) / 2
}

// Another way to create a function
const sum = (p,q)=>{
    return p+q
}

//Can we create function without argument?//
const hello = ()=>{
    console.log("Hey how are you?")
}
let a = 1;
let b = 2;
let c = 3;

hello();
console.log("one plus average of a and b is", oneplusAvg(a,b))
console.log("one plus average of a and b is", oneplusAvg(b,c))
console.log("one plus average of a and b is", oneplusAvg(a,c))
console.log("Sum of a and b is", sum(9,7))


