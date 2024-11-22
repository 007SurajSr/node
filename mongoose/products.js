const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: String,
    price: Number, 
    brand: String,
    model: String
});

module.exports =  mongoose.model('products',productsSchema);