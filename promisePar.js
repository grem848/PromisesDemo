const myPromise = require("./myPromise");

let results = [];

const p1 = myPromise("hello", 3000)
const p2 = myPromise("hello again", 2000)
const p3 = myPromise("hello hello again", 2000)

Promise.all([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log("OOPSIE", err))
    .finally(() => console.log(results))
    


// const p4 = myPromise("hello", 3000).then(msg => results.push(msg))
// const p5 = myPromise("hello again", 2000).then(msg => results.push(msg))
// const p6 = myPromise("hello hello again", 2000).then(msg => results.push(msg))

// let promises = [p4, p5, p6];

// Promise.all(promises)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     .finally(() => console.log(promises))