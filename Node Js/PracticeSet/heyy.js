import http from 'http'
import fs from 'fs'
const server = http.createServer((req , res) => {
    
    if(req.url == '/'){
       const data =  fs.readFileSync("./Public/home.html")
       res.end(data)
    }else if(req.url == '/about'){
        const d =  fs.readFileSync("./Public/about.html")
        res.end(d)
    }else if(req.url == '/contact'){
        const da =  fs.readFileSync("./Public/contact.html")
        res.end(da)
    }else{
        res.end("<h1>404 Page Not Found! :(</h1>");
    }

    
})
const PORT = process.env.PORT || 3002
const HOST = 'localhost'
server.listen(PORT , HOST , () => {
    console.log("server runs at port no. - http://localhost:3002")
});