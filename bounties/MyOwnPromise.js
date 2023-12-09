class MyOwnPromise {
    constructor(func) {
        this.resolve_status = false;
        this.reject_status = false;

        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);

        func(this.resolve, this.reject);
    }

    resolve() {
        this.resolve_status = true;
    }

    reject() {
        this.reject_status = true;
    }

    then(func) {
        if (this.resolve_status) {
            func();
        }
        return this;
    }

    catch(func) {
        if (this.reject_status) {
            func();
        }
        return this;
    }

}

const p = new MyOwnPromise(function(resolve, reject) {
    resolve();
});

p.then(function() {
    console.log('in then');
}).catch(function() {
    console.log('in catch');
})
