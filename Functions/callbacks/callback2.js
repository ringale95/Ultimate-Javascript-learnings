const a = [4,1,3,-6,-9,-8,7,6];
const firstNeg = (num) => {
    return num <0;
}
const result1 = a.find(firstNeg)
const result2 = a.findIndex(firstNeg)

console.log(result1, result2) //result 1 returns value -6 and result2 returns index no

//forEach
a.forEach((num,i) => {
    console.log('array num', num , i);
});