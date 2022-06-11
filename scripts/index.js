/* стартовый набор для блока card */
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

/* получаем доступ к DOM элементам profile и popup */
const profile = document.querySelector(".profile");
const popupBio = document.querySelector("#popup-bio");
const popupPlace = document.querySelector("#popup-place");
const popupImage = document.querySelector("popup-image");

/* получаем доступ к кнопкам edit, close , add*/
const editButton = profile.querySelector(".profile__edit-button");
const addButton = profile.querySelector(".profile__add-button");
const closeButtonBio = popupBio.querySelector("#popup__close-button-bio");
const closeButtonPlace = popupPlace.querySelector("#popup__close-button-place");

/* получаем доступ к name и bio пользователя */
const profileName = profile.querySelector(".profile__name");
const profileBio = profile.querySelector(".profile__bio");

/* получаем доступ к полям ввода */
const popupForm = popupBio.querySelector(".popup__form");
const formItemName = popupBio.querySelector(".popup__form-item_value_name");
const formItemBio = popupBio.querySelector(".popup__form-item_value_bio");
const popupFormPlace = popupPlace.querySelector(".popup__form-place");
const formItemPlace = popupPlace.querySelector(".popup__form-item_value_place");
const formItemLink = popupPlace.querySelector(".popup__form-item_value_link");

/* получаем доступ к секции photo-grid */
const photoGrid = document.querySelector(".photo-grid");

/* получаем доступ к шаблону карточек */
const cardTemplate = document.querySelector(".card-template").content;

/* функция открытия и закрытия попапа профиля*/
function togglePopup() {
  if (popupBio.classList.contains("popup_opened") === false) {
    popupBio.classList.toggle("popup_opened");
    formItemName.value = profileName.textContent;
    formItemBio.value = profileBio.textContent;
  } else {
    popupBio.classList.toggle("popup_opened");
  }
}

/* функция открытия и закрытия попапа добавления карточки*/
function togglePopupPlace() {
  if (popupPlace.classList.contains("popup_opened") === false) {
    popupPlace.classList.toggle("popup_opened");
  } else {
    popupPlace.classList.toggle("popup_opened");
  }
}

/* функция добавления карточки */
function renderItem(item) {
  /* клонируем содержимое шаблона */
  const cardItem = cardTemplate.querySelector(".card").cloneNode(true);

  /* наполняем содержимым */
  cardItem.querySelector(".card__title").innerText = item.name; //попробовать заменить на textContent и отправить скрипт
  cardItem.querySelector(
    ".card__image"
  ).style.backgroundImage = `url(${item.link})`;

  /* добавляем обработчики событий */
  cardItem
    .querySelector(".card__trash")
    .addEventListener("click", () => deleteItem(cardItem));

  cardItem
    .querySelector(".card__like")
    .addEventListener("click", (e) =>
      e.target.classList.toggle("card__like_active")
    );

  /* вставляем карточку на страницу */
  photoGrid.prepend(cardItem);
}

/* функция отправки формы профиля */
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formItemName.value;
  profileBio.textContent = formItemBio.value;

  togglePopup();
}

/* функция отправки формы карточки */
function formSubmitHandlerPlace(evt) {
  evt.preventDefault();
  const place = {
    name: "",
    link: "",
  };

  place.name = formItemPlace.value;
  place.link = formItemLink.value;
  renderItem(place);
  togglePopupPlace();

  formItemPlace.value = "";
  formItemLink.value = "";
}

/* функция удаления карточки */
function deleteItem(item) {
  item.remove();
}

/* вставить стартовый нобор карточек */
initialCards.forEach(renderItem);

/* добавляем обработчики событий */
editButton.addEventListener("click", togglePopup);
addButton.addEventListener("click", togglePopupPlace);
closeButtonBio.addEventListener("click", togglePopup);
closeButtonPlace.addEventListener("click", togglePopupPlace);
popupForm.addEventListener("submit", formSubmitHandler);
popupFormPlace.addEventListener("submit", formSubmitHandlerPlace);
