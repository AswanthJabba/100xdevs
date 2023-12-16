/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
    const p = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        }, milliseconds);
    });
    return p;
}

module.exports = sleep;
