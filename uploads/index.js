const express = require('express')
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination:function(req,file,cb){
            cb(null," images upload")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+ "-" +Date.now()+".jpeg")
        }
    })
}).single("user_file");

 
app.post('/upload',upload, (req, resp) => {
    resp.send("File uploaded, and you can see it now");
});

app.listen(5000);

 
