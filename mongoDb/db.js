//mongodb--- data insertin is dynamic in this.

const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://8700suraj:21hJIFETV1vdRFDL@testt-db.5igjwzu.mongodb.net/${newData}'
const newData = 'videos'
 
const cliend = new MongoClient(url);

async function connect() {
    let result = await cliend.connect();
    let db = result.db(newData);
   return db.collection('product');
   
}

module.exports = connect;   // do not add '()' while export