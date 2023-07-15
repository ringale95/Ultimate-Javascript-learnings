// this is a function where we have two variable and a function
//method 1
const calculate = (a,b,operation) =>{ //here calculate is a function and operation is also a funciton
    return operation(a,b);
}

const addition = calculate(3,4,function(num1,num2){
    return num1 +num2;
});
console.log(addition)

//method 2
const subtraction =(a,b) =>a-b;
const subResult = calculate (5,2, subtraction) //we are just passing subtrction and not calling
console.log(subResult)

//method
function multiplication (a,b){
    return a *b;
}
const subMultiply = calculate(5,9,multiplication)
console.log(subMultiply)
