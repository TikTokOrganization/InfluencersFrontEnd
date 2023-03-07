function testResponse() {
    let error = false;
    let categories = [];
    let categoriesRaw = [];
    const axios = require("axios");

    axios.get("http://127.0.0.1:8080/getCategories")
    .then(function(response) {
        categoriesRaw = Object.keys(response);
        console.log(response.data);
    })
    .catch(function(error) {
        console.log("Error completing request.");
        console.log(error);
        error = true;
    })
    .finally(function() {
        if(error)
            console.log("Request finished with error.");
        else
            console.log("Request finished without error.");
    })

    console.log(categoriesRaw);
    if(!error) {
        for(let i = 0; i < categoriesRaw.length; i++)
            categories.push(parseInt(categories[i]));
    }
    else {
        categories = [1, 2, 3];
    }
    
    let demoString = "<p>Response:";
    for(let i = 0; i < categories.length; i++)
        demoString += categories[i].toString();
    demoString += "</p>";
    
    return demoString;
}

const http = require("http");
const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(testResponse());
});

server.listen(port, hostname, () => {
    console.log("Server running at http://${hostname}:${port}/", hostname, port);
});