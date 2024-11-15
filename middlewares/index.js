const express = require('express')
const app = express();
const route = express.Router()
const reqFilter = require('./middle');

 // app.use(reqFilter);    // To apply the route in all the links

route.use(reqFilter);

// app.get('/', reqFilter, (req,res) => {      // To apply the middleware in perticular route.
//     res.send('Welcome to the home page')
// });

app.get('/users', (req,res) => {
    res.send('Welcome to the users page')
});
route.get('/about', (req,res) => {
    res.send('Welcome to the about page')
});
route.get('/contact', (req,res) => {
    res.send('Welcome to the contact page')
});

app.use('/',route);

app.listen(5000); 