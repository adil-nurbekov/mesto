(()=>{"use strict";var e={formSelector:".form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inputErrorClass:"popup__input_type_error",errorActiveClass:"popup__input-error_active"},t=document.querySelector(".popup__form_avatar"),n=document.querySelector(".profile__edit-button"),r=".profile__name",o=".profile__profession",i=document.querySelector(".profile__add-button"),u=(document.querySelector(".element__counter"),document.querySelector(".popup_open"),document.querySelectorAll(".popup__close"),document.querySelector(".popup__form_profile")),a=document.querySelector(".popup__input_type_name"),c=document.querySelector(".popup__input_type_job"),l=".profile__image",s=(document.querySelector(".popup__input_type_img"),document.querySelector(".popup__input_type_link"),document.querySelectorAll(".popup"),document.querySelector(".popup__save"),document.querySelector(".popup__form_image")),f=(document.querySelector(".profile__edit-image"),document.querySelector(".popup__image"),document.querySelector(".popup__image-text"),function(e){console.log(e)});function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t),this._profileProf=document.querySelector(n),this._profileAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,prof:this._profileProf.textContent}}},{key:"setUserInfo",value:function(e,t){this._profileName.textContent=e,this._profileProf.textContent=t}},{key:"setUserAvatar",value:function(e){this._profileAvatar.src=e}}])&&d(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this),this._buttonClosePopup=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("click",this._handleOverlayClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("click",this._handleOverlayClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"setEventListener",value:function(){var e=this;this._buttonClosePopup.addEventListener("click",(function(t){e.close()}))}}])&&h(t.prototype,n),e}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupImageText=t._popup.querySelector(".popup__image-text"),t}return t=u,(n=[{key:"open",value:function(e,t){b(k(u.prototype),"open",this).call(this),this._popupImage.src=t,this._popupImageText.textContent=e,this._popupImageText.setAttribute("alt",e)}}])&&v(t.prototype,n),u}(m);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return(L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){var t,n=e.popup,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__input"),t._submitButton=t._form.querySelector(".popup__save"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}},{key:"renderCreating",value:function(e){this._submitButton.textContent=e?"Добавляю...":"Добавить"}},{key:"setEventListener",value:function(){var e=this;L(I(u.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(){return e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){L(I(u.prototype),"close",this).call(this),this._form.reset()}}])&&C(t.prototype,n),u}(m);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(){function e(t){var n=this,r=t.data,o=t.ownersId,i=t.classElement,u=t.handleOpenImage,a=t.handleDeleteCard,c=t.handleClickLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),R(this,"_getTemplate",(function(){return document.querySelector(n._classElement).content.querySelector(".element").cloneNode(!0)})),R(this,"generateCard",(function(){return n._element=n._getTemplate(),n._image=n._element.querySelector(".element__image"),n._imageTitle=n._element.querySelector(".element__title"),n._like=n._element.querySelector(".element__logo"),n._counter=n._element.querySelector(".element__counter"),n._image.src=n._imageLink,n._image.setAttribute("alt",n._imageName),n._imageTitle.textContent=n._imageName,n._counter.textContent=n._likes.length,n._setEventListener(),n._createDeleteButton(),n.setLikeInfo(n._data),n._element})),R(this,"deleteCard",(function(){n._element.remove()})),R(this,"isLiked",(function(){return n._likes.some((function(e){return e._id===n._id}))})),R(this,"setLikeInfo",(function(e){n._likes=e.likes,n.updateLikesView(e)})),R(this,"updateLikesView",(function(e){n._counter.textContent=e.likes.length,n.isLiked()?n._like.classList.add("element__logo_active"):n._like.classList.remove("element__logo_active")})),R(this,"_setEventListener",(function(){n._image.addEventListener("click",(function(){return n._handleOpenImage(n._imageName,n._imageLink)})),n._like.addEventListener("click",(function(){n._handleClickLike(n._cardId,n)}))})),this._data=r,this._imageName=r.name,this._imageLink=r.link,this._classElement=i,this._likes=r.likes,this._ownerId=r.owner._id,this._cardId=r._id,this._id=o,this._handleOpenImage=u,this._handleDeleteCard=a,this._handleClickLike=c}var t,n;return t=e,(n=[{key:"_createDeleteButton",value:function(){var e=this;if(this._ownerId===this._id){var t=document.createElement("button");t.classList.add("element__delete-button"),t.type="button",this._element.append(t),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){e._handleDeleteCard(e._cardId,e)}))}}}])&&q(t.prototype,n),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),A(this,"enableValidation",(function(){r._setEventListener()})),A(this,"_setEventListener",(function(){r._form.addEventListener("submit",(function(e){e.preventDefault()})),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkValidity(e),r._toggleButtonState(e)}))}))})),A(this,"_checkValidity",(function(e){e.validity.valid?r._hideError(e):r._showError(e)})),A(this,"_showError",(function(e){var t=r._form.querySelector("#".concat(e.id,"-error"));t.classList.add(r._inputActiveClass),e.classList.add(r._inputErrorClass),t.textContent=e.validationMessage})),A(this,"_hideError",(function(e){var t=r._form.querySelector("#".concat(e.id,"-error"));t.classList.remove(r._inputActiveClass),e.classList.remove(r._inputErrorClass),t.textContent=""})),A(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),A(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r._buttonElement.disabled=!0:r._buttonElement.disabled=!1})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._inputActiveClass=t.errorActiveClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(t.inputSelector)),this._buttonElement=this._form.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideError(t)}))}}])&&x(t.prototype,n),e}();function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t,n){return(z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=J(t);if(n){var o=J(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return N(this,e)});function o(e,t){var n,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),H(U(i=r.call(this,e)),"setOnSubmit",(function(e){i._handleFormSubmit=e})),H(U(i),"setEventListener",(function(){z((n=U(i),J(o.prototype)),"setEventListener",n).call(n),i._form.addEventListener("submit",(function(e){e.preventDefault(),i._handleFormSubmit()}))})),i._form=i._popup.querySelector(".popup__form"),i._handleFormSubmit=t,i}return o}(m))(".popup_confirm"),G=new E(".popup_photo_add"),K=new _(r,o,l),Q="00000",W=function(e){return new T({data:e,ownersId:Q,classElement:"template",handleOpenImage:function(){G.open(e.name,e.link)},handleDeleteCard:function(e,t){$.open(),$.setOnSubmit((function(){Y.deleteCard(e).then((function(){t.deleteCard(),$.close()})).catch((function(e){return f(e)}))}))},handleClickLike:function(e,t){Y.handleLike(e,t.isLiked()).then((function(e){t.setLikeInfo(e)}))}}).generateCard()};$.setEventListener();var X=new function e(t,n){var r=this,o=t.data,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"addItems",(function(e){r._container.append(e)})),p(this,"addItem",(function(e){r._container.prepend(e)})),p(this,"renderItems",(function(e){e.forEach((function(e){r._renderer(e)}))})),this._renderedItems=o,this._container=document.querySelector(n),this._renderer=i}({data:"",renderer:function(e){X.addItems(W(e))}},".elements"),Y=new function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),V(this,"getProfileInfo",(function(){return fetch("".concat(n.url,"/users/me "),{headers:{authorization:n.token}}).then((function(e){return n._checkResponseStatus(e)}))})),V(this,"editAvatarImage",(function(e){return fetch("".concat(n.url,"/users/me/avatar "),{method:"PATCH",headers:{authorization:n.token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return n._checkResponseStatus(e)}))})),V(this,"editProfileInfo",(function(e){return fetch("".concat(n.url,"/users/me "),{method:"PATCH",headers:{authorization:n.token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return n._checkResponseStatus(e)}))})),V(this,"getCards",(function(){return fetch("".concat(n.url,"/cards"),{headers:{authorization:n.token}}).then((function(e){return n._checkResponseStatus(e)}))})),V(this,"postCard",(function(e){return fetch("".concat(n.url,"/cards"),{method:"POST",headers:{"Content-Type":"application/json",authorization:n.token},body:JSON.stringify(e)}).then((function(e){return n._checkResponseStatus(e)}))})),V(this,"deleteCard",(function(e){return fetch("".concat(n.url,"/cards/")+e,{method:"DELETE",headers:{authorization:n.token}}).then((function(e){return n._checkResponseStatus(e)}))})),V(this,"handleLike",(function(e,t){return fetch("".concat(n.url,"/cards/likes/")+e,{method:t?"DELETE":"PUT",headers:{authorization:n.token}}).then((function(e){return n._checkResponseStatus(e)}))})),V(this,"_checkResponseStatus",(function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})),V(this,"getDataFromServer",(function(){return Promise.all([n.getCards(),n.getProfileInfo()])})),this.url=t.url,this.token=t.token}({url:"https://mesto.nomoreparties.co/v1/cohort-26",token:"50c40ac8-f6bb-40c6-a49e-ec56d515b265"}),Z=new j({popup:".popup_profile_add",handleFormSubmit:function(e){Y.editProfileInfo({name:e["input-profile-name"],about:e["input-profile-profession"]}).then((function(e){K.setUserInfo(e.name,e.about),Z.renderLoading(!1),Z.close()})).catch((function(e){return f(e)})).finally((function(){return Z.renderLoading(!1)})),Z.renderLoading(!0)}});Z.setEventListener();var ee=new j({popup:".popup_avatar-add",handleFormSubmit:function(e){Y.editAvatarImage({avatar:e["input-avatar-name"]}).then((function(e){K.setUserAvatar(e.avatar),ee.renderLoading(!1),ee.close()})).catch((function(e){return f(e)})).finally((function(){return Z.renderLoading(!1)})),ee.renderLoading(!0)}});ee.setEventListener();var te=new j({popup:".popup_image_add",handleFormSubmit:function(e){te.renderCreating(!0),Y.postCard({name:e["input-image-name"],link:e["input-image-url"]}).then((function(e){X.addItem(W(e),te.close()),te.renderCreating(!1)})).catch((function(e){return f(e)})).finally((function(){return te.renderCreating(!1)}))}});te.setEventListener(),G.setEventListener(),Y.getDataFromServer().then((function(e){var t,n,i=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=i[0],a=i[1];!function(e){document.querySelector(r).textContent=e.name,document.querySelector(o).textContent=e.about,document.querySelector(l).src=e.avatar}(a),Q=a._id,X.renderItems(u)})).catch((function(e){return f(e)}));var ne=new B(e,s),re=new B(e,u),oe=new B(e,t);document.querySelector(l).addEventListener("click",(function(){ee.open(),oe.resetValidation()})),n.addEventListener("click",(function(){Z.open();var e=K.getUserInfo();a.value=e.name,c.value=e.prof,re.resetValidation()})),i.addEventListener("click",(function(){te.open(),ne.resetValidation()})),re.enableValidation(),ne.enableValidation(),oe.enableValidation()})();