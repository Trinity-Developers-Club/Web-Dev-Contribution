const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
const fs = require('fs')
const router = express.Router();

/* for the normal requests the body will look like this.
`
body: JSON.stringify({
      name: 'Aman',
      password: '1245heail'
    }
`
But for the put I want request
for password update
`
body:JSON.stringify({
	existingUser:{
      name: 'Aman',
      password: '1245heail'
    },
    Update:{
    password: 'mohan2984'
	}
}
`

*/

app.use(express.json())
// to get json from req.body

let users;
// this is the middleware for the put requests to user/

/*
// function isLoggedIn(user){
//     let isUser = users.find(u=> (u.name === user.name)&&(u.password === user.password));
//     if(isUser === null){
//         res.status(401).send('Unauthorized User!')
//     }
//     else next();
// }
*/ 

// Middleware function to check if the user is logged in
function isLoggedIn(req, res, next) {
    const user = users.find(user => (req.body.existingUser.name === user.name));
    if (user === null) {
        return res.status(401).send('Cannot find the user.');
    }
    try {
        if (bcrypt.compare(req.body.existingUser.password, user.password)) {
            // req.user = user;
            next();
            return true;
        } else {
            res.status(401).send('Not allowed');
        }
    } catch {
        res.status(500).send('Invalid user');
    }
}

router.put('/users/',isLoggedIn);

app.use('/users/',router);

async function addUser(user) {

    // duplicate user functionality not created.

    // checking if user already exists
    // const freshUser = users.find(async u =>
    //      (u.name === user.name) && await bcrypt.compare(user.password, u.password) );
    // if (freshUser === null) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const newUser = { name: user.name, password: hashedPassword };
    users.push(newUser);
    fs.writeFile('USERS.json', JSON.stringify(users), (err) => {
        if (err) throw err;
        // console.log('User email updated in file!');
    });
    return newUser;
    // } 
    // else return null;
    
}

// here we send the latest updated user to be set after checking.
function editUserEmail(user, updatedEmail) {
    const foundUser = users.find(
       async u => 
        u.name === user.name && bcrypt.compare(user.password, u.password) 
        );
    if (foundUser === null)
        res.status(401).send('User does not exist')
    else if (foundUser) {
        foundUser.email = updatedEmail;
        fs.writeFile('USERS.json', JSON.stringify(users), (err) => {
            if (err) throw err;
            console.log('User email updated in file!');
        });
        res.status(200).send("Changes successful")
    }
}
// here we send the latest updated user to be set after checking.
function editUserPassword(user, updatedPassword) {
    const foundUser = users.find(async u => 
        u.name === user.name && await bcrypt.compare(user.password , u.password) 
        );
    if (foundUser === null)
        res.status(401).send('User does not exist')
    else if (foundUser) {
        foundUser.password = updatedPassword;
        fs.writeFile('USERS.json', JSON.stringify(users), (err) => {
            if (err) throw err;
            console.log('User password updated in file!');
        });
        res.status(200).send("Changes successful")
    }
}
// here we send the latest updated user to be set after checking.
async function editUserName(user, updatedName) {
    const foundUser = users.find(async u => 
        u.name === user.name && await bcrypt.compare ( user.password , u.password)
        );
    if (foundUser === null)
        res.status(401).send('User does not exist')
    else if (foundUser) {
        foundUser.name = updatedName;
        fs.writeFile('USERS.json', JSON.stringify(users), (err) => {
            if (err) throw err;
            console.log('User name updated in file!');
        });
        res.status(200).send("Changed Name successfuly!")
    }
}

function removeUser(user) {
    const foundUser = users.find(async u => 
        (u.name === user.name) && (u.password=== user.password) 
        );
    if (foundUser === null)
        res.status(401).send('User does not exist')

    users = users.filter(u => (u.name === user.name) && (u.password=== user.password) );
    fs.writeFile('USERS.json', JSON.stringify(users), (err) => {
        if (err) throw err;
        console.log('User removed from file!');
    });
}

fs.readFile('USERS.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    users = JSON.parse(data);
    console.log('Existing users in the db ')
    console.log(users);
    console.log()   
});

// This is just for the basic project.
//In real use case we will get from the server db sql/no sql

app.listen(8002, () => {
    console.log("Server started\n Listening on http://localhost:8002")
})

// also we will add middleware route to check if user making the request
// has the permission to post or get on this route.

// to add new users
app.post('/signup', async (req, res) => {
        let user= await addUser(req.body);
        if(user !== null ){
            res.status(201).send(user);
        }
        console.log("Newly added user: ", users[users.length - 1])
})

// to change user password
app.put('/users/password', (req, res)=>{
    let existingUser= req.body.existingUser;
    let updatedPassword = req.Update.password;
    editUserEmail(existingUser, updatedPassword);
})

// to change user name
app.put('/users/name', (req, res)=>{
    let existingUser= req.body.existingUser;
    let updatedName = req.Update.Name;
    editUserName(existingUser, updatedName);
})

app.delete('/users/remove', (req, res)=>{
    removeUser(req.body);
})

// to check user login
app.post('/users/login', async (req, res) => {
    const user = users.find(u => req.body.name ===u.name)
    if (user === null) {
        return res.status(401).send('Cannot find the user.')
    }
    console.log(user)
    try {
        if ( await bcrypt.compare(req.body.password, user.password)) {
            res.status(200).send('success')            
        }
        else {
            res.status(401).send('Not allowed')
        }
    }
    catch {
        res.status(500).send("Invalid user")
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