const fs = require('fs');

fs.readFile('3-read-from-file.md', 'utf-8', function(err, data){
    console.log(data);
});
let x = [];
for (let index = 0; index < 100000000; index++) {
    x.push(index*index);
}

console.log(x)