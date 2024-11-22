const express = require('express');
const mongoose = require('mongoose');
require('./db');
const products = require('./products');

const app = express();
app.use(express.json());


app.post('/create', async (req, res) => {
    let data = new products(req.body);
    let result = await data.save();
    console.log(result);
    res.send('result');
})

app.get('/get', async (req,res) =>{
    let data = await products.find();
   
    res.send(data);
})

app.put('/update1', async (req,res) =>{
   let data = await products.updateOne(
    {name:'max-3'},
    {$set:{price:'1500'}
})
   res.send(data);
})

app.put('/update/:_id', async (req,res) =>{
    let data = await products.updateOne(
     req.params,
     {$set:req.body
 })
    res.send(data);
 })

app.delete('/delete/:_id',async (req,res) => {
    let data = await products.deleteOne(req.params);
    res.send(data)
})

app.get('/search/:key', async (req,res) => {
    console.log(req.params.key);
    let data = await products.find(
        {
            "$or": [
                {"name": {$regex: req.params.key}},
                {"brand": {$regex: req.params.key}}
                
                 
            ]
        }
    )
   res.send(data);
    
})

 
 

app.listen(5000);

