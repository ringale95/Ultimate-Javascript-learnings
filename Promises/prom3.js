const promise = new Promise((resolve,reject) =>{
    setTimeout(()=>resolve("This is a wait time we are trying"),2000)})
    promise.then((res) =>{
        console.log(res)
    })


//below will uatomatically take fetch as promise
fetch('https://jsonplaceholder.typicode.com/todos/1').then ((data)=>{
    return data.json
})