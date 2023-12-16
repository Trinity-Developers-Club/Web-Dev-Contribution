# My Route was not working :/

Everything seemed ok.  
But I got no output for this route

<details>
<summary> login route </summary>  

```javascript
// to check user login
app.post('/users/login', async (req, res) => {
    const user = users.find(user => req.body.name === user.name)
    if (user === null) {
        return res.status(401).send('Cannot find the user.')
    }
    console.log(user)
    try {
        if (bcrypt.compare(req.body.password, user.password)) {
            res.status(200).send('success')
            console.log('success')
        }
        else {
            res.status(401).send('Not allowed')
        }
    }
    catch {
        res.status(500).send("Invalid user")
    }
})

```

</details>  

<details>
<summary>Also now corrected a simple mistake </summary>

```javascript
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
```

</details>

- I identified my mistakes
  - I forgot to write the await before the bcyrpt.compare
  - I wrote  
    ```const user = users.find(user => req.body.name === user.name)```  
        INSTEAD OF  
    ```const user = users.find(u => req.body.name ===u.name)```  

I asked Perplexity.ai there was no error.  
Then I told it about my fetch request.
which looked like this.

```javascript
const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: '{"name": "Kunarl", "password": "fksdfh34234,wrw"}'
  };
  
  fetch(`localhost:$(PORT)/users/login`, options)
    .then(response => console.log(response))
    .catch(err => console.error(err));
```

It said I should try putting <http://localhost:$(PORT)/users/login>  
This worked and I am feeling good and silly
