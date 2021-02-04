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
  const storeToken = (param) => {
    localStorage.setItem('token', JSON.stringify(param));
  }

  console.log(username, password)
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
          const token = result.data.token;
          console.log(token);
          storeToken(token);
        })
        .catch(console.error);
}






