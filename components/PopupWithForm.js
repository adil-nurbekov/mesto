import { Popup } from "../components/Popup";
import { inputName, inputJob, formPopupProfile } from "../utils/constants";
export default class PopupWithForm extends Popup {
  constructor(popup) {
    super(popup);
  }
  _getInputValues(name, job) {
    name = inputName;
    job = inputJob;
  }
  setEventListener() {
    super.setEventListener();
    formPopupProfile.addEventListener("submit", () => {
      const profileTextContent = new UserInfo(
        inputName,
        inputJob
      ).setUserInfo();
    });
  }
  close() {
    super.close();
    formPopupProfile.reset();
  }
}
