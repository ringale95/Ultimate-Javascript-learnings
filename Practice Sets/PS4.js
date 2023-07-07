//what it will print?
let str = "Raveena\""
console.log(str.length) //\" -> this is counted as 1 char only

//startswith and endswith
let sentence = "Raveena is a good girl"
let word = "good"
console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);

//startswith
console.log(str.startsWith('Rav')) //returns true or false

//change 4th char
let friend = "Raveena"
friend[3]='M'
// no we cant do this as immutable