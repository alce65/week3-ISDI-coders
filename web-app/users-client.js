export default class UserHttpClient {
  // REST

  /* Method HTTP
  GET -> Read
  POST -> Create
  PUT / PATCH -> Update
  DELETE -> Delete
*/

  static aUsers = [];
  static urlBase = 'http://localhost:3000';
  static urlUsers = `${this.urlBase}/users`;

  // Read -> Get
  static getUser(id) {
    return fetch(`${this.urlUsers}/${id}`).then((res) => {
      return res.json();
    });
  }

  static getUsers() {
    return fetch(this.urlUsers).then((res) => {
      return res.json();
    });
  }

  //Create -> Post
  static setUser(user) {
    return fetch(this.urlUsers, {
      method: 'POST',
      body: JSON.stringify(user),
    }).then((res) => {
      return res.json();
    });
  }

  // Update -> Put / Patch
  static updateUser(user, id) {
    return fetch(`${this.urlUsers}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
    }).then((res) => {
      return res.json();
    });
  }

  // Delete -> Delete
  static deleteUser(id) {
    return fetch(`${this.urlUsers}/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      return res.json();
    });
  }
}
