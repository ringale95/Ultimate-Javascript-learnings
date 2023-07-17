//foreach is used when we want to perform some operation over each element and iterate
//to it or execute a callback function for each element

//array.forEach(callbackfunction(currentvalue, index, array)){
    //perform operation on current value
//}

const arr = [1,2,3,4,5];
arr.forEach(function(number,index){
    console.log(`Element at index ${index}: ${number}`)
}
);