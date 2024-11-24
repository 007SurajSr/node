const express = require('express');
const EvenEmitter = require('events');
const app = express();
const events = new EvenEmitter();

let count = 0;

events.on('countAPI',()=>{
    count++;
    console.log('event called',count);
})

app.get('/', (req,resp)=>{
    resp.send('api called');
    events.emit("countAPI");
});
app.get('/search', (req,resp)=>{
    resp.send('complete api called');
    events.emit("countAPI");

});
app.get('/complete', (req,resp)=>{
    resp.send('complete api called');
    events.emit("countAPI");
});

app.listen(5000);


 