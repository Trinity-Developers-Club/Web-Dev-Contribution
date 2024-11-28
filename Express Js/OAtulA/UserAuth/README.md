# UserAuth

## About

So this is a basic user authentication express.js app.  

You can  
- POST /signup register user to route 
- PUT /users/password to update password
- PUT /users/name to update name
- DELETE /users/remove to delete a user 
- POST /users/login to login user
- GET /users to see all users

You can look at Thoughts/req_body.txt to see the content template for the requests.

You can try and run Request tests/post-user2.js to check the routes.

I have used this 

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node --watch server.js"
  },
```

So the ```node --watch``` is available only for version >= Node.js 18.11.0  
The --watch flag was added to Node.js in version 18.11.0

You might want to use nodemon installed as global to check this out.
