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
    }).then((res) => this._checkResponseStatus(res));
  };
  //
  // метод замены аватара пользователя
  editAvatarImage = (data) => {
    return fetch(`${this.url}/users/me/avatar `, {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => this._checkResponseStatus(res));
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
    }).then((res) => this._checkResponseStatus(res));
  };
  //
  // метод получения карточек с сервера
  getCards = () => {
    return fetch(`${this.url}/cards`, {
      headers: {
        authorization: this.token,
      },
    }).then((res) => this._checkResponseStatus(res));
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
    }).then((res) => this._checkResponseStatus(res));
  };
  //
  // метод удаления карточек с сервера
  deleteCard = (cardId) => {
    return fetch(`${this.url}/cards/` + cardId, {
      method: "DELETE",
      headers: {
        authorization: this.token,
      },
    }).then((res) => this._checkResponseStatus(res));
  };
  //
  // метод отправки лайка на сервер
  // sendLikeToServer = (cardId, data) => {
  //   return fetch(`${this.url}/cards/likes/` + cardId, {
  //     method: "PUT",
  //     body: JSON.stringify({ likes: data }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: this.token,
  //     },
  //   }).then((res) => this._checkResponseStatus(res));
  // };
  //
  // метод удаления лайка с сервера
  handleLike = (cardId, data, like) => {
    return fetch(`${this.url}/cards/likes/` + cardId, {
      method: like ? "PUT" : "DELETE",
      body: JSON.stringify({ likes: data }),
      headers: {
        "Content-Type": "application/json",
        authorization: this.token,
      },
    }).then((res) => this._checkResponseStatus(res));
  };
  // метод проверки ответа с сервера
  _checkResponseStatus = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  };
  // метод ожидания нужных промисов
  getDataFromServer = () => {
    return Promise.all([this.getCards(), this.getProfileInfo()]);
  };
  //
}

export { Api };
