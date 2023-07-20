function x(){
    var a = 10;

    function y(){
        console.log(a)
    }
    a=100; //here it will print 100 but remember it does not refer to value it refers to reference
    return y; 
}