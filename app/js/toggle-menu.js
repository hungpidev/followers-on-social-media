window.addEventListener("load", function () {
  const toggle = document.querySelector(".header__toggle");
  const menu = document.querySelector(".menu");
  toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu() {
    menu.classList.add("is-show");
  }
  window.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (
      !e.target.matches(
        ".toggle__label,.toggle__input,.toggle__slider,.header__toggle,.menu,.menu *"
      )
    ) {
      menu.classList.remove("is-show");
    }
  }
});
