import { profileJob, profileName } from "../utils/constants";
export { UserInfo };
class UserInfo {
  constructor(name, prof) {
    this._name = name;
    this._prof = prof;
  }
  getUserInfo() {
    this._name.value = profileName.textContent;
    this._prof.value = profileJob.textContent;
  }
  setUserInfo() {
    profileName.textContent = this._name.value;
    profileJob.textContent = this._prof.value;
  }
}
