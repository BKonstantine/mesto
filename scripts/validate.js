/* объект для настройки валидации */
const validationSetting = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

/* функция отображения ошибки валидации */
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationSetting.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationSetting.errorClass);
};

/* функция скрытия ошибки валидации */
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationSetting.inputErrorClass);
  errorElement.classList.remove(validationSetting.errorClass);
  errorElement.textContent = "";  
};

/* функция проверки формы на валидность */
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

/* функция проверки нескольких форм на валидность  */
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

/* сброс ошибок валидации */
const resetValid = (validationSetting, popup) => {
  const formElement = popup.querySelector(validationSetting.formSelector);
  const inputList = Array.from(formElement.querySelectorAll(validationSetting.inputSelector));
  const buttonElement = formElement.querySelector(validationSetting.submitButtonSelector);
  inputList.forEach((inputElement) => hideInputError(formElement, inputElement));
  toggleButtonState(inputList, buttonElement);
};

/* функция блокировки кнопок 'сохранить' и 'отправить' */
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationSetting.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(validationSetting.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

/* функция установки слушателей на форму */
const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationSetting.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationSetting.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

/* функция установки слушателей события на все формы */
const enableValidation = () => {
  const formList = Array.from(
    document.querySelectorAll(validationSetting.formSelector)
  );

  formList.forEach((formElement) => {    
    setEventListeners(formElement);
  });
};

enableValidation(validationSetting);
