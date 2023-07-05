function logResponseBody(jsonBody) {
    console.log(jsonBody)
}

function callBackFn(result) {
    result.json().then(logResponseBody)
}


let sendObj = {
    method : "GET"
}

fetch("http://localhost:3000/calculate?count=100", sendObj).then(callBackFn)  