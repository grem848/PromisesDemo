const myPromise = require("./myPromise");

let results = [];

myPromise("hello", 2000)
    .then(msg => {
        results.push(msg);

        return myPromise("hello again", 2000)
    })
    .then(msg => {
        results.push(msg)

        return myPromise("hello hello again", 2000)
    })
    .then(r => results.push(r))
    .catch(err => console.log(err))
    .finally(() => console.log(results))