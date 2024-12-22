const express = require('express');
const con = require('./mysql');
const app = express();

app.use(express.json());

app.get('/',(req, resp)=>{
    con.query("select * from users2", (err, result) => {
        if(err){
            resp.send("Connected successfully")
        }else{
            resp.send(result);
        }
    })
   })

 app.post('/insert', (req,resp)=> { 
    const data =  req.body;
    //const data = {name: "Peter Parker", email: "joe2@gmail.com"} ;
    con.query("INSERT INTO users2 SET ?" , data, (error, result, fields) => {
        if (error) throw error;
        console.log(result);
        resp.send(result)
    })
})

app.put('/update/:id', (req,resp)=> {
    const data = [req.body.name, req.body.email, req.params.id];
    con.query("UPDATE users2 SET name = ?, email = ? where id = ?", data,(error, result,fields)=> {
         if (error) throw error;
         console.log(result);
         resp.send(result)
       })
    })

app.delete('/delete/:id', (req, resp)=>{
    const userID = req.params.id;
    con.query("DELETE FROM users2 WHERE id = ?", [userID],(error, result, fields ) =>{
        if(error) throw error;
        console.log(result);
        resp.send(result);
    })
})

 

app.listen(5000);

 