//fetch api returns promises itself


//below will uatomatically take fetch as promise
fetch('https://jsonplaceholder.typicode.com/todos/1').then ((data)=>{
    return data.json
}).then((jsonData)=>{
    console.log(jsonData)
})

//if wrong url then give error:
fetch('https://jsonplaceholder.typicode.com/todos/1').then ((data)=>{
    return data.json
}).catch((err)=>{
    console.log("Oh no");
})
//finally runs even when rejected or resolved
