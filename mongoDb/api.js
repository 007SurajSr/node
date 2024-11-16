const express = require('express');
const connect = require('./db');
const app = express();
const mongodb = require('mongodb');


app.use(express.json());

app.get('/', async (req,res) => {
    let data = await connect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data)

});

app.post('/', async (req, res) => {
    let data = await connect();
    let result = await data.insertOne(req,body)
    res.send(result);
})

app.put('/:name', async (req, res) => {                                            // :name - to select the name and then update it using Body.
    let data = await connect();
    let result = await data.updateOne( {name: req.params.name},                     // Dynamic selection of item to be updated.
        {$set:req.body}                                                            // Dynamic update by selection only name
    )
    //     {name:'iPhone'},
    //     {$set:{name: "Johny Johny yess child1",                                // static update by doing hard code.
    //            age: 401,
    //            email: "john.doe@example.com1"}}
    // );
   
    res.send({result:'updated'});
})

app.delete('/:id', async (req, res) => {
    let data = await connect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result);
} )

app.listen(4000);