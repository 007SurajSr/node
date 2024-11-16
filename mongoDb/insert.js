const connect = require('./db');

const insertItem = async () => {
 
    const db = await connect();
    const result = await db.insertMany(            // insertOne and insetMany --- Only this is supported
      [{name: "iPhone",
        model: '16 pro max',
        price: '1,25,000'
    }, 
    {
        name: 'MotoRolla',
        model: '2024',
        price: '25000'
        
    }]
    )
    if(result.acknowledged){
        console.log('Data was added successfully',result);
    }
 }
insertItem();

 