let scrollElement;
let nav = document.querySelector(".nav");
let btnTop = document.querySelector(".header__btn_top");
let logo = document.querySelector(".logo");
let btnBottom = document.querySelector(".header__btn_bottom");
let sectionList = document.querySelectorAll("section");
let userSectionId = 0;
console.log(sectionList.length)

function btnBottomClick() {
  console.log(userSectionId);
  if (userSectionId < sectionList.length - 1) {
    scrollElement = sectionList[userSectionId + 1];
    userSectionId += 1;
  }
  scrollElement.scrollIntoView({ block: "center", behavior: "smooth" });
  if (userSectionId == 1){
    logo.style.opacity = 0;
    setTimeout(function() {logo.style.display = 'none';}, 500);
    setTimeout(function() {btnTop.style.display = 'block';}, 500);
    setTimeout(function() {btnTop.style.opacity = 1;}, 520);
  }
  if (userSectionId == sectionList.length - 1) {
    nav.style.opacity = 0;
    btnBottom.style.opacity = 0;
    setTimeout(function() {nav.style.display = 'none';}, 500);
    setTimeout(function() {btnBottom.style.display = 'none';}, 500);
  }
  localStorage.setItem('userSectionId', userSectionId);
}

function btnTopClick() {
  if (userSectionId > 0 && userSectionId < sectionList.length - 1) {
    scrollElement = sectionList[userSectionId - 1];
    userSectionId -= 1;
  } else if (userSectionId == sectionList.length - 1) {
    scrollElement = sectionList[0];
    userSectionId = 0;
    setTimeout(function() {nav.style.display = 'block';}, 500);
    setTimeout(function() {btnBottom.style.display = 'block';}, 500);
    setTimeout(function() {nav.style.opacity = 1;}, 520);
    setTimeout(function() {btnBottom.style.opacity = 1;}, 520);
  }
  scrollElement.scrollIntoView({ block: "center", behavior: "smooth" });
  if (userSectionId == 0) {
    btnTop.style.opacity = 0;
    setTimeout(function() {btnTop.style.display = 'none';}, 500);
    setTimeout(function() {logo.style.display = 'block';}, 500);
    setTimeout(function() {logo.style.opacity = 1;}, 520);
  }
  localStorage.setItem('userSectionId', userSectionId);
}

btnBottom.addEventListener("click", btnBottomClick);
btnTop.addEventListener("click", btnTopClick);