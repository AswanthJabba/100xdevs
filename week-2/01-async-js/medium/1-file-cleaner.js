const fs = require('fs');

let path = 'C:\\Users\\jabba\\OneDrive\\Documents\\Projects\\100x devs Cohort 2\\100xdevs\\week-2\\01-async-js\\medium\\1_test.txt'

fs.readFile(path, 'utf-8', function(err, data){
    if(err){
        console.log(err);
    }
    else{
        let readData = data.replace(/\s{2,}/g, ' ').trim();
        fs.writeFile(path, readData, function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("Removed extra spaces successfully");
            }
        })
    }
})