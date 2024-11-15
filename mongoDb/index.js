const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://8700suraj:21hJIFETV1vdRFDL@testt-db.5igjwzu.mongodb.net/${newData}'
const newData = 'videos'
 
const cliend = new MongoClient(url);

async function getData() {
    let result = await cliend.connect();
    let db = result.db(newData);
    let collection = db.collection('product');
    let response = await collection.find({}).toArray();
    console.log(response);
}
getData();