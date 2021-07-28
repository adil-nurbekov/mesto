class UserInfo {
  constructor(profileName, profileProfession, profileImage) {
    this._profileName = document.querySelector(profileName);
    this._profileProf = document.querySelector(profileProfession);
    this._profileAvatar = document.querySelector(profileImage);
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      prof: this._profileProf.textContent,
    };
  }
  setUserInfo(name, about) {
    this._profileName.textContent = name;
    this._profileProf.textContent = about;
  }
  setUserAvatar(input) {
    this._profileAvatar.src = input;
  }
}
export { UserInfo };
