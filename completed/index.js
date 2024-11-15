const app = require('./app');


const array = [1,2,3,4,5,6,7,4,5];
console.log(app.x);
console.log(app.z);
const newarray = array.filter((ele,index,arr) =>{
    return arr.indexOf(ele)=== arr.lastIndexOf(ele)})
console.log(newarray);
 
 