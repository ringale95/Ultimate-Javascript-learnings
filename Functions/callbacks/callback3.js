//example
function first(){
    console.log("first")
    }

function second(callback){
    setTimeout(()=> {
        callback();
        console.log("second")
        
    },0)
}

function third(){
    console.log("three");
}
first();
second(third);