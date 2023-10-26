// Пример конфигурации формы
export const configForm = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
};

export const cardContainer = ".elements__grid-items"; //Контейнер добавления карточек
export const elementEditButton = document.querySelector(".profile-info__edit-button"); // Получаем доступ к кнопке ред. профиля
export const elementAddButton = document.querySelector(".profile__addbutton"); // Получаем доступ к кнопке созд. карточек
export const elementAvatarButton = document.querySelector(".profile__avatar-button"); // Получаем доступ к кнопке обовления аватара проф.
export const popupEditForm = document.querySelector("#popup_edit-profile"); // Получаем доступ к попапу для ред. профиля
export const popupAddForm = document.querySelector("#popup_add-card"); // Получаем доступ к попапу для созд. карточек
export const popupAvatarForm = document.querySelector("#popup_update-avatar"); // Получаем доступ к попапу обовления аватара проф.
export const cardEditForm = popupEditForm.querySelector(".popup__form"); // Получаем доступ к форме внутри попапа ред. профиля
export const cardAddForm = popupAddForm.querySelector(".popup__form"); // Получаем доступ к форме внутри попапа добавления карточки
export const updateAvatarForm = popupAvatarForm.querySelector(".popup__form"); // Получаем доступ к форме внутри попапа обовления аватара проф.
export const nameInput = popupEditForm.querySelector("#name"); // Получаем доступ к вводу имени в профиле
export const jobInput = popupEditForm.querySelector("#activity"); // Получаем доступ к вводу деятельности в профиле