const fetch = require("node-fetch");
const url = "https://swapi.co/api/people/1";


function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}


fetch(url)
    // .then(handleHttpErrors)
    .then(res => {
        if (res.status >= 400) {
            return Promise.reject({ status: res.status, fullError: res.json() });
        }
        return res.json()
    })
    .then(data => console.log("OK", data))
    .catch(err => {
        if (err.status) {
            err.fullError.then(msg => console.log("UPS", msg)) // handle errors where fetch goes through but returns not found
        } else {
            console.log("ERROR", err) // handles fetch errors where fetch fails
        }
    })
    .finally(() => console.log("Finally got here"))

