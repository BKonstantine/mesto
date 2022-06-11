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
const popup = document.querySelector(".popup");

/* получаем доступ к кнопкам edit и close*/
const editButton = profile.querySelector(".profile__edit-button");
const closeButton = popup.querySelector(".popup__close-button");

/* получаем доступ к name и bio пользователя */
const profileName = profile.querySelector(".profile__name");
const profileBio = profile.querySelector(".profile__bio");

/* получаем доступ к полям ввода */
const popupForm = popup.querySelector(".popup__form");
const formItemName = popup.querySelector(".popup__form-item_value_name");
const formItemBio = popup.querySelector(".popup__form-item_value_bio");

/* получаем доступ к секции photo-grid */
const photoGrid = document.querySelector(".photo-grid");

/* получаем доступ к шаблону карточек */
const cardTemplate = document.querySelector(".card-template").content;

/* функция открытия и закрытия попапа */
function togglePopup() {
  if (popup.classList.contains("popup_opened") === false) {
    popup.classList.toggle("popup_opened");
    formItemName.value = profileName.textContent;
    formItemBio.value = profileBio.textContent;
  } else {
    popup.classList.toggle("popup_opened");
  }
}

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
  photoGrid.append(cardItem);
}

/* функция отправки формы */
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formItemName.value;
  profileBio.textContent = formItemBio.value;

  togglePopup();
}

/* функция удаления карточки */
function deleteItem(item) {
  item.remove();
}

/* вставить стартовый нобор карточек */
initialCards.forEach(renderItem);

/* добавляем обработчики событий */
editButton.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);
popupForm.addEventListener("submit", formSubmitHandler);
