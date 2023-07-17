async function getData(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(1)
console.log(resp)
console.log(2)
}
getData();