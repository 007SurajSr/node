const connect = require('./db');

const  deleteItem = async () => {
    const data = await connect(); 
     const result = await data.deleteOne({name:'MotoRolla'})
    console.log(result);
    
}
deleteItem();