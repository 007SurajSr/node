const { isUtf8 } = require('buffer');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;

//-1 To create a file

//fs.writeFileSync(dirPath+'/apple.txt', ' This is simple test file');

//-2 To read a file

//fs.readFile(filePath,'utf8',(err,item)=> {
//    console.log(item);
//})

//-3 To update a files text

// fs.appendFile(filePath," and file name is apple.txt",(err)=>{
//     if(!err){console.log('File is updated')}
// })

// -4 Rename a file

// fs.rename(filePath,`${dirPath}/newfile.txt`,(err) => {
//     if(!err){console.log('File is updated')}
// })

//-5 To delete a file

fs.unlinkSync(`${dirPath}/fruit.txt`);