let name1 = "Raveena"
let name2 = "Ingale"

//length function
console.log(name1.length)

//Uppercase
console.log(name1.toUpperCase())

//Lowercase
console.log(name2.toLowerCase())

//slice
console.log(name1.slice(2,6))
console.log(name2.slice(2)) //prints from 2 to end

//replace
console.log(name1.replace("Rav", "ANI"))

//trim
console.log(name1.trim())

//substring
console.log(name1.substring(1,3))

//indexof
let name3 = "Raveena is a good girl"
console.log(name3.indexOf("good"))

//includes returns true if present in string
console.log(name3.includes("good")) //.includes returns true or false

for(let i = 0; i<name1.length; i++){
    console.log(name1[i])
}

let sentence = "Raveena is a good girl"
let word = "good"
console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);

//startswith
console.log(str.startsWith('Rav')) //returns true or false



