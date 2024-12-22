// console.log("first input.....");

// setTimeout(() => {
//     console.log("processing the codes....");
// },2000);

// console.log("code is finished now......");


// - To make node.js a synchronous machine.

var a = 10;
var b = 0;

let promos = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve (40);
     }, 1000 );
})

promos.then((data) =>{
    b=data 
    console.log(a+b);
})
