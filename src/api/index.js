import { storeToken, getToken } from "../auth";

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
          result.data ? alert(`${result.data.message
          } Please log in.`) : alert(result.error.message);
        })
        .catch(console.error);
}

export async function loginUser(username, password) {
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
          console.log("result from loginUser api", result);
          let token = '';
          token = result.data ? result.data.token : null;
          if (token === null) {
            alert(result.error.message);
          } else {
            storeToken(token);
          }
          
          console.log(token);

        })
        .catch(console.error);
}

export async function createNewPost(title, description, price, location, checked) {
  const token = getToken();
        fetch(`${BASE}/posts`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post: {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: checked
            }
        })
        }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);

}

export async function editPost(title, description, price, location, checked, id) {
  const token = getToken();
  fetch(`${BASE}/posts/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      post: {
        title: title,
        description: description,
        price: price,
        location: location,
        willDeliver: checked
      }
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error)
}

export async function deletePost(id) {
  const token = getToken();
  fetch(`${BASE}/posts/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
}

export async function sendMessage(id, message) {
  const token = getToken();
  fetch(`${BASE}/posts/${id}/messages`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      message: {
        content: message
      }
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
}










