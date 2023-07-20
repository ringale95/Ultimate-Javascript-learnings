const jsonobj = {
    name: "Raveena",
    age: "30"
}
console.log(jsonobj)

//converting obj to string and send
let convertedjson = JSON.stringify(jsonobj)
console.log(convertedjson) //now we can use any funcitons related to string

convertedjson=convertedjson.replace('30', '27')
console.log(convertedjson)

newjsonobj = JSON.parse(convertedjson);
console.log(newjsonobj)