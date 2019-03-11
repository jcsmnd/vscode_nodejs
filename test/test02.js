//written by Myungsik Kim 03/11/2019 Create, Read, Update, Delete
var fs = require('fs'); //file system
fs.readFile('sampleText01.txt', 'utf8', function(err, data){
    console.log(data);
});