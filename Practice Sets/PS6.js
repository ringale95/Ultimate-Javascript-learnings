//Generate random number and store it in a variable. The program then takes input from user to tell them whether the
//guess was correct, greater or lesser than original number
//100-(no of guess) is the score of the user. the programe is expected to terminate if
//number is guessed. Number should be between 1-100

let x = Math.floor(Math.random() * 100) + 1
let y = NaN;
let chances = 0;
while(x!=y)
{
    y=parseInt(prompt("Enter the number between 1 to 100"));
    chances ++;

 if(x>y){
    console.log("Guess is smaller than actual no");
}
else if(x<y){
    console.log("Guess is greater than no")
    
}
console.log("Number is",x)
    console.log("Score is", 100-chances)
}

