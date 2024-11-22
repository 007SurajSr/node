// mongoose-- data insertion is restricted. list of entries and type of entries is defined. This makes data more clear and faster to process.

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://8700suraj:21hJIFETV1vdRFDL@testt-db.5igjwzu.mongodb.net/videos")

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number, 
    brand: String,
    model: String
    
});

const inset = async() => {
  
    const Product = mongoose.model('products',ProductSchema);
    let data = new Product({
     name:'m3',
     price: '1000',
     brand: 'samsung',
     model: '2023'});
    let result = await data.save();
    console.log(result)
}
 

 

const updateItem = async() => {
   
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.updateOne(
        {name: "m3"},
        {$set:{name:'max-3',
            price:'1200'
        }}

    )
    console.log(data);
}
 

const deleteItem = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({name: 'max-3'});
    console.log(data);
}

const fetch = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find({});
    console.log(data);
}
fetch();