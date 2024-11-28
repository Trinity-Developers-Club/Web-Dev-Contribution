const fs = require('fs')
let format_user=[];
fs.readFile('Bunch-of-users.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  users = data;
  newUsers = users.split('\n')
  console.log('newUsers= ', newUsers)
  format_user = newUsers.map(user => {
    user2 = user.split(' ');
    new_user = { name: user2[0], password: user2[1] };
    return new_user;
  });

  console.log('format_user=',format_user)
  console.log(format_user.length)
  for(let i=0; i< format_user.length; i++ )
  { let user = format_user[i];
  fetch('http://localhost:8002/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: user.name,
      password: user.password
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error creating user');
      }
    })
    .then(data => {
      console.log('New user created:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
});
// console.log(format_user.length)
// format_user.forEach(user => 
for(let i=0; i< format_user.length; i++ )
  { let user = format_user[i];
  fetch('http://localhost:8002/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: user.name,
      password: user.password
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error creating user');
      }
    })
    .then(data => {
      console.log('New user created:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}