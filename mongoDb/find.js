const connect = require('./db');

// connect().then((resp) => {                       //using promise to run the connect function
//     resp.find().toArray().then((data) => {
//         console.log(data)
// }) 
// })
 
const main = async () => {                         // using async and await to call the function
    let data = await connect();
    data = await data.find( ).toArray();
    console.log(data);
}
main();