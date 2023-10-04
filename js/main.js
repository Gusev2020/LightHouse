// navigation

const headerNav = document.querySelector(".header__nav-btn");
const btnNav = document.querySelector(".nav-icon-btn");
const headerTop = document.querySelector(".header__top");

headerNav.addEventListener("click", function () {
  btnNav.classList.toggle("nav-icon-btn--active");
  headerTop.classList.toggle("header__top--mobile");
  document.body.classList.toggle("no-scroll");
});

// mskList

mask("[data-tel-input]");

// удаляем + если телефон не ввели , чтобы снова был виден placeholder

const phoneInputs = document.querySelectorAll("[data-tel-input]");

phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});
