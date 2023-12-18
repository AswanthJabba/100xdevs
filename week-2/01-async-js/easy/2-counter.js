let count = 0;
for (let index = 0; index < 1000; index++) {
    setTimeout(function(){
        count++;
        console.log(count);
    }, 1000*index);   
}