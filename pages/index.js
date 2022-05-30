/* получаем доступ к DOM элементам profile и popup */
let profile = document.querySelector(".profile");
let popup = document.querySelector(".popup");

/* получаем доступ к кнопкам edit, save и close */
let editButton = profile.querySelector(".profile__edit-button");
let saveButton = popup.querySelector(".popup__save-button");
let closeButton = popup.querySelector(".popup__close-button");

/* получаем доступ к name и bio пользователя */
let profileName = profile.querySelector(".profile__name");
let profileBio = profile.querySelector(".profile__bio");

/* получаем доступ к полям ввода */
let formItemName = popup.querySelector(".popup__form-item_value_name");
let formItemBio = popup.querySelector(".popup__form-item_value_bio");

/* создаем функцию для открытия popup'a */
function popupUnHidden() {
  popup.classList.remove("popup_hidden");
  formItemName.value = profileName.textContent;
  formItemBio.value = profileBio.textContent;
}

/* создаем функцию для скрытия  popup'a */
function popupHidden() {
  popup.classList.add("popup_hidden");
}

/* функция отправки формы */
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formItemName.value;
  profileBio.textContent = formItemBio.value;

  popupHidden();
}

/* добавляем обработчики событий */
editButton.addEventListener("click", popupUnHidden);
closeButton.addEventListener("click", popupHidden);
popup.addEventListener("submit", formSubmitHandler);
