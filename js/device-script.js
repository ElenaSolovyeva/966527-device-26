/*скрипт для ФОРМЫ ОБРАТНОЙ СВЯЗИ*/
var writeUsLink = document.querySelector(".write-us-button"); //сохранили в переменную  writeUsLink объект с ссылкой "НАПИШИТЕ НАМ"
var popupFeedback = document.querySelector(".feedback-modal"); //сохранили в переменную  popupFeedback объект с модальным окном с формой обратной связи
var closeFeedback = document.querySelector(".feedback-close"); //сохранили в переменную  closeFeedback объект с кнопкой закрытия формы обратной связи
var clientsName = popupFeedback.querySelector(".clients-data");
var clientsEmail = popupFeedback.querySelector(".email-input");
var form = popupFeedback.querySelector(".write-us-form");
// var storageClientsName = localStorage.getItem("clientsName");
var isStorageSupport = true;
var storage = "";

try {
  storageClientsName = localStorage.getItem("clientsName");
} catch(err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function(evt) { //навесили обработчик на клик по кнопке
  evt.preventDefault(); //убрали действие по умолчанию для ссылки(кнопки)
  popupFeedback.classList.add("modal-show");
  clientsName.focus();
  if(storageClientsName){
    clientsName.value = storageClientsName;
    clientsEmail.focus();
  } else {
    clientsName.focus();
  }
});

closeFeedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-show");
    popupFeedback.classList.remove("modal-error");
    // console.log("Клик по ссылке ЗАКРЫТЬ");
});

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if(!clientsName.value || !clientsEmail.value) {
    popupFeedback.classList.add("modal-error");
    // console.log("Введите пожалуйста Ваше имя и e-mail");
  }
  else{
    if(isStorageSupport) {
      localStorage.setItem("clientsName", clientsName.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if (popupFeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      popupFeedback.classList.remove("modal-show");
    }
  }
});

// Скрипт для попапа с картой
var mapLink = document.querySelector(".popap-map"); // link. По этой ссылке открывается модальное окно с картой
var popapMap = document.querySelector(".map-modal"); // popup. Само модальное окно
var closeMap = popapMap.querySelector(".map-close"); // close. Кнопка закрытия модального окна
var usualMap = popapMap.querySelector(".not-interactive-map"); // НЕ интерактивная карта под тэгом img

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popapMap.classList.add("modal-show-map"); // в CSS строка 1635
  usualMap.classList.add("dont-show-map");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popapMap.classList.remove("modal-show-map");
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if(popapMap.classList.contains("modal-show-map")){
      evt.preventDefault();
      popapMap.classList.remove("modal-show-map");
    }
  }
});
