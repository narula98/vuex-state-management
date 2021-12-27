export default class StoreService {
  static fetchProducts() {
    const fetchOptions = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch('http://localhost:8081/api/products', fetchOptions).then((response) => response.json());
  }

  static registerUser(user) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    return fetch('http://localhost:8081/api/register', fetchOptions).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else { return response.json(); }
    });
  }

  static getUser(userLogin) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userLogin),
    };
    return fetch('http://localhost:8081/api/sign-in', fetchOptions).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else { return response.json(); }
    });
  }
}
