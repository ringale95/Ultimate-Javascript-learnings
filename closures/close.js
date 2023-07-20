function x(){
    var a = 10;

    function y(){
        console.log(a)
    }
    return y; // because return will no more reside in x because we returned it
}
var z = x(); //complete function and lexical env was returned and not just y
console.log(z);
z(); //this will try to find out a as 'x' is also gone. but this is closure it remembers lexical part

//but some developers may write instead of return y to below:
// return function y(){
   // console.log(a)
//}