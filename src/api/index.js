const BASE = 'https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT';

export async function registerUser(username, password) {
  console.log(username, password);  
  fetch(`${BASE}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
}

export async function loginUser(username, password) {
    fetch(`${BASE}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
}



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


