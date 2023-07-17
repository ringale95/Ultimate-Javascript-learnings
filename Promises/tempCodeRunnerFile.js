const promise = new Promise((resolve,reject) => {
    resolve ({ user : "Raveena"})
})
promise
.then((data)=>{
    return data
})
.then((usr) =>{
    console.log(usr)
})