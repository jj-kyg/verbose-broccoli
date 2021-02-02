const BASE = 'https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT';

async function registerUser() {
    fetch(`${BASE}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: 'superman279',
            password: 'krypt0n0rbust'
          }
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
}

registerUser();

async function loginUser() {
    fetch(`${BASE}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: 'superman27',
            password: 'krypt0n0rbust'
          }
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
}

loginUser();

async function getMessages() {
    fetch(`${BASE}/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE3MTdkOWJhMDNmZTAwMTcxYWI5NzAiLCJ1c2VybmFtZSI6InN1cGVybWFuMjciLCJpYXQiOjE2MTIxNDg5MDR9.2puLkPNHqxjsxe8AE4Mo96s1PtxTQQLfqypj7uiVf7g'
          },
        }).then(response => response.json())
          .then(result => {
            console.log(result);
          })
          .catch(console.error);
}

getMessages();

async function getPosts() {
    fetch(`${BASE}/users/posts`)
        .then(response => response.json())
        .then(result => {
        console.log(result);
        })
        .catch(console.error);
}

getPosts();