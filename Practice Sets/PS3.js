//WAP using for loop to print marks of student in object (harry:98, shubh:57, love: 89)
//We are now using for loop
let marks = { //creating that object
    harry:98,
    Shubh:57,
    love:89
}

for(let i = 0; i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//using for-in loop now
for( let key in marks){
    console.log("The marks of " + key + " are " + marks[key])
}

// WAP  to print "Try again" until user enter conrrect number

let cn = 4;
let i
while(i!=cn){
    console.log("Try again")
    i=prompt("Enter the correct no" +i) //prompt is used to take input but works onlyin browser
}
console.log("User entered correct no")

//WAP to print 5 nos mean

const mean = (a,b,c,d) =>{
    return (a+b+c+d)/4;
}
console.log(mean(4,5,6,7));