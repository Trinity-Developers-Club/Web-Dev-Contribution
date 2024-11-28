const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: '{"name": "Kunarl", "password": "fksdfh34234,wrw"}'
  };
  
  fetch('http://localhost:8002/users/login', options)
    .then(response => console.log(response))
    .catch(err => console.error(err));