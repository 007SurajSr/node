const express = require('express');
const app = express();
const path = require('path');


// app.get('/',(req, res)=>{                           //http://localhost:4001
//    // console.log("data sent by browser =>> ", req.query.name );
      
//     res.send(`
//         Hello, Welcome there, this is home page <br>
//         <a href='/about'> Go to about page </a>
//         `);
//     //res.send('Hello, Welcome there, this is home page');
// });

// app.get('/about',(req, res)=>{                     //http://localhost:4001/about
//    // res.send('Hello, this is about page');
//    console.log(req.query.name); 
//    res.send(`
//         <input type="text" placeholder="User name" value="${req.query.name}"/>
//         <button>Click me to send</button>
//          <a href='/'> Go to home page </a>
//         `);
//    });

//    app.get('/help',(req, res)=>{                   //http://localhost:4001/home
//         res.send([{name: "samerr",
//                   emailID: "samer@gmail.com"
//                   },
//                   {name: "samerr",
//                   emailID: "samer@gmail.com"
//                   }]);
//    });   

const publicPath = path.join(__dirname,'public');

// app.use(express.static(publicPath));           // Using this line we need to give file extention name as well

app.set('view engine', 'ejs');

app.get('/', (_, resp) => {
    resp.sendFile(`${publicPath}/home.html`)      // to fetch the file and remove the file extention
})
app.get('/profile',(_, resp) => {
    const user = {
        name : "Suraj Gupta",
       email : "00Suraj@gmai.com",
       city  : "Delhi",
       skills: ['php','c++','python','js']
    }
    resp.render('profile', {user});
})
app.get('/login',(_,resp) => {
    resp.render('login');
})
app.get('/about', (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/404page.html`)
})

app.listen(4000);   