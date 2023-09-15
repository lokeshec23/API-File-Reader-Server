
const fs = require('fs')
const http = require('http');
const port = 2001;

// const path = require('path');
// const dirPath = path.join(__dirname,'API-FILE');


const server = http.createServer((req,res)=>{
    
    // To create files inside API_File
    for(let i=0; i<5; i++){
        fs.writeFileSync(`./API-FILE/file-${i+1}.txt`,'Hello World');
    }
    // To read file names
    fs.readdir(`./API-FILE`,(err,files)=>{
        files.map((file)=>{
            res.write(`${file}\n`);
        })
        res.end()    
    })
})

server.listen(port,(err)=>{
    if(err){
        console.log('something went bad');
    }else{
        console.log(`server running on ${port}`);
    }
})
