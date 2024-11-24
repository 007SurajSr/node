const express = require('express');
const con = require('./mysql');
const app = express();

app.use(express.json());

app.get('/',(req, resp)=>{
    con.query("select * from users", (err, result) => {
        if(err){
            resp.send("error")
        }else{
            resp.send(result);
        }
    })
   })

 app.post('/insert', (req,resp)=> {
    const data =  req.body;
    con.query('INSERT INTO users SET  ?' , data, (error, result, fields) => {
        if (error) throw error;
        console.log(result);
        resp.send(result)
    })
})

app.put('/update/:id', (req,resp)=> {
    const data = [req.body.name, req.body.age, req.params.id];
    con.query("UPDATE users SET name = ?, age = ? where user_id = ?", data,(error, result,fields)=> {
         if (error) throw error;
         console.log(result);
         resp.send(result)
       })
    })

app.delete('/delete/:id', (req, resp)=>{
    const userID = req.params.id;
    con.query("DELETE FROM users WHERE user_id = ?", [userID],(error, result, fields ) =>{
        if(error) throw error;
        console.log(result);
        resp.send(result);
    })
})

 

app.listen(5000);

 