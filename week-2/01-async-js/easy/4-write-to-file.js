const fs = require('fs');

let data = 'content adding test';

fs.writeFile('4-write-to-file.md', data, function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log('File written succesfully');
        console.log('The written has the following contents:'); 
        console.log(fs.readFileSync('4-write-to-file.md', 'utf8')); 
    }
});

let x = [];
for (let index = 0; index < 100000000; index++) {
    x.push(index*index);
}

console.log(x)