class Api {
  constructor(config) {
    this.url = config.url;
    this.token = config.token;
  }
  // метод получения инфо о пользователе
  getProfileInfo = () => {
    return fetch(`${this.url}/users/me `, {
      headers: {
        authorization: this.token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) => console.log(err));
  };
  //
  editAvatarImage = (data) => {
    return fetch(`${this.url}/users/me/avatar `, {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) => console.log(err));
  };
  // метод отправки новой инфо о пользователе
  editProfileInfo = (data) => {
    return fetch(`${this.url}/users/me `, {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) => console.log(err));
  };
  //
  // метод получения карточек с сервера
  getCards = () => {
    return fetch(`${this.url}/cards`, {
      headers: {
        authorization: this.token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) => console.log(err));
  };
  //
  // метод добавления карточек на сервер
  postCard = (data) => {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: this.token,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) => console.log(err));
  };
  //
  // метод удаления карточек с сервера
  deleteCard = (cardId) => {
    return fetch(`${this.url}/cards/` + cardId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: this.token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) => console.log(err));
  };
  //
  // метод отправки лайка на сервер
  sendLikeToServer = (cardId, data) => {
    return fetch(`${this.url}/cards/likes/` + cardId, {
      method: "PUT",
      body: JSON.stringify({ likes: data }),
      headers: {
        "Content-Type": "application/json",
        authorization: this.token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })

      .catch((err) => console.log(err));
  };
  //
  // метод удаления лайка с сервера
  deleteLikeFromServer = (cardId, data) => {
    return fetch(`${this.url}/cards/likes/` + cardId, {
      method: "DELETE",
      body: JSON.stringify({ likes: data }),
      headers: {
        "Content-Type": "application/json",
        authorization: this.token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) => console.log(err));
  };
  //
}

export { Api };
