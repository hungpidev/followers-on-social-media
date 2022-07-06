window.addEventListener("load", function () {
  const buttonToggleSwitch = document.querySelector(".toggle__input");
  const currentTheme = localStorage.getItem("theme");
  buttonToggleSwitch.addEventListener("click", handleSwitchTheme);
  function handleSwitchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
      buttonToggleSwitch.checked = true;
    }
  }
});
