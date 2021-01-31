
{/*

    POST /api/COHORT-NAME/users/register
    Request Parameters

    user (object, required)
        username (string, required): the desired username for the new user
        password (string, required): the desired password for the new user

        const BASE = 'https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT';
*/}

fetch(`${BASE}/users/register`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: 'superman27', //need to insert user values here
      password: 'krypt0n0rbust'
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);

  {/*{
  "success": true,
  "error": null,
  "data": {
    "token": "xyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9.CTj4owBl0PB-G6G4E_1l6DS6_cVc0iKcMzBIWFUYM1p",
    "message": "Thanks for signing up for our service."
  }
}*/} //this is what the return data should look like