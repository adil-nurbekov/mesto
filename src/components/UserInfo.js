class UserInfo {
  constructor(profileName, profileProfession) {
    this._profileName = document.querySelector(profileName);
    this._profileProf = document.querySelector(profileProfession);
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      prof: this._profileProf.textContent,
    };
  }
  setUserInfo({ name, prof }) {
    this._profileName.textContent = name;
    this._profileProf.textContent = prof;
    console.log(name, prof);
  }
}
export { UserInfo };
