//prompt will always take a string//
let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")

//Switchs//
const expr = 'Red';
switch (expr) {
    case 'Yellow':
    console.log('Yellow color');
    break;

    case 'Red':
    console.log('Red color');
    break;

    default:
    console.log('Not color');
}
//ternary operator
console.log("You can", (a<18? "not drive" :"drive"))