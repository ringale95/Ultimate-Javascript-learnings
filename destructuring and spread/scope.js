// {
//     let a =8;
// }
// console.log(a) //this error came because let and const uses block level scope
// //and var will give answer as its global scope
let p =7; //this can be printed
function bx(){
    let b=9;
    console.log(p)//can be printed
    console.log(b)
}
bx()
//console.log(b)//this will give error