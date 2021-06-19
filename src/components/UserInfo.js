class UserInfo {
  constructor(name, prof) {
    this._name = name;
    this._prof = prof;
    this._profileName = document.querySelector(".profile__name");
    this._profileProf = document.querySelector(".profile__profession");
  }
  getUserInfo() {
    this._name.value = this._profileName.textContent;
    this._prof.value = this._profileProf.textContent;
  }
  setUserInfo(name, prof) {
    this._profileName.textContent = name.value;
    this._profileProf.textContent = prof.value;
  }
}
export { UserInfo };
