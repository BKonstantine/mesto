/* получаем доступ к DOM элементам profile и popup */
let profile = document.querySelector(".profile");
let popup = document.querySelector(".popup");

/* получаем доступ к кнопкам edit, save и close */
let editButton = profile.querySelector(".profile__edit-button");
let saveButton = popup.querySelector(".popup__save-button");
let closeButton = popup.querySelector(".popup__close-button");

/* создаем функцию для скрытия и открытия popup'a */

function popupUnHidden() {
  popup.classList.remove("popup_hidden");
}

function popupHidden() {
  popup.classList.add("popup_hidden");
}

/* добавляем обработчики событий */
editButton.addEventListener("click", popupUnHidden);
closeButton.addEventListener("click", popupHidden);
