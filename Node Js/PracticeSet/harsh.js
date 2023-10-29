import http from 'http'
const server = http.createServer((req , res) => {
    // res.statusCode = 404 // for changing status code
    // res.statusMessage = "bad Network"
    // res.setHeader('Content-Type', 'text/plain')
    // res.end("<h1>I'm in love with the shape of you</h1>");// we can pass HTML commands too.
    // console.log(req.url) // to get the logs of user request
    if (req.url == '/'){
        res.end("<h1>I'm in love with the shape of you at home ❤️</h1>")
    }else if (req.url == '/about'){
        res.end("JAI SHREE RAM")
    }else {
        res.end("<h1>404</h1>")
    }

    
})
const PORT = process.env.PORT || 3001
const HOST = 'localhost'
server.listen(PORT , HOST , () => {
    console.log("server runs at port no. - http://localhost:3001")
});