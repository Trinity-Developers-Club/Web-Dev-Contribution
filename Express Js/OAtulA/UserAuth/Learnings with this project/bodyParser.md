# I learnt about the bodyparser the hard way

## What exactly happened?  

I was trying to get some data from requests.  
It didn't work.

<details>

 <summary> <b>server.js</b> </summary>

```javascript
const express = require("express")
const app = express()
const bcrypt = require("bcrypt")

const users = [{ name: "Demo", password: "wohoa235#21" }]
// This is just for the basic project.
//In real use case we will get from the server db sql/no sql

app.listen(8002, () => {
    console.log("Server started\n Listening on http://localhost:8002")
})

// also we will add middleware route to check if user making the request
// has the permission to post or get on this route.
app.post('/users', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        debugger
        console.log(req.body)
        console.log(req.body.name," : ", req.body.password)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = { name: req.body.name, password: hashedPassword };
        users.push(user);
        res.status(201).send(user);
        console.log("Newly added user: ",users[users.length-1])
    }
    catch(err){
        console.log(err.message);
        res.status(500).send()
    }
})

app.get("/", (req, res) => {
    res.send("Yeah connected");
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.get("/:page", (req, res) => {
    res.send(`We are working on ${req.params.page}`)
})
```

</details>

## Missing piece

I needed body-parser.  
But I thought let's just do it using express.json() .  
Since I am using express anyways.  

so I used express.json()
