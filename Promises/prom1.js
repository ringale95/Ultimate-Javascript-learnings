//the code becomes deeply nested and harder to read and maintain, especially when additional operations or error handling are added.
//excessive nesting of callback
//to avoid callbakc we use promises

//here promise have two parameter resolve and reject
//resolve will use .then
//reject will use error

//#1
const promise = new Promise((resolve,reject) => {
    resolve("we did it baby");
})
promise
.then((data) =>{
   console.log(data)
})

//#2 promise with catch
const promise2 = new Promise((resolve,reject) =>{
    reject("This is rejected")
})
.catch((err => {
    console.log(err);
}))

//3# whatever we return in return function it will return that
const promise3 = new Promise((resolve,reject) => {
    resolve ({user: "Raveena"})
})
promise
.then((data)=>{
    return data;
})
.then((usr) =>{
    console.log(usr)
})