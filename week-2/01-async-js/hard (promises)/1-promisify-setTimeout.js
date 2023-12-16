/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const p = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        }, 1000 * n);
    });
    return p;
}

module.exports = wait;
