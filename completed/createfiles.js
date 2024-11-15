const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
//console.log(dirPath);


// To create a list of files in node.js
// for(i=0; i<4; i++){
//     fs.writeFileSync( dirPath + "/hello"+i+".txt", "a simple text file");
// }

// To read the data inside of a file

fs.readdir(dirPath,(err,files) =>{
    files.forEach((items) => {
        console.log("file name is", items);
    })
})