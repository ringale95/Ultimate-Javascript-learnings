//settimeout takes the function and execute after miliseconds
function getChees(callback){
    setTimeout(() => {
        const cheese = "🍕";
        console.log("I am not callbackfunc", cheese)
        //return cheese;//no use of it here
        //so what we do is we tell them if u get cheese after 2 sec just call us
        callback("cheese for callack");
 },9000);
     
   
}
//console.log(getChees()); //here it returns undefined 
getChees((cheese) => {
    console.log("I am the call back func:", cheese);

})