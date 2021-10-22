import UserHttpClient from './users-client.js';

let aUsers = [];
// const urlBase = 'http://localhost:3000';
// const urlUsers = `${urlBase}/users`;

function render(data) {
  console.log('RENDER: ', { data });
}

/* fetch(urlUsers)
  .then((res) => {
    console.log(res);
    return res.json();
  }) */
UserHttpClient.getUsers().then((result) => {
  aUsers = result;
  render(aUsers);
});

// REST

/* Method HTTP
  GET -> Read
  POST -> Create
  PUT / PATCH -> Update
  DELETE -> Delete
*/
