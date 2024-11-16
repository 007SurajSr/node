const connect = require('./db');

const updateData = async ()=> {
    let data = await connect();
    let result = await data.updateOne({name:'Samsung Galaxy'},{$set:{ name:'iphone 16 pro max'}})   //update-- to update all selected data. updateOne-- to select only one matched.
    console.log(result)
}
updateData();
