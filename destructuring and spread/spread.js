const arr=[1,7,11]
const obj={...arr};
console.log(obj)
 
//suppose we have one function
function sum(v1,v2,v3){
   return v1+v2+v3;
}
console.log(sum(...arr))

//Most used in react if we want to change someobject value we can do its by overriding  
const object1 = {
    name: "Raveena",
    company: "comp xyz",
    address: "addxyz"
}
console.log({...object1,name:"Aniruddha"} ) //you cant write object 1 after changing name