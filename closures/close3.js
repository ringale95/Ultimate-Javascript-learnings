function z(){
    var c = 180;
    function x(){
        var a = 500;
        function y(){
            console.log(a,c); 
        }
        y(); // yes still gives the closure for parents parent scope
    }
    x();
}
z();

//suppose if I return y

// return function y(){
//     console.log(a,c);  //still retained a and c value
// }