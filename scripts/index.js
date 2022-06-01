/* получаем доступ к DOM элементам profile и popup */
const profile = document.querySelector(".profile");
const popup = document.querySelector(".popup");

/* получаем доступ к кнопкам edit, save и close */
const editButton = profile.querySelector(".profile__edit-button");
const closeButton = popup.querySelector(".popup__close-button");

/* получаем доступ к name и bio пользователя */
const profileName = profile.querySelector(".profile__name");
const profileBio = profile.querySelector(".profile__bio");

/* получаем доступ к полям ввода */
const formItemName = popup.querySelector(".popup__form-item_value_name");
const formItemBio = popup.querySelector(".popup__form-item_value_bio");

function togglePopup() {
  if (popup.classList.contains("popup_opened") === false) {
    popup.classList.toggle("popup_opened");
    formItemName.value = profileName.textContent;
    formItemBio.value = profileBio.textContent;
  } else {
    popup.classList.toggle("popup_opened");
  }
}

/* создаем функцию для открытия popup'a */
/* function openPopup() {
  popup.classList.add("popup_opened");
  formItemName.value = profileName.textContent;
  formItemBio.value = profileBio.textContent;
} */

/* создаем функцию для скрытия  popup'a */
/* function closePopup() {
  popup.classList.remove("popup_opened");
} */

/* функция отправки формы */
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formItemName.value;
  profileBio.textContent = formItemBio.value;

  /* closePopup(); */
  togglePopup();
}

/* добавляем обработчики событий */
editButton.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);
popup.addEventListener("submit", formSubmitHandler);
