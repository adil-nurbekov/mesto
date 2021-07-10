export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addItems = (element) => {
    this._container.append(element);
  };
  renderItems = (array) => {
    array.forEach((item) => {
      this._renderer(item);
    });
  };
}
