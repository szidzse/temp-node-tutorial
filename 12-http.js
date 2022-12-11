const http = require("http")

//imagine if a client wants to open your website. well, that is the request. you need to send back a response
const server = http.createServer((req, res) => {
    if(req.url === "/") {
        console.log(req);
    }
    res.write("Welcome to our home page!")
    res.end()
})

server.listen(5000)