window.addEventListener("load", function () {
  const toggle = document.querySelector(".header__toggle");
  const menu = document.querySelector(".menu");
  toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu() {
    menu.classList.add("is-show");
  }
  window.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (e.target.matches(":not(.header__toggle,.menu,.menu *)")) {
      menu.classList.remove("is-show");
    }
  }
});
