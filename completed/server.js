// const http = require('http');
// function dataContron(req,resp){
//   resp.write("<h1>Hello this is suraj is this side</h1>");
//   resp.end();
// }
// http.createServer(dataContron).listen(4501); 


const data = require('./data');
const http = require('http');
const data1 = (req, resp) => {
  resp.writeHead(200,{'Content-Type':'application/json'});
  resp.write(JSON.stringify( data));
  resp.end();
  }

http.createServer(data1).listen(5600);

 