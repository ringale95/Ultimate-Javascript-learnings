const promise = new Promise((resolve,reject) =>{
    resolve("EHy whatsup")
})
promise.then((data) =>{
    const user = data;
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
})
.then((todo)=>{ //here it will fetch the fakeapi as in above function we have given fetch
    console.log(todo)
})