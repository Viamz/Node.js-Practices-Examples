 const fs = require('fs');

 function read(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
 }



 function write(ruta, content, cb) {
    fs.writeFile(ruta, content, function(err){
        if (err) {
            console.error('Impossible to process request', err);
        } else {
            console.log('Well done');
        }
    });
 }

 function del (ruta,cb) {
    fs.unlink(ruta,cb);
 }

//  read(__dirname + '/file.txt', console.log) 
//  write(__dirname + '/file1.txt', "I'm your file", console.log);


del(__dirname + '/file1.txt', console.log);