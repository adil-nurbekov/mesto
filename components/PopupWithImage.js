import { Popup } from "../components/Popup";
import { popupPhotoZoom, popupPhotoText } from "../utils/constants";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }
  open(name, link) {
    super.open();
    popupPhotoZoom.src = link;
    popupPhotoText.textContent = name;
    popupPhotoZoom.setAttribute("alt", name);
  }
}
