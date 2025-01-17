/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    const p = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(1000 * t);
        }, 1000 * t);
    });
    return p;
}

function wait2(t) {
    const p = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(1000 * t);
        }, 1000 * t);
    });
    return p;
}

function wait3(t) {
    const p = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(1000 * t);
        }, 1000 * t);
    });
    return p;
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(function() {
        const end = Date.now();
        console.log(end - start);
        return end - start;
    });
}

module.exports = calculateTime;
calculateTime(1, 2, 3)