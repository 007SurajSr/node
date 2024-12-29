const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'phpmyadmin'
});
con.connect((err)=> {
    if(err){
        console.log(err);
    }else{
        console.log('Connected Successfully');
    }
})

module.exports = con;

// http://localhost/phpmyadmin/