class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _onError(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status} ${res.statusText}`);
    }
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
      .then(res => this._onError(res))
  }

  addCard({ name, link }) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name, link })
    })
      .then((res) => this._onError(res))
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}/`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then((res) => this._onError(res))
  }

  getProfileInfo() {
    return fetch(`${this._url}/users/me/`, {
      headers: this._headers
    })
      .then((res) => this._onError(res))
  }

  setProfileInfo({ name, about }) {
    return fetch(`${this._url}/users/me/`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ name, about }) // Добавьте отправку данных formData на сервер
    })
      .then((res) => this._onError(res))
  }

  updateAvatar({ avatar }) {
    return fetch(`${this._url}/users/me/avatar/`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar }) // Добавьте отправку данных formData на сервер
    })
      .then((res) => this._onError(res))
  }

  deleteLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then((res) => this._onError(res))
  }

  setLiked(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      headers: this._headers,
      method: 'PUT',
    })
      .then((res) => this._onError(res))
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-77',
  headers: {
    authorization: 'e846f2e4-830c-4594-a8d1-58fb2c77ff48',
    'Content-Type': 'application/json'
  }
});

export default api